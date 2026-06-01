import { BrowseSectors } from "./BrowseSectors";
import { BrowseLocations } from "./BrowseLocations";

/** Stacked wrapper: sectors and locations as separate sections. */
export function BrowseSection() {
  return (
    <>
      <section className="bg-secondary/40 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrowseSectors />
        </div>
      </section>
      <section className="bg-background py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrowseLocations />
        </div>
      </section>
    </>
  );
}
