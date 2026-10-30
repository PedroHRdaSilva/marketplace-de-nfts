const STORAGE_KEY = "nft-marketplace.access-token";

let memoryToken: string | null = null;

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getAccessToken(): string | null {
  if (memoryToken) return memoryToken;
  if (!canUseStorage()) return null;

  try {
    memoryToken = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    memoryToken = null;
  }

  return memoryToken;
}

export function setAccessToken(token: string | null): void {
  memoryToken = token;
  if (!canUseStorage()) return;

  try {
    if (token) {
      window.localStorage.setItem(STORAGE_KEY, token);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    return;
  }
}

export function clearAccessToken(): void {
  setAccessToken(null);
}
