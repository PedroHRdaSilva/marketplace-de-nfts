import { Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { formatEthWithSymbol } from "@/lib/format";
import { cn } from "@/lib/utils";

import { NftArtwork } from "./nft-artwork";
import type { CatalogNft } from "./types";

const networkLabels: Record<string, string> = {
  ethereum: "Ethereum",
  polygon: "Polygon",
  solana: "Solana",
};

export function NftCard({
  nft,
  description,
  className,
}: {
  nft: CatalogNft;
  description?: string;
  className?: string;
}) {
  return (
    <Link
      to="/nft/$nftId"
      params={{ nftId: nft.id }}
      className={cn(
        "group block h-full w-[250px] max-w-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/70 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-espresso/60 group-hover:ring-primary/40">
        <div className="relative aspect-square overflow-hidden bg-espresso">
          <NftArtwork
            seed={nft.id}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 border border-border/60 bg-espresso/70 text-[0.65rem] text-cream backdrop-blur"
          >
            {networkLabels[nft.networkId] ?? nft.networkId}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">
          <p className="text-xs text-muted-foreground">{nft.collection}</p>
          <h3 className="truncate text-sm font-semibold">{nft.name}</h3>
          <p className="text-sm font-semibold text-primary tabular-nums">
            {formatEthWithSymbol(nft.priceEth, 2)}
          </p>
          {description ? (
            <p className="mt-1 line-clamp-2 text-xs text-pretty text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
