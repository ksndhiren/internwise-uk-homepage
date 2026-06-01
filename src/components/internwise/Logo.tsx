import { GraduationCap } from "lucide-react";

/** Internwise wordmark. Use variant="light" on dark backgrounds (footer). */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-navy-foreground" : "text-foreground";
  const tagColor = variant === "light" ? "text-navy-foreground/70" : "text-muted-foreground";
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Internwise home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
        <GraduationCap className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
          INTERN<span className="text-accent">WISE</span>
        </span>
        <span className={`text-[10px] font-medium ${tagColor}`}>
          Your Internship Specialist in the UK
        </span>
      </span>
    </a>
  );
}
