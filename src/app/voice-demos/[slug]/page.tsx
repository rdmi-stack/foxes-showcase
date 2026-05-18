"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  PhoneCall,
  Plane,
  Star,
} from "lucide-react";
import { getVoiceTenantDemo, VOICE_TENANT_DEMOS } from "../data";
import { openVoiceDemoWidget, VoiceWidgetLoader } from "../voice-widget-loader";

type LandingCard = {
  title: string;
  description: string;
};

type LandingContent = {
  heroAlt: string;
  intro: string;
  experiences: LandingCard[];
  services: LandingCard[];
  benefits: LandingCard[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
};

const LANDING_CONTENT: Record<string, LandingContent> = {
  "qasr-al-noor-resort": {
    heroAlt: "Sunlit resort pool with palm trees and private cabanas",
    intro:
      "Arrive to a polished Dubai escape where every stay is shaped around your pace, your family, and the moments you came to celebrate.",
    experiences: [
      { title: "Sea-view suites", description: "Spacious rooms, family layouts, and private balconies matched to the way you like to travel." },
      { title: "Spa after sunset", description: "Couples rituals, wellness appointments, and quiet recovery time arranged around your evening plans." },
      { title: "Private arrivals", description: "Airport pickups, VIP greetings, and smooth luggage support from terminal to suite." },
    ],
    services: [
      { title: "Stay planning", description: "Choose the right room, request late checkout, and coordinate family preferences before arrival." },
      { title: "Dining and spa", description: "Book signature tables, private celebrations, beach service, and wellness appointments." },
      { title: "VIP care", description: "Escalated requests are handled with discretion by the front desk and guest relations team." },
    ],
    benefits: [
      { title: "Bilingual guest care", description: "Arabic and English support for local guests, families, and international visitors." },
      { title: "Always reachable", description: "Ask for help before check-in, during the stay, or while planning the next visit." },
      { title: "Calm handoff", description: "Special requests move to the right resort team without guests repeating details." },
    ],
    testimonial: {
      quote:
        "Qasr Al Noor made our anniversary weekend feel effortless. Dinner, spa, and airport pickup were handled before we arrived.",
      name: "Mariam A.",
      role: "Returning guest",
    },
  },
  "red-sea-trails": {
    heroAlt: "Red Sea boat excursion with clear water and coastal cliffs",
    intro:
      "Make the most of Hurghada with sea days, desert drives, and private experiences chosen around your hotel, group size, and comfort level.",
    experiences: [
      { title: "Family snorkeling", description: "Gentle reef stops, child-friendly boats, and pickup timing that works for resort schedules." },
      { title: "Private speedboats", description: "Flexible Red Sea routes for couples, friends, and guests who want the day to feel personal." },
      { title: "Desert evenings", description: "Safari drives, sunset viewpoints, and local-hosted experiences with clear pickup details." },
    ],
    services: [
      { title: "Tour matching", description: "Compare boat trips, diving, snorkeling, safari, and transfer options before choosing." },
      { title: "Hotel pickup", description: "Share your hotel, room details, language preference, and any mobility or family needs." },
      { title: "Operator follow-up", description: "Special requests are routed to the team that manages availability and day-of coordination." },
    ],
    benefits: [
      { title: "Local routes", description: "Recommendations reflect Red Sea conditions, pickup zones, and realistic excursion pacing." },
      { title: "Fast answers", description: "Get clear next steps while comparing trips, planning around weather, or booking tomorrow." },
      { title: "Easy groups", description: "Guest count, children, equipment needs, and private upgrades are captured in one place." },
    ],
    testimonial: {
      quote:
        "We booked a private boat from Makadi Bay in minutes. The pickup details were clear and the crew knew exactly what we wanted.",
      name: "Thomas R.",
      role: "Red Sea guest",
    },
  },
  "majlis-journeys": {
    heroAlt: "Warm luxury travel lounge prepared for GCC itinerary planning",
    intro:
      "Thoughtful GCC and MENA travel planning for families, corporate guests, and travelers who care about comfort, timing, and cultural detail.",
    experiences: [
      { title: "Riyadh city breaks", description: "Design a three-day stay with dining, cultural stops, family time, and private transfers." },
      { title: "Dubai stopovers", description: "Plan halal-friendly hotels, airport flow, shopping time, and quiet moments between flights." },
      { title: "Umrah add-ons", description: "Coordinate onward travel with respectful pacing, hotel shortlists, and callback support." },
    ],
    services: [
      { title: "Itinerary design", description: "Shape multi-city plans across Saudi, UAE, Qatar, Oman, Bahrain, Jordan, and Egypt." },
      { title: "Family preferences", description: "Account for prayer times, privacy needs, halal dining, senior travelers, and children." },
      { title: "Travel desk handoff", description: "When a plan needs pricing or confirmation, the right specialist can follow up directly." },
    ],
    benefits: [
      { title: "Culturally aware", description: "Advice is calm, practical, and sensitive to the rhythm of GCC and MENA travel." },
      { title: "Multilingual planning", description: "Support for international guests and regional travelers comparing options quickly." },
      { title: "Human when needed", description: "Complex family, corporate, or pilgrimage-related requests can move to a live advisor." },
    ],
    testimonial: {
      quote:
        "Majlis Journeys understood our family requirements immediately and built a Riyadh plan that felt refined without being rushed.",
      name: "Faisal H.",
      role: "Family traveler",
    },
  },
};

export default function TenantVoiceDemoPage() {
  const params = useParams<{ slug: string }>();
  const demo = getVoiceTenantDemo(params.slug);

  if (!demo) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#fbf8f3] px-6 text-center text-[#101917]">
        <div>
          <p className="text-sm font-semibold text-[#0a6b5e]">Page not found</p>
          <h1 className="mt-3 text-4xl font-semibold">Choose an available travel brand.</h1>
          <Link href="/voice-demos" className="mt-8 inline-flex rounded-[8px] bg-[#043c35] px-5 py-3 text-sm font-semibold text-white">
            Back to brands
          </Link>
        </div>
      </main>
    );
  }

  const content = LANDING_CONTENT[demo.slug];
  const relatedBrands = VOICE_TENANT_DEMOS.filter((tenant) => tenant.slug !== demo.slug);

  return (
    <>
      <VoiceWidgetLoader demo={demo} />

      <main className="min-h-screen overflow-hidden text-[#101917]" style={{ backgroundColor: demo.surfaceColor }}>
        <section className="relative bg-[#101917] text-white md:min-h-[92vh]">
          <div className="absolute inset-0">
            <img src={demo.heroImage} alt={content.heroAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,11,0.88),rgba(5,12,11,0.55),rgba(5,12,11,0.2))]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(5,12,11,0),rgba(5,12,11,0.62))]" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col px-6 py-5 md:min-h-[92vh] lg:px-10">
            <nav className="flex items-center justify-between gap-4 border-b border-white/20 pb-5">
              <Link href="/voice-demos" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Brands
              </Link>
              <div className="text-center">
                <p className="text-lg font-semibold">{demo.company}</p>
                <p className="mt-1 hidden text-xs text-white/64 sm:block">{demo.category}</p>
              </div>
              <button
                type="button"
                onClick={openVoiceDemoWidget}
                className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-white px-3 text-sm font-semibold transition hover:bg-white/95"
                style={{ color: demo.darkColor }}
              >
                <PhoneCall className="h-4 w-4" />
                <span className="hidden sm:inline">{demo.primaryCta}</span>
              </button>
            </nav>

            <div className="grid flex-1 items-end gap-10 pb-8 pt-10 lg:grid-cols-[1fr_360px] lg:pb-16 lg:pt-16">
              <div className="max-w-3xl">
                <div className="mb-5 flex flex-wrap gap-3 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                    <MapPin className="h-4 w-4" />
                    {demo.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                    <Star className="h-4 w-4" />
                    {demo.accent}
                  </span>
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] md:text-7xl">{demo.headline}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{content.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openVoiceDemoWidget}
                    className="inline-flex h-12 items-center gap-2 rounded-[8px] px-5 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition hover:brightness-110"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {demo.primaryCta}
                  </button>
                  <a href="#experiences" className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                    {demo.secondaryCta}
                  </a>
                </div>
              </div>

              <aside className="hidden rounded-[8px] border border-white/20 bg-white/90 p-5 text-[#101917] shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur md:block">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-[8px] bg-white">
                    <img src={demo.avatarUrl} alt={demo.agentName} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm text-[#65716d]">Your guide</p>
                    <h2 className="text-2xl font-semibold" style={{ color: demo.darkColor }}>
                      {demo.agentName}
                    </h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-[#4f5d59]">{demo.greeting}</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {demo.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[8px] border border-[#dce4df] bg-white p-3">
                      <p className="text-lg font-semibold" style={{ color: demo.primaryColor }}>
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-4 text-[#65716d]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="experiences" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold" style={{ color: demo.primaryColor }}>
                Featured experiences
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight">Choose the trip that feels right before you arrive.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {content.experiences.map((experience, index) => {
                const image = demo.experiences[index]?.image || demo.galleryImages[index] || demo.heroImage;

                return (
                  <article key={experience.title} className="overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(16,25,23,0.06)]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#dde5df]">
                      <img src={image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]" />
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-[8px] text-sm font-semibold text-white" style={{ backgroundColor: index === 1 ? demo.darkColor : demo.primaryColor }}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#5c6864]">{experience.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white/60 px-6 py-16 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[8px] bg-[#101917]">
              <img src={demo.galleryImages[1] || demo.heroImage} alt="" className="h-full min-h-[420px] w-full object-cover opacity-90" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold" style={{ color: demo.primaryColor }}>
                Services
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight">Personal service for the questions guests actually ask.</h2>
              <div className="mt-8 space-y-4">
                {content.services.map((service) => (
                  <div key={service.title} className="flex gap-4 rounded-[8px] border border-black/10 bg-white p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: demo.primaryColor }} />
                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#5c6864]">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {content.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[8px] border border-black/10 bg-white p-5">
                <Plane className="h-5 w-5" style={{ color: demo.primaryColor }} />
                <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5c6864]">{benefit.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 rounded-[8px] p-6 text-white md:grid-cols-[1fr_0.55fr]" style={{ backgroundColor: demo.darkColor }}>
            <div>
              <Star className="h-6 w-6" style={{ color: demo.primaryColor }} />
              <blockquote className="mt-5 text-2xl font-medium leading-9">&ldquo;{content.testimonial.quote}&rdquo;</blockquote>
              <p className="mt-5 text-sm text-white/72">
                {content.testimonial.name} · {content.testimonial.role}
              </p>
            </div>
            <div className="rounded-[8px] bg-white/10 p-5">
              <CalendarDays className="h-5 w-5" style={{ color: demo.primaryColor }} />
              <h3 className="mt-5 text-2xl font-semibold">Ready when plans change.</h3>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Ask about timing, availability, pickup details, or special requests whenever the idea comes up.
              </p>
              <button type="button" onClick={openVoiceDemoWidget} className="mt-6 inline-flex h-11 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-semibold" style={{ color: demo.darkColor }}>
                <PhoneCall className="h-4 w-4" />
                Speak with {demo.agentName}
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/10 bg-white px-6 py-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl font-semibold">{demo.company}</p>
              <p className="mt-1 text-sm text-[#65716d]">
                {demo.category} · {demo.location}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {relatedBrands.map((brand) => (
                <Link key={brand.slug} href={`/voice-demos/${brand.slug}`} className="rounded-[8px] border border-black/10 px-3 py-2 text-sm font-semibold text-[#37413e] transition hover:bg-black/5">
                  {brand.company}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
