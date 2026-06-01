import { useState } from "react";
import { Search, MapPin, Building2, ArrowRight, Users, UserRound } from "lucide-react";
import { SEARCH_TABS, HERO_STATS } from "@/data/internwise";
import heroImage from "@/assets/hero-students-cutout.png";

/**
 * Hero with search module.
 * DEVELOPER NOTE: wire the form onSubmit to /job-search with query params.
 */
export function HeroSection() {
  const [activeTab, setActiveTab] = useState<(typeof SEARCH_TABS)[number]>(SEARCH_TABS[0]);

  return (
    <section className="relative overflow-hidden bg-sky">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.96),rgba(255,255,255,0.25)_45%,transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-10 hidden h-[28rem] w-[28rem] rounded-full border border-primary/6 bg-primary/6 lg:block" />
      <div className="pointer-events-none absolute right-[-1rem] top-24 hidden h-[18rem] w-[18rem] rounded-full border border-primary/8 lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8 lg:py-20 lg:px-8">
        {/* Left */}
        <div className="relative z-10">
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

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none">
          <div className="hero-dots pointer-events-none absolute right-10 top-12 hidden h-56 w-28 lg:block" />
          <div className="pointer-events-none absolute right-16 top-4 hidden h-[23rem] w-[23rem] rounded-full bg-white/55 lg:block" />
          <div className="pointer-events-none absolute bottom-0 right-8 hidden h-[20rem] w-[20rem] rounded-[40px] bg-gradient-to-b from-primary/4 to-transparent blur-2xl lg:block" />
          <div className="relative z-10">
            <img
              src={heroImage}
              alt="Two smiling UK students holding a tablet and laptop, ready to start their internships"
              width={1024}
              height={1024}
              className="h-auto w-full max-w-[36rem] object-contain drop-shadow-[0_28px_45px_rgba(25,63,143,0.16)]"
            />
          </div>
          <div className="absolute right-4 top-6 z-20 flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card sm:right-0">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-base font-extrabold text-foreground">{HERO_STATS.activeEmployers}</span>
              <span className="block text-xs text-muted-foreground">Active Employers</span>
            </span>
          </div>
          <div className="absolute bottom-6 right-0 z-20 flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card sm:right-2">
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
