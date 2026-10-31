import { cn } from "@/lib/utils";

import { networks } from "./data";

export function NetworkFilter({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (networkId: string | null) => void;
}) {
  return (
    <section aria-labelledby="filtro-rede" className="space-y-2">
      <h3
        id="filtro-rede"
        className="text-[0.7rem] font-semibold tracking-[0.18em] text-cream uppercase"
      >
        Rede
      </h3>

      <ul className="space-y-1">
        {networks.map((network) => {
          const active = value === network.id;

          return (
            <li key={network.id}>
              <button
                type="button"
                onClick={() => onChange(active ? null : network.id)}
                aria-pressed={active}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  active
                    ? "bg-primary/15 font-medium text-primary"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "size-2 shrink-0 rounded-full transition-colors",
                    active ? "bg-primary" : "bg-border",
                  )}
                />
                {network.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
