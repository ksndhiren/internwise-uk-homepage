import { UserPlus, Search, ClipboardCheck, Rocket, FilePlus2, Users, ListChecks, Settings } from "lucide-react";
import { CANDIDATE_STEPS, EMPLOYER_STEPS } from "@/data/internwise";

const CANDIDATE_ICONS = [UserPlus, Search, ClipboardCheck, Rocket];
const EMPLOYER_ICONS = [FilePlus2, Users, ListChecks, Settings];

type Step = { title: string; description: string };

function JourneyCard({
  surface,
  accent,
  lineColor,
  title,
  subtitle,
  steps,
  icons,
  ctaLabel,
  ctaHref,
  ctaClass,
}: {
  surface: string;
  accent: string;
  lineColor: string;
  title: string;
  subtitle: string;
  steps: Step[];
  icons: typeof CANDIDATE_ICONS;
  ctaLabel: string;
  ctaHref: string;
  ctaClass: string;
}) {
  return (
    <div className={`rounded-3xl p-7 lg:p-9 ${surface}`}>
      <h3 className={`text-center text-2xl font-extrabold ${accent}`}>{title}</h3>
      <p className="mt-1 text-center text-sm text-muted-foreground">{subtitle}</p>
      <ol className="relative mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px sm:block ${lineColor}`}
        />
        {steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-card shadow-sm">
                <Icon className={`h-5 w-5 ${accent}`} aria-hidden="true" />
                <span className={`absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold ${ctaClass}`}>
                  {i + 1}
                </span>
              </span>
              <span className="mt-3 text-sm font-bold text-foreground">{step.title}</span>
              <span className="mt-1 text-xs text-muted-foreground">{step.description}</span>
            </li>
          );
        })}
      </ol>
      <div className="mt-8 text-center">
        <a
          href={ctaHref}
          className={`inline-block rounded-lg px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${ctaClass}`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

/** Candidate + employer journeys side by side. */
export function JourneySection() {
  return (
    <section className="bg-background py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <JourneyCard
          surface="bg-sky"
          accent="text-primary"
          lineColor="bg-primary/25"
          title="Your Journey as a Candidate"
          subtitle="We help you every step of the way"
          steps={CANDIDATE_STEPS}
          icons={CANDIDATE_ICONS}
          ctaLabel="Explore Candidate Journey"
          ctaHref="/candidates"
          ctaClass="bg-primary text-primary-foreground"
        />
        <JourneyCard
          surface="bg-warm"
          accent="text-accent"
          lineColor="bg-accent/25"
          title="Your Journey as an Employer"
          subtitle="Find, hire and manage the best intern talent"
          steps={EMPLOYER_STEPS}
          icons={EMPLOYER_ICONS}
          ctaLabel="Explore Employer Journey"
          ctaHref="/employers"
          ctaClass="bg-accent text-accent-foreground"
        />
      </div>
    </section>
  );
}
