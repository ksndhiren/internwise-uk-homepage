import { FEATURED_EMPLOYERS } from "@/data/internwise";
import { SectionHeading } from "./SectionHeading";

/** Featured employer cards — rendered from FEATURED_EMPLOYERS. */
export function FeaturedEmployers() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Employers" linkLabel="View All Employers" linkHref="/employers" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {FEATURED_EMPLOYERS.map((employer) => (
            <article
              key={employer.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-card"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-secondary text-lg font-extrabold text-primary">
                {employer.name.charAt(0)}
              </div>
              <div className="mt-3 flex min-h-[9.5rem] flex-col">
                <h3 className="text-sm font-bold leading-snug text-foreground">{employer.name}</h3>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{employer.industry}</p>
                <p className="mt-3 text-xs font-semibold text-foreground">{employer.activeInternships} Active Jobs</p>
              </div>
              <a
                href={employer.href}
                className="mt-auto rounded-lg border border-primary px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Profile
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
