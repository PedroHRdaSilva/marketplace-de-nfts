import { journalEntries } from "./data";
import { JournalCard } from "./journal-card";
import { SectionHeading } from "./section-heading";

export function CuratedJournal() {
  return (
    <section id="diario" aria-labelledby="diario-titulo" className="scroll-mt-28 space-y-10">
      <SectionHeading
        id="diario-titulo"
        title="Diário da Cunhagem"
        description="Guias, bastidores e novidades do universo da arte digital, selecionados pela curadoria."
        align="center"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {journalEntries.map((entry) => (
          <JournalCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
