import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";

import { SystemStatus } from "@/components/system-status";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const screens = [
  {
    to: "/cart",
    label: "Carrinho",
    description: "Quantidades, remoção, cupom e resumo de valores.",
  },
  {
    to: "/checkout",
    label: "Pagamento",
    description: "Colecionador, carteira, rede, revisão e envio do pedido.",
  },
  {
    to: "/login",
    label: "Login",
    description: "Autenticação com retorno ao fluxo anterior.",
  },
  {
    to: "/register",
    label: "Cadastro",
    description: "Criação de conta com validação e conflito.",
  },
  {
    to: "/profile",
    label: "Perfil",
    description: "Dados do colecionador, avatar e alteração de senha.",
  },
  {
    to: "/wallets",
    label: "Carteiras",
    description: "Carteira principal e secundária por rede.",
  },
] as const;

export function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div className="space-y-6">
          <Badge variant="outline">Desafio Frontend · Marketplace de NFTs</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Descubra, colecione e negocie edições digitais.
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
            Base do projeto configurada com React, TypeScript, TanStack Router e Query, Axios,
            Tailwind CSS, shadcn/ui, MSW, Socket.IO e Playwright. Os fluxos serão implementados a
            partir das specs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/nft/$nftId" params={{ nftId: "aurora-001" }}>
                Ver detalhe de exemplo
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/cart">Abrir carrinho</Link>
            </Button>
          </div>
        </div>

        <SystemStatus />
      </section>

      <section aria-labelledby="telas" className="space-y-6">
        <div className="space-y-1">
          <h2 id="telas" className="text-2xl font-semibold tracking-tight">
            Telas do desafio
          </h2>
          <p className="text-sm text-muted-foreground">
            Rotas já registradas no TanStack Router para acesso direto e refresh.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen) => (
            <Card key={screen.to}>
              <CardHeader>
                <CardTitle>{screen.label}</CardTitle>
                <CardDescription>{screen.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="h-auto px-0">
                  <Link to={screen.to}>
                    Abrir tela
                    <ArrowRightIcon aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
