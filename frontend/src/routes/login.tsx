import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <PagePlaceholder
      title="Login"
      description="Autenticação com validação, mensagens de erro e retorno ao fluxo anterior."
    />
  );
}
