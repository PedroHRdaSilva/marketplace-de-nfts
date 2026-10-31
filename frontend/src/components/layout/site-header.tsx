import { Link } from "@tanstack/react-router";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

type NavItem =
  | { kind: "route"; label: string; to: "/" | "/profile"; exact: boolean }
  | { kind: "anchor"; label: string; hash: string };

const navItems: NavItem[] = [
  { kind: "route", label: "Início", to: "/", exact: true },
  { kind: "anchor", label: "Explorar", hash: "catalogo" },
  { kind: "anchor", label: "Atividade", hash: "destaque" },
  { kind: "anchor", label: "Atualizados", hash: "diario" },
  { kind: "route", label: "Perfil", to: "/profile", exact: false },
];

function NavLink({ item, className }: { item: NavItem; className?: string }) {
  if (item.kind === "route") {
    return (
      <Link
        to={item.to}
        activeOptions={{ exact: item.exact }}
        className={className}
        activeProps={{ className: "bg-secondary text-foreground" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a href={`#${item.hash}`} className={className}>
      {item.label}
    </a>
  );
}

const navLinkClassName =
  "inline-flex h-8 shrink-0 items-center rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-secondary/70 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-espresso/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center gap-3">
        <Link
          to="/"
          className="group flex items-center gap-2.5 rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">KURIO</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="ml-4 hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} className={navLinkClassName} />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Button type="button" variant="ghost" size="icon" aria-label="Buscar obras">
            <SearchIcon aria-hidden="true" />
          </Button>

          <Button asChild variant="ghost" size="icon" className="relative">
            <Link to="/cart" aria-label="Abrir carrinho">
              <ShoppingCartIcon aria-hidden="true" />
              <span className="absolute -top-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-primary text-[0.6rem] font-semibold text-primary-foreground">
                2
              </span>
            </Link>
          </Button>

          <Button asChild size="sm" className="ml-1 h-9 rounded-full px-4 font-semibold">
            <Link to="/login">Conectar</Link>
          </Button>
        </div>
      </Container>

      <nav
        aria-label="Navegação principal (mobile)"
        className="border-t border-border/50 lg:hidden"
      >
        <Container className="flex items-center gap-1 overflow-x-auto py-2">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} className={navLinkClassName} />
          ))}
        </Container>
      </nav>
    </header>
  );
}
