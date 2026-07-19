import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui-bits";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-moss/20 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <LeafGlyph
            className={cn(
              "h-9 w-9 transition-colors",
              scrolled ? "text-forest-deep" : "text-paper",
            )}
          />
          <div className="leading-none">
            <div
              className={cn(
                "font-serif text-2xl transition-colors",
                scrolled ? "text-forest-deep" : "text-paper",
              )}
            >
              Conserviron
            </div>
            <div
              className={cn(
                "mt-1 text-[10px] uppercase tracking-[0.2em] transition-colors",
                scrolled ? "text-stone" : "text-paper/70",
              )}
            >
              Sustainability Foundation
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{
                className: cn(
                  "text-sm font-medium border-b border-clay pb-1",
                  scrolled ? "text-forest-deep" : "text-paper",
                ),
              }}
              inactiveProps={{
                className: cn(
                  "text-sm font-medium hover:text-clay transition-colors pb-1 border-b border-transparent",
                  scrolled ? "text-ink/80" : "text-paper/85",
                ),
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant={scrolled ? "primary" : "outline-light"}
            to="/contact"
          >
            Discuss a project
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden rounded p-2 transition-colors",
            scrolled ? "text-forest-deep" : "text-paper",
          )}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-forest-deep text-paper lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <LeafGlyph className="h-9 w-9 text-paper" />
              <div className="font-serif text-2xl">Conserviron</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-paper/15 py-4 font-serif text-3xl"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-8">
              <Button variant="primary" to="/contact" onClick={() => setOpen(false)} as="link">
                Discuss a project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LeafGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M8 32 C 8 18, 18 8, 32 8 C 32 22, 22 32, 8 32 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M8 32 L 28 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 26 L 22 26 M 18 20 L 26 20" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}
