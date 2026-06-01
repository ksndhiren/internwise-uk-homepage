import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Logo } from "./Logo";
import { FOOTER_LINKS } from "@/data/internwise";

const SOCIALS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-navy-foreground">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Dark navy footer. */
export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
              Internwise is an online job board platform for the niche of internship recruitment, connecting
              employers and candidates across the UK.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="For Candidates" links={FOOTER_LINKS.candidates} />
          <LinkColumn title="For Employers" links={FOOTER_LINKS.employers} />
          <LinkColumn title="Resources" links={FOOTER_LINKS.resources} />

          <div>
            <h3 className="text-sm font-bold text-navy-foreground">Newsletter</h3>
            <p className="mt-4 text-sm text-navy-foreground/70">
              Get the latest internship opportunities and career advice straight to your inbox.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-navy-foreground/20 bg-navy-foreground/5 px-3 py-2.5 text-sm text-navy-foreground outline-none placeholder:text-navy-foreground/50 focus:border-primary"
                />
              </label>
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/10 pt-6 text-center">
          <p className="text-xs text-navy-foreground/60">
            © {new Date().getFullYear()} Internwise.co.uk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
