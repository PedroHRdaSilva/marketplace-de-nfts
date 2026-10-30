import { Decimal } from "decimal.js";

Decimal.set({ precision: 40, rounding: Decimal.ROUND_HALF_UP });

export function parseEth(value: string): Decimal {
  return new Decimal(value);
}

export function sumEth(values: string[]): string {
  return values.reduce((total, value) => total.plus(parseEth(value)), new Decimal(0)).toFixed();
}

export function formatEth(value: string, fractionDigits = 4): string {
  const decimal = parseEth(value);

  if (!decimal.isFinite()) return "—";

  const fixed = decimal.toFixed(fractionDigits);
  const trimmed = fixed.includes(".") ? fixed.replace(/0+$/, "").replace(/\.$/, "") : fixed;

  return trimmed === "-0" ? "0" : trimmed;
}

export function formatEthWithSymbol(value: string, fractionDigits = 4): string {
  return `${formatEth(value, fractionDigits)} ETH`;
}

export function compareEth(left: string, right: string): number {
  return parseEth(left).comparedTo(parseEth(right));
}

export function isPositiveEth(value: string): boolean {
  return parseEth(value).greaterThan(0);
}
