import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Início", exact: true },
  { to: "/cart", label: "Carrinho", exact: false },
  { to: "/profile", label: "Perfil", exact: false },
  { to: "/wallets", label: "Carteiras", exact: false },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
          <Link to="/" className="text-base font-semibold tracking-tight">
            NFT<span className="text-muted-foreground">Marketplace</span>
          </Link>

          <nav
            aria-label="Navegação principal"
            className="order-3 flex w-full items-center gap-1 md:order-none md:w-auto"
          >
            {navItems.map((item) => (
              <Button key={item.to} asChild variant="ghost" size="sm">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.exact }}
                  activeProps={{ className: "bg-muted text-foreground" }}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Criar conta</Link>
            </Button>
          </div>
        </div>
      </header>

      <main id="conteudo" className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        {children}
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Projeto de estudo — dados e pagamentos simulados.</p>
          <p>React · TanStack · MSW · Socket.IO</p>
        </div>
      </footer>

      <Toaster richColors position="top-right" />
    </div>
  );
}
