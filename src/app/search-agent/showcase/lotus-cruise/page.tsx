"use client";

import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  CalendarDays,
  Languages,
  ShieldCheck,
  Heart,
  Share2,
  ChevronRight,
} from "lucide-react";
import { useWidget } from "../_lib/useWidget";

const ITINERARY = [
  {
    day: "Day 1",
    title: "Embark in Luxor",
    body: "Arrive at the Lotus terminal by 2pm. Welcome cocktail on the upper deck as we cast off toward Esna.",
  },
  {
    day: "Day 2",
    title: "Edfu & Kom Ombo",
    body: "Two private temple visits with Dr. Yasmine Hosny, our resident Egyptologist. Late lunch on the sun deck.",
  },
  {
    day: "Day 3",
    title: "Crocodile Museum & Aswan arrival",
    body: "Afternoon felucca sail around Elephantine Island. Optional Nubian dinner ashore.",
  },
  {
    day: "Day 4",
    title: "Abu Simbel sunrise",
    body: "Charter flight from Aswan at 5am. Back aboard for lunch and an afternoon at the Philae Temple.",
  },
  {
    day: "Day 5",
    title: "Disembark in Aswan",
    body: "Final breakfast served until 10am. Transfers to airport or onward hotel included.",
  },
];

const HIGHLIGHTS = [
  "Twenty staterooms — never more than 40 guests aboard",
  "Two restaurants, one gold-leaf dining room reserved for dinner",
  "Resident Egyptologist on every sailing",
  "Spa, hammam, and a small heated pool with Nile views",
];

