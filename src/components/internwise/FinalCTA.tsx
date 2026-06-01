import { Send } from "lucide-react";

/** Final call to action band. */
export function FinalCTA() {
  return (
    <section className="bg-background pb-14 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary px-6 py-10 text-center shadow-soft md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 place-items-center rounded-xl bg-primary-foreground/15 text-primary-foreground sm:grid">
              <Send className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold text-primary-foreground">Ready to take the next step?</h2>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Join thousands of students and employers on Internwise today.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/register?role=candidate"
              className="rounded-lg bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
            >
              I'm a Candidate
            </a>
            <a
              href="/register?role=employer"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              I'm an Employer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
