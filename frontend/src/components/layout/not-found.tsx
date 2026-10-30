import { Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-5 py-16 text-center">
      <Badge variant="outline">404</Badge>
      <h1 className="text-3xl font-semibold tracking-tight">Página não encontrada</h1>
      <p className="text-muted-foreground">
        O endereço acessado não existe ou foi movido. Verifique o link e tente novamente.
      </p>
      <Button asChild>
        <Link to="/">Voltar ao início</Link>
      </Button>
    </section>
  );
}
