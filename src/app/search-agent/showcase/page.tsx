"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle, Search, PanelLeftOpen, Sparkles, MessagesSquare } from "lucide-react";
import type { CSSProperties, ComponentType } from "react";

type Demo = {
  href: string;
  brand: string;
  tagline: string;
  surface: string;
  widget: string;
  accent: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const DEMOS: Demo[] = [
  {
    href: "/search-agent/showcase/sahara-trails",
    brand: "Sahara Trails",
    tagline: "Hand-crafted journeys through Egypt's quiet corners.",
    surface: "Boutique tour operator",
    widget: "Floating chat bubble",
    accent: "linear-gradient(135deg, #d97706, #b45309)",
    Icon: MessageCircle,
  },
  {
    href: "/search-agent/showcase/wanderhub",
    brand: "Wanderhub",
    tagline: "Search every operator. Pay one place. Skip the noise.",
    surface: "Travel marketplace",
    widget: "Hero search bar",
    accent: "linear-gradient(135deg, #2563eb, #1e40af)",
    Icon: Search,
  },
  {
    href: "/search-agent/showcase/lotus-cruise",
    brand: "Lotus Royale Cruises",
    tagline: "Five days on the Nile. Twenty staterooms. Gold-leaf finishings.",
    surface: "Single tour detail",
    widget: "Inline chat panel",
    accent: "linear-gradient(135deg, #0891b2, #0e7490)",
    Icon: PanelLeftOpen,
  },
  {
    href: "/search-agent/showcase/mirage-resort",
    brand: "Mirage Resort & Spa",
    tagline: "Reach our concierge before you've even checked in.",
    surface: "Five-star resort",
    widget: "Full-page chat",
    accent: "linear-gradient(135deg, #b45309, #78350f)",
    Icon: MessagesSquare,
  },
  {
    href: "/search-agent/showcase/bookings-help",
    brand: "Bookings Helpdesk",
    tagline: "Self-serve answers for everything from refunds to rebookings.",
    surface: "Help center",
    widget: "Modal chat launcher",
    accent: "linear-gradient(135deg, #16a34a, #15803d)",
    Icon: Sparkles,
  },
];

export default function ShowcasePage() {
  return (
    <main className="hub">
      <header className="hub-top">
        <Link href="/search-agent" className="hub-back">
          ← Back to product
        </Link>
        <span className="hub-eyebrow">
          <span className="hub-pulse" /> Live in production
        </span>
      </header>

      <section className="hub-hero">
        <h1>
          One concierge engine.
          <br />
          <span className="grad">Five storefronts.</span>
        </h1>
        <p>
          These are real, fully-loaded pages — not screenshots. Each site embeds a different
          flavour of the Foxes concierge with a single script tag. Open any of them and ask a
          question; the same model, catalog and cards power them all.
        </p>
      </section>

      <section className="hub-grid">
        {DEMOS.map((demo) => {
          const Icon = demo.Icon;
          return (
            <Link key={demo.href} href={demo.href} className="card">
              <span className="card-glow" style={{ background: demo.accent } as CSSProperties} />
              <div className="card-head">
                <div className="card-icon">
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <span className="card-tag">{demo.surface}</span>
              </div>
              <h3>{demo.brand}</h3>
              <p>{demo.tagline}</p>
              <div className="card-foot">
                <span>{demo.widget}</span>
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </div>
            </Link>
          );
        })}
      </section>

      <footer className="hub-foot">
        <span>
          The same widget ID powers every demo. Change one config record and every site updates at
          once.
        </span>
      </footer>

      <style jsx>{`
        .hub {
          min-height: 100vh;
          background: #07080c;
          color: #e7eaf2;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
          padding: 32px 28px 80px;
          max-width: 1200px;
          margin: 0 auto;
          isolation: isolate;
          position: relative;
          overflow: hidden;
        }
        .hub::before {
          content: "";
          position: absolute;
          inset: -10% 30% auto 30%;
          height: 380px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.35), transparent 60%);
          filter: blur(80px);
          z-index: -1;
        }
        .hub-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }
        .hub-back {
          color: #b6bcc9;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .hub-back:hover {
          color: #fff;
        }
        .hub-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .hub-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        .hub-hero {
          margin: 0 auto 64px;
          max-width: 820px;
          text-align: center;
        }
        .hub-hero h1 {
          margin: 0;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -0.035em;
        }
        .grad {
          background: linear-gradient(135deg, #c084fc, #f472b6, #fb923c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hub-hero p {
          margin: 24px auto 0;
          color: #b6bcc9;
          font-size: 17px;
          line-height: 1.7;
          max-width: 620px;
        }
        .hub-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .card {
          position: relative;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
          color: inherit;
          text-decoration: none;
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.2s;
        }
        .card:hover {
          transform: translateY(-3px);
          border-color: rgba(167, 139, 250, 0.3);
        }
        .card-glow {
          position: absolute;
          inset: -50% -20% auto auto;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          z-index: -1;
        }
        .card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .card-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .card-tag {
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #c4b5fd;
        }
        h3 {
          margin: 0 0 10px;
          font-size: 24px;
          font-weight: 850;
          letter-spacing: -0.015em;
          color: #f3f4f9;
        }
        .card p {
          margin: 0;
          color: #9aa3b2;
          font-size: 15px;
          line-height: 1.65;
        }
        .card-foot {
          margin-top: 28px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #98a0af;
          font-weight: 600;
        }
        .card:hover .card-foot {
          color: #c4b5fd;
        }
        .hub-foot {
          margin-top: 56px;
          text-align: center;
          color: #7c8290;
          font-size: 13.5px;
        }
        @media (max-width: 720px) {
          .hub-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
