import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const POST = async (request: Request) => {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe secret key not found");
  }
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    throw new Error("Stripe signature not found");
  }
  const text = await request.text();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-05-28.basil",
  });
  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  // Função auxiliar para atualizar o status da assinatura
  async function updateSubscriptionStatus(
    subscriptionId: string,
    customerId?: string,
  ) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    console.log("Webhook: assinatura recebida:", subscription);
    console.log("Webhook: metadados da assinatura:", subscription.metadata);
    console.log("Webhook: customer da assinatura:", subscription.customer);

    let userId: string | undefined = subscription.metadata.userId;

    // Se não encontrar o userId nos metadados, tente buscar pelo customerId no banco
    if (!userId && customerId) {
      const user = await db.query.usersTable.findFirst({
        where: eq(usersTable.stripeCustomerId, customerId),
      });
      userId = user?.id as string | undefined;
      console.log("Webhook: userId encontrado pelo customerId:", userId);
    }

    if (!userId) {
      console.warn(
        "Webhook: User ID not found for subscription",
        subscriptionId,
        "customer",
        customerId,
      );
      return; // Não lança erro, só não atualiza
    }

    if (subscription.status === "active") {
      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          plan: "essential",
        })
        .where(eq(usersTable.id, userId));
      console.log("Webhook: Plano atualizado para usuário", userId);
    } else {
      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: null,
          stripeCustomerId: null,
          plan: null,
        })
        .where(eq(usersTable.id, userId));
      console.log("Webhook: Plano removido para usuário", userId);
    }
  }

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const object = event.data.object as any;
      if (object.id) {
        await updateSubscriptionStatus(object.id, object.customer);
      } else {
        console.warn(`${event.type} recebido sem id:`, object);
      }
      break;
    }
    case "invoice.paid": {
      const object = event.data.object as any;
      if (object.subscription) {
        await updateSubscriptionStatus(object.subscription, object.customer);
      } else {
        console.warn("invoice.paid recebido sem subscription:", object);
      }
      break;
    }
    default:
      console.log("Webhook: evento ignorado", event.type);
  }

  return NextResponse.json({ received: true });
};
