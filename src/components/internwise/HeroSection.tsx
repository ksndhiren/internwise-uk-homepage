import { useState } from "react";
import { Search, MapPin, Building2, ArrowRight, Users, UserRound } from "lucide-react";
import { SEARCH_TABS, HERO_STATS } from "@/data/internwise";
import heroImage from "@/assets/hero-students.jpg";

/**
 * Hero with search module.
 * DEVELOPER NOTE: wire the form onSubmit to /job-search with query params.
 */
export function HeroSection() {
  const [activeTab, setActiveTab] = useState<(typeof SEARCH_TABS)[number]>(SEARCH_TABS[0]);

  return (
    <section className="relative overflow-hidden bg-sky">
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-96 w-96 rounded-full bg-primary/10 blur-3xl lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20 lg:px-8">
        {/* Left */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Launch Your Career</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Kick-start Your Career with Internships in the UK
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            Search internship opportunities in top companies, build experience and shape your future.
          </p>

          {/* Search module */}
          <div className="mt-8 rounded-2xl bg-card p-2 shadow-card">
            <div className="flex flex-wrap gap-1 px-1 pt-1" role="tablist" aria-label="Search type">
              {SEARCH_TABS.map((tab) => {
                const active = tab === activeTab;
                return (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                      active ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <form
              className="mt-1 flex flex-col gap-2 p-1 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="flex flex-1 items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="sr-only">Job title, keyword or company</span>
                <input
                  type="text"
                  placeholder="Job title, keyword or company"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              <label className="flex flex-1 items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="sr-only">City or postcode</span>
                <input
                  type="text"
                  placeholder="City or postcode"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </button>
            </form>
          </div>

          {/* CTA cards */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="/candidates"
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <UserRound className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">For Candidates</span>
                  <span className="block text-xs text-muted-foreground">Find your perfect internship</span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="/employers"
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">For Employers</span>
                  <span className="block text-xs text-muted-foreground">Hire exciting talent</span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right — image + floating stats */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-3xl bg-primary/10 shadow-soft">
            <img
              src={heroImage}
              alt="Two smiling UK students holding a tablet and laptop, ready to start their internships"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-2 top-6 flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card sm:left-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-base font-extrabold text-foreground">{HERO_STATS.activeEmployers}</span>
              <span className="block text-xs text-muted-foreground">Active Employers</span>
            </span>
          </div>
          <div className="absolute -bottom-3 right-0 flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card sm:right-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
              <UserRound className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-base font-extrabold text-foreground">{HERO_STATS.activeCandidates}</span>
              <span className="block text-xs text-muted-foreground">Active Candidates</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
