"use client";

import Link from "next/link";
import {
  Search,
  Globe,
  ShieldCheck,
  Headphones,
  Tag,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { useWidget } from "../_lib/useWidget";

const FEATURED = [
  {
    place: "Hurghada",
    country: "Egypt",
    img: "linear-gradient(135deg, #06b6d4, #0e7490)",
    tours: "412 tours",
  },
  {
    place: "Petra",
    country: "Jordan",
    img: "linear-gradient(135deg, #a855f7, #6d28d9)",
    tours: "138 tours",
  },
  {
    place: "Marrakech",
    country: "Morocco",
    img: "linear-gradient(135deg, #f97316, #c2410c)",
    tours: "284 tours",
  },
  {
    place: "Cappadocia",
    country: "Türkiye",
    img: "linear-gradient(135deg, #ec4899, #9d174d)",
    tours: "203 tours",
  },
  {
    place: "Santorini",
    country: "Greece",
    img: "linear-gradient(135deg, #3b82f6, #1e40af)",
    tours: "176 tours",
  },
  {
    place: "Lisbon",
    country: "Portugal",
    img: "linear-gradient(135deg, #14b8a6, #115e59)",
    tours: "229 tours",
  },
];

const VALUE = [
  {
    icon: Globe,
    title: "12,400 verified operators",
    body: "Every listing comes from a licensed, insured operator we've onboarded directly.",
  },
  {
    icon: ShieldCheck,
    title: "Trip Protection on every booking",
    body: "Free 24h cancellation, weather rebooking, and a refund guarantee on cancelled tours.",
  },
  {
    icon: Headphones,
    title: "Real humans, 24/7",
    body: "If a tour is cancelled at 11pm in Tashkent, the same person who booked it picks up.",
  },
  {
    icon: Tag,
    title: "One price, no surprises",
    body: "Taxes, fuel surcharges and gratuity guidelines are surfaced before you check out.",
  },
];

const POPULAR = [
  "Pyramids sunrise tour",
  "Petra by candlelight",
  "Hot air balloon Cappadocia",
  "Atlas Mountains day trip",
  "Santorini sunset cruise",
];

export default function WanderhubPage() {
  useWidget("/widget/foxes-search-widget.js", {
    accent: "#2563eb",
    "agent-name": "Wanderhub Search",
    placeholder: "Where are you going?",
  });

  return (
    <main className="site">
      <header className="nav">
        <div className="nav-inner">
          <Link href="/demo/showcase" className="brand">
            <span className="brand-mark">W</span>
            <span>Wanderhub</span>
          </Link>
          <nav>
            <a href="#destinations">Destinations</a>
            <a href="#promise">Why Wanderhub</a>
            <a href="#operators">For operators</a>
          </nav>
          <div className="nav-cta-group">
            <a className="ghost" href="#">
              Sign in
            </a>
            <a className="primary" href="#">
              Get the app
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <span className="hero-orb a" aria-hidden="true" />
        <span className="hero-orb b" aria-hidden="true" />
        <div className="hero-inner">
          <span className="kicker">12,400 operators · 87 countries · 1.2M trips booked</span>
          <h1>
            Find the trip.
            <br />
            <span className="grad">Skip everything else.</span>
          </h1>
          <p>
            Search every operator in one place. Compare actual prices and actual reviews. Pay
            once. Wanderhub handles the rest.
          </p>

          <div className="search-mount">
            <div id="foxes-search-shell">
              <div className="search-fallback">
                <Search size={20} strokeWidth={2.2} className="sf-icon" />
                <input
                  type="text"
                  placeholder="Where are you going? Try ‘Cairo for 5 days under $1,200’"
                  aria-label="Search destinations"
                />
                <button>Search</button>
              </div>
            </div>
            <div className="search-popular">
              <span>Popular:</span>
              {POPULAR.map((p) => (
                <a key={p} href="#" data-prompt={p}>
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="band">
        <div className="band-head">
          <div>
            <span className="kicker">Where people are going</span>
            <h2>Destinations trending this week.</h2>
          </div>
          <a className="band-link" href="#">
            All destinations <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
        </div>
        <div className="dest-grid">
          {FEATURED.map((d) => (
            <a key={d.place} className="dest" href="#">
              <div className="dest-cover" style={{ backgroundImage: d.img }}>
                <div className="dest-tours">{d.tours}</div>
              </div>
              <div className="dest-body">
                <strong>{d.place}</strong>
                <span>{d.country}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="promise" className="promise">
        <div className="promise-inner">
          <div className="promise-head">
            <span className="kicker light">The Wanderhub promise</span>
            <h2>Booking a trip should feel like booking a cab.</h2>
            <p>
              We built Wanderhub because the booking flow for a $40 walking tour shouldn&apos;t take
              forty minutes. Open a search, pick a tour, pay, go. Then if anything breaks, we fix
              it.
            </p>
          </div>
          <div className="value">
            {VALUE.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="value-card">
                  <div className="value-icon">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <strong>{v.title}</strong>
                  <p>{v.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band testimonials">
        <div className="band-head">
          <div>
            <span className="kicker">From travelers</span>
            <h2>4.8 average across 218,400 reviews.</h2>
          </div>
        </div>
        <div className="reviews">
          {[
            {
              quote:
                "Found a private felucca dinner cruise on the Nile that wasn't anywhere else online. Three taps to book.",
              name: "Priya R.",
            },
            {
              quote:
                "Operator was running 40 minutes late. Wanderhub had a refund processing before I'd even called.",
              name: "Sam K.",
            },
            {
              quote:
                "I usually compare three sites for tours. Stopped doing that around February.",
              name: "Marie L.",
            },
          ].map((r) => (
            <article key={r.name} className="review">
              <div className="review-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} strokeWidth={0} fill="#f59e0b" />
                ))}
              </div>
              <p>“{r.quote}”</p>
              <span>— {r.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="operators" className="cta">
        <div className="cta-card">
          <div>
            <span className="kicker light">For operators</span>
            <h2>List your tour in 90 seconds.</h2>
            <p>
              Live inventory, automatic payouts in 12 currencies, fraud protection. Onboarding is
              guided — and free until your first booking clears.
            </p>
          </div>
          <a className="primary lg" href="#">
            Get a partner account <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
        </div>
      </section>

      <footer className="foot">
        <div className="foot-inner">
          <div className="brand">
            <span className="brand-mark">W</span>
            <span>Wanderhub</span>
          </div>
          <span>© {new Date().getFullYear()} Wanderhub Travel BV · Amsterdam</span>
          <div className="foot-links">
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
  .site {
    min-height: 100vh;
    background: #f9fafb;
    color: #111827;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  .nav {
    position: sticky;
    top: 0;
    z-index: 30;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid #e5e7eb;
  }
  .nav-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 16px 28px;
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    font-size: 18px;
    text-decoration: none;
    color: #111827;
    letter-spacing: -0.02em;
  }
  .brand-mark {
    width: 32px;
    height: 32px;
    border-radius: 9px;
    background: linear-gradient(135deg, #2563eb, #1e40af);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
  }
  .nav nav {
    display: flex;
    gap: 24px;
    margin-left: 12px;
  }
  .nav nav a {
    color: #4b5563;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
  .nav nav a:hover { color: #111827; }
  .nav-cta-group {
    margin-left: auto;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .ghost {
    color: #111827;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 12px;
  }
  .primary {
    background: #111827;
    color: #fff;
    border: 0;
    padding: 10px 16px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.18s, transform 0.18s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .primary:hover { background: #2563eb; transform: translateY(-1px); }
  .primary.lg { padding: 14px 22px; font-size: 15px; border-radius: 12px; }

  .kicker {
    display: inline-block;
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #2563eb;
    margin-bottom: 16px;
  }
  .kicker.light { color: #93c5fd; }

  .hero {
    position: relative;
    padding: 80px 28px 100px;
    max-width: 1240px;
    margin: 0 auto;
    overflow: hidden;
  }
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: -1;
  }
  .hero-orb.a {
    top: -10%;
    left: -8%;
    width: 460px;
    height: 460px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.25), transparent 60%);
  }
  .hero-orb.b {
    top: 20%;
    right: -8%;
    width: 380px;
    height: 380px;
    background: radial-gradient(circle, rgba(20, 184, 166, 0.25), transparent 60%);
  }
  .hero-inner { max-width: 880px; margin: 0 auto; text-align: center; }
  h1 {
    margin: 0;
    font-size: clamp(46px, 7.4vw, 90px);
    line-height: 0.98;
    font-weight: 900;
    letter-spacing: -0.035em;
    color: #0f172a;
  }
  .grad {
    background: linear-gradient(135deg, #2563eb 10%, #06b6d4 60%, #14b8a6);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero p {
    margin: 26px auto 0;
    font-size: 18px;
    line-height: 1.65;
    color: #4b5563;
    max-width: 560px;
  }

  .search-mount {
    margin-top: 44px;
  }
  #foxes-search-shell {
    min-height: 64px;
  }
  .search-fallback {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    padding: 10px 12px 10px 22px;
    border-radius: 999px;
    box-shadow: 0 18px 50px rgba(15, 23, 42, 0.1), 0 1px 0 rgba(15, 23, 42, 0.04);
    border: 1px solid #e5e7eb;
    max-width: 720px;
    margin: 0 auto;
  }
  .sf-icon { color: #2563eb; flex-shrink: 0; }
  .search-fallback input {
    flex: 1;
    border: 0;
    outline: none;
    font-size: 16px;
    color: #111827;
    background: transparent;
    padding: 14px 0;
    min-width: 0;
  }
  .search-fallback input::placeholder { color: #9ca3af; }
  .search-fallback button {
    background: #111827;
    color: #fff;
    border: 0;
    border-radius: 999px;
    padding: 12px 22px;
    font-weight: 700;
    cursor: pointer;
    flex-shrink: 0;
  }
  .search-popular {
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    justify-content: center;
    font-size: 13px;
    color: #6b7280;
  }
  .search-popular a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
  }
  .search-popular a:hover { text-decoration: underline; }

  .band {
    max-width: 1240px;
    margin: 0 auto;
    padding: 80px 28px;
  }
  .band-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }
  h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 48px);
    line-height: 1.05;
    font-weight: 900;
    letter-spacing: -0.025em;
    color: #0f172a;
  }
  .band-link {
    color: #2563eb;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .band-link:hover { text-decoration: underline; }

  .dest-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .dest {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    text-decoration: none;
    color: inherit;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .dest:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.1);
  }
  .dest-cover {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .dest-tours {
    position: absolute;
    bottom: 14px;
    left: 14px;
    background: rgba(15, 23, 42, 0.74);
    color: #fff;
    padding: 5px 11px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 700;
  }
  .dest-body {
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .dest-body strong {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.01em;
  }
  .dest-body span { font-size: 13px; color: #6b7280; }

  .promise {
    background: #0f172a;
    color: #e2e8f0;
    padding: 100px 28px;
  }
  .promise-inner { max-width: 1240px; margin: 0 auto; }
  .promise-head { max-width: 720px; margin: 0 auto 56px; text-align: center; }
  .promise-head h2 { color: #f8fafc; }
  .promise-head p {
    margin-top: 18px;
    color: #94a3b8;
    font-size: 17px;
    line-height: 1.7;
  }
  .value {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }
  .value-card {
    padding: 28px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }
  .value-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(37, 99, 235, 0.18);
    color: #93c5fd;
    border: 1px solid rgba(37, 99, 235, 0.3);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }
  .value-card strong {
    display: block;
    color: #f8fafc;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-bottom: 8px;
  }
  .value-card p {
    margin: 0;
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.6;
  }

  .testimonials .reviews {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .review {
    background: #fff;
    padding: 26px;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
  }
  .review-stars {
    display: flex;
    gap: 2px;
    margin-bottom: 14px;
  }
  .review p {
    margin: 0 0 16px;
    color: #111827;
    line-height: 1.55;
    font-size: 15px;
  }
  .review span {
    font-size: 13px;
    color: #6b7280;
    font-weight: 600;
  }

  .cta { padding: 60px 28px 100px; max-width: 1240px; margin: 0 auto; }
  .cta-card {
    background: linear-gradient(135deg, #1e3a8a, #2563eb);
    border-radius: 24px;
    padding: 56px;
    color: #fff;
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) auto;
    gap: 36px;
    align-items: center;
  }
  .cta-card h2 { color: #fff; }
  .cta-card p {
    margin-top: 14px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 16px;
    line-height: 1.7;
    max-width: 520px;
  }
  .cta-card .primary {
    background: #fff;
    color: #1e3a8a;
  }
  .cta-card .primary:hover { background: #f0f9ff; transform: translateY(-1px); }

  .foot {
    border-top: 1px solid #e5e7eb;
    padding: 28px 28px 50px;
  }
  .foot-inner {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    color: #6b7280;
    font-size: 13px;
  }
  .foot-links {
    margin-left: auto;
    display: flex;
    gap: 22px;
  }
  .foot-links a { color: inherit; text-decoration: none; }
  .foot-links a:hover { color: #111827; }

  @media (max-width: 900px) {
    .nav nav, .nav-cta-group .ghost { display: none; }
    .dest-grid, .value, .testimonials .reviews { grid-template-columns: 1fr 1fr; }
    .cta-card { grid-template-columns: 1fr; padding: 36px; }
  }
  @media (max-width: 600px) {
    .dest-grid, .value, .testimonials .reviews { grid-template-columns: 1fr; }
    .hero { padding: 50px 20px 70px; }
    .promise, .band { padding: 60px 20px; }
  }
`;
