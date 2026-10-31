import { BenefitsSection } from "./benefits-section";
import { CatalogSection } from "./catalog-section";
import { CuratedJournal } from "./curated-journal";
import { HeroSection } from "./hero-section";
import { PromoBanners } from "./promo-banners";

export function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
      <HeroSection />
      <CatalogSection />
      <PromoBanners />
      <CuratedJournal />
      <BenefitsSection />
    </div>
  );
}
