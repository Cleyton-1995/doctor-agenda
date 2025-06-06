import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ClinicForm } from "./_components/forn";

export default function ClinicFormPage() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicione sua clínica</DialogTitle>
          <DialogDescription>
            Adicione sua clínica para continuar.
          </DialogDescription>
        </DialogHeader>

        <ClinicForm />
      </DialogContent>
    </Dialog>
  );
}
