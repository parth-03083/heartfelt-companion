import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { trips } from "@/data/trips";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Bound — Curated Group, Domestic & International Trips" },
      { name: "description", content: "Handcrafted travel experiences across India and the world. Group trips, custom itineraries and 25,000+ happy travellers." },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: "verified", title: "Trusted by 25,000+", desc: "Six years of happy travellers across 40+ destinations." },
  { icon: "tune", title: "Custom Itineraries", desc: "Every trip is tailored to your dates, pace and people." },
  { icon: "support_agent", title: "On-trip Support", desc: "Round-the-clock WhatsApp assistance from real humans." },
  { icon: "payments", title: "Best Price Promise", desc: "Transparent pricing, zero hidden costs, EMI on request." },
];

const steps = [
  { icon: "explore", title: "Choose your destination", desc: "Browse curated trips or tell us your dream." },
  { icon: "event", title: "Pick dates & itinerary", desc: "We tailor the days, stays and experiences to fit you." },
  { icon: "chat", title: "Enquire on WhatsApp", desc: "Talk to a real travel planner — no bots, no forms." },
  { icon: "celebration", title: "Confirm & enjoy", desc: "Pay 25% to lock it in. Pack your bags, we handle the rest." },
];

const reviews = [
  { name: "Priya & Arjun", trip: "Bali, 2024", text: "The most seamless trip we've ever taken. Every detail was thought of — even the surprise anniversary dinner!", avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "Rohan Mehta", trip: "Ladakh Group, 2024", text: "Riding through Khardung La with the Horizon crew was the highlight of my year. Top-notch logistics.", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "The Kapoor Family", trip: "Singapore, 2023", text: "Kid-friendly, parent-approved. We didn't lift a finger and still saw everything we wanted.", avatar: "https://i.pravatar.cc/100?img=32" },
];

function Home() {
  const featured = trips.filter((t) => t.featured);
  const counts = {
    group: trips.filter((t) => t.category === "group").length,
    domestic: trips.filter((t) => t.category === "domestic").length,
    international: trips.filter((t) => t.category === "international").length,
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-base">flight_takeoff</span> Adventures await
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-on-surface">
              Wander beyond the <span className="text-primary">horizon</span>, on your own terms.
            </h1>
            <p className="mt-6 text-lg text-on-surface-variant max-w-lg">
              From the neon skylines of Singapore to the timeless sandstone of Agra Fort —
              we craft journeys that fit your story, not the other way around.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/trips"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-primary-container transition-all active:scale-95"
              >
                Explore Trips
              </Link>
              <a
                href="https://wa.me/0000000000"
                className="border border-outline-variant text-on-surface px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">chat</span> Talk on WhatsApp
              </a>
            </div>

            {/* Active trips count */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { label: "Group Trips", n: counts.group },
                { label: "Domestic", n: counts.domestic },
                { label: "International", n: counts.international },
              ].map((c) => (
                <div key={c.label} className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4">
                  <div className="font-display font-extrabold text-3xl text-primary">{c.n}</div>
                  <div className="text-xs text-on-surface-variant font-medium mt-1">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating images */}
          <div className="relative h-[420px] md:h-[520px]">
            <div className="absolute top-0 right-0 w-[62%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 animate-float-slow">
              <img
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80"
                alt="Singapore skyline at dusk with Marina Bay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[58%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-secondary/20 animate-float-slower">
              <img
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80"
                alt="Agra Fort sandstone walls in golden hour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-surface-container-lowest rounded-2xl shadow-xl p-3 flex items-center gap-3 z-10">
              <div className="bg-tertiary-fixed text-tertiary rounded-full p-2 material-symbols-outlined">flight</div>
              <div className="text-xs">
                <div className="font-bold">Next departure</div>
                <div className="text-on-surface-variant">Bali · 12 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">Why travellers pick us</h2>
          <p className="text-center text-on-surface-variant mb-12 max-w-xl mx-auto">A boutique team obsessed with the details — so you can be obsessed with the moments.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">{b.icon}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVERSITY + STATS */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Our story in numbers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-5 leading-tight">
              Travel is the one thing that makes us richer the more we give it away.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              For six years we've believed travel should be diverse — diverse in destinations, in
              people, in pace and in price. Whether it's a solo backpacker heading to Hampi or a
              50-person corporate retreat in Phuket, we shape each journey to the humans on it.
              No cookie-cutter packages. No filler days. Just thoughtful travel.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
              alt="Group of travellers on a mountain"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 grid grid-cols-3 gap-3 text-primary-foreground">
              {[
                { n: "25,000+", l: "Travellers served" },
                { n: "90%+", l: "Happy travellers" },
                { n: "6 yrs", l: "Crafting trips" },
              ].map((s) => (
                <div key={s.l} className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-3 border border-primary-foreground/20">
                  <div className="font-display text-xl md:text-2xl font-extrabold">{s.n}</div>
                  <div className="text-[11px] opacity-90 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">How it works</h2>
          <p className="text-center text-on-surface-variant mb-12">Four simple steps from daydream to departure.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined">{s.icon}</span>
                    </div>
                    <span className="font-display font-extrabold text-4xl text-outline-variant">0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TRIPS */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Featured journeys</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Hand-picked trips you'll love</h2>
              <p className="text-on-surface-variant mt-2 max-w-xl">Our most-loved itineraries — vetted, bookable, and ready to go.</p>
            </div>
            <Link to="/trips" className="text-primary font-bold text-sm hover:underline">View all trips →</Link>
          </div>

          {featured.length === 0 ? (
            <div className="text-center text-on-surface-variant py-10">No featured trips yet.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((t) => (
                <Link
                  to="/trips/$id"
                  params={{ id: t.id }}
                  key={t.id}
                  className="group bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {t.tag && (
                      <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {t.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-1 text-xs text-on-surface-variant mb-2">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {t.country}
                      <span className="mx-1">·</span>
                      <span className="capitalize">{t.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-3 line-clamp-1">{t.name}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2 mb-5 flex-1">{t.overview}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/40">
                      <div>
                        <div className="text-[11px] text-on-surface-variant uppercase tracking-wider">From</div>
                        <div className="text-primary font-display font-extrabold text-xl">₹{t.price.toLocaleString("en-IN")}</div>
                      </div>
                      <div className="text-right text-xs text-on-surface-variant">
                        <div className="flex items-center gap-1 justify-end"><span className="material-symbols-outlined text-sm">schedule</span>{t.days} days</div>
                        <div className="flex items-center gap-1 justify-end mt-1"><span className="material-symbols-outlined text-sm">group</span>{t.groupSize}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">Loved by travellers</h2>
          <p className="text-center text-on-surface-variant mb-12">Real words from real people who packed their bags with us.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-surface-container-lowest rounded-2xl p-7 border border-outline-variant/40">
                <div className="flex items-center gap-1 text-secondary mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface leading-relaxed mb-6">“{r.text}”</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm">{r.name}</div>
                    <div className="text-xs text-on-surface-variant">{r.trip}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
