import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { promoCards } from "./data";
import { NftArtwork } from "./nft-artwork";

export function PromoBanners() {
  return (
    <section aria-label="Destaques editoriais" className="grid gap-6 lg:grid-cols-2">
      {promoCards.map((promo) => (
        <article
          key={promo.id}
          className="group grid overflow-hidden rounded-3xl bg-card ring-1 ring-border/60 transition duration-300 hover:shadow-xl hover:shadow-espresso/60 hover:ring-primary/40 sm:min-h-[18rem] sm:grid-cols-[48%_52%]"
        >
          <div className="relative aspect-[8/7] overflow-hidden bg-espresso sm:aspect-auto">
            <NftArtwork
              seed={`promo-${promo.id}`}
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight text-balance sm:text-2xl">
              {promo.title}
            </h3>
            <p className="text-sm text-pretty text-muted-foreground">{promo.description}</p>
            <Button asChild className="mt-2 h-10 w-fit rounded-full px-5 font-semibold">
              <Link to="/nft/$nftId" params={{ nftId: promo.nftId }}>
                {promo.ctaLabel}
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
