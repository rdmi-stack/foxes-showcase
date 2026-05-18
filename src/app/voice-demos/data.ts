export type VoiceTenantDemo = {
  slug: string;
  company: string;
  category: string;
  location: string;
  agentName: string;
  avatarUrl: string;
  accent: string;
  headline: string;
  subheadline: string;
  greeting: string;
  instructions: string;
  primaryColor: string;
  surfaceColor: string;
  darkColor: string;
  heroImage: string;
  galleryImages: string[];
  primaryCta: string;
  secondaryCta: string;
  samplePrompts: string[];
  capabilities: string[];
  highlights: { title: string; text: string }[];
  experiences: { title: string; text: string; image: string }[];
  testimonial: { quote: string; author: string; role: string };
  stats: { label: string; value: string }[];
};

export const VOICE_TENANT_DEMOS: VoiceTenantDemo[] = [
  {
    slug: "qasr-al-noor-resort",
    company: "Qasr Al Noor Resort",
    category: "Luxury hotel",
    location: "Dubai, UAE",
    agentName: "Noura",
    avatarUrl: "/images/avatars/nadia.webp",
    accent: "Arabic and English concierge",
    headline: "A luxury resort concierge that speaks like your best front desk lead.",
    subheadline:
      "Noura handles room questions, spa bookings, late checkout, airport transfers, dining requests, and VIP escalation for GCC guests.",
    greeting: "Marhaba, I am Noura from Qasr Al Noor Resort. How may I help with your stay today?",
    instructions:
      "You are Noura, the luxury concierge for Qasr Al Noor Resort in Dubai. Focus on rooms, dining, spa, transfers, late checkout, family stays, VIP requests, and Arabic or English guest support. Confirm dates, guest count, room preferences, and contact details before creating or escalating a booking. Keep answers polished, calm, and hospitality-grade.",
    primaryColor: "#0a6b5e",
    surfaceColor: "#f5efe8",
    darkColor: "#043c35",
    heroImage: "/images/use-cases/hotels.webp",
    galleryImages: ["/images/hero/concierge-desk.webp", "/images/about/values-hospitality.webp", "/images/customers/scene.webp"],
    primaryCta: "Call concierge",
    secondaryCta: "Reserve your stay",
    samplePrompts: [
      "Do you have a sea-view suite this weekend?",
      "Can I book a couples spa slot after Maghrib?",
      "Arrange an airport pickup for my family.",
    ],
    capabilities: ["Room availability", "Spa and dining requests", "Airport transfers", "VIP escalation"],
    highlights: [
      { title: "Arrival handled before landing", text: "Transfers, dietary preferences, family requests, and room notes are organized before the guest reaches the lobby." },
      { title: "Arabic-first hospitality", text: "Guests can speak in Arabic or English and receive polished answers matched to resort standards." },
      { title: "Concierge without the queue", text: "Common requests move instantly while VIP and sensitive moments route to the right team." },
    ],
    experiences: [
      { title: "Sea-view suites", text: "Private balconies, evening turndown, and family-friendly layouts overlooking the Gulf.", image: "/images/use-cases/hotels.webp" },
      { title: "Spa after sunset", text: "Couples rituals, hammam bookings, and wellness slots coordinated around the guest's schedule.", image: "/images/about/values-hospitality.webp" },
      { title: "Door-to-door arrival", text: "Airport pickup, luggage notes, and late check-in support arranged in one conversation.", image: "/images/hero/concierge-desk.webp" },
    ],
    testimonial: {
      quote: "The experience feels like messaging our best concierge, only guests get an answer immediately.",
      author: "Layla Al Mansoori",
      role: "Guest Experience Director",
    },
    stats: [
      { label: "guest coverage", value: "24/7" },
      { label: "languages", value: "29" },
      { label: "handoff rules", value: "VIP" },
    ],
  },
  {
    slug: "red-sea-trails",
    company: "Red Sea Trails",
    category: "Tours and excursions",
    location: "Hurghada, Egypt",
    agentName: "Rami",
    avatarUrl: "/images/avatars/atlas.webp",
    accent: "Tour sales specialist",
    headline: "A tour booking agent for fast-moving excursion teams.",
    subheadline:
      "Rami answers itinerary questions, qualifies guests, checks availability, captures pickup hotels, and routes special requests to operators.",
    greeting: "Hi, I am Rami from Red Sea Trails. Tell me what kind of excursion you are looking for.",
    instructions:
      "You are Rami, an expert excursion advisor for Red Sea Trails in Hurghada. Help guests choose boat trips, diving, snorkeling, desert safari, private transfers, and family-friendly tours. Always capture date, guest count, hotel pickup location, language preference, and special needs before booking or callback. Do not invent availability or prices; use tools when a booking, availability check, or lead capture is needed.",
    primaryColor: "#1f6f8b",
    surfaceColor: "#eef8fb",
    darkColor: "#073744",
    heroImage: "/images/use-cases/tours.webp",
    galleryImages: ["/images/use-cases/tours.webp", "/images/demo/laptop.webp", "/images/customers/scene.webp"],
    primaryCta: "Plan my trip",
    secondaryCta: "View excursions",
    samplePrompts: [
      "What is the best snorkeling trip for kids?",
      "Check availability for a private speedboat tomorrow.",
      "Can you pick us up from Makadi Bay?",
    ],
    capabilities: ["Tour matching", "Pickup capture", "Availability checks", "Lead qualification"],
    highlights: [
      { title: "Trips matched to the guest", text: "Families, divers, couples, and private groups get clear recommendations without scanning long tour menus." },
      { title: "Pickup details captured cleanly", text: "Hotel, date, group size, language, and special requests are collected before the operations team sees the lead." },
      { title: "Built for busy excursion desks", text: "The flow keeps selling after office hours while preserving human handoff for edge cases." },
    ],
    experiences: [
      { title: "Private speedboats", text: "Flexible routes, quiet bays, and hotel pickup for guests who want a premium Red Sea day.", image: "/images/use-cases/tours.webp" },
      { title: "Family snorkeling", text: "Calm water, short transfers, and simple guidance for first-time swimmers and kids.", image: "/images/customers/scene.webp" },
      { title: "Desert evenings", text: "Sunset safari, stargazing, and dinner experiences coordinated with clear pickup windows.", image: "/images/use-cases/agencies.webp" },
    ],
    testimonial: {
      quote: "Guests ask better questions when they can speak naturally, and our team receives cleaner booking details.",
      author: "Omar Fathy",
      role: "Operations Manager",
    },
    stats: [
      { label: "tour types", value: "18" },
      { label: "pickup zones", value: "42" },
      { label: "response time", value: "<2s" },
    ],
  },
  {
    slug: "majlis-journeys",
    company: "Majlis Journeys",
    category: "GCC travel desk",
    location: "Riyadh, Saudi Arabia",
    agentName: "Ayla",
    avatarUrl: "/images/avatars/emma.webp",
    accent: "MENA travel planner",
    headline: "A multilingual travel desk for GCC and MENA itineraries.",
    subheadline:
      "Ayla helps travelers plan city breaks, Umrah add-ons, desert stays, family itineraries, and corporate travel with culturally aware handoff rules.",
    greeting: "Hello, I am Ayla from Majlis Journeys. I can help plan your GCC or MENA trip.",
    instructions:
      "You are Ayla, a GCC and MENA travel planning specialist for Majlis Journeys. Help with Saudi, UAE, Qatar, Oman, Bahrain, Jordan, and Egypt itineraries, including family travel, halal-friendly requirements, prayer-time awareness, visas, transfers, and hotel shortlists. Ask concise qualifying questions and use tools for availability, knowledge base, callback scheduling, or human handoff. Never discuss internal platform details.",
    primaryColor: "#7c3aed",
    surfaceColor: "#f6f2ff",
    darkColor: "#21104d",
    heroImage: "/images/use-cases/agencies.webp",
    galleryImages: ["/images/use-cases/agencies.webp", "/images/about/mission.webp", "/images/careers/culture.webp"],
    primaryCta: "Plan my journey",
    secondaryCta: "Explore itineraries",
    samplePrompts: [
      "Plan a three-day Riyadh family itinerary.",
      "I need a halal-friendly Dubai stopover.",
      "Can someone call me about an Umrah add-on?",
    ],
    capabilities: ["Itinerary planning", "Cultural preferences", "Visa guidance", "Callback scheduling"],
    highlights: [
      { title: "Regional nuance built in", text: "Family pace, halal-friendly preferences, prayer-time awareness, and transfer comfort are treated as core requirements." },
      { title: "From idea to itinerary", text: "Travelers can describe the trip they want and receive a practical route across GCC and MENA destinations." },
      { title: "Human planners stay close", text: "Complex requests can be summarized and routed to an advisor with context already captured." },
    ],
    experiences: [
      { title: "Riyadh city breaks", text: "Heritage, dining, shopping, and family-friendly pacing for short Saudi stays.", image: "/images/use-cases/agencies.webp" },
      { title: "Dubai stopovers", text: "Hotel shortlists, transfers, and halal-friendly recommendations for quick premium trips.", image: "/images/about/mission.webp" },
      { title: "MENA family routes", text: "Multi-city plans with comfort, privacy, timing, and cultural preferences clearly handled.", image: "/images/careers/culture.webp" },
    ],
    testimonial: {
      quote: "It captures the details our advisors need before the first call, which makes planning feel personal from the start.",
      author: "Sara Al Harbi",
      role: "Travel Design Lead",
    },
    stats: [
      { label: "markets", value: "8" },
      { label: "channels", value: "voice + web" },
      { label: "handoffs", value: "live" },
    ],
  },
];

export function getVoiceTenantDemo(slug: string) {
  return VOICE_TENANT_DEMOS.find((demo) => demo.slug === slug);
}
