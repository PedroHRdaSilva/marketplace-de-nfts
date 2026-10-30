export { cn } from "cn";

export function assertNever(value: never): never {
  throw new Error(`Valor inesperado: ${String(value)}`);
}
