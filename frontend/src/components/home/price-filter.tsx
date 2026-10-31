import { Button } from "@/components/ui/button";
import { formatEth } from "@/lib/format";

import { MAX_PRICE_ETH } from "./data";

export function PriceFilter({
  draft,
  applied,
  onChange,
  onApply,
}: {
  draft: number;
  applied: number;
  onChange: (value: number) => void;
  onApply: () => void;
}) {
  const hasPendingChange = draft !== applied;

  return (
    <section aria-labelledby="filtro-preco" className="space-y-3">
      <h3
        id="filtro-preco"
        className="text-[0.7rem] font-semibold tracking-[0.18em] text-cream uppercase"
      >
        Faixa de preço
      </h3>

      <div className="flex items-baseline justify-between gap-2 text-sm">
        <span className="text-muted-foreground">0 ETH</span>
        <span className="font-semibold text-primary tabular-nums">
          até {formatEth(draft.toFixed(2), 2)} ETH
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={MAX_PRICE_ETH}
        step={0.05}
        value={draft}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label="Preço máximo em ETH"
        className="w-full cursor-pointer accent-primary"
      />

      <div className="flex items-center justify-between text-xs text-muted-foreground tabular-nums">
        <span>0 ETH</span>
        <span>{MAX_PRICE_ETH} ETH</span>
      </div>

      <Button
        type="button"
        size="sm"
        onClick={onApply}
        disabled={!hasPendingChange}
        className="w-full rounded-full"
      >
        Aplicar
      </Button>
    </section>
  );
}
