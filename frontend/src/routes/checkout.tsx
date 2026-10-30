import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  return (
    <PagePlaceholder
      title="Pagamento"
      description="Dados do colecionador, carteira, rede, revisão e envio idempotente do pedido."
    />
  );
}
