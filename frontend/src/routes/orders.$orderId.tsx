import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const Route = createFileRoute("/orders/$orderId")({
  component: OrderConfirmationPage,
});

function OrderConfirmationPage() {
  const { orderId } = Route.useParams();

  return (
    <PagePlaceholder
      title="Confirmação de pedido"
      description={`Resultado, transação, itens, taxas e total. Pedido solicitado: ${orderId}.`}
    />
  );
}
