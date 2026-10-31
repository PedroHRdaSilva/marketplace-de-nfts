import { SearchXIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { CatalogToolbar } from "./catalog-toolbar";
import { FeaturedHighlight } from "./featured-highlight";
import { FilterSidebar } from "./filter-sidebar";
import { NftCard } from "./nft-card";
import { useCatalogFilters } from "./use-catalog-filters";

export function CatalogSection() {
  const filters = useCatalogFilters();

  return (
    <section id="catalogo" aria-labelledby="catalogo-titulo" className="scroll-mt-28 space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Explorar</p>
          <h2
            id="catalogo-titulo"
            className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Obras em destaque
          </h2>
        </div>
        <p className="max-w-sm text-sm text-pretty text-muted-foreground">
          Filtre por categoria, rede e faixa de preço. Todos os valores em ETH, direto da carteira.
        </p>
      </div>

      <CatalogToolbar
        tab={filters.tab}
        onTabChange={filters.setTab}
        sort={filters.sort}
        onSortChange={filters.setSort}
        resultCount={filters.nfts.length}
      />

      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <div className="space-y-6">
          <FilterSidebar filters={filters} />
          <FeaturedHighlight />
        </div>

        <div>
          {filters.nfts.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {filters.nfts.map((nft) => (
                <NftCard key={nft.id} nft={nft} />
              ))}
            </div>
          ) : (
            <div className="grid place-items-center gap-2 rounded-2xl border border-dashed border-border/80 bg-card/40 px-6 py-16 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-secondary text-muted-foreground">
                <SearchXIcon aria-hidden="true" className="size-5" />
              </span>
              <p className="mt-2 font-medium">Nenhuma obra encontrada</p>
              <p className="max-w-xs text-sm text-muted-foreground">
                Ajuste a categoria, a rede ou a faixa de preço para ver outras peças.
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={filters.resetFilters}
                className="mt-3 rounded-full"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
