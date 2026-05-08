"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Star, Wand2 } from "lucide-react";
import { useWidget } from "../_lib/useWidget";

export default function MirageResortPage() {
  useWidget("/widget/foxes-chat-page.js", {
    container: "mirage-concierge-mount",
    accent: "#b45309",
    "agent-name": "Mirage Concierge",
    placeholder: "How can we make your stay memorable?",
  });

  return (
    <main className="site">
      <header className="nav">
        <div className="nav-inner">
          <Link href="/demo/showcase" className="brand">
            <span className="brand-mark">M</span>
            <div>
              <strong>Mirage</strong>
              <span>Resort & Spa</span>
            </div>
          </Link>
          <nav>
            <a href="#">Rooms</a>
            <a href="#">Restaurants</a>
            <a href="#">Spa</a>
            <a href="#">Excursions</a>
            <a href="#concierge">Concierge</a>
          </nav>
          <a className="nav-cta" href="#book">
            Book a stay
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-cover" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <span className="kicker">El Gouna · Red Sea, Egypt</span>
          <h1>
            A quieter
            <br />
            Red Sea.
          </h1>
          <p>
            Forty-two suites, one private cove, and a service philosophy that hasn&apos;t changed since
            we opened in 1994. We are deliberately the smallest five-star on this stretch of coast.
          </p>
          <div className="hero-row">
            <div className="hero-rating">
              <span className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#fff" strokeWidth={0} />
                ))}
              </span>
              <strong>5.0</strong>
              <span>Forbes Travel Guide</span>
            </div>
            <div className="sep" />
            <span className="hero-line">Member, Leading Hotels of the World</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="intro-inner">
          <span className="kicker dark">A note from the front desk</span>
          <h2>
            Your stay starts the moment you ask the first question — not the moment you arrive.
          </h2>
          <p>
            Below is a direct line to our concierge team. The same humans you&apos;d meet at the front
            desk are answering. Tell us about dietary preferences, anniversaries, kids&apos; age ranges,
            sensitive sleepers — anything that helps us prepare. We rebuild itineraries before
            arrival, not after.
          </p>
        </div>
      </section>

      <section id="concierge" className="concierge">
        <div className="concierge-inner">
          <div className="concierge-side">
            <span className="kicker">The concierge desk</span>
            <h2>Speak to us before you pack.</h2>
            <p>
              Booked guests get a private channel from confirmation onwards. Pre-arrival travelers
              are welcome here too — most of our regulars start a thread weeks out and let it run
              through the stay.
            </p>
            <ul className="concierge-list">
              <li>
                <strong>Pre-arrival</strong>
                <span>Restaurant reservations, room requests, transfer logistics.</span>
              </li>
              <li>
                <strong>During your stay</strong>
                <span>Excursions, spa bookings, kids&apos; clubs, dietary changes.</span>
              </li>
              <li>
                <strong>After</strong>
                <span>Lost-and-found, follow-up bookings, planning your next visit.</span>
              </li>
            </ul>
            <div className="concierge-direct">
              <span className="kicker dark">Prefer a human directly</span>
              <div className="direct-row">
                <Phone size={14} strokeWidth={2.4} />
                <a href="tel:+201001234567">+20 100 123 4567</a>
              </div>
              <div className="direct-row">
                <Mail size={14} strokeWidth={2.4} />
                <a href="mailto:concierge@mirage.example">concierge@mirage.example</a>
              </div>
              <div className="direct-row">
                <MapPin size={14} strokeWidth={2.4} />
                <span>El Gouna Marina, KM 22</span>
              </div>
            </div>
          </div>

          <div className="concierge-mount-wrap">
            <div className="mount-head">
              <div className="mount-avatar">
                <Wand2 size={16} strokeWidth={2.4} />
              </div>
              <div>
                <strong>Mirage Concierge</strong>
                <span className="mount-status">
                  <span className="dot" /> Online · replies typically within a minute
                </span>
              </div>
            </div>
            <div id="mirage-concierge-mount" className="concierge-mount">
              <div className="mount-fallback">Loading concierge…</div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="book">
        <div className="book-inner">
          <div>
            <span className="kicker">Reservations</span>
            <h2>Direct rates only on this site.</h2>
            <p>
              Booking on mirage.example beats every OTA price by 7% on average. That difference
              goes to the staff tip pool — a tradition since opening.
            </p>
          </div>
          <a href="#" className="book-cta">
            Check availability
          </a>
        </div>
      </section>

      <footer className="foot">
        <div className="foot-inner">
          <div className="brand">
            <span className="brand-mark">M</span>
            <div>
              <strong>Mirage</strong>
              <span>Resort & Spa</span>
            </div>
          </div>
          <span>© {new Date().getFullYear()} Mirage Hospitality SAE · El Gouna, Egypt</span>
          <div className="foot-links">
            <a href="#">Sustainability</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Privacy</a>
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
    background: #fbf8f1;
    color: #1f1610;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 30;
    background: rgba(251, 248, 241, 0.92);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid #ecdfca;
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
    gap: 12px;
    text-decoration: none;
    color: #1f1610;
    line-height: 1.05;
  }
  .brand-mark {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: linear-gradient(135deg, #b45309, #78350f);
    color: #fbf8f1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
    font-family: 'Cormorant Garamond', Georgia, serif;
  }
  .brand div { display: flex; flex-direction: column; }
  .brand strong {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  .brand span { font-size: 11px; color: #846b4b; letter-spacing: 0.18em; text-transform: uppercase; }
  .nav nav {
    display: flex;
    gap: 24px;
    margin-left: 18px;
  }
  .nav nav a {
    color: #5a4732;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 500;
  }
  .nav nav a:hover { color: #1f1610; }
  .nav-cta {
    margin-left: auto;
    background: #1f1610;
    color: #fbf8f1;
    padding: 10px 18px;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 700;
    border-radius: 4px;
  }
  .nav-cta:hover { background: #b45309; }

  .kicker {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #f6e6c8;
    margin-bottom: 18px;
  }
  .kicker.dark { color: #b45309; }

  .hero {
    position: relative;
    height: 640px;
    overflow: hidden;
  }
  .hero-cover {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 30%, rgba(255, 244, 214, 0.35), transparent 50%),
      linear-gradient(135deg, #b45309 0%, #78350f 60%, #451a03 100%);
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(31, 22, 16, 0) 30%, rgba(31, 22, 16, 0.55) 100%);
  }
  .hero-inner {
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
    padding: 100px 28px 0;
    color: #fbf8f1;
  }
  h1 {
    margin: 0;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
    font-size: clamp(64px, 9vw, 132px);
    line-height: 0.95;
    letter-spacing: -0.01em;
  }
  .hero p {
    margin: 28px 0 0;
    font-size: 17px;
    line-height: 1.7;
    max-width: 480px;
    color: rgba(251, 248, 241, 0.85);
  }
  .hero-row {
    margin-top: 36px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    color: rgba(251, 248, 241, 0.92);
    font-size: 13px;
  }
  .hero-rating {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
  }
  .stars {
    display: inline-flex;
    gap: 1px;
  }
  .hero-rating strong { font-weight: 800; }
  .sep {
    width: 1px;
    height: 22px;
    background: rgba(251, 248, 241, 0.35);
  }
  .hero-line { font-size: 13px; }

  .intro {
    padding: 90px 28px;
    border-bottom: 1px solid #ecdfca;
  }
  .intro-inner {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    margin: 0;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
    font-size: clamp(34px, 4.4vw, 54px);
    line-height: 1.1;
    letter-spacing: -0.005em;
    color: #1f1610;
  }
  .intro p {
    margin: 24px auto 0;
    font-size: 17px;
    line-height: 1.75;
    color: #4a3a28;
    max-width: 660px;
  }

  .concierge {
    padding: 100px 28px;
  }
  .concierge-inner {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 56px;
    align-items: start;
  }
  .concierge-side h2 { margin-bottom: 18px; }
  .concierge-side p {
    margin: 0 0 30px;
    font-size: 16px;
    line-height: 1.75;
    color: #4a3a28;
  }
  .concierge-list {
    list-style: none;
    padding: 0;
    margin: 0 0 36px;
    border-top: 1px solid #ecdfca;
  }
  .concierge-list li {
    padding: 16px 0;
    border-bottom: 1px solid #ecdfca;
    display: grid;
    grid-template-columns: 160px minmax(0, 1fr);
    gap: 16px;
    font-size: 14.5px;
  }
  .concierge-list li strong {
    color: #1f1610;
    font-weight: 700;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 17px;
    letter-spacing: 0.01em;
  }
  .concierge-list li span { color: #5a4732; line-height: 1.6; }
  .concierge-direct {
    padding: 24px;
    background: #fff;
    border: 1px solid #ecdfca;
    border-radius: 12px;
  }
  .direct-row {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #1f1610;
    font-size: 14px;
    margin-top: 10px;
  }
  .direct-row:first-of-type { margin-top: 14px; }
  .direct-row svg { color: #b45309; }
  .direct-row a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }
  .direct-row a:hover { color: #b45309; }

  .concierge-mount-wrap {
    background: #fff;
    border: 1px solid #ecdfca;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(120, 53, 15, 0.1);
  }
  .mount-head {
    padding: 18px 22px;
    border-bottom: 1px solid #ecdfca;
    display: flex;
    align-items: center;
    gap: 14px;
    background: linear-gradient(180deg, #fff, #fdf6e9);
  }
  .mount-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #b45309, #78350f);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .mount-head strong {
    display: block;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 19px;
    font-weight: 700;
    color: #1f1610;
  }
  .mount-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #846b4b;
    font-size: 12px;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #16a34a;
    box-shadow: 0 0 6px #16a34a;
  }
  .concierge-mount {
    min-height: 620px;
    background: #fbf8f1;
  }
  .mount-fallback {
    padding: 80px 24px;
    text-align: center;
    color: #846b4b;
    font-size: 13px;
  }

  .book {
    padding: 80px 28px;
    background: #1f1610;
    color: #fbf8f1;
  }
  .book-inner {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, auto);
    gap: 36px;
    align-items: center;
  }
  .book h2 { color: #fbf8f1; margin-bottom: 14px; }
  .book p {
    margin: 0;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(251, 248, 241, 0.78);
    max-width: 560px;
  }
  .book-cta {
    background: #b45309;
    color: #fff;
    padding: 16px 28px;
    text-decoration: none;
    font-weight: 700;
    border-radius: 4px;
    font-size: 14.5px;
    transition: background 0.18s;
  }
  .book-cta:hover { background: #d97706; }

  .foot {
    padding: 28px 28px 50px;
    border-top: 1px solid #ecdfca;
    background: #fbf8f1;
  }
  .foot-inner {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    color: #846b4b;
    font-size: 12.5px;
  }
  .foot-links {
    margin-left: auto;
    display: flex;
    gap: 22px;
  }
  .foot-links a { color: inherit; text-decoration: none; }
  .foot-links a:hover { color: #1f1610; }

  @media (max-width: 980px) {
    .nav nav { display: none; }
    .concierge-inner { grid-template-columns: 1fr; gap: 36px; }
    .book-inner { grid-template-columns: 1fr; }
    .hero { height: 540px; }
    .hero-inner { padding-top: 60px; }
    .concierge-list li { grid-template-columns: 1fr; gap: 4px; }
  }
`;
