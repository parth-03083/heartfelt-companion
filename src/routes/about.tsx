import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Horizon Bound" },
      { name: "description", content: "Learn about Horizon Bound's vision, purpose, and how we craft unforgettable travel experiences." },
      { property: "og:title", content: "About Us — Horizon Bound" },
      { property: "og:description", content: "Learn about Horizon Bound's vision, purpose, and how we craft unforgettable travel experiences." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: "visibility",
    title: "Our Vision",
    text: "We believe travel should transform — not just transport. Our vision is a world where every journey deepens understanding, builds connection, and leaves both traveller and place better than before.",
  },
  {
    icon: "flag",
    title: "Our Purpose",
    text: "To remove the friction from planning so humans can focus on the moments that matter. We exist to turn curiosity into itineraries, and daydreams into departures.",
  },
  {
    icon: "handshake",
    title: "Our Values",
    text: "Authenticity over hype. Transparency over tricks. Community over crowds. We design trips we'd take ourselves — then obsess over the details until they feel effortless.",
  },
];

const implementations = [
  {
    icon: "travel_explore",
    title: "Curated Discovery",
    desc: "Every destination is scouted in person. We partner with local guides, family-run stays, and hidden-experience makers you won't find on aggregator sites.",
  },
  {
    icon: "assignment_turned_in",
    title: "Rigorous Vetting",
    desc: "Hotels, activities, and transport are stress-tested by our team before they ever reach your itinerary. No filler days. No bait-and-switch.",
  },
  {
    icon: "chat_bubble",
    title: "Human-First Support",
    desc: "From first enquiry to final goodbye, a real travel planner is a WhatsApp message away. We don't do chatbots — we do calm, capable humans.",
  },
  {
    icon: "receipt_long",
    title: "Transparent Pricing",
    desc: "Every cost is itemised upfront. No hidden fees, no surprise surcharges. If plans change, we work with you — not against you.",
  },
  {
    icon: "diversity_3",
    title: "Small Groups, Big Bonds",
    desc: "Our group trips cap at 12-16 travellers. Small enough to feel intimate, diverse enough to spark friendships that outlast the trip.",
  },
  {
    icon: "eco",
    title: "Conscious Travel",
    desc: "We offset carbon for every trip, favour community-owned businesses, and educate travellers on respectful, low-impact exploration.",
  },
];

const stats = [
  { n: "25,000+", l: "Travellers served" },
  { n: "40+", l: "Destinations covered" },
  { n: "6", l: "Years of craft" },
  { n: "90%+", l: "Would book again" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-base">info</span> Who we are
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-on-surface max-w-3xl mx-auto">
            We don't just plan trips — we <span className="text-primary">craft stories</span>.
          </h1>
          <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Horizon Bound began with a simple belief: that the best travel moments are the ones you didn't see coming. Six years later, that belief still guides every itinerary we build.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-10 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl text-primary">{s.n}</div>
                <div className="text-sm text-on-surface-variant mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / PURPOSE / VALUES */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE IMPLEMENT */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="text-center mb-14">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">How we deliver</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">The Horizon Bound way</h2>
            <p className="text-on-surface-variant mt-3 max-w-xl mx-auto">
              Six principles that shape every trip we design — from a weekend in the Western Ghats to a fortnight in Europe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementations.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / COMMUNITY IMAGE */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
              alt="Team collaborating in a modern travel office"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">People-first</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-5 leading-tight">
              Built by travellers, for travellers.
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Our team is a mix of former tour leaders, hospitality veterans, and curious wanderers who couldn't sit still. We've slept in jungle treehouses, missed trains in foreign cities, and learned that the best plans are the ones flexible enough to change.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              That lived experience is what we pour into every itinerary. We don't sell dreams we haven't lived — we share the trips that changed us, refined and ready for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to write your next chapter?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Whether you have a destination in mind or just a feeling you want to chase, we're here to make it real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/0000000000"
              className="bg-primary-foreground text-primary px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span> Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
