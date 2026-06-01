import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/internwise/Header";
import { HeroSection } from "@/components/internwise/HeroSection";
import { TrustedEmployers } from "@/components/internwise/TrustedEmployers";
import { FeaturedEmployers } from "@/components/internwise/FeaturedEmployers";
import { FeaturedInternships } from "@/components/internwise/FeaturedInternships";
import { BrowseSection } from "@/components/internwise/BrowseSection";
import { JourneySection } from "@/components/internwise/JourneySection";
import { StatsBand } from "@/components/internwise/StatsBand";
import { CareerAdvice } from "@/components/internwise/CareerAdvice";
import { FinalCTA } from "@/components/internwise/FinalCTA";
import { Footer } from "@/components/internwise/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Internwise — Find Internships in the UK for Students & Graduates" },
      {
        name: "description",
        content:
          "Internwise is the UK's internship marketplace. Search internships at top companies, build experience, and hire pre-screened intern talent.",
      },
      { property: "og:title", content: "Internwise — UK Internship Marketplace" },
      {
        property: "og:description",
        content:
          "Search internship opportunities at top UK companies, build experience and shape your future with Internwise.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedEmployers />
        <FeaturedEmployers />
        <FeaturedInternships />
        <BrowseSection />
        <JourneySection />
        <StatsBand />
        <CareerAdvice />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
