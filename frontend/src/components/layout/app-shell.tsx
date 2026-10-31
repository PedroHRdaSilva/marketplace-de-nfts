import type { ReactNode } from "react";
import { Toaster } from "sonner";

import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />

      <main id="conteudo" className="flex-1">
        <Container className="py-8 lg:py-12">{children}</Container>
      </main>

      <SiteFooter />

      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}
