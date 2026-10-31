import { cn } from "@/lib/utils";

import { categories } from "./data";

function CategoryOption({
  label,
  count,
  active,
  onSelect,
}: {
  label: string;
  count: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        active
          ? "bg-primary/15 font-medium text-primary"
          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
      )}
    >
      <span className="truncate">{label}</span>
      <span className="text-xs tabular-nums opacity-70">{count}</span>
    </button>
  );
}

export function CategoryFilter({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (categoryId: string | null) => void;
}) {
  const total = categories.reduce((sum, category) => sum + category.count, 0);

  return (
    <section aria-labelledby="filtro-categorias" className="space-y-2">
      <h3
        id="filtro-categorias"
        className="text-[0.7rem] font-semibold tracking-[0.18em] text-cream uppercase"
      >
        Categorias
      </h3>

      <ul className="space-y-0.5">
        <li>
          <CategoryOption
            label="Todas as categorias"
            count={total}
            active={value === null}
            onSelect={() => onChange(null)}
          />
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryOption
              label={category.name}
              count={category.count}
              active={value === category.id}
              onSelect={() => onChange(value === category.id ? null : category.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
