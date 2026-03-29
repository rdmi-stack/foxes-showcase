"use client";

import { useEffect } from "react";

const PROPERTY_ID = "69bba14234aa22d0127f7acb";
const API_URL = typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:3000" : "https://foxes-hotel.netlify.app";
const ACCENT = "#7C3A21";

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
  hero: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&h=900&fit=crop",
  courtyard: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  room1: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
  room2: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
  spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
  library: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  garden: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
};

export default function HeritagePage() {
  useWidget({
    src: `${API_URL}/widget/foxes-booking.js`,
    "data-property-id": PROPERTY_ID,
    "data-api-url": API_URL,
    "data-mode": "calendar",
    "data-container": "foxes-booking-heritage",
    "data-accent": ACCENT,
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight" style={{ color: ACCENT, fontFamily: "'Playfair Display', serif" }}>The Riad Amber</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#717171]">
            <a href="#rooms" className="hover:text-[#1a1a1a] transition">Rooms</a>
            <a href="#experience" className="hover:text-[#1a1a1a] transition">Experience</a>
            <a href="#gallery" className="hover:text-[#1a1a1a] transition">Gallery</a>
            <a href="#booking" className="hover:text-[#1a1a1a] transition">Book</a>
          </div>
          <a href="#booking" className="h-10 px-6 rounded-full text-sm font-semibold text-white flex items-center transition hover:opacity-90" style={{ background: ACCENT }}>Check Availability</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[700px]">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-6">Est. 1897 &middot; Marrakech, Morocco</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>The Riad<br />Amber</h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl">A restored 19th-century riad where Moroccan heritage meets modern luxury</p>
          <div className="flex gap-4 mt-10">
            <a href="#booking" className="h-12 px-8 rounded-full text-sm font-semibold text-white flex items-center transition hover:opacity-90" style={{ background: ACCENT }}>Check Availability</a>
            <a href="#rooms" className="h-12 px-8 rounded-full text-sm font-semibold text-white flex items-center border border-white/30 hover:bg-white/10 transition">View Rooms</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 bg-[#FBF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Our Story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>A sanctuary of timeless beauty</h2>
          <p className="text-lg text-[#717171] mt-6 leading-relaxed max-w-2xl mx-auto">Nestled in the heart of the Medina, The Riad Amber has been lovingly restored to preserve its original zellige tilework, carved cedarwood, and tranquil courtyards while offering every modern comfort.</p>
        </div>
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          {[{ num: "24", label: "Heritage Suites" }, { num: "4.9", label: "Guest Rating" }, { num: "127", label: "Years of History" }].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold" style={{ color: ACCENT, fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
              <p className="text-sm text-[#999] mt-2 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Accommodations</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Rooms & Suites</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sultan Suite", desc: "Grand suite with private rooftop terrace and plunge pool", img: images.room1, price: "From $380" },
              { name: "Courtyard Room", desc: "Elegant room overlooking the central courtyard fountain", img: images.room2, price: "From $220" },
              { name: "Garden Pavilion", desc: "Secluded pavilion surrounded by jasmine and orange trees", img: images.garden, price: "From $280" },
              { name: "Heritage Room", desc: "Original zellige tilework and hand-painted ceilings", img: images.courtyard, price: "From $180" },
            ].map(room => (
              <div key={room.name} className="group rounded-2xl overflow-hidden border border-[#e5e5e5] hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={room.img} alt={room.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>{room.name}</h3>
                    <span className="text-sm font-semibold" style={{ color: ACCENT }}>{room.price}</span>
                  </div>
                  <p className="text-sm text-[#717171] mt-2">{room.desc}</p>
                  <a href="#booking" className="inline-flex items-center gap-1 text-sm font-semibold mt-4 hover:gap-2 transition-all" style={{ color: ACCENT }}>Check Availability &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-[#FBF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Curated Moments</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Hammam & Spa", desc: "Traditional Moroccan hammam ritual with argan oil treatments", img: images.spa },
              { name: "Rooftop Dining", desc: "Authentic Moroccan cuisine under the stars with Atlas views", img: images.library },
              { name: "Courtyard Garden", desc: "Morning tea amidst centuries-old orange trees and fountains", img: images.garden },
            ].map(exp => (
              <div key={exp.name} className="group rounded-2xl overflow-hidden">
                <div className="h-72 overflow-hidden rounded-2xl">
                  <img src={exp.img} alt={exp.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="pt-5">
                  <h3 className="text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>{exp.name}</h3>
                  <p className="text-sm text-[#717171] mt-2">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Gallery</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Visual Stories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.values(images).map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={img} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: i === 0 ? 400 : 200 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking — CALENDAR MODE (modal) */}
      <section id="booking" className="py-24 px-6 bg-[#FBF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Reservations</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Check Availability</h2>
          <p className="text-[#717171] mt-4 mb-8">Select your dates on the calendar to see room availability and pricing.</p>
          <div id="foxes-booking-heritage"></div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-white" style={{ background: ACCENT }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Begin your journey</h2>
          <p className="text-white/80 mt-4">42 Derb Sidi Ahmed, Medina, Marrakech, Morocco &middot; +212 5 1234 5678 &middot; reservations@riadamber.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0F] text-white/40 py-10 px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} The Riad Amber. All rights reserved.</p>
        <p className="mt-2">Booking powered by <span className="font-bold text-[#FF5A1F]">foxes</span></p>
      </footer>
    </div>
  );
}
