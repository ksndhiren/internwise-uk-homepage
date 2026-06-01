import { MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/internwise";

/** Browse by location grid — rendered from LOCATIONS. */
export function BrowseLocations() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 grid min-h-12 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">Browse by Location</h2>
        <a href="/job-search" className="hidden text-sm font-bold text-primary hover:underline sm:inline justify-self-end whitespace-nowrap">
          View All Locations
        </a>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {LOCATIONS.map((loc) => (
          <a
            key={loc.label}
            href={loc.href}
            className="flex min-h-[5.25rem] items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-[15px] font-semibold leading-snug text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary xl:min-h-[5rem]"
          >
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-balance">{loc.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
