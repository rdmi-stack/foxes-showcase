import Link from "next/link";
import { ArrowRight, Compass, Hotel, MapPin, PlaneTakeoff, Star, Waves } from "lucide-react";
import { VOICE_TENANT_DEMOS } from "./data";

const brandDetails = {
  "qasr-al-noor-resort": {
    icon: Hotel,
    tone: "Private shoreline stays",
    promise: "Suite stays, spa rituals, dining reservations, and quiet arrival planning for guests moving through Dubai.",
    imagePosition: "center",
  },
  "red-sea-trails": {
    icon: Waves,
    tone: "Red Sea excursions",
    promise: "Boat days, snorkeling routes, desert evenings, family pickups, and private charters around Hurghada.",
    imagePosition: "center",
  },
  "majlis-journeys": {
    icon: PlaneTakeoff,
    tone: "GCC travel planning",
    promise: "City breaks, family itineraries, cultural preferences, transfers, and regional travel desks across MENA.",
    imagePosition: "center",
  },
};

export default function VoiceDemosPage() {
  const featuredBrand = VOICE_TENANT_DEMOS[0];

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#151817]">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#151817] pt-16 text-white">
        <img src={featuredBrand.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.72]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,18,17,0.88),rgba(12,18,17,0.58)_42%,rgba(12,18,17,0.24)_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(78vh-4rem)] max-w-7xl flex-col justify-end px-6 pb-10 pt-24 lg:px-10">
          <div className="max-w-3xl pb-8">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/18 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
              <Compass className="h-4 w-4 text-[#c7f0dd]" />
              Hospitality collection
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Three hospitality brands, ready to welcome the next guest.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Choose a refined resort, a Red Sea excursion house, or a regional journey desk. Each brand has its own
              rhythm, setting, and way of caring for guests.
            </p>
          </div>

          <div className="grid gap-3 border-t border-white/16 pt-5 text-sm text-white/82 md:grid-cols-3">
            {VOICE_TENANT_DEMOS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/voice-demos/${brand.slug}`}
                className="group flex items-center justify-between gap-4 rounded-[8px] border border-white/14 bg-white/9 p-4 backdrop-blur transition hover:bg-white/14"
              >
                <span>
                  <span className="block font-semibold text-white">{brand.company}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-white/68">
                    <MapPin className="h-3.5 w-3.5" />
                    {brand.location}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#68706b]">Featured brands</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#151817] md:text-5xl">
              Landing pages with place, persona, and voice.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#5d6762]">
            Browse polished travel experiences spanning luxury stays, coastal adventure, and regional trip design.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {VOICE_TENANT_DEMOS.map((brand) => {
            const detail = brandDetails[brand.slug as keyof typeof brandDetails];
            const Icon = detail.icon;

            return (
              <Link
                key={brand.slug}
                href={`/voice-demos/${brand.slug}`}
                className="group overflow-hidden rounded-[8px] border border-[#dce3de] bg-white shadow-[0_18px_60px_rgba(21,24,23,0.07)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(21,24,23,0.13)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#dfe7e9]">
                  <img
                    src={brand.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.045]"
                    style={{ objectPosition: detail.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.64))]" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-[8px] bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#151817]">
                    <Icon className="h-4 w-4" style={{ color: brand.primaryColor }} />
                    {brand.category}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="flex items-center gap-1.5 text-sm text-white/76">
                      <MapPin className="h-4 w-4" />
                      {brand.location}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold leading-tight">{brand.company}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#69736e]">{detail.tone}</p>
                      <p className="mt-2 text-lg font-semibold leading-7 text-[#151817]">{brand.headline}</p>
                    </div>
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] text-white" style={{ backgroundColor: brand.primaryColor }}>
                      <Star className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-4 min-h-[96px] text-sm leading-6 text-[#5c6661]">{detail.promise}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#e5ebe7] pt-4">
                    <span className="text-sm font-semibold text-[#151817]">Visit {brand.company}</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] text-white transition group-hover:translate-x-1" style={{ backgroundColor: brand.primaryColor }}>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
