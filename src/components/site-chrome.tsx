import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/trips", label: "Trips" },
  { to: "/trips/1", label: "Featured" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-[1280px] mx-auto">
        <Link to="/" className="font-display text-2xl font-extrabold text-primary tracking-tight">
          Horizon<span className="text-secondary">.</span>Bound
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[15px] text-on-surface-variant hover:text-primary font-medium transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/0000000000"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-primary-container transition-all active:scale-95"
          >
            Enquire
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden material-symbols-outlined text-on-surface-variant p-2"
            aria-label="Menu"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface px-5 py-4 flex flex-col gap-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-on-surface font-medium"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl font-extrabold mb-3">
            Horizon<span className="text-secondary-container">.</span>Bound
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Curated journeys for groups, families and explorers — across India and the world.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/trips">All Trips</Link></li>
            <li><Link to="/trips">Group Trips</Link></li>
            <li><Link to="/trips">Domestic</Link></li>
            <li><Link to="/trips">International</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>About Us</li>
            <li>Reviews</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Reach Us</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">call</span> +91 98765 43210</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">mail</span> hello@horizonbound.com</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">location_on</span> Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Horizon Bound. Crafted with wanderlust.
      </div>
    </footer>
  );
}
