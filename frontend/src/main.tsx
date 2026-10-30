import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { enableMocking } from "./mocks/enable";
import { queryClient } from "./lib/query-client";
import { router } from "./router";

async function bootstrap(): Promise<void> {
  await enableMocking();

  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Elemento #root não encontrado.");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}

void bootstrap();
