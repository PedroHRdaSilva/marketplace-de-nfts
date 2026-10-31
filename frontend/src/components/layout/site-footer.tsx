import type { FormEvent } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BellRingIcon, UsersIcon, WalletIcon } from "lucide-react";
import { toast } from "sonner";

import { Container } from "@/components/layout/container";
import { SocialIcon, type SocialNetwork } from "@/components/layout/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerHighlights = [
  {
    icon: WalletIcon,
    title: "Segurança da carteira",
    description: "Proteja sua carteira e colecione arte digital com confiança.",
  },
  {
    icon: UsersIcon,
    title: "Criadores em destaque",
    description: "Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede.",
  },
  {
    icon: BellRingIcon,
    title: "Alertas de lançamentos",
    description:
      "Receba calendários de curadoria, novidades de listas de acesso e análises do mercado.",
  },
] as const;

const footerColumns = [
  {
    title: "Meu perfil",
    items: ["Minha coleção", "Atividade", "Estúdio do criador", "Lista de interesse"],
  },
  {
    title: "Central de ajuda",
    items: ["Como comprar NFTs", "Carteira e segurança", "Política do mercado", "Denunciar item"],
  },
  {
    title: "Coleções",
    items: ["Arte digital", "Fotografia", "Música", "Arte 3D", "Utilidade"],
  },
] as const;

const socialLinks: { network: SocialNetwork; label: string }[] = [
  { network: "facebook", label: "Facebook" },
  { network: "instagram", label: "Instagram" },
  { network: "twitter", label: "Twitter" },
  { network: "linkedin", label: "LinkedIn" },
  { network: "youtube", label: "YouTube" },
];

const wallets = ["METAMASK", "WALLETCONNECT", "COINBASE"] as const;

const year = new Date().getFullYear();

export function SiteFooter() {
  const [email, setEmail] = useState("");

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = email.trim();

    if (!value) {
      toast.error("Informe um e-mail para receber os drops.");
      return;
    }

    toast.success("Inscrição confirmada", {
      description: `Vamos avisar você em ${value} a cada novo drop.`,
    });
    setEmail("");
  }

  return (
    <footer className="border-t border-border/60 bg-espresso">
      <Container className="space-y-8 py-10 lg:py-14">
        <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border/60">
          <div className="grid divide-y divide-primary/20 lg:grid-cols-[1fr_1fr_1fr_1.15fr] lg:divide-x lg:divide-y-0">
            {footerHighlights.map((highlight) => (
              <div key={highlight.title} className="flex flex-col items-start gap-3 p-6 lg:p-7">
                <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
                  <highlight.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{highlight.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{highlight.description}</p>
              </div>
            ))}

            <div className="flex flex-col items-start gap-3 p-6 lg:p-7">
              <h3 className="text-lg font-semibold tracking-tight text-balance">
                Antecipe-se ao próximo lançamento
              </h3>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex w-full flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Seu e-mail
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="digite seu e-mail..."
                  className="h-10 rounded-full bg-background/40 px-4"
                />
                <Button type="submit" className="h-10 shrink-0 rounded-full px-5 font-semibold">
                  Enviar
                </Button>
              </form>

              <p className="text-xs text-pretty text-muted-foreground">
                Receba lançamentos selecionados, histórias de criadores e novidades do mercado.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 rounded-2xl bg-primary/15 px-6 py-5 ring-1 ring-primary/25 sm:-mx-6 sm:px-6 md:grid-cols-4 md:items-center lg:-mx-8 lg:px-8">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            KURIO
          </Link>
          <p className="max-w-[16rem] text-sm text-pretty text-latte">
            Feito para colecionadores, criadores e cultura
          </p>
          <a
            href="mailto:contato@email.com"
            className="text-sm text-latte transition-colors hover:text-primary"
          >
            contato@email.com
          </a>
          <a
            href="tel:+551140028922"
            className="text-sm text-latte transition-colors hover:text-primary md:text-right"
          >
            +55 11 4002 8922
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold tracking-tight text-cream">{column.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {column.items.map((item) => (
                  <li key={item}>
                    <a href="#rodape" className="transition-colors hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="space-y-5">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-tight text-cream">Redes sociais</h3>
              <ul className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <li key={social.network}>
                    <a
                      href="#redes"
                      aria-label={social.label}
                      className="grid size-9 place-items-center rounded-lg text-primary ring-1 ring-primary/40 transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <SocialIcon network={social.network} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-tight text-cream">
                Carteiras compatíveis
              </h3>
              <ul className="flex flex-nowrap gap-1.5">
                {wallets.map((wallet) => (
                  <li
                    key={wallet}
                    className="rounded-full bg-primary/10 px-2 py-1.5 text-[0.6rem] font-semibold tracking-[0.02em] whitespace-nowrap text-primary ring-1 ring-primary/25"
                  >
                    {wallet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <p>© {year} Kurio. Propriedade digital para todos.</p>
        </div>
      </Container>
    </footer>
  );
}
