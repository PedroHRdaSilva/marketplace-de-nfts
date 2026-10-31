import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { sortOptions } from "./data";
import type { CatalogSort, CatalogTab } from "./types";

const tabs: { value: CatalogTab; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "em-alta", label: "Em alta" },
  { value: "recentes", label: "Mais recentes" },
];

export function CatalogToolbar({
  tab,
  onTabChange,
  sort,
  onSortChange,
  resultCount,
}: {
  tab: CatalogTab;
  onTabChange: (tab: CatalogTab) => void;
  sort: CatalogSort;
  onSortChange: (sort: CatalogSort) => void;
  resultCount: number;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div
        role="group"
        aria-label="Curadoria da coleção"
        className="flex w-fit items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1"
      >
        {tabs.map((item) => {
          const active = tab === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onTabChange(item.value)}
              aria-pressed={active}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                active
                  ? "bg-primary text-primary-foreground shadow-sm shadow-espresso/50"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 lg:justify-end">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground tabular-nums">{resultCount}</span>{" "}
          {resultCount === 1 ? "obra" : "obras"}
        </p>

        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-muted-foreground sm:inline">Ordenar por</span>
          <Select value={sort} onValueChange={(value) => onSortChange(value as CatalogSort)}>
            <SelectTrigger aria-label="Ordenar por" className="h-9 rounded-full bg-card/60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
