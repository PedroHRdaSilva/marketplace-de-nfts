import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const Route = createFileRoute("/nft/$nftId")({
  component: NftDetailPage,
});

function NftDetailPage() {
  const { nftId } = Route.useParams();

  return (
    <PagePlaceholder
      title="Detalhes do NFT"
      description={`Galeria, edição, quantidade, favoritos e compra. Recurso solicitado: ${nftId}.`}
    />
  );
}
