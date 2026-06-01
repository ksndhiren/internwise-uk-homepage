import logoImage from "@/assets/internwise-logo.png";

/** Internwise wordmark. Use variant="light" on dark backgrounds (footer). */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const treatment = variant === "light" ? "brightness-0 invert" : "";

  return (
    <a href="/" className="flex items-center" aria-label="Internwise home">
      <img
        src={logoImage}
        alt="Internwise"
        className={`h-auto w-[170px] object-contain sm:w-[190px] ${treatment}`}
      />
    </a>
  );
}
