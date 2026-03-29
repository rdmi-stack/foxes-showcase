"use client";

import { useEffect } from "react";

const PROPERTY_ID = "69bba14234aa22d0127f7acb";
const API_URL = typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:3000" : "https://foxes-hotel.netlify.app";
const ACCENT = "#8B6914";

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
  hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop",
  room1: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
  room2: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&h=400&fit=crop",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
  lobby: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
};

export default function LuxuryHotel() {
  useWidget({
    src: `${API_URL}/widget/foxes-booking.js`,
    "data-property-id": PROPERTY_ID,
    "data-api-url": API_URL,
    "data-mode": "inline",
    "data-container": "foxes-booking-luxury",
    "data-accent": ACCENT,
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>The Grand Aurelia</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#rooms" className="hover:text-white transition">Rooms</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#booking" className="hover:text-white transition">Contact</a>
          </div>
          <a href="#booking" className="h-10 px-6 rounded-full text-sm font-semibold text-white flex items-center border border-white/30 hover:bg-white/10 transition">Reserve</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[700px]">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-6">Est. 1924 &middot; Cairo, Egypt</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>The Grand<br />Aurelia</h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl">Where timeless elegance meets modern luxury on the banks of the Nile</p>
          <div className="flex gap-4 mt-10">
            <a href="#booking" className="h-12 px-8 rounded-full text-sm font-semibold text-white flex items-center transition hover:opacity-90" style={{ background: ACCENT }}>Book Your Stay</a>
            <a href="#rooms" className="h-12 px-8 rounded-full text-sm font-semibold text-white flex items-center border border-white/30 hover:bg-white/10 transition">Explore Rooms</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>A Legacy of Luxury</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>A century of unforgettable experiences</h2>
          <p className="text-lg text-[#717171] mt-6 leading-relaxed max-w-2xl mx-auto">For over a hundred years, The Grand Aurelia has been the jewel of Cairo — a sanctuary where royalty, artists, and discerning travelers find refuge in extraordinary luxury.</p>
        </div>
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          {[{ num: "120+", label: "Luxury Rooms & Suites" }, { num: "4.9", label: "Guest Rating" }, { num: "100", label: "Years of Excellence" }].map(s => (
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
              { name: "Royal Penthouse", desc: "The pinnacle of luxury with private terrace and butler service", img: images.room1, price: "From $1,200" },
              { name: "Executive Suite", desc: "Spacious suite with panoramic Nile views and separate living area", img: images.room2, price: "From $450" },
              { name: "Premium Nile View", desc: "Elegant room with floor-to-ceiling windows overlooking the river", img: images.lobby, price: "From $280" },
              { name: "Deluxe Room", desc: "Refined comfort with modern amenities and city views", img: images.pool, price: "From $180" },
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
                  <a href="#booking" className="inline-flex items-center gap-1 text-sm font-semibold mt-4 hover:gap-2 transition-all" style={{ color: ACCENT }}>Book Now &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Beyond the Room</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "The Aurelia Spa", desc: "Ancient Egyptian-inspired treatments in a serene riverside sanctuary", img: images.spa },
              { name: "Nile Terrace Dining", desc: "Award-winning cuisine with panoramic sunset views over the Nile", img: images.dining },
              { name: "Infinity Pool", desc: "Swim above the city in our rooftop pool with 360-degree views", img: images.pool },
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

      {/* Booking Widget — INLINE MODE */}
      <section id="booking" className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>Reservations</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your Stay</h2>
            <p className="text-[#717171] mt-4">Check availability and reserve your room directly — no commission, best rate guaranteed.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-[#e5e5e5] p-2">
            <div id="foxes-booking-luxury"></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-white" style={{ background: ACCENT }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Begin your Aurelia experience</h2>
          <p className="text-white/80 mt-4">123 Corniche El Nil, Cairo, Egypt &middot; +20 2 1234 5678 &middot; reservations@grandaurelia.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0F] text-white/40 py-10 px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} The Grand Aurelia. All rights reserved.</p>
        <p className="mt-2">Booking powered by <span className="font-bold text-[#FF5A1F]">foxes</span></p>
      </footer>
    </div>
  );
}
