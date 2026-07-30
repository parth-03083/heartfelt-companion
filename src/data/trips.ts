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

export const trips: Trip[] = [
  {
    id: "1",
    featured: true,
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
    departures: baseDepartures,
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
    departures: baseDepartures,
  },
  {
    id: "3",
    featured: true,
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
    departures: baseDepartures,
  },
  {
    id: "4",
    featured: true,
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
    departures: baseDepartures,
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
    departures: baseDepartures,
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
    departures: baseDepartures,
  },
  {
    id: "7",
    featured: true,
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
    departures: baseDepartures,
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
    departures: baseDepartures,
  },
  {
    "id": "kerala-expedition",
    "name": "Kerala Expedition",
    "category": "domestic",
    "country": "India",
    "days": 4,
    "price": 18500,
    "groupSize": "Max 12",
    "tag": "Bestseller",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80"
    ],
    "overview": "Embark on an enchanting 3 Nights - 4 Days expedition through Kerala, God's Own Country. Explore the mist-covered tea gardens of Munnar and glide along serene backwaters in a traditional Alleppey houseboat.",
    "perks": [
      "Luxury Houseboat Stay",
      "Munnar Tea Plantation Tour",
      "Spice Garden Walk",
      "Kathakali Cultural Night"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Cochin & Drive to Munnar",
        "desc": "Arrive at Cochin Airport/Railway Station and proceed on a scenic drive to Munnar. En route, witness Cheeyappara and Valara waterfalls. Check-in to hotel and relax."
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing & Tea Estates",
        "desc": "Visit Eravikulam National Park to spot the endangered Nilgiri Tahr. Explore the Tata Tea Museum, Mattupetty Dam, and Echo Point, followed by an evening spice plantation walk."
      },
      {
        "day": 3,
        "title": "Munnar to Alleppey Backwaters",
        "desc": "Drive to Alleppey and board your private traditional houseboat. Cruise through scenic canals, palm-fringed lagoons, and paddy fields while enjoying freshly prepared authentic Kerala meals onboard."
      },
      {
        "day": 4,
        "title": "Alleppey to Cochin & Departure",
        "desc": "Disembark from the houseboat after breakfast. Drive back to Cochin for brief city sightseeing including Fort Kochi, Chinese Fishing Nets, and shopping before your onward drop."
      }
    ],
    "inclusions": [
      "All accommodations (3-star hotels in Munnar & Deluxe Houseboat in Alleppey)",
      "Daily breakfast and all meals onboard the houseboat",
      "Private AC vehicle transfers and inter-city travel",
      "Guided sightseeing tours and plantation walks",
      "All applicable taxes and driver allowances"
    ],
    "exclusions": [
      "Airfare or train tickets to/from Cochin",
      "Entry fees to national parks, museums, and monuments",
      "Personal expenses such as tips, laundry, and drinks",
      "Anything not mentioned in the inclusions list"
    ],
    "guidelines": [
      "Carry a valid government-issued ID card.",
      "Pack comfortable cotton clothing and warm layers for Munnar evenings.",
      "Respect local customs and ecological guidelines in sanctuaries and backwaters.",
      "Keep mosquito repellent and sunscreen handy."
    ],
    "faqs": [
      {
        "q": "What is the best time to visit Kerala?",
        "a": "September to March offers cool, pleasant weather ideal for sightseeing and backwater cruises."
      },
      {
        "q": "Are meals provided on the houseboat?",
        "a": "Yes, traditional Kerala breakfast, lunch, high tea, and dinner are freshly prepared onboard."
      },
      {
        "q": "Can the trip itinerary be customized?",
        "a": "Yes, we can adjust dates, stay categories, and stops to suit your preferences."
      }
    ],
    "departures": [
      "2026-07-12",
      "2026-08-09",
      "2026-09-13",
      "2026-10-11",
      "2026-11-15",
      "2026-12-20"
    ]
  },
  {
    "id": "kerala-exploration",
    "name": "Kerala Exploration",
    "category": "domestic",
    "country": "India",
    "days": 7,
    "price": 28500,
    "groupSize": "Max 12",
    "tag": "Trending",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80"
    ],
    "overview": "Immerse yourself in a comprehensive 6 Nights - 7 Days exploration of Kerala. From hill stations in Munnar and wildlife in Thekkady to traditional Alleppey houseboats, Kovalam beaches, and historic Trivandrum temples.",
    "perks": [
      "Periyar Wildlife Boating",
      "Alleppey Houseboat 21hr Cruise",
      "Kovalam Beach Sunset",
      "Trivandrum Heritage Tour"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Journey Starts: Cochin to Munnar & Waterfalls",
        "desc": "Start journey from Cochin Airport/Railway Station to Munnar (135 km/4.5 hrs). Visit Cheeyappara, Valara & Attukadu Waterfalls and Spice Plantations. Overnight stay at Munnar."
      },
      {
        "day": 2,
        "title": "Munnar Full Day Sightseeing",
        "desc": "Visit Eravikulam National Park (Raja Malai), Mattupetty Dam, Tea Estates, Eco Point, Rose Garden, Photo Point, Honey Bee Tree, Tea Museum, and Blossom Park. Overnight stay at Munnar."
      },
      {
        "day": 3,
        "title": "Thekkady / Periyar Sightseeing & Cultural Evening",
        "desc": "Drive to Thekkady (105 km/3.5 hrs). Explore Periyar Wildlife Sanctuary by boat to spot wild elephants, deer, and tigers. Enjoy an evening of Kathakali, Kalaripayattu martial arts, and tribal dance. Overnight stay at Thekkady."
      },
      {
        "day": 4,
        "title": "Alleppey Backwater & Houseboat Stay",
        "desc": "Drive to Alleppey (160 km/3.5 hrs) and check-in to a traditional Kerala Houseboat. Enjoy a 21-hour backwater cruise with tea, snacks, lunch, dinner, and breakfast served onboard. Overnight stay in Houseboat."
      },
      {
        "day": 5,
        "title": "Alleppey to Kovalam Beach",
        "desc": "Travel from Alleppey to Kovalam (180 km/4 hrs). Spend the evening relaxing at Kovalam Beach amidst lush coconut palms and pristine coastline. Overnight stay at Kovalam."
      },
      {
        "day": 6,
        "title": "Trivandrum Heritage Sightseeing & Kovalam Evening",
        "desc": "Full-day city tour of Trivandrum visiting Sree Padmanabha Swami Temple, Kuthiramalika Palace, Napier Museum, Sree Chithra Art Gallery, and Planetarium. Return to Kovalam Beach for the evening. Overnight stay at Kovalam."
      },
      {
        "day": 7,
        "title": "Return Journey Towards Hometown",
        "desc": "Transfer from Kovalam to Trivandrum Airport / Railway Station (20 km/0.5 hrs) for your onward journey."
      }
    ],
    "inclusions": [
      "Accommodation in Hotel/Houseboat as per selected package",
      "Daily breakfast at hotels and all meals (Breakfast, Lunch, Dinner & High Tea) in Houseboat",
      "Inter-city travel from Cochin pick-up to Trivandrum drop-off",
      "Private AC vehicle for sightseeing with experienced driver cum guide",
      "All toll fees, parking charges, DA, and state permits included",
      "24x7 support throughout the journey"
    ],
    "exclusions": [
      "5% GST",
      "Entry tickets for sightseeing, national parks, and cultural programmes",
      "Paid activities (Elephant ride, Ayurveda massages, Kalaripayattu, etc.)",
      "Airfare or train tickets",
      "Peak season surcharges and unforeseen emergency costs"
    ],
    "guidelines": [
      "Pick up at Cochin Airport/Station and drop off at Trivandrum Airport/Station.",
      "Vehicle allocation: 2 Pax (AC Sedan), 4 Pax (AC Ertiga), 6 Pax (AC Innova).",
      "Note: Eravikulam National Park is closed during February and March.",
      "Rates valid from 1st March 2026 to 30th September 2026."
    ],
    "faqs": [
      {
        "q": "What stays are included in each package tier?",
        "a": "Standard includes Fortune Palace (Munnar), Lakeshore Inn (Thekkady), Jumayira Residency (Kovalam). Premium includes Star Emirates, Holiday Vista, Sagara Beach Resort. Luxury includes Leaf Resort, Greenwoods, Uday Samudra."
      },
      {
        "q": "Are optional paid activities booked in advance?",
        "a": "Paid activities like Kathakali, Kalaripayattu, Elephant rides, and Ayurveda massages can be arranged locally through your driver cum guide."
      },
      {
        "q": "What are the houseboat check-in timings?",
        "a": "Houseboat check-in is around 12:00 PM in Alleppey and operates for 21 hours with all meals provided onboard."
      }
    ],
    "departures": [
      "2026-07-12",
      "2026-08-09",
      "2026-09-13",
      "2026-10-11",
      "2026-11-15",
      "2026-12-20"
    ]
  },
];

export const countries = ["All", "India", "Singapore", "Indonesia", "Thailand", "UAE", "Japan", "France"];

export const getTrip = (id: string) => trips.find((t) => t.id === id);
