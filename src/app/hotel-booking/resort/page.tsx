"use client";

import { useEffect } from "react";

const PROPERTY_ID = "69bba14234aa22d0127f7acb";
const API_URL = "https://foxes-hotel.netlify.app";
const ACCENT = "#0E7490";

function useWidget(attrs: Record<string, string>) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = attrs.src;
    Object.entries(attrs).forEach(([k, v]) => { if (k !== "src") s.setAttribute(k, v); });
    document.body.appendChild(s);
    return () => { try { document.body.removeChild(s); } catch {} };
  }, []); // eslint-disable-line
}

const images = {
  hero: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
  villa: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&h=400&fit=crop",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  sunset: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&h=600&fit=crop",
};

export default function ResortPage() {
  useWidget({
    src: `${API_URL}/widget/foxes-booking.js`,
    "data-property-id": PROPERTY_ID,
    "data-api-url": API_URL,
    "data-mode": "sidebar",
    "data-accent": ACCENT,
    "data-button-text": "Book Your Stay",
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Azure Bay</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#rooms" className="hover:text-white transition">Villas</a>
            <a href="#experience" className="hover:text-white transition">Activities</a>
            <a href="#dining" className="hover:text-white transition">Dining</a>
            <a href="#booking" className="hover:text-white transition">Book</a>
          </div>
          <a href="#booking" className="h-10 px-6 rounded-full text-sm font-semibold text-white flex items-center transition hover:opacity-90" style={{ background: ACCENT }}>Book Now</a>
        </div>
      </nav>

      {/* Hero — full bleed with video-like parallax */}
      <section className="relative h-screen min-h-[700px]">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="relative h-full flex flex-col items-center justify-end text-center px-6 pb-24">
          <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">Red Sea Coast &middot; Egypt</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>Azure Bay<br /><span className="text-3xl md:text-4xl font-normal text-white/70">Resort & Spa</span></h1>
          <p className="text-white/60 mt-6 text-lg max-w-xl">Where turquoise waters meet white sand beaches — your private paradise awaits</p>
          <a href="#booking" className="mt-8 h-14 px-10 rounded-full text-base font-semibold text-white flex items-center transition hover:opacity-90" style={{ background: ACCENT }}>Check Availability</a>
        </div>
      </section>

      {/* Beach strip */}
      <section className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600" />
        <div className="relative flex items-center justify-center h-full gap-12 text-white/90 text-sm font-medium tracking-wide">
          <span>Private Beach</span><span>&middot;</span><span>Overwater Villas</span><span>&middot;</span><span>Infinity Pools</span><span>&middot;</span><span>Full-Service Spa</span><span>&middot;</span><span>5 Restaurants</span>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Stay</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Villas & Suites</h2>
            <p className="text-[#717171] mt-4 max-w-lg mx-auto">Each villa is a private retreat with direct beach access and panoramic ocean views</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Overwater Villa", desc: "Glass-floor villa suspended over crystal-clear lagoon", img: images.villa, price: "$1,200" },
              { name: "Beachfront Suite", desc: "Steps from the sand with private plunge pool", img: images.pool, price: "$450" },
              { name: "Ocean View Room", desc: "Panoramic balcony overlooking the Red Sea", img: images.beach, price: "$280" },
            ].map(room => (
              <div key={room.name} className="group rounded-3xl overflow-hidden shadow-sm border border-[#e5e5e5] hover:shadow-2xl transition-all">
                <div className="h-72 overflow-hidden">
                  <img src={room.img} alt={room.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>{room.name}</h3>
                  <p className="text-sm text-[#717171] mt-2">{room.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold" style={{ color: ACCENT }}>From {room.price}<span className="text-xs font-normal text-[#999]">/night</span></span>
                    <a href="#booking" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Book &rarr;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="experience" className="py-24 px-6 bg-[#F0FDFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Activities</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Endless Adventures</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Snorkeling", "Scuba Diving", "Yacht Cruises", "Desert Safari", "Spa & Wellness", "Beach Yoga", "Water Sports", "Stargazing"].map(act => (
              <div key={act} className="bg-white rounded-2xl p-6 text-center border hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3">{"🤿🏊🛥️🐪💆🧘🏄🌟".split("").filter((_, i) => i % 2 === 0)[["Snorkeling", "Scuba Diving", "Yacht Cruises", "Desert Safari", "Spa & Wellness", "Beach Yoga", "Water Sports", "Stargazing"].indexOf(act) % 4]}</p>
                <p className="font-semibold text-sm text-[#1a1a1a]">{act}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="relative py-24 px-6">
        <img src={images.sunset} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-white/60">Culinary</p>
          <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>World-Class Dining</h2>
          <p className="text-white/70 mt-6 text-lg max-w-2xl mx-auto">Five distinct restaurants offering everything from fresh seafood on the beach to Michelin-inspired tasting menus under the stars.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {["The Reef (Seafood)", "Sakura (Japanese)", "Il Faro (Italian)", "Azure Grill (Beachside)", "The Oasis (Pool Bar)"].map(r => (
              <span key={r} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget — SIDEBAR MODE (FAB button) */}
      <section id="booking" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Reservations</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Reserve Your Paradise</h2>
          <p className="text-[#717171] mt-4 max-w-lg mx-auto">Click the booking button to check live availability and secure your dates — direct booking, zero commission.</p>
          <p className="mt-8 text-sm text-[#999]">&darr; Use the floating <strong style={{ color: ACCENT }}>Book Now</strong> button at the bottom of the page</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 text-white" style={{ background: ACCENT }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Azure Bay Resort & Spa</h3>
          <p className="text-white/70 mt-3">Hurghada, Red Sea Coast, Egypt</p>
          <p className="text-white/70">+20 65 123 4567 &middot; hello@azurebay.com</p>
          <p className="text-white/40 mt-8 text-sm">&copy; {new Date().getFullYear()} Azure Bay Resort. Booking powered by <span className="font-bold text-white/60">foxes</span></p>
        </div>
      </footer>
    </div>
  );
}
