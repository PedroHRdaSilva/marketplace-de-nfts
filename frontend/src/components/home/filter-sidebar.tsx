import { SlidersHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CategoryFilter } from "./category-filter";
import { NetworkFilter } from "./network-filter";
import { PriceFilter } from "./price-filter";
import type { CatalogFiltersState } from "./use-catalog-filters";

function Divider() {
  return <div aria-hidden="true" className="h-px bg-border/70" />;
}

export function FilterSidebar({
  filters,
  className,
}: {
  filters: CatalogFiltersState;
  className?: string;
}) {
  return (
    <aside
      aria-label="Filtros da coleção"
      className={cn("rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur", className)}
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
          <SlidersHorizontalIcon aria-hidden="true" className="size-4 text-primary" />
          Filtros
        </h2>
        <Button
          type="button"
          variant="link"
          size="sm"
          onClick={filters.resetFilters}
          disabled={!filters.hasActiveFilters}
          className="h-auto px-0 text-xs text-muted-foreground hover:text-primary"
        >
          Limpar
        </Button>
      </div>

      <div className="mt-4 space-y-4">
        <CategoryFilter value={filters.categoryId} onChange={filters.setCategoryId} />
        <Divider />
        <PriceFilter
          draft={filters.priceDraft}
          applied={filters.maxPriceEth}
          onChange={filters.setPriceDraft}
          onApply={filters.applyPrice}
        />
        <Divider />
        <NetworkFilter value={filters.networkId} onChange={filters.setNetworkId} />
      </div>
    </aside>
  );
}
