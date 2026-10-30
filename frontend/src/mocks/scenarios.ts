export const MOCK_SCENARIOS = [
  "default",
  "empty",
  "slow",
  "out-of-order",
  "network-error",
  "server-error",
  "session-expired",
  "coupon-invalid",
  "price-changed",
  "payment-declined",
  "order-timeout",
] as const;

export type MockScenario = (typeof MOCK_SCENARIOS)[number];

const SCENARIO_STORAGE_KEY = "nft-marketplace.mock-scenario";
const MOCK_STORAGE_PREFIX = "nft-marketplace.mock";

function isMockScenario(value: string | null): value is MockScenario {
  return value !== null && MOCK_SCENARIOS.includes(value as MockScenario);
}

export function getMockScenario(): MockScenario {
  if (typeof window === "undefined") return "default";

  const fromUrl = new URLSearchParams(window.location.search).get("mockScenario");
  if (isMockScenario(fromUrl)) {
    setMockScenario(fromUrl);
    return fromUrl;
  }

  const stored = window.localStorage.getItem(SCENARIO_STORAGE_KEY);
  return isMockScenario(stored) ? stored : "default";
}

export function setMockScenario(scenario: MockScenario): void {
  window.localStorage.setItem(SCENARIO_STORAGE_KEY, scenario);
}

export function resetMockScenario(): void {
  window.localStorage.removeItem(SCENARIO_STORAGE_KEY);
}

export function resetMockState(): void {
  if (typeof window === "undefined") return;

  const keys = Array.from({ length: window.localStorage.length }, (_, index) =>
    window.localStorage.key(index),
  ).filter((key): key is string => key?.startsWith(MOCK_STORAGE_PREFIX) ?? false);

  for (const key of keys) {
    window.localStorage.removeItem(key);
  }
}
