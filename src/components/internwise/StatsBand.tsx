import { Building2, Users, Briefcase } from "lucide-react";
import { STATS } from "@/data/internwise";

/** Navy stats band. Numbers come from the editable STATS constant. */
export function StatsBand() {
  const items = [
    { icon: Building2, value: STATS.activeEmployers, label: "Total Active Employers" },
    { icon: Users, value: STATS.activeCandidates, label: "Total Active Candidates" },
    { icon: Briefcase, value: STATS.activeInternships, label: "Total Active Internships" },
  ];
  return (
    <section className="bg-background pb-14 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy px-6 py-10 shadow-soft">
          <h2 className="text-center text-xl font-extrabold text-navy-foreground sm:text-2xl">
            Internwise in Numbers
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {items.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl bg-card px-5 py-5 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-2xl font-extrabold text-accent">
                    {value.toLocaleString("en-GB")}
                  </span>
                  <span className="block text-sm font-medium text-muted-foreground">{label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
