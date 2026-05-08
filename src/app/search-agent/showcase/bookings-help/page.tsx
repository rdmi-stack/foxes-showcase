"use client";

import Link from "next/link";
import { Search, MessageCircle, Book, RefreshCw, CreditCard, Plane, Mail } from "lucide-react";
import { useCallback } from "react";
import { useWidget } from "../_lib/useWidget";

const TOPICS = [
  {
    icon: RefreshCw,
    title: "Cancellations & refunds",
    body: "How to cancel, refund timelines, weather rebookings, and partial refunds.",
    articles: 18,
  },
  {
    icon: Plane,
    title: "Before your trip",
    body: "Visa requirements, transfer pickups, what to pack, meeting points.",
    articles: 32,
  },
  {
    icon: CreditCard,
    title: "Payments & billing",
    body: "Currencies, instalments, expense receipts, charge disputes.",
    articles: 14,
  },
  {
    icon: Book,
    title: "Account & privacy",
    body: "Logging in, two-factor, deleting your account, data exports.",
    articles: 22,
  },
];

const QUESTIONS = [
  {
    q: "Can I cancel a tour 24 hours before it starts?",
    a: "Most tours are free to cancel up to 24 hours before the start time, with a full refund within 5–10 business days. Look for the green 'Free cancellation' badge on the booking page.",
  },
  {
    q: "What happens if my tour is cancelled by the operator?",
    a: "We refund the full amount to your original payment method, automatically, within 24 hours of the cancellation. You'll also get a $10 credit for a future booking.",
  },
  {
    q: "I haven't received my booking confirmation email — what should I do?",
    a: "Check your spam folder first. If it's not there, sign in to your account and pull the voucher from your bookings list. If you booked as a guest, use the chat below with your booking ID.",
  },
  {
    q: "How do I add a passenger to my existing booking?",
    a: "Open the booking, scroll to 'Travelers', and click 'Add traveler'. If the tour is sold out, the chat below can wait-list you and notify you the moment a slot opens.",
  },
];

