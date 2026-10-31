import { benefits } from "./data";
import { SectionHeading } from "./section-heading";

export function BenefitsSection() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-titulo" className="scroll-mt-28 space-y-8">
      <SectionHeading
        id="beneficios-titulo"
        eyebrow="Por que KURIO"
        title="Um marketplace feito para colecionar com calma"
        align="center"
      />

      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-card/60 p-6 transition-colors hover:border-primary/30 hover:bg-card"
          >
            <span className="grid size-11 place-items-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/25">
              <benefit.icon aria-hidden="true" className="size-5" />
            </span>
            <h3 className="text-sm font-semibold">{benefit.title}</h3>
            <p className="text-sm text-pretty text-muted-foreground">{benefit.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
