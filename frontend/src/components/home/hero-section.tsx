import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { NftArtwork } from "./nft-artwork";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br from-coffee via-espresso to-espresso"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-12 lg:py-16">
        <div className="space-y-6">
          <p className="text-sm font-medium">Bem-vindo à Kurio</p>
          <h1
            id="hero-titulo"
            className="font-display text-[43px] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            SEJA DONO DO FUTURO DA ARTE DIGITAL
          </h1>

          <p className="max-w-xl font-display text-sm font-normal text-pretty text-muted-foreground sm:text-lg">
            Descubra NFTs selecionados de criadores emergentes e consagrados. Colecione arte digital
            rara, apoie artistas e tenha uma parte da cultura da internet.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 rounded-full px-6 text-sm font-semibold">
              <a href="#catalogo">
                Explorar
                <ArrowRightIcon aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[450px]">
          <div className="relative overflow-hidden rounded-3xl bg-espresso shadow-2xl ring-1 shadow-espresso/80 ring-border/60">
            <NftArtwork
              seed="hero-bored-ape-481"
              label="Ilustração de Bored Ape #481 em tons de café"
              className="aspect-square w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
