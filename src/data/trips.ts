import rawData from "../../data.json";

export type Trip = {
  id: string;
  name: string;
  category: "international" | "domestic" | "group";
  country: string;
  days: number;
  price: number;
  groupSize: string;
  tag?: string;
  image: string;
  gallery: string[];
  overview: string;
  perks: string[];
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
  guidelines: string[];
  faqs: { q: string; a: string }[];
  departures: string[]; // ISO yyyy-mm-dd guaranteed departure dates
  featured?: boolean;
};

const baseDepartures = [
  "2026-07-12",
  "2026-08-09",
  "2026-09-13",
  "2026-10-11",
  "2026-11-15",
  "2026-12-20",
];

const baseFaqs = [
  { q: "What is the booking process?", a: "Inquire via WhatsApp, get a custom itinerary, confirm with 25% deposit and we handle the rest." },
  { q: "Are flights included?", a: "International airfare is optional. We can include it on request at best fares." },
  { q: "Can I customise the itinerary?", a: "Absolutely. Every itinerary can be tailored to your dates, pace and interests." },
  { q: "What is the cancellation policy?", a: "Full refund 30+ days before departure. Partial within 15 days. See terms for details." },
];

const baseGuidelines = [
  "Carry a valid government ID (passport for international trips).",
  "Pack light, weather-appropriate clothing and comfortable walking shoes.",
  "Travel insurance is mandatory for international destinations.",
  "Respect local culture, customs and environment at every stop.",
];

const baseInclusions = [
  "All accommodations (3-4 star or boutique stays)",
  "Daily breakfast & 2 group dinners",
  "Private AC transfers and inter-city travel",
  "Local guide and curated experiences",
  "All applicable taxes",
];

const baseExclusions = [
  "International / domestic airfare (unless specified)",
  "Personal expenses, tips and laundry",
  "Visa fees and travel insurance",
  "Anything not mentioned in inclusions",
];

export const trips: Trip[] = (rawData as Partial<Trip>[]).map((item) => {
  const fallbackImage = item.gallery && item.gallery.length > 0 ? item.gallery[0] : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80";
  const image = item.image && item.image.trim() !== "" ? item.image : fallbackImage;
  const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : [image];

  return {
    id: String(item.id ?? ""),
    name: item.name || "Untitled Trip",
    category: (item.category as "international" | "domestic" | "group") || "domestic",
    country: item.country || "India",
    days: typeof item.days === "number" ? item.days : 1,
    price: typeof item.price === "number" && item.price > 0 ? item.price : 25000,
    groupSize: item.groupSize && item.groupSize.trim() !== "" ? item.groupSize : "Max 12",
    tag: item.tag || undefined,
    image,
    gallery,
    overview: item.overview || `${item.name || "This trip"} offers an incredible journey across ${item.country || "breathtaking locations"}.`,
    perks: item.perks && item.perks.length > 0 ? item.perks : ["Curated Itinerary", "Guided Sightseeing", "24x7 Assistance"],
    itinerary: item.itinerary && item.itinerary.length > 0 ? item.itinerary : [],
    inclusions: item.inclusions && item.inclusions.length > 0 ? item.inclusions : baseInclusions,
    exclusions: item.exclusions && item.exclusions.length > 0 ? item.exclusions : baseExclusions,
    guidelines: item.guidelines && item.guidelines.length > 0 ? item.guidelines : baseGuidelines,
    faqs: item.faqs && item.faqs.length > 0 ? item.faqs : baseFaqs,
    departures: item.departures && item.departures.length > 0 ? item.departures : baseDepartures,
    featured: item.featured ?? false,
  };
});

const calculatedCountries = Array.from(new Set(trips.map((t) => t.country).filter(Boolean)));
export const countries = ["All", ...calculatedCountries];

export const getTrip = (id: string) => trips.find((t) => t.id === id);
