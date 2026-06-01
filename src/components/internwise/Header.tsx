import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/internwise";

/** Sticky top navigation. Links use placeholder routes for the developer to wire up. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="/login" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">
            Login
          </a>
          <a href="/register" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">
            Register
          </a>
          <a
            href="/post-vacancy"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:brightness-105"
          >
            Post a Vacancy
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-border" />
            <a href="/login" className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-secondary">
              Login
            </a>
            <a href="/register" className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-secondary">
              Register
            </a>
            <a
              href="/post-vacancy"
              className="mt-1 rounded-lg bg-accent px-4 py-2 text-center text-sm font-bold text-accent-foreground"
            >
              Post a Vacancy
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
