import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <PagePlaceholder
      title="Cadastro"
      description="Criação de conta com validação de campos e tratamento de e-mail em conflito."
    />
  );
}
