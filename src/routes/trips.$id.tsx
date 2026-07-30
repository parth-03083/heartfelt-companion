import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getTrip, type Trip } from "@/data/trips";

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

const PACKAGES = [
  { id: "standard", label: "3★ Comfort", hotel: "3-star handpicked hotels", mult: 1, perks: ["Comfortable rooms", "Daily breakfast", "Group transfers"] },
  { id: "premium", label: "4★ Premium", hotel: "4-star centrally-located hotels", mult: 1.25, perks: ["Upgraded rooms", "Breakfast + 1 dinner", "Private transfers"] },
  { id: "luxury", label: "5★ Luxury", hotel: "5-star luxury resorts", mult: 1.6, perks: ["Suite category", "All meals included", "Private guide & car"] },
] as const;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}
function formatMonth(iso: string) {
  const { m, y } = parts(iso);
  return `${MONTHS[m - 1]} ${y}`;
}
function formatDay(iso: string) {
  const { d } = parts(iso);
  return String(d).padStart(2, "0");
}
function formatFull(iso: string) {
  if (!iso) return "—";
  const { y, m, d } = parts(iso);
  return `${String(d).padStart(2, "0")} ${MONTHS[m - 1]} ${y}`;
}

function TripDetail() {
  const { trip } = Route.useLoaderData() as { trip: Trip };
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pkgId, setPkgId] = useState<typeof PACKAGES[number]["id"]>("standard");
  const [departure, setDeparture] = useState<string>(trip.departures[0] ?? "");
  const pkg = PACKAGES.find((p) => p.id === pkgId)!;
  const livePrice = Math.round((trip.price * pkg.mult) / 100) * 100;

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
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">payments</span><strong className="text-primary">₹{livePrice.toLocaleString("en-IN")}</strong> / person</span>
              </div>
            </div>

            {/* PACKAGES */}
            <Section title="Choose your package">
              <div className="flex flex-wrap gap-3 mb-5">
                {PACKAGES.map((p) => {
                  const active = p.id === pkgId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPkgId(p.id)}
                      className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all active:scale-95 ${
                        active
                          ? "bg-primary text-primary-foreground border-primary shadow"
                          : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
                      }`}
                    >
                      {p.label} · ₹{(Math.round((trip.price * p.mult) / 100) * 100).toLocaleString("en-IN")}
                    </button>
                  );
                })}
              </div>
              <div className="bg-surface-container-low rounded-2xl p-5">
                <div className="font-display font-bold mb-2">{pkg.hotel}</div>
                <ul className="grid sm:grid-cols-3 gap-2 text-sm text-on-surface-variant">
                  {pkg.perks.map((x) => (
                    <li key={x} className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check_circle</span>{x}</li>
                  ))}
                </ul>
              </div>
            </Section>

            {/* DEPARTURES */}
            <Section title="Next guaranteed departures">
              <p className="text-sm text-on-surface-variant mb-4">Pick a confirmed batch — seats fill fast. Your inquiry will be tagged with the selected date.</p>
              <div className="flex flex-wrap gap-3">
                {trip.departures.map((d) => {
                  const active = d === departure;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDeparture(d)}
                      className={`px-4 py-2.5 rounded-2xl border text-sm font-semibold transition-all active:scale-95 flex flex-col items-start leading-tight ${
                        active
                          ? "bg-primary text-primary-foreground border-primary shadow"
                          : "bg-surface-container-lowest text-on-surface border-outline-variant hover:border-primary hover:text-primary"
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-wider opacity-80">{formatMonth(d)}</span>
                      <span className="font-display font-extrabold text-base">{formatDay(d)}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-base">event_available</span>
                Selected departure: <strong className="text-on-surface">{formatFull(departure)}</strong>
              </div>
            </Section>

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
              <ItineraryAccordion days={trip.itinerary} />
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
                <span className="font-display font-extrabold text-3xl text-primary">₹{livePrice.toLocaleString("en-IN")}</span>
                <span className="text-xs text-on-surface-variant ml-1">({pkg.label})</span>
                <span className="text-sm text-on-surface-variant">/ person</span>
              </div>
              <p className="text-xs text-on-surface-variant mb-6">All taxes included · Pay 25% to confirm</p>
              <div className="mb-4 flex items-center gap-2 text-xs bg-primary/5 border border-primary/20 text-primary rounded-xl px-3 py-2">
                <span className="material-symbols-outlined text-base">event_available</span>
                <span>Departure: <strong>{formatFull(departure)}</strong></span>
              </div>
              <BookingForm tripName={trip.name} price={livePrice} pkgLabel={pkg.label} departure={departure} />
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

const WHATSAPP_NUMBER = "917984116583";

function BookingForm({
  tripName,
  price,
  pkgLabel,
  departure,
}: {
  tripName: string;
  price: number;
  pkgLabel: string;
  departure: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    if (!whatsapp.trim()) e.whatsapp = "Please enter your WhatsApp number";
    else if (!/^[+\d][\d\s-]{6,}$/.test(whatsapp.trim())) e.whatsapp = "Enter a valid number";
    const tn = Number(travellers);
    if (!travellers.trim() || !Number.isFinite(tn) || tn < 1 || tn > 50) e.travellers = "1–50 travellers";
    return e;
  }

  function buildWaMessage() {
    return [
      `New inquiry — ${tripName}`,
      `Package: ${pkgLabel} (₹${price.toLocaleString("en-IN")}/person)`,
      `Departure: ${formatFull(departure)}`,
      `Travellers: ${travellers}`,
      ``,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `WhatsApp: ${whatsapp.trim()}`,
      message.trim() ? `\nMessage: ${message.trim()}` : "",
    ].join("\n");
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    const text = encodeURIComponent(buildWaMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-tertiary-fixed/40 text-tertiary flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>
        <h3 className="font-display font-bold text-lg mb-1">Inquiry sent!</h3>
        <p className="text-sm text-on-surface-variant mb-5">
          We've opened WhatsApp with your trip details pre-filled. If it didn't open, tap below.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWaMessage())}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition"
        >
          <span className="material-symbols-outlined text-base">chat</span> Open WhatsApp
        </a>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setName(""); setEmail(""); setWhatsapp(""); setTravellers("2"); setMessage(""); setErrors({});
          }}
          className="block w-full mt-4 text-xs font-semibold text-on-surface-variant hover:text-primary transition"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <Field label="Full name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} required />
      <Field label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} required />
      <Field label="WhatsApp" placeholder="+91 ..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} error={errors.whatsapp} required />
      <div className="grid grid-cols-2 gap-3">
        <Field label="Travel date" type="date" value={departure} readOnly />
        <Field label="Travellers" type="number" min={1} max={50} placeholder="2" value={travellers} onChange={(e) => setTravellers(e.target.value)} error={errors.travellers} required />
      </div>
      <div>
        <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">Message (optional)</label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Hi, interested in ${tripName}...`}
          className="w-full rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-full hover:bg-primary-container transition-all active:scale-95"
      >
        Request itinerary
      </button>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
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

function ItineraryAccordion({ days }: { days: Trip["itinerary"] }) {
  const [open, setOpen] = useState<number | null>(days[0]?.day ?? null);
  return (
    <div className="space-y-3">
      {days.map((d) => {
        const isOpen = open === d.day;
        return (
          <div key={d.day} className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : d.day)}
              className="w-full flex items-center gap-4 p-4 text-left hover:bg-surface-container-low transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground font-display font-extrabold flex items-center justify-center">
                D{d.day}
              </div>
              <div className="flex-1 font-display font-bold">{d.title}</div>
              <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${isOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/40">
                {d.desc}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

