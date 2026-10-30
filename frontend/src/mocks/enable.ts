import { env } from "@/lib/env";

export async function enableMocking(): Promise<void> {
  if (!env.mswEnabled) return;

  const { worker } = await import("./browser");

  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
  });
}
