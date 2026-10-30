import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const Route = createFileRoute("/wallets")({
  component: WalletsPage,
});

function WalletsPage() {
  return (
    <PagePlaceholder
      title="Carteiras"
      description="Cadastro e edição das carteiras principal e secundária. Rota privada."
    />
  );
}