export default function BookingsHelpPage() {
  useWidget("/widget/foxes-chat-modal.js", {
    accent: "#15803d",
    "agent-name": "Bookings Help",
    placeholder: "Ask about your booking, refunds, or rebookings…",
  });

  const openChat = useCallback(() => {
    type FoxesGlobal = { open?: () => void };
    const w = window as Window & { FoxesChat?: FoxesGlobal };
    if (w.FoxesChat?.open) {
      w.FoxesChat.open();
    } else {
      // Fallback: try again shortly in case the widget script hasn't booted yet.
      window.setTimeout(() => {
        const w2 = window as Window & { FoxesChat?: FoxesGlobal };
        w2.FoxesChat?.open?.();
      }, 600);
    }
  }, []);

  return (
    <main className="site">
      <header className="nav">
        <div className="nav-inner">
          <Link href="/demo/showcase" className="brand">
            <span className="brand-mark">●</span>
            <span>
              Helpdesk
              <em>by Wanderhub</em>
            </span>
          </Link>
          <nav>
            <a href="#">For travelers</a>
            <a href="#">For operators</a>
            <a href="#">Status</a>
          </nav>
          <button className="nav-cta" onClick={openChat}>
            <MessageCircle size={14} strokeWidth={2.4} /> Chat with us
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <span className="kicker">Help Center</span>
          <h1>How can we help?</h1>
          <p>
            Most things travelers ask us are answered in one of the topics below. If yours isn&apos;t,
            tap the chat button — you&apos;ll be talking to someone in under a minute.
          </p>
          <div className="search">
            <Search size={18} strokeWidth={2.2} />
            <input type="text" placeholder="Search articles, e.g. ‘change date’" />
          </div>
          <div className="hero-quick">
            <span>Try:</span>
            <button onClick={openChat}>“I missed my pickup”</button>
            <button onClick={openChat}>“Refund stuck”</button>
            <button onClick={openChat}>“Change dates”</button>
          </div>
        </div>
      </section>

      <section className="topics">
        <div className="band-head">
          <h2>Browse by topic</h2>
          <p>140 articles, updated daily by our support team.</p>
        </div>
        <div className="topic-grid">
          {TOPICS.map((t) => {
            const Icon = t.icon;
            return (
              <a key={t.title} className="topic" href="#">
                <div className="topic-icon">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <strong>{t.title}</strong>
                <p>{t.body}</p>
                <span className="topic-count">{t.articles} articles →</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="faq">
        <div className="band-head">
          <h2>Top questions this week</h2>
          <p>Answers below come straight from our support team&apos;s most-used responses.</p>
        </div>
        <div className="faq-list">
          {QUESTIONS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-card">
          <div>
            <span className="kicker light">Still stuck?</span>
            <h2>Chat with someone now.</h2>
            <p>
              Median response time this week: <strong>34 seconds</strong>. We&apos;re online 24/7,
              even on holidays.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary" onClick={openChat}>
              <MessageCircle size={16} strokeWidth={2.4} /> Open chat
            </button>
            <a className="ghost" href="mailto:help@wanderhub.example">
              <Mail size={15} strokeWidth={2.4} /> Email instead
            </a>
          </div>
        </div>
      </section>

      <button className="floating-cta" onClick={openChat} aria-label="Open chat">
        <MessageCircle size={20} strokeWidth={2.4} />
      </button>

      <footer className="foot">
        <div className="foot-inner">
          <div className="brand">
            <span className="brand-mark">●</span>
            <span>
              Helpdesk <em>by Wanderhub</em>
            </span>
          </div>
          <span>© {new Date().getFullYear()} Wanderhub Travel BV</span>
          <div className="foot-links">
            <a href="#">Status</a>
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
    background: #f6faf6;
    color: #0f172a;
    font-family: 'Inter', system-ui, sans-serif;
  }
  .nav {
    position: sticky;
    top: 0;
    z-index: 30;
    background: rgba(246, 250, 246, 0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid #d6e9d6;
  }
  .nav-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    color: #0f172a;
  }
  .brand-mark {
    color: #16a34a;
    font-size: 22px;
    line-height: 1;
  }
  .brand em {
    font-style: normal;
    color: #6b7280;
    font-weight: 500;
    margin-left: 6px;
    font-size: 14px;
  }
  .nav nav {
    display: flex;
    gap: 22px;
    margin-left: 12px;
  }
  .nav nav a {
    color: #4b5563;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 600;
  }
  .nav nav a:hover { color: #0f172a; }
  .nav-cta {
    margin-left: auto;
    background: #0f172a;
    color: #fff;
    border: 0;
    padding: 9px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: inherit;
  }
  .nav-cta:hover { background: #15803d; }

  .kicker {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #15803d;
    margin-bottom: 18px;
  }
  .kicker.light { color: #bbf7d0; }

  .hero {
    background:
      radial-gradient(ellipse at 50% 20%, rgba(34, 197, 94, 0.18), transparent 55%),
      linear-gradient(180deg, #f6faf6 0%, #fff 100%);
    padding: 80px 28px 60px;
    border-bottom: 1px solid #d6e9d6;
  }
  .hero-inner {
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    margin: 0;
    font-size: clamp(40px, 5.4vw, 64px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: #0f172a;
  }
  .hero p {
    margin: 22px auto 0;
    font-size: 17px;
    line-height: 1.65;
    color: #4b5563;
    max-width: 520px;
  }
  .search {
    margin: 40px auto 0;
    background: #fff;
    border: 1px solid #d1d5db;
    border-radius: 14px;
    padding: 4px 6px 4px 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06);
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .search:focus-within {
    border-color: #16a34a;
    box-shadow: 0 16px 40px rgba(22, 163, 74, 0.16);
  }
  .search svg { color: #16a34a; flex-shrink: 0; }
  .search input {
    flex: 1;
    border: 0;
    outline: none;
    padding: 14px 0;
    font-size: 15px;
    background: transparent;
    color: #0f172a;
    font-family: inherit;
  }
  .search input::placeholder { color: #9ca3af; }
  .hero-quick {
    margin-top: 14px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 12.5px;
    color: #6b7280;
  }
  .hero-quick span { padding: 7px 0; }
  .hero-quick button {
    background: #fff;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    padding: 6px 12px;
    font-size: 12.5px;
    font-weight: 600;
    color: #15803d;
    cursor: pointer;
    font-family: inherit;
  }
  .hero-quick button:hover { background: #ecfdf5; border-color: #86efac; }

  .topics {
    max-width: 1180px;
    margin: 0 auto;
    padding: 80px 28px 40px;
  }
  .band-head {
    max-width: 580px;
    margin: 0 auto 36px;
    text-align: center;
  }
  h2 {
    margin: 0;
    font-size: clamp(28px, 3.6vw, 40px);
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }
  .band-head p {
    margin: 12px 0 0;
    color: #6b7280;
    font-size: 15px;
  }
  .topic-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
  .topic {
    padding: 24px;
    border-radius: 14px;
    background: #fff;
    border: 1px solid #d6e9d6;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, border-color 0.2s, box-shadow 0.2s;
  }
  .topic:hover {
    transform: translateY(-2px);
    border-color: #86efac;
    box-shadow: 0 14px 32px rgba(22, 163, 74, 0.08);
  }
  .topic-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #ecfdf5;
    color: #15803d;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
  }
  .topic strong {
    display: block;
    font-size: 16.5px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.01em;
    margin-bottom: 6px;
  }
  .topic p {
    margin: 0 0 14px;
    color: #4b5563;
    font-size: 14px;
    line-height: 1.6;
  }
  .topic-count {
    color: #15803d;
    font-size: 13px;
    font-weight: 700;
  }

  .faq {
    max-width: 880px;
    margin: 0 auto;
    padding: 60px 28px 80px;
  }
  .faq-list { margin-top: 12px; }
  details {
    border-top: 1px solid #d6e9d6;
    padding: 22px 0;
  }
  details:last-child { border-bottom: 1px solid #d6e9d6; }
  summary {
    cursor: pointer;
    list-style: none;
    font-size: 16.5px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.01em;
    position: relative;
    padding-right: 32px;
  }
  summary::-webkit-details-marker { display: none; }
  summary::after {
    content: "+";
    position: absolute;
    right: 0;
    top: -2px;
    color: #15803d;
    font-size: 22px;
    font-weight: 600;
    transition: transform 0.2s;
  }
  details[open] summary::after { content: "−"; }
  details p {
    margin: 14px 0 0;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.7;
  }

  .cta-band {
    padding: 0 28px 80px;
  }
  .cta-card {
    max-width: 1180px;
    margin: 0 auto;
    padding: 48px;
    border-radius: 24px;
    background:
      radial-gradient(ellipse at top right, rgba(34, 197, 94, 0.25), transparent 50%),
      linear-gradient(135deg, #052e16, #14532d);
    color: #ecfdf5;
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, auto);
    gap: 36px;
    align-items: center;
  }
  .cta-card h2 { color: #f0fdf4; }
  .cta-card p {
    margin-top: 14px;
    color: rgba(236, 253, 245, 0.78);
    font-size: 15.5px;
    line-height: 1.7;
    max-width: 480px;
  }
  .cta-card strong { color: #bbf7d0; }
  .cta-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .primary {
    background: #fff;
    color: #052e16;
    padding: 14px 22px;
    border: 0;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    font-family: inherit;
    transition: transform 0.18s, background 0.18s;
  }
  .primary:hover { transform: translateY(-1px); background: #ecfdf5; }
  .ghost {
    background: transparent;
    color: rgba(236, 253, 245, 0.92);
    padding: 14px 22px;
    border: 1px solid rgba(236, 253, 245, 0.2);
    border-radius: 12px;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .ghost:hover { background: rgba(236, 253, 245, 0.08); }

  .floating-cta {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 40;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 0;
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 14px 38px rgba(22, 163, 74, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .floating-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 50px rgba(22, 163, 74, 0.55);
  }

  .foot {
    border-top: 1px solid #d6e9d6;
    padding: 28px 28px 50px;
    background: #fff;
  }
  .foot-inner {
    max-width: 1180px;
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
  .foot-links a:hover { color: #0f172a; }

  @media (max-width: 760px) {
    .nav nav { display: none; }
    .topic-grid { grid-template-columns: 1fr; }
    .cta-card { grid-template-columns: 1fr; padding: 32px; }
  }
`;
