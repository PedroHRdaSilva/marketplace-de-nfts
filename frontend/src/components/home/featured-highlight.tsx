import { cn } from "@/lib/utils";

import { NftArtwork } from "./nft-artwork";

export function FeaturedHighlight({ className }: { className?: string }) {
  return (
    <section
      id="destaque"
      aria-labelledby="destaque-titulo"
      className={cn(
        "scroll-mt-28 overflow-hidden rounded-2xl bg-espresso ring-1 ring-border/70",
        className,
      )}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-square">
        <NftArtwork
          seed="destaque-bored-ape-481"
          label="Ilustração do NFT em destaque"
          className="absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/40 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 space-y-1 p-5">
          <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary uppercase">
            NFT em destaque
          </p>
          <h2 id="destaque-titulo" className="font-display text-2xl font-semibold tracking-tight">
            Oferta limitada
          </h2>
        </div>
      </div>
    </section>
  );
}
