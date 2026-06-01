import { Bookmark, MapPin, Clock, Briefcase } from "lucide-react";
import { FEATURED_INTERNSHIPS } from "@/data/internwise";
import { SectionHeading } from "./SectionHeading";

/** Featured internship cards — rendered from FEATURED_INTERNSHIPS. */
export function FeaturedInternships() {
  return (
    <section className="bg-background py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Internships" linkLabel="View All Internships" linkHref="/job-search" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_INTERNSHIPS.map((job) => (
            <article
              key={job.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-sm font-extrabold text-primary">
                  {job.company.charAt(0)}
                </div>
                <button
                  type="button"
                  aria-label={`Save ${job.title}`}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  <Bookmark className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 flex min-h-[14rem] flex-col">
                <h3 className="text-sm font-bold leading-snug text-foreground">{job.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-primary">{job.company}</p>
                <p className="mt-2 flex items-start gap-1 text-xs leading-snug text-muted-foreground">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{job.location}</span>
                </p>
                <div className="mt-4 space-y-2 text-xs text-foreground">
                  <p className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="font-semibold">Type:</span> {job.type}
                  </p>
                  <p className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="font-semibold">Duration:</span> {job.duration}
                  </p>
                </div>
              </div>
              <a
                href={job.href}
                className="mt-auto rounded-lg border border-primary px-3 py-2 text-center text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
