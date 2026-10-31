import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { NftArtwork } from "./nft-artwork";
import type { JournalEntry } from "./types";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  timeZone: "UTC",
});

export function JournalCard({ entry, className }: { entry: JournalEntry; className?: string }) {
  return (
    <Link
      to="/nft/$nftId"
      params={{ nftId: entry.nftId }}
      className={cn(
        "group block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/60 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-espresso/60 group-hover:ring-primary/40">
        <div className="relative aspect-[10/7] overflow-hidden bg-espresso">
          <NftArtwork
            seed={entry.id}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="text-xs text-latte">
            {dateFormatter.format(new Date(entry.publishedAt))} · Leitura de {entry.readingTime} min
          </p>

          <h3 className="font-display text-lg font-semibold tracking-tight text-balance">
            {entry.title}
          </h3>

          <p className="line-clamp-2 text-sm text-pretty text-muted-foreground">{entry.excerpt}</p>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-primary">
            Ler mais
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
