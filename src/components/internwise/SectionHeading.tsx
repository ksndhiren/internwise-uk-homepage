import { ArrowRight } from "lucide-react";

/** Reusable section title with an optional "view all" link. */
export function SectionHeading({
  title,
  linkLabel,
  linkHref,
}: {
  title: string;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <div className="mb-6 grid min-h-12 grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          className="flex shrink-0 items-center gap-1 justify-self-end whitespace-nowrap text-sm font-bold text-primary hover:underline"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
