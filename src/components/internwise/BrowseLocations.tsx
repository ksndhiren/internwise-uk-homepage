import { MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/internwise";

/** Browse by location grid — rendered from LOCATIONS. */
export function BrowseLocations() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">Browse by Location</h2>
        <a href="/job-search" className="hidden text-sm font-bold text-primary hover:underline sm:inline">
          View All Locations
        </a>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {LOCATIONS.map((loc) => (
          <a
            key={loc.label}
            href={loc.href}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {loc.label}
          </a>
        ))}
      </div>
      <a
        href="/job-search"
        className="mt-4 inline-block rounded-lg border border-border px-4 py-2 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        View All Locations
      </a>
    </div>
  );
}
