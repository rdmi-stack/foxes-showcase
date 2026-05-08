"use client";

import Link from "next/link";
import { Compass, MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { useWidget } from "../_lib/useWidget";

const TRIPS = [
  {
    title: "The Pharaoh's Triangle",
    days: "8 days",
    region: "Cairo · Luxor · Aswan",
    price: "$1,840",
    rating: 4.9,
    reviews: 312,
    img: "linear-gradient(135deg, #f59e0b, #b45309 60%, #78350f)",
  },
  {
    title: "White Desert Overnight",
    days: "3 days",
    region: "Bahariya Oasis",
    price: "$640",
    rating: 4.8,
    reviews: 187,
    img: "linear-gradient(135deg, #fde68a, #ca8a04 60%, #713f12)",
  },
  {
    title: "Siwa Salt Lakes Retreat",
    days: "5 days",
    region: "Siwa Oasis",
    price: "$1,120",
    rating: 4.9,
    reviews: 144,
    img: "linear-gradient(135deg, #fbbf24, #d97706 60%, #92400e)",
  },
];

const VOICES = [
  {
    quote:
      "Our guide rerouted the entire Day 4 itinerary because of a sandstorm — and we ended up at a stargazing camp instead. Still talking about it.",
    name: "Lena & Marcus",
    where: "Berlin",
  },
  {
    quote:
      "Booked the Pharaoh's Triangle nine months out and the planning support was sharper than any agent I've used. Genuinely.",
    name: "Anika P.",
    where: "Mumbai",
  },
];

export default function SaharaTrailsPage() {
  useWidget("/widget/foxes-widget.js", {
    accent: "#b45309",
    theme: "default",
    "agent-name": "Sahara Trails Concierge",
    placeholder: "Ask about routes, dates, group size…",
    position: "bottom-right",
  });

  return (
    <main className="site">
      <header className="nav">
        <div className="nav-inner">
          <Link href="/demo/showcase" className="brand">
            <span className="brand-mark">
              <Compass size={16} strokeWidth={2.4} />
            </span>
            <span>Sahara Trails</span>
          </Link>
          <nav>
            <a href="#journeys">Journeys</a>
            <a href="#approach">Our approach</a>
            <a href="#voices">Travelers</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#journeys">
            Plan a trip
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-tex" aria-hidden="true" />
        <div className="hero-inner">
          <span className="kicker">Cairo · since 2011</span>
          <h1>
            Egypt is bigger
            <br />
            than the postcards.
          </h1>
          <p>
            We take small groups — six travelers, never more — into the country we grew up in. No
            cattle-bus convoys, no scripted bazaar stops. Just routes our families have been walking
            for three generations.
          </p>
          <div className="hero-cta">
            <a className="primary" href="#journeys">
              Browse journeys <ArrowRight size={15} strokeWidth={2.6} />
            </a>
            <a className="ghost" href="#approach">
              How we plan trips
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>14 yrs</strong>
              <span>routing the Western Desert</span>
            </div>
            <span className="sep" />
            <div>
              <strong>4.9 / 5</strong>
              <span>from 1,200+ guests</span>
            </div>
          </div>
        </div>
      </section>

      <section id="journeys" className="journeys">
        <div className="band-head">
          <span className="kicker">Signature journeys</span>
          <h2>Three trips we lead every season.</h2>
          <p>
            Departures are private by default. We post the dates, you bring the people — partners,
            parents, or just yourself.
          </p>
        </div>

        <div className="trips">
          {TRIPS.map((t) => (
            <article key={t.title} className="trip">
              <div className="trip-cover" style={{ backgroundImage: t.img }}>
                <div className="trip-cover-tag">
                  <Clock size={13} strokeWidth={2.4} />
                  {t.days}
                </div>
              </div>
              <div className="trip-body">
                <div className="trip-meta">
                  <MapPin size={13} strokeWidth={2.2} />
                  {t.region}
                </div>
                <h3>{t.title}</h3>
                <div className="trip-foot">
                  <span className="rating">
                    <Star size={13} strokeWidth={2.4} fill="currentColor" />
                    {t.rating}
                    <em>({t.reviews})</em>
                  </span>
                  <span className="price">
                    {t.price} <em>per traveler</em>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="approach">
        <div className="approach-grid">
          <div className="approach-copy">
            <span className="kicker">Our approach</span>
            <h2>We answer slowly. We plan slowly. The trip is fast.</h2>
            <p>
              Most operators reply within minutes. We reply within a day, after we&apos;ve called the
              lodge in Bawiti, the cook in Aswan, and your would-be Day 5 driver. By the time you
              hear back, the trip is half-booked.
            </p>
            <p>
              You can ask anything in the chat — dates, group size, dietary needs, mobility, the
              honest trade-offs of going in August. The same person who answers there is the one
              writing your itinerary.
            </p>
          </div>
          <ul className="approach-list">
            {[
              "Six travelers max, every departure",
              "All guides hold an Egyptian Tourism Authority license",
              "We carry sat phones in remote desert sectors",
              "Cancellation refunds up to 21 days before departure",
              "No tipping pressure, no shop commissions, ever",
            ].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="voices" className="voices">
        <span className="kicker">Travelers</span>
        <h2>What people write us afterwards.</h2>
        <div className="voices-grid">
          {VOICES.map((v) => (
            <blockquote key={v.name}>
              <p>“{v.quote}”</p>
              <footer>
                <strong>{v.name}</strong>
                <span>{v.where}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="cta-card">
          <div>
            <h2>Got a trip in mind?</h2>
            <p>
              Use the chat in the corner. Tell us when you&apos;d like to go and what you&apos;d skip if you
              had to — we&apos;ll send a draft itinerary within 24 hours.
            </p>
          </div>
          <a className="primary lg" href="#journeys">
            Start with a journey <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      <footer className="foot">
        <div className="foot-inner">
          <div className="brand small">
            <span className="brand-mark">
              <Compass size={14} strokeWidth={2.4} />
            </span>
            <span>Sahara Trails</span>
          </div>
          <span>© {new Date().getFullYear()} Sahara Trails LLC · Cairo</span>
          <div className="foot-links">
            <a href="#">Operating licenses</a>
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
    background: #fbf7f1;
    color: #2a1f15;
    font-family: 'Cormorant Garamond', 'Times New Roman', Georgia, serif;
  }
  .site h1, .site h2, .site h3 {
    font-family: inherit;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #1f1610;
  }
  .nav {
    position: sticky;
    top: 0;
    z-index: 30;
    background: rgba(251, 247, 241, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #ebe1d2;
  }
  .nav-inner {
    max-width: 1180px;
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
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
    color: #1f1610;
    letter-spacing: 0;
  }
  .brand-mark {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d97706, #92400e);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .brand.small { font-size: 16px; }
  .nav nav {
    display: flex;
    gap: 24px;
    margin-left: 12px;
  }
  .nav nav a {
    color: #5a4732;
    text-decoration: none;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 13.5px;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  .nav nav a:hover { color: #1f1610; }
  .nav-cta {
    margin-left: auto;
    padding: 9px 16px;
    border-radius: 999px;
    background: #1f1610;
    color: #fbf7f1;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
  }
  .nav-cta:hover { background: #2a1f15; }

  .kicker {
    display: inline-block;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 11.5px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #b45309;
    margin-bottom: 14px;
  }

  .hero {
    position: relative;
    padding: 100px 28px 130px;
    max-width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }
  .hero-tex {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 80% 30%, rgba(217, 119, 6, 0.18), transparent 55%),
      radial-gradient(ellipse at 10% 80%, rgba(180, 83, 9, 0.12), transparent 50%);
    pointer-events: none;
  }
  .hero-inner {
    position: relative;
    max-width: 720px;
  }
  h1 {
    font-size: clamp(48px, 7.4vw, 92px);
    line-height: 0.96;
    margin: 0;
  }
  .hero p {
    margin: 28px 0 0;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    line-height: 1.75;
    max-width: 560px;
    color: #4a3a28;
  }
  .hero-cta {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }
  .primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #1f1610;
    color: #fbf7f1;
    padding: 13px 22px;
    border-radius: 999px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-decoration: none;
    font-size: 14.5px;
    transition: transform 0.18s, background 0.18s;
  }
  .primary:hover { transform: translateY(-1px); background: #b45309; }
  .primary.lg { padding: 15px 26px; font-size: 15px; }
  .ghost {
    color: #1f1610;
    text-decoration: underline;
    text-decoration-color: rgba(180, 83, 9, 0.35);
    text-underline-offset: 4px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 6px;
  }
  .hero-stats {
    margin-top: 56px;
    display: inline-flex;
    align-items: center;
    gap: 28px;
    padding: 18px 26px;
    border: 1px solid #ebe1d2;
    background: rgba(255, 255, 255, 0.55);
    border-radius: 14px;
    backdrop-filter: blur(4px);
  }
  .hero-stats strong {
    display: block;
    font-family: inherit;
    font-size: 22px;
    font-weight: 700;
    color: #1f1610;
  }
  .hero-stats span {
    font-family: 'Inter', sans-serif;
    font-size: 12.5px;
    color: #6b513a;
  }
  .sep {
    width: 1px;
    height: 36px;
    background: #d8c8ad;
  }

  .journeys, .approach, .voices, .cta {
    max-width: 1180px;
    margin: 0 auto;
    padding: 100px 28px;
  }
  .journeys { padding-top: 60px; }
  .band-head { max-width: 620px; margin-bottom: 48px; }
  h2 {
    font-size: clamp(34px, 4.4vw, 54px);
    line-height: 1.05;
    margin: 0;
  }
  .band-head p {
    margin-top: 18px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: #4a3a28;
  }
  .trips {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }
  .trip {
    background: #fff;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid #ebe1d2;
    box-shadow: 0 6px 22px rgba(120, 80, 30, 0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .trip:hover { transform: translateY(-4px); box-shadow: 0 14px 38px rgba(120, 80, 30, 0.12); }
  .trip-cover {
    height: 220px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .trip-cover-tag {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(31, 22, 16, 0.78);
    color: #fff;
    padding: 6px 11px;
    border-radius: 999px;
    font-family: 'Inter', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .trip-body { padding: 22px 24px 24px; }
  .trip-meta {
    font-family: 'Inter', sans-serif;
    font-size: 12.5px;
    color: #6b513a;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .trip h3 {
    margin: 8px 0 18px;
    font-size: 24px;
    font-weight: 700;
  }
  .trip-foot {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid #ebe1d2;
    padding-top: 14px;
    font-family: 'Inter', sans-serif;
  }
  .rating {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #b45309;
    font-weight: 700;
    font-size: 13.5px;
  }
  .rating em {
    font-style: normal;
    color: #6b513a;
    font-weight: 500;
    margin-left: 2px;
  }
  .price {
    font-family: inherit;
    font-size: 19px;
    font-weight: 700;
    color: #1f1610;
  }
  .price em {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 11.5px;
    font-weight: 500;
    color: #6b513a;
    margin-left: 4px;
  }

  .approach { background: #f3ead9; padding-block: 110px; max-width: none; }
  .approach-grid {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 28px;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 64px;
    align-items: start;
  }
  .approach-copy h2 { margin-bottom: 22px; }
  .approach-copy p {
    margin-top: 0;
    margin-bottom: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    color: #4a3a28;
  }
  .approach-list {
    list-style: none;
    padding: 0;
    margin: 24px 0 0;
    border-top: 1px solid #d8c8ad;
  }
  .approach-list li {
    padding: 16px 0;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #2a1f15;
    border-bottom: 1px solid #d8c8ad;
    position: relative;
    padding-left: 30px;
  }
  .approach-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #b45309;
    font-weight: 700;
  }

  .voices { padding-bottom: 60px; }
  .voices-grid {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }
  blockquote {
    margin: 0;
    padding: 36px 32px;
    background: #fff;
    border-radius: 18px;
    border: 1px solid #ebe1d2;
  }
  blockquote p {
    margin: 0 0 22px;
    font-size: 22px;
    line-height: 1.45;
    color: #1f1610;
  }
  blockquote footer {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  blockquote footer strong {
    font-size: 14px;
    color: #1f1610;
  }
  blockquote footer span {
    font-size: 12.5px;
    color: #6b513a;
  }

  .cta { padding-top: 60px; }
  .cta-card {
    background: #1f1610;
    color: #fbf7f1;
    border-radius: 24px;
    padding: 56px;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, auto);
    gap: 40px;
    align-items: center;
  }
  .cta-card h2 { color: #fbf7f1; }
  .cta-card p {
    margin-top: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 15.5px;
    line-height: 1.7;
    max-width: 520px;
    color: rgba(251, 247, 241, 0.78);
  }

  .foot {
    border-top: 1px solid #ebe1d2;
    padding: 24px 0 40px;
  }
  .foot-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    font-family: 'Inter', sans-serif;
    color: #6b513a;
    font-size: 13px;
  }
  .foot-links {
    margin-left: auto;
    display: flex;
    gap: 22px;
  }
  .foot-links a {
    color: inherit;
    text-decoration: none;
  }
  .foot-links a:hover { color: #1f1610; }

  @media (max-width: 880px) {
    .nav nav { display: none; }
    .trips { grid-template-columns: 1fr; }
    .approach-grid, .voices-grid, .cta-card { grid-template-columns: 1fr; gap: 32px; padding-block: 56px; }
    .hero { padding: 60px 24px 80px; }
    .approach { padding-block: 70px; }
    .journeys, .voices { padding-block: 60px; }
    .cta-card { padding: 36px; }
  }
`;
