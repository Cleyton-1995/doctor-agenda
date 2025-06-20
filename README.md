<h1 align="center">🩺 Doctor Agenda</h1>

<p align="center">
  Um sistema moderno de <strong>agendamento de consultas médicas</strong>, desenvolvido com <strong>Next.js 15</strong>, <strong>Drizzle ORM</strong>, <strong>React Query</strong> e <strong>TailwindCSS</strong>, ideal para clínicas e consultórios que desejam otimizar a gestão de pacientes e horários.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.3-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-lightgrey?logo=postgresql" alt="Drizzle ORM" />
</p>

<hr />

<h2>📋 Sobre o Projeto</h2>

<p>
  <strong>Doctor Agenda</strong> é um sistema para clínicas realizarem agendamentos, controle de pacientes e gerenciamento de horários, com interface moderna, intuitiva e responsiva.
</p>

<hr />

<h2>🛠️ Tecnologias e Bibliotecas</h2>

<ul>
  <li>⚛️ <strong>Next.js 15</strong> com App Router</li>
  <li>🎨 <strong>TailwindCSS 4</strong> + <code>tailwind-merge</code> + <code>tw-animate-css</code></li>
  <li>🧩 <strong>Drizzle ORM</strong> + PostgreSQL</li>
  <li>🔐 <strong>Better Auth</strong> para autenticação moderna</li>
  <li>🧾 <strong>React Hook Form</strong> + <strong>Zod</strong> para validações</li>
  <li>📦 <strong>React Query</strong> (TanStack Query)</li>
  <li>💳 <strong>Stripe</strong> para pagamentos (frontend e backend)</li>
  <li>📅 <strong>React Day Picker</strong> e <strong>DayJS</strong> para controle de datas</li>
  <li>🧠 <strong>Lucide</strong> para ícones, <strong>Radix UI</strong> para componentes acessíveis</li>
</ul>

<hr />

<h2>🚀 Funcionalidades</h2>

<ul>
  <li>📆 Agendamento de consultas por data e hora</li>
  <li>👤 Cadastro e gerenciamento de pacientes</li>
  <li>📊 Painel administrativo com estatísticas e gráficos (Recharts)</li>
  <li>💳 Pagamento via Stripe</li>
  <li>⚙️ Validações dinâmicas com <strong>Zod</strong></li>
</ul>

<hr />

<h2>📦 Como rodar o projeto localmente</h2>

<ol>
  <li><strong>Clone o repositório:</strong><br />
    <code>git clone https://github.com/Cleyton-1995/doctor-agenda.git</code>
  </li><br />

  <li><strong>Instale as dependências:</strong><br />
    <code>npm install</code> ou <code>yarn</code>
  </li><br />

  <li><strong>Configure o banco de dados e variáveis de ambiente:</strong><br />
    Crie um arquivo <code>.env</code> baseado no <code>.env.example</code>:
    <ul>
      <li><code>DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco</code></li>
      <li><code>STRIPE_SECRET_KEY=chave_da_stripe</code></li>
    </ul>
  </li><br />

  <li><strong>Execute as migrações:</strong><br />
    <code>npx drizzle-kit push</code>
  </li><br />

  <li><strong>Inicie o servidor de desenvolvimento:</strong><br />
    <code>npm run dev</code>
  </li>
</ol>

<hr />

<h2>🌐 Deploy na Vercel</h2>

<ul>
  <li>
    O projeto está hospedado gratuitamente na Vercel:
    <br />
    🔗 <strong><a href="https://doctor-agenda.vercel.app" target="_blank">https://doctor-agenda.vercel.app</a></strong>
  </li>
  <li>Pronto para deploy contínuo com GitHub → Vercel</li>
  <li>Scripts de build e deploy já configurados com <code>next build</code></li>
</ul>

<hr />

<h2>🖼️ Preview</h2>

<p align="center">
  <!-- Substitua por prints reais -->

https://github.com/user-attachments/assets/ff410397-be6f-40c6-b25c-b23d1099c0c1

</p>

<hr />

<h2>👨‍💻 Desenvolvedor</h2>

<p>
  Projeto desenvolvido por <a href="https://github.com/Cleyton-1995" target="_blank"><strong>Cleyton Costa</strong></a><br />
  Criado durante o <strong>Bootcamp SaaS</strong> da <a href="https://fullstackclub.com.br" target="_blank">Full Stack Club</a>.
</p>