export default function LotusCruisePage() {
  useWidget("/widget/foxes-inline-chat.js", {
    container: "lotus-chat-mount",
    accent: "#0e7490",
    "agent-name": "Lotus Concierge",
    placeholder: "Ask about cabins, dates, dietary needs…",
  });

  return (
    <main className="site">
      <header className="nav">
        <div className="nav-inner">
          <Link href="/demo/showcase" className="brand">
            <span className="brand-mark">L</span>
            <span>Lotus Royale</span>
          </Link>
          <nav>
            <a href="#">Fleet</a>
            <a href="#">Itineraries</a>
            <a href="#">Onboard</a>
            <a href="#">Press</a>
          </nav>
          <a className="nav-cta" href="#book">
            Reserve cabin
          </a>
        </div>
      </header>

      <nav className="crumbs">
        <a href="#">Egypt</a>
        <ChevronRight size={13} strokeWidth={2.4} />
        <a href="#">Nile cruises</a>
        <ChevronRight size={13} strokeWidth={2.4} />
        <span>The Lotus Royale · 5 days</span>
      </nav>

      <section className="hero">
        <div className="hero-cover" />
        <div className="hero-meta">
          <span className="kicker">Luxor → Aswan · 5 days, 4 nights</span>
          <h1>The Lotus Royale</h1>
          <div className="rating-row">
            <span className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} strokeWidth={0} fill="#0e7490" />
              ))}
            </span>
            <strong>4.9</strong>
            <em>· 412 reviews</em>
            <span className="dot" />
            <em>Operated by Lotus Cruises since 2018</em>
          </div>
          <div className="actions">
            <button className="icon-btn" aria-label="Save">
              <Heart size={16} strokeWidth={2.2} /> Save
            </button>
            <button className="icon-btn" aria-label="Share">
              <Share2 size={16} strokeWidth={2.2} /> Share
            </button>
          </div>
        </div>
      </section>

      <section className="layout">
        <div className="primary-col">
          <div className="quick-facts">
            {[
              { icon: Clock, label: "5 days · 4 nights" },
              { icon: Users, label: "Max 40 guests" },
              { icon: Languages, label: "EN · FR · DE · AR" },
              { icon: ShieldCheck, label: "Free cancel up to 21 days" },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="fact">
                  <Icon size={15} strokeWidth={2.2} />
                  <span>{f.label}</span>
                </div>
              );
            })}
          </div>

          <section className="prose">
            <h2>An old route, done properly.</h2>
            <p>
              The Lotus Royale was a 1923 dahabiyeh hull rebuilt over four years in Cairo&apos;s Nuweiba
              shipyard. It sleeps forty guests across twenty staterooms, each with floor-to-ceiling
              windows and a private terrace. We sail Luxor to Aswan and back, no longer than five
              days, because that&apos;s how long the river is interesting.
            </p>
            <p>
              You&apos;ll meet Dr. Yasmine, our resident Egyptologist, at lunch on the first day. She
              joins every excursion. There is no public address system — she finds you when she
              needs you.
            </p>
          </section>

          <section className="prose">
            <h2>Highlights</h2>
            <ul className="highlights">
              {HIGHLIGHTS.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>

          <section className="itinerary">
            <h2>Itinerary</h2>
            {ITINERARY.map((d) => (
              <article key={d.day} className="day">
                <div className="day-side">
                  <span className="day-num">{d.day}</span>
                </div>
                <div className="day-body">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="ask-block" id="ask">
            <div className="ask-head">
              <div>
                <span className="kicker">Ask the concierge</span>
                <h2>Got a question before you book?</h2>
                <p>
                  Our concierge is online now. Ask about specific cabin layouts, dietary requests,
                  travel insurance, or what to pack for a March sailing.
                </p>
              </div>
            </div>
            <div id="lotus-chat-mount" className="ask-mount">
              <div className="ask-fallback">Loading concierge…</div>
            </div>
          </section>
        </div>

        <aside className="book-card" id="book">
          <div className="book-price">
            <span>From</span>
            <strong>$3,180</strong>
            <em>per guest, double occupancy</em>
          </div>
          <div className="book-rating">
            <Star size={14} fill="#0e7490" strokeWidth={0} />
            <strong>4.9</strong>
            <span>· 412 reviews</span>
          </div>
          <div className="book-field">
            <label>Date</label>
            <select defaultValue="2026-05-12">
              <option value="2026-05-12">12 May 2026 · 4 cabins left</option>
              <option value="2026-05-26">26 May 2026 · 7 cabins left</option>
              <option value="2026-06-09">9 Jun 2026 · 11 cabins left</option>
              <option value="2026-09-22">22 Sep 2026 · 12 cabins left</option>
            </select>
          </div>
          <div className="book-field">
            <label>Guests</label>
            <select defaultValue="2">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select>
          </div>
          <div className="book-field">
            <label>Cabin</label>
            <select defaultValue="deluxe">
              <option value="standard">Standard stateroom · $3,180</option>
              <option value="deluxe">Deluxe terrace · $3,840</option>
              <option value="suite">Royal suite · $5,200</option>
            </select>
          </div>
          <button className="book-cta">Reserve cabin</button>
          <div className="book-foot">
            <CalendarDays size={13} strokeWidth={2.2} />
            <span>Free cancellation until 21 April 2026</span>
          </div>
          <div className="book-foot">
            <ShieldCheck size={13} strokeWidth={2.2} />
            <span>Lotus Trust · 100% refund if cruise is cancelled</span>
          </div>
        </aside>
      </section>

      <footer className="foot">
        <div className="foot-inner">
          <div className="brand">
            <span className="brand-mark">L</span>
            <span>Lotus Royale Cruises</span>
          </div>
          <span>© {new Date().getFullYear()} Lotus Royale · Cairo</span>
        </div>
      </footer>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
  .site {
    min-height: 100vh;
    background: #fafaf7;
    color: #111827;
    font-family: 'Inter', system-ui, sans-serif;
  }
  .nav {
    position: sticky;
    top: 0;
    z-index: 30;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #e5e7eb;
  }
  .nav-inner {
    max-width: 1200px;
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
    font-size: 17px;
    text-decoration: none;
    color: #0f172a;
    letter-spacing: -0.01em;
  }
  .brand-mark {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0891b2, #0e7490);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 14px;
  }
  .nav nav { display: flex; gap: 22px; margin-left: 12px; }
  .nav nav a {
    color: #4b5563;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
  .nav nav a:hover { color: #0f172a; }
  .nav-cta {
    margin-left: auto;
    background: #0f172a;
    color: #fff;
    padding: 9px 16px;
    border-radius: 8px;
    font-size: 13.5px;
    font-weight: 700;
    text-decoration: none;
  }
  .nav-cta:hover { background: #0e7490; }

  .crumbs {
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 28px 0;
    font-size: 12.5px;
    color: #6b7280;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .crumbs a { color: #4b5563; text-decoration: none; }
  .crumbs a:hover { text-decoration: underline; }
  .crumbs span:last-child { color: #0f172a; font-weight: 600; }

  .hero {
    max-width: 1200px;
    margin: 18px auto 0;
    padding: 0 28px;
  }
  .hero-cover {
    height: 460px;
    border-radius: 22px;
    background:
      radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.18), transparent 60%),
      linear-gradient(135deg, #0e7490, #155e75 60%, #1e3a8a);
    border: 1px solid #d1d5db;
    box-shadow: 0 18px 60px rgba(15, 23, 42, 0.18);
  }
  .hero-meta {
    margin-top: 26px;
  }
  .kicker {
    display: inline-block;
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #0e7490;
    margin-bottom: 12px;
  }
  h1 {
    margin: 0;
    font-size: clamp(38px, 5.6vw, 64px);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1.02;
    color: #0f172a;
  }
  .rating-row {
    margin-top: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #4b5563;
    flex-wrap: wrap;
  }
  .stars {
    display: inline-flex;
    gap: 1px;
  }
  .rating-row strong {
    font-weight: 800;
    color: #0f172a;
  }
  .rating-row em {
    font-style: normal;
    color: #6b7280;
  }
  .dot {
    width: 3px;
    height: 3px;
    background: #9ca3af;
    border-radius: 50%;
    margin: 0 4px;
  }
  .actions {
    margin-top: 18px;
    display: flex;
    gap: 8px;
  }
  .icon-btn {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 600;
    color: #111827;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .icon-btn:hover { border-color: #0e7490; color: #0e7490; }

  .layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 56px 28px 80px;
    display: grid;
    grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
    gap: 56px;
    align-items: start;
  }

  .quick-facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    padding: 22px;
    border-radius: 14px;
    background: #fff;
    border: 1px solid #e5e7eb;
    margin-bottom: 36px;
  }
  .fact {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #1f2937;
    font-size: 14px;
    font-weight: 600;
  }
  .fact svg { color: #0e7490; }

  .prose { margin-bottom: 44px; }
  .prose h2 {
    margin: 0 0 16px;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.015em;
    color: #0f172a;
  }
  .prose p {
    margin: 0 0 14px;
    color: #4b5563;
    font-size: 16px;
    line-height: 1.75;
  }
  .highlights {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .highlights li {
    padding: 13px 0;
    border-bottom: 1px solid #e5e7eb;
    font-size: 15.5px;
    color: #1f2937;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .highlights li::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #0e7490;
    flex-shrink: 0;
  }

  .itinerary { margin-bottom: 44px; }
  .itinerary h2 {
    margin: 0 0 22px;
    font-size: 28px;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.015em;
  }
  .day {
    display: grid;
    grid-template-columns: 100px minmax(0, 1fr);
    gap: 24px;
    padding: 22px 0;
    border-top: 1px solid #e5e7eb;
  }
  .day:first-of-type { border-top: 0; padding-top: 0; }
  .day-num {
    display: inline-block;
    color: #0e7490;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .day-body h3 {
    margin: 0 0 6px;
    font-size: 19px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.01em;
  }
  .day-body p {
    margin: 0;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.65;
  }

  .ask-block {
    margin-top: 56px;
    padding: 32px;
    border-radius: 20px;
    background: #fff;
    border: 1px solid #e5e7eb;
  }
  .ask-head { margin-bottom: 22px; }
  .ask-head h2 {
    margin: 0 0 8px;
    font-size: 26px;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.015em;
  }
  .ask-head p {
    margin: 0;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.65;
  }
  .ask-mount {
    border-radius: 14px;
    overflow: hidden;
    min-height: 540px;
    background: #f8fafc;
    border: 1px solid #e5e7eb;
  }
  .ask-fallback {
    padding: 60px 24px;
    text-align: center;
    color: #94a3b8;
    font-size: 13px;
  }

  .book-card {
    position: sticky;
    top: 84px;
    padding: 28px;
    border-radius: 18px;
    background: #fff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
  }
  .book-price {
    margin-bottom: 14px;
  }
  .book-price span {
    color: #6b7280;
    font-size: 13px;
    font-weight: 600;
  }
  .book-price strong {
    display: block;
    font-size: 34px;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.025em;
    line-height: 1.1;
    margin-top: 2px;
  }
  .book-price em {
    font-style: normal;
    color: #6b7280;
    font-size: 13px;
  }
  .book-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 22px;
  }
  .book-rating strong { color: #0f172a; }
  .book-field {
    margin-bottom: 12px;
  }
  .book-field label {
    display: block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #6b7280;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .book-field select {
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    background: #fff;
    cursor: pointer;
    font-family: inherit;
  }
  .book-cta {
    width: 100%;
    margin-top: 16px;
    padding: 15px;
    background: linear-gradient(135deg, #0e7490, #155e75);
    color: #fff;
    border: 0;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .book-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(14, 116, 144, 0.4);
  }
  .book-foot {
    margin-top: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4b5563;
    font-size: 12.5px;
  }
  .book-foot svg { color: #0e7490; }

  .foot {
    border-top: 1px solid #e5e7eb;
    padding: 28px 0 50px;
  }
  .foot-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    color: #6b7280;
    font-size: 13px;
  }

  @media (max-width: 980px) {
    .nav nav { display: none; }
    .layout { grid-template-columns: 1fr; gap: 36px; }
    .book-card { position: static; }
    .hero-cover { height: 320px; }
    .day { grid-template-columns: 80px minmax(0, 1fr); gap: 16px; }
  }
`;
