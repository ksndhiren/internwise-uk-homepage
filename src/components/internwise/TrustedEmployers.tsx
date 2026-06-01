import { TRUSTED_LOGOS } from "@/data/internwise";

export function TrustedEmployers() {
  const rollingLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold text-foreground">Trusted by Top Employers</h2>
        <div className="trusted-marquee-shell mt-6">
          <div className="trusted-marquee-track">
            {rollingLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-24 min-w-48 items-center justify-center rounded-2xl border border-border/70 bg-card px-5 shadow-sm"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`mx-auto h-16 object-contain object-center transition duration-300 ${logo.widthClass ?? "w-40"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
