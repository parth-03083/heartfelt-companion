import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { trips } from "@/data/trips";

const navBase = [
  { to: "/", label: "Home" },
  { to: "/trips", label: "Trips" },
];

const featuredTrips = trips.filter((t) => t.featured);

function formatPrice(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [featuredOpen, setFeaturedOpen] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (featuredRef.current && !featuredRef.current.contains(e.target as Node)) {
        setFeaturedOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-[1280px] mx-auto">
        <Link to="/" className="font-display text-2xl font-extrabold text-primary tracking-tight">
          Horizon<span className="text-secondary">.</span>Bound
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navBase.map((n) => (
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

          {/* Featured dropdown */}
          <div className="relative" ref={featuredRef}>
            <button
              onClick={() => setFeaturedOpen((v) => !v)}
              className={`text-[15px] font-medium transition-colors flex items-center gap-1 ${
                featuredOpen ? "text-primary font-semibold" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Featured
              <span className={`material-symbols-outlined text-base transition-transform ${featuredOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            {featuredOpen && (
              <div className="absolute top-full left-0 mt-3 w-80 bg-surface border border-outline-variant/40 rounded-2xl shadow-xl p-3 overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 px-2">
                  Featured Trips
                </div>
                <div className="flex flex-col gap-1">
                  {featuredTrips.map((t) => (
                    <Link
                      key={t.id}
                      to="/trips/$id"
                      params={{ id: t.id }}
                      onClick={() => setFeaturedOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors group"
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                          {t.name}
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          {t.country} · {t.days} days · {formatPrice(t.price)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/trips"
                  onClick={() => setFeaturedOpen(false)}
                  className="block mt-2 text-center text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-container py-2"
                >
                  View All Trips
                </Link>
              </div>
            )}
          </div>
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
          {navBase.map((n) => (
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
          <div className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mt-1">
            Featured Trips
          </div>
          {featuredTrips.map((t) => (
            <Link
              key={t.id}
              to="/trips/$id"
              params={{ id: t.id }}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors"
            >
              <img src={t.image} alt={t.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-on-surface">{t.name}</div>
                <div className="text-xs text-on-surface-variant">{t.country} · {t.days} days</div>
              </div>
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
          <ul className="space-y-2:2 text-sm text-primary-foreground/80">
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
