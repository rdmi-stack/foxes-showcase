"use client";

import { useEffect } from "react";

const PROPERTY_ID = "69bba14234aa22d0127f7acb";
const API_URL = typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:3000" : "https://foxes-hotel.netlify.app";
const ACCENT = "#4F46E5";

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
  hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=900&fit=crop",
  room1: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
  room2: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
  meeting: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  lounge: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  skyline: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=600&fit=crop",
};

export default function CityHotel() {
  useWidget({
    src: `${API_URL}/widget/foxes-booking.js`,
    "data-property-id": PROPERTY_ID,
    "data-api-url": API_URL,
    "data-mode": "button",
    "data-container": "foxes-booking-city",
    "data-accent": ACCENT,
    "data-button-text": "Check Availability & Book",
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight" style={{ color: ACCENT }}>METRO LUXE</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#555]">
            <a href="#rooms" className="hover:text-[#1a1a1a] transition">Rooms</a>
            <a href="#business" className="hover:text-[#1a1a1a] transition">Business</a>
            <a href="#amenities" className="hover:text-[#1a1a1a] transition">Amenities</a>
            <a href="#location" className="hover:text-[#1a1a1a] transition">Location</a>
          </div>
          <div id="foxes-booking-city-btn"></div>
        </div>
      </nav>

      {/* Hero — architectural, minimal */}
      <section className="relative h-[80vh] min-h-[600px] mt-16">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E2E]/80 to-transparent" />
        <div className="relative h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl">
              <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">Downtown Cairo</p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">Business meets comfort.</h1>
              <p className="text-white/60 mt-4 text-base">The modern professional's home in the heart of the city. High-speed connectivity, executive lounges, and rooms designed for productivity.</p>
              <div className="flex gap-3 mt-8">
                <a href="#booking" className="h-11 px-7 rounded-lg text-sm font-semibold text-white flex items-center transition hover:opacity-90" style={{ background: ACCENT }}>Book Direct — Best Rate</a>
                <a href="#rooms" className="h-11 px-7 rounded-lg text-sm font-semibold text-white flex items-center border border-white/30 hover:bg-white/10 transition">View Rooms</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Strip */}
      <section className="bg-[#F7F7F8] py-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Free WiFi", sub: "1Gbps Fiber" },
            { label: "Meeting Rooms", sub: "12 Available" },
            { label: "Airport Shuttle", sub: "Complimentary" },
            { label: "24/7 Gym", sub: "Technogym" },
          ].map(u => (
            <div key={u.label}>
              <p className="text-sm font-bold text-[#1a1a1a]">{u.label}</p>
              <p className="text-xs text-[#999]">{u.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Accommodations</p>
            <h2 className="text-3xl font-black text-[#1a1a1a] tracking-tight">Rooms & Suites</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Executive King", desc: "Ergonomic workspace, dual monitors available, Nespresso machine", img: images.room1, price: "$180", tag: "Most Popular" },
              { name: "Business Suite", desc: "Separate living area, meeting table for 4, premium mini-bar", img: images.room2, price: "$320", tag: "Best Value" },
              { name: "Premium Corner", desc: "Corner room with panoramic city views and rain shower", img: images.lounge, price: "$280", tag: "" },
              { name: "Standard Room", desc: "Smart room with fast WiFi and comfortable work desk", img: images.gym, price: "$120", tag: "" },
            ].map(room => (
              <div key={room.name} className="flex gap-5 p-4 rounded-xl border border-[#eee] hover:border-[#ccc] hover:shadow-lg transition-all group">
                <div className="w-40 h-32 rounded-lg overflow-hidden shrink-0">
                  <img src={room.img} alt={room.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#1a1a1a]">{room.name}</h3>
                      {room.tag && <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>{room.tag}</span>}
                    </div>
                    <p className="text-xs text-[#717171] mt-1">{room.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-black" style={{ color: ACCENT }}>From {room.price}<span className="text-xs font-normal text-[#999]">/night</span></span>
                    <a href="#booking" className="text-xs font-semibold hover:underline" style={{ color: ACCENT }}>Book &rarr;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="py-20 px-6 bg-[#F7F7F8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>For Professionals</p>
            <h2 className="text-3xl font-black text-[#1a1a1a] tracking-tight">Built for business</h2>
            <p className="text-[#717171] mt-4 leading-relaxed">Whether you&apos;re closing a deal or catching up on emails, every detail is designed for the modern professional.</p>
            <ul className="mt-6 space-y-3">
              {["12 fully-equipped meeting rooms (2-50 people)", "Dedicated co-working lounge open 24/7", "1Gbps fiber internet throughout the property", "Business center with printing & scanning", "Executive lounge with complimentary refreshments", "Airport express shuttle every 30 minutes"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#555]">
                  <span className="mt-0.5 h-4 w-4 rounded-full flex items-center justify-center text-white text-[10px] shrink-0" style={{ background: ACCENT }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={images.meeting} alt="Meeting rooms" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="relative py-20 px-6">
        <img src={images.skyline} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#1E1E2E]/85" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <p className="text-xs uppercase tracking-[0.2em] mb-4 text-white/50">Location</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">In the heart of everything</h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">5 minutes to the business district, 10 minutes to major attractions, 35 minutes to Cairo International Airport.</p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[{ val: "5 min", label: "Business District" }, { val: "10 min", label: "Shopping & Dining" }, { val: "35 min", label: "Airport" }].map(d => (
              <div key={d.label}>
                <p className="text-2xl font-black">{d.val}</p>
                <p className="text-xs text-white/50 mt-1">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget — BUTTON MODE (in nav + section) */}
      <section id="booking" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Reservations</p>
          <h2 className="text-3xl font-black text-[#1a1a1a] tracking-tight">Book your stay</h2>
          <p className="text-[#717171] mt-3">Best rate guaranteed when you book direct. Click below to check availability.</p>
          <div className="mt-8 flex justify-center" id="foxes-booking-city"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#eee]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-lg font-black" style={{ color: ACCENT }}>METRO LUXE</span>
            <p className="text-xs text-[#999] mt-1">Downtown Cairo, Egypt &middot; +20 2 987 6543</p>
          </div>
          <div className="text-sm text-[#999] flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Metro Luxe Hotel</span>
            <span>Powered by <span className="font-bold text-[#FF5A1F]">foxes</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
