import { LiveDemoWidget } from "./widget";

export const metadata = {
  title: "Live Widget Demo · Sky Resort & Spa",
  description: "Real customer website mock-up with a live embedded Foxes voice widget. The widget loads via the same /widget.js script that real customer sites use.",
};

// This page intentionally looks like a real hospitality site (Sky Resort & Spa).
// The Foxes voice widget is embedded the same way a real customer would do it —
// via the public /widget.js loader pointing at a widgetId. We're testing the
// real embed flow, not a React-component import.
export default function LiveDemoPage() {
  return (
    <main className="bg-[#fdf7f1] text-[#2f2c29]">
      {/* Mock customer-site hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#b17142] via-[#a8623a] to-[#8a4f2c] pt-24 pb-32 text-white">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-300/20 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange-400/15 blur-[160px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#b17142] font-bold">S</div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/80">SKY RESORT &amp; SPA</p>
              <p className="text-xs text-white/60">Cairo · Sharm El Sheikh · Hurghada</p>
            </div>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">A Foxes Showcase</p>
          <h1 className="mb-6 max-w-3xl text-5xl font-normal leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Welcome to your Egyptian escape.
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-white/85">
            This is a fictional resort website used to test the Foxes voice widget end-to-end. The widget at the bottom-right is embedded
            the same way a real customer site would do it — via a single <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-white/90">{"<script src=\".../widget.js\">"}</code> tag.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#rooms"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f2c29] shadow-md transition hover:brightness-105"
            >
              Browse rooms
            </a>
            <a
              href="#concierge"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Talk to Emma →
            </a>
          </div>
        </div>
      </section>

      {/* Mock rooms grid */}
      <section id="rooms" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b17142]">Stay with us</p>
        <h2 className="mb-3 text-3xl font-normal tracking-[-0.02em] text-[#2f2c29] sm:text-4xl">Featured suites</h2>
        <p className="mb-10 max-w-2xl text-lg text-[#6f6962]">
          Three rooms picked by our concierge team. Try asking Emma about availability — she has access to live inventory through the agent&apos;s knowledge base.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Pyramid Suite", price: "$420", desc: "Private terrace facing the Giza plateau, marble bath, sunrise breakfast included." },
            { name: "Nile View King", price: "$310", desc: "Floor-to-ceiling windows over the Nile, complimentary felucca ride at sunset." },
            { name: "Red Sea Villa", price: "$580", desc: "Two-bedroom beachfront villa with plunge pool, dedicated host, and snorkel kit." },
          ].map((r) => (
            <article
              key={r.name}
              className="rounded-3xl border border-[#e8d6c4] bg-white p-6 transition hover:border-[#b17142]/40 hover:shadow-[0_8px_30px_rgba(177,113,66,0.08)]"
            >
              <div className="mb-4 aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#fdf7f1] via-[#f0e1d0] to-[#e8d6c4]" />
              <h3 className="mb-1 text-xl font-semibold text-[#2f2c29]">{r.name}</h3>
              <p className="mb-4 text-sm text-[#6f6962]">{r.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#b17142]">{r.price}<span className="text-sm font-normal text-[#9c8878]">/night</span></span>
                <button className="rounded-full bg-[#fdf7f1] px-4 py-2 text-sm font-semibold text-[#3d362e] transition hover:bg-white hover:shadow">
                  Book
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Concierge prompt */}
      <section id="concierge" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b17142]">24/7 concierge</p>
          <h2 className="mb-4 text-3xl font-normal tracking-[-0.02em] text-[#2f2c29] sm:text-4xl">
            Try our voice concierge — she&apos;s in the corner.
          </h2>
          <p className="mb-8 text-lg text-[#6f6962]">
            Click the floating widget at the bottom-right of this page. Ask about rooms, restaurants, transfers, or activities — Emma will respond with real audio
            generated by ElevenLabs Flash v2.5 routing through the same <code className="rounded bg-[#fdf7f1] px-1.5 py-0.5 font-mono text-sm">/api/voice/chat-stream</code> endpoint
            production customers use.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e8d6c4] bg-[#fdf7f1] px-5 py-2 text-sm font-medium text-[#3d362e]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Widget connected to <span className="font-mono">localhost:5050</span>
          </div>
        </div>
      </section>

      {/* This is the actual embed — single component, drops the loader on the page */}
      <LiveDemoWidget />
    </main>
  );
}
