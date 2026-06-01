import {
  Calculator, FileText, Sprout, HeartHandshake, Cpu, Palette, Wrench, Users, MonitorSmartphone,
} from "lucide-react";
import { SECTORS } from "@/data/internwise";

const ICONS = [Calculator, FileText, Sprout, HeartHandshake, Cpu, Palette, Wrench, Users, MonitorSmartphone];

/** Browse by sector grid — rendered from SECTORS. */
export function BrowseSectors() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 grid min-h-12 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">Browse by Industry / Sector</h2>
        <a href="/job-search" className="hidden text-sm font-bold text-primary hover:underline sm:inline justify-self-end whitespace-nowrap">
          View All Sectors
        </a>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {SECTORS.map((sector, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <a
              key={sector.label}
              href={sector.href}
              className="flex min-h-[5.25rem] items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-[15px] font-semibold leading-snug text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary xl:min-h-[5rem]"
            >
              <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-balance">{sector.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
