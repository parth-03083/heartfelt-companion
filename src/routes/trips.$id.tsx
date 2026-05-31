import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getTrip } from "@/data/trips";

export const Route = createFileRoute("/trips/$id")({
  loader: ({ params }) => {
    const trip = getTrip(params.id);
    if (!trip) throw notFound();
    return { trip };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.trip.name} — Horizon Bound` },
          { name: "description", content: loaderData.trip.overview },
          { property: "og:image", content: loaderData.trip.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold mb-2">Trip not found</h1>
        <Link to="/trips" className="text-primary underline">Back to all trips</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center">
      Something went wrong. <Link to="/trips" className="text-primary underline ml-2">Back to trips</Link>
    </div>
  ),
  component: TripDetail,
});

function TripDetail() {
  const { trip } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const hero = trip.gallery[0] ?? trip.image;
  const sides = trip.gallery.slice(1, 5);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SiteHeader />

      <main className="pt-24">
        {/* PHOTO COLLAGE */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-16 mt-4">
          <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-3 h-[320px] md:h-[480px] rounded-3xl overflow-hidden">
            <div className="col-span-4 md:col-span-2 row-span-2 relative">
              <img src={hero} alt={trip.name} className="w-full h-full object-cover" />
            </div>
            {sides.map((src, i) => (
              <div key={i} className={`hidden md:block ${i >= 4 ? "hidden" : ""} relative`}>
                <img src={src} alt={`${trip.name} ${i + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* fallbacks if fewer than 4 side images */}
            {sides.length < 4 &&
              Array.from({ length: 4 - sides.length }).map((_, i) => (
                <div key={`f${i}`} className="hidden md:block bg-surface-container" />
              ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-16 mt-10 grid lg:grid-cols-3 gap-10">
          {/* LEFT 2/3 */}
          <div className="lg:col-span-2 space-y-10">
            {/* TITLE */}
            <div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
                <span className="material-symbols-outlined text-base">location_on</span> {trip.country}
                {trip.tag && (
                  <span className="ml-2 bg-secondary/10 text-secondary px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {trip.tag}
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">{trip.name}</h1>
              <div className="mt-4 flex flex-wrap gap-6 text-on-surface-variant">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">schedule</span><strong className="text-on-surface">{trip.days} Days</strong></span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">group</span><strong className="text-on-surface">{trip.groupSize}</strong></span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">payments</span><strong className="text-primary">₹{trip.price.toLocaleString("en-IN")}</strong> / person</span>
              </div>
            </div>

            {/* PERKS */}
            <Section title="Trip perks">
              <div className="grid sm:grid-cols-2 gap-3">
                {trip.perks.map((p) => (
                  <div key={p} className="flex items-center gap-3 bg-surface-container-low rounded-xl p-4">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* OVERVIEW */}
            <Section title="Overview">
              <p className="text-on-surface-variant leading-relaxed">{trip.overview}</p>
            </Section>

            {/* ITINERARY */}
            <Section title="Itinerary">
              <ol className="space-y-3">
                {trip.itinerary.map((d) => (
                  <li key={d.day} className="flex gap-4 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground font-display font-extrabold flex items-center justify-center">
                      D{d.day}
                    </div>
                    <div>
                      <div className="font-display font-bold">{d.title}</div>
                      <div className="text-sm text-on-surface-variant mt-1">{d.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>

            {/* COSTING */}
            <Section title="Costing inclusion & exclusion">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-tertiary-fixed/40 border border-tertiary/20 rounded-2xl p-5">
                  <h4 className="font-bold flex items-center gap-2 mb-3 text-tertiary"><span className="material-symbols-outlined">check</span> Inclusions</h4>
                  <ul className="space-y-2 text-sm">
                    {trip.inclusions.map((i) => <li key={i} className="flex gap-2"><span>•</span>{i}</li>)}
                  </ul>
                </div>
                <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                  <h4 className="font-bold flex items-center gap-2 mb-3 text-secondary"><span className="material-symbols-outlined">close</span> Exclusions</h4>
                  <ul className="space-y-2 text-sm">
                    {trip.exclusions.map((i) => <li key={i} className="flex gap-2"><span>•</span>{i}</li>)}
                  </ul>
                </div>
              </div>
            </Section>

            {/* GUIDELINES */}
            <Section title="General guidelines">
              <ul className="space-y-2">
                {trip.guidelines.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* FAQs */}
            <Section title="FAQs">
              <div className="space-y-3">
                {trip.faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.q} className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-semibold">{f.q}</span>
                        <span className={`material-symbols-outlined transition-transform ${open ? "rotate-180" : ""}`}>expand_more</span>
                      </button>
                      {open && <div className="px-5 pb-5 text-on-surface-variant">{f.a}</div>}
                    </div>
                  );
                })}
              </div>
            </Section>
          </div>

          {/* RIGHT 1/3 — BOOKING FORM */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-6 shadow-lg">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-extrabold text-3xl text-primary">₹{trip.price.toLocaleString("en-IN")}</span>
                <span className="text-sm text-on-surface-variant">/ person</span>
              </div>
              <p className="text-xs text-on-surface-variant mb-6">All taxes included · Pay 25% to confirm</p>
              <BookingForm tripName={trip.name} />
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">{title}</h2>
      {children}
    </section>
  );
}

function BookingForm({ tripName }: { tripName: string }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      <Field label="Full name" placeholder="Your name" />
      <Field label="Email" type="email" placeholder="you@example.com" />
      <Field label="WhatsApp" placeholder="+91 ..." />
      <div className="grid grid-cols-2 gap-3">
        <Field label="Travel date" type="date" />
        <Field label="Travellers" type="number" placeholder="2" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">Message (optional)</label>
        <textarea
          rows={3}
          placeholder={`Hi, interested in ${tripName}...`}
          className="w-full rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-full hover:bg-primary-container transition-all active:scale-95"
      >
        {sent ? "Request sent ✓" : "Request itinerary"}
      </button>
      <a
        href="https://wa.me/0000000000"
        className="w-full border border-outline-variant text-on-surface font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition"
      >
        <span className="material-symbols-outlined text-base">chat</span> Chat on WhatsApp
      </a>
    </form>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
