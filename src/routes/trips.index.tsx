import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { trips, countries, type Trip } from "@/data/trips";

export const Route = createFileRoute("/trips/")({
  head: () => ({
    meta: [
      { title: "All Trips — Horizon Bound" },
      { name: "description", content: "Browse our curated group, domestic and international trips. Filter by country and pick your next adventure." },
    ],
  }),
  component: TripsPage,
});

const categories = [
  { id: "domestic", label: "Domestic Gems" },
  { id: "international", label: "International Escapes" },
  { id: "group", label: "Group Trips" },
] as const;

function TripsPage() {
  const [country, setCountry] = useState("All");

  const byCat = (cat: Trip["category"]) =>
    trips.filter((t) => t.category === cat && (country === "All" || t.country === country));

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SiteHeader />

      <main className="pt-28 pb-10">
        {/* HERO STRIP */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-16 mb-10">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Explore</span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold mt-2 leading-tight">
            Find your next <span className="text-primary">horizon</span>.
          </h1>
          <p className="text-on-surface-variant mt-3 max-w-2xl">
            Handpicked group, domestic and international journeys. Filter by destination to narrow your search.
          </p>
        </section>

        {/* COUNTRY CHIPS */}
        <section className="border-y border-outline-variant/40 bg-surface">
          <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-5">
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {countries.map((c) => {
                const active = country === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCountry(c)}
                    className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all active:scale-95 ${
                      active
                        ? "bg-primary text-primary-foreground border-primary shadow"
                        : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">public</span> {c}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CATEGORY SECTIONS */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-12 space-y-16">
          {categories.map((cat) => {
            const list = byCat(cat.id);
            return (
              <section key={cat.id}>
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold">{cat.label}</h2>
                  <div className="h-px flex-grow bg-outline-variant" />
                  <span className="text-sm text-on-surface-variant">{list.length} trips</span>
                </div>

                {list.length === 0 ? (
                  <div className="text-center py-12 bg-surface-container-low rounded-2xl text-on-surface-variant">
                    No trips in {country} for this category yet.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {list.map((t) => (
                      <TripCard key={t.id} trip={t} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      to="/trips/$id"
      params={{ id: trip.id }}
      className="group bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {trip.tag && (
          <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {trip.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-2">
          <span className="material-symbols-outlined text-base">location_on</span>
          {trip.country}
        </div>
        <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors">
          {trip.name}
        </h3>
        <div className="flex items-center justify-between border-t border-outline-variant/40 pt-3">
          <div>
            <div className="text-xs text-on-surface-variant">From</div>
            <div className="text-primary font-extrabold text-lg">₹{trip.price.toLocaleString("en-IN")}</div>
          </div>
          <div className="text-right text-xs text-on-surface-variant">
            <div className="flex items-center gap-1 justify-end"><span className="material-symbols-outlined text-base">schedule</span>{trip.days} days</div>
            <div className="flex items-center gap-1 justify-end mt-1"><span className="material-symbols-outlined text-base">group</span>{trip.groupSize}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
