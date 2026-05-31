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
};

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

export const trips: Trip[] = [
  {
    id: "1",
    name: "Singapore Skyline Escape",
    category: "international",
    country: "Singapore",
    days: 6,
    price: 84900,
    groupSize: "Max 14",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
      "https://images.unsplash.com/photo-1538356343803-9d6f8b18b1ca?w=1200&q=80",
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&q=80",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200&q=80",
    ],
    overview:
      "Glide through the futuristic skyline of Singapore — from the Marina Bay light show to the lush Gardens by the Bay. A 6-day urban escape mixing food, design and family-friendly thrills.",
    perks: ["Marina Bay night cruise", "Universal Studios entry", "Hawker food trail", "Sentosa beach day"],
    itinerary: [
      { day: 1, title: "Arrival & Marina Bay", desc: "Check-in, evening Spectra light show and dinner on the bay." },
      { day: 2, title: "Gardens & Cloud Forest", desc: "Sky-walks at Gardens by the Bay followed by Chinatown food crawl." },
      { day: 3, title: "Universal Studios", desc: "Full-day at Universal Studios Sentosa with island sunset." },
      { day: 4, title: "Cultural Quarters", desc: "Little India, Kampong Glam and Arab Street with local guide." },
      { day: 5, title: "Sentosa Beach", desc: "S.E.A. Aquarium, beach time and skyline dinner." },
      { day: 6, title: "Departure", desc: "Orchard Road shopping and airport transfer." },
    ],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "2",
    name: "Agra & Golden Triangle",
    category: "domestic",
    country: "India",
    days: 5,
    price: 22500,
    groupSize: "Max 16",
    tag: "Heritage",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1200&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
    ],
    overview:
      "Walk through Mughal history across Delhi, Agra and Jaipur. Sunrise at the Taj, forts of Amber, and the regal lanes of old Delhi — 5 days of India's finest heritage.",
    perks: ["Sunrise Taj Mahal", "Amber Fort elephant ride", "Old Delhi food walk", "Heritage haveli stay"],
    itinerary: [
      { day: 1, title: "Delhi Heritage", desc: "Red Fort, Jama Masjid and Chandni Chowk food trail." },
      { day: 2, title: "Drive to Agra", desc: "Agra Fort tour and sunset Mehtab Bagh view." },
      { day: 3, title: "Taj at Sunrise", desc: "Iconic sunrise visit, then drive to Jaipur via Fatehpur Sikri." },
      { day: 4, title: "Pink City", desc: "Amber Fort, City Palace and Hawa Mahal." },
      { day: 5, title: "Departure", desc: "Bazaar shopping and onward transfer." },
    ],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "3",
    name: "Bali Island Hop",
    category: "international",
    country: "Indonesia",
    days: 7,
    price: 65000,
    groupSize: "Max 12",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cddc85?w=1200&q=80",
      "https://images.unsplash.com/photo-1542897644-e04428948020?w=1200&q=80",
    ],
    overview: "Beaches, temples and jungle waterfalls across Seminyak, Ubud and Nusa Penida.",
    perks: ["Private villa", "Nusa Penida boat trip", "Ubud rice-terrace cycle", "Temple sunset"],
    itinerary: [
      { day: 1, title: "Seminyak Welcome", desc: "Beach club arrival and sunset drinks." },
      { day: 2, title: "Uluwatu Temple", desc: "Coastal temples and Kecak fire dance." },
      { day: 3, title: "Nusa Penida", desc: "Kelingking Beach speedboat day trip." },
      { day: 4, title: "Ubud Move", desc: "Rice terraces and Monkey Forest." },
      { day: 5, title: "Waterfalls", desc: "Tegenungan and Tibumana waterfall trek." },
      { day: 6, title: "Spa Day", desc: "Balinese spa and farewell dinner." },
      { day: 7, title: "Departure", desc: "Last-minute shopping and transfer." },
    ],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "4",
    name: "Ladakh Bike Expedition",
    category: "group",
    country: "India",
    days: 9,
    price: 38500,
    groupSize: "Max 10",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&q=80",
    ],
    overview: "Ride the highest motorable passes of the Himalayas in this 9-day Royal Enfield expedition.",
    perks: ["Royal Enfield bikes", "Backup vehicle", "Pangong & Nubra camps", "All passes covered"],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Acclimatize and bike fitting." },
      { day: 2, title: "Local Leh", desc: "Shanti Stupa and Leh Palace." },
      { day: 3, title: "Nubra Valley", desc: "Ride over Khardung La." },
      { day: 4, title: "Nubra Sands", desc: "Hunder dunes and camel ride." },
      { day: 5, title: "Pangong Lake", desc: "Cross Chang La to the iconic lake." },
      { day: 6, title: "Pangong Stay", desc: "Lakeside camping." },
      { day: 7, title: "Back to Leh", desc: "Return ride via Chang La." },
      { day: 8, title: "Sham Valley", desc: "Magnetic Hill, Gurudwara Pathar Sahib." },
      { day: 9, title: "Departure", desc: "Farewell breakfast and airport drop." },
    ],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "5",
    name: "Thailand Beach Bash",
    category: "group",
    country: "Thailand",
    days: 6,
    price: 42000,
    groupSize: "Max 18",
    tag: "Party",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80"],
    overview: "Phuket, Krabi and Phi Phi — sun, beach clubs and island parties for the squad.",
    perks: ["Phi Phi boat party", "Beach club entries", "Bangkok night out"],
    itinerary: Array.from({ length: 6 }, (_, i) => ({ day: i + 1, title: `Day ${i + 1}`, desc: "Beach, boats and bites." })),
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "6",
    name: "Kerala Backwaters",
    category: "domestic",
    country: "India",
    days: 5,
    price: 19800,
    groupSize: "Max 12",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
    overview: "Houseboat cruises, spice plantations and the soul of God's own country.",
    perks: ["Premium houseboat", "Munnar tea trails", "Kathakali night"],
    itinerary: Array.from({ length: 5 }, (_, i) => ({ day: i + 1, title: `Day ${i + 1}`, desc: "Backwater bliss." })),
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "7",
    name: "Dubai City & Desert",
    category: "international",
    country: "UAE",
    days: 5,
    price: 58000,
    groupSize: "Max 15",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80"],
    overview: "Burj Khalifa, desert safari and a dhow cruise dinner under the stars.",
    perks: ["Burj Khalifa entry", "Desert safari", "Dhow dinner cruise"],
    itinerary: Array.from({ length: 5 }, (_, i) => ({ day: i + 1, title: `Day ${i + 1}`, desc: "City lights and dunes." })),
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
  {
    id: "8",
    name: "Goa Long Weekend",
    category: "group",
    country: "India",
    days: 4,
    price: 14500,
    groupSize: "Max 20",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80"],
    overview: "North-South Goa, beach shacks, water sports and a night-out crawl.",
    perks: ["Beach villa", "Scuba try-dive", "Bar crawl"],
    itinerary: Array.from({ length: 4 }, (_, i) => ({ day: i + 1, title: `Day ${i + 1}`, desc: "Sun, sand and susegad." })),
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    guidelines: baseGuidelines,
    faqs: baseFaqs,
  },
];

export const countries = ["All", "India", "Singapore", "Indonesia", "Thailand", "UAE", "Japan", "France"];

export const getTrip = (id: string) => trips.find((t) => t.id === id);
