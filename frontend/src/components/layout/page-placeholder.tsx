import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

export function PagePlaceholder({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-2xl space-y-4 py-10">
      <Badge variant="outline">Estrutura pronta</Badge>
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      {children}
    </section>
  );
}
