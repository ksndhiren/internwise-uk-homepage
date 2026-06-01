import { TRUSTED_LOGOS } from "@/data/internwise";

/** Trusted logo strip. Swap text logos for real brand SVGs when available. */
export function TrustedEmployers() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold text-foreground">Trusted by Top Employers</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {TRUSTED_LOGOS.map((logo) => (
            <span
              key={logo.name}
              className="text-base font-extrabold tracking-tight opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              style={{ color: logo.color }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
