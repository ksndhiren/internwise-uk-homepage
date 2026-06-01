import { BrowseSectors } from "./BrowseSectors";
import { BrowseLocations } from "./BrowseLocations";

/** Two-column wrapper: sectors + locations. */
export function BrowseSection() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8">
        <BrowseSectors />
        <BrowseLocations />
      </div>
    </section>
  );
}
