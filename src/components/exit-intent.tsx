"use client";

import { useState, useEffect, useCallback } from "react";

export function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    agents: "",
  });

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !show && !sessionStorage.getItem("foxes_exit_shown")) {
        setShow(true);
        sessionStorage.setItem("foxes_exit_shown", "1");
      }
    },
    [show]
  );

  useEffect(() => {
    // Also trigger after 45s on page if user hasn't seen it
    const timer = setTimeout(() => {
      if (!show && !sessionStorage.getItem("foxes_exit_shown")) {
        setShow(true);
        sessionStorage.setItem("foxes_exit_shown", "1");
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [handleMouseLeave, show]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to backend /api/leads or similar
    console.log("Lead captured:", form);
    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-500 hover:bg-white hover:text-slate-900 transition shadow-sm"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left — Value proposition */}
        <div className="lg:w-[45%] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 flex flex-col justify-between text-white">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-white/70 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Limited offer
            </div>
            <h2 className="text-2xl font-bold leading-tight">
              Upgrade your customer experience with{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                AI voice agents.
              </span>
            </h2>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Book a personalized demo and see how Foxes Voice AI can automate your calls, bookings, and customer support — 24/7.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-8 grid grid-cols-1 gap-3">
            {[
              { icon: "sparkles", text: "GPT-powered agentic conversations" },
              { icon: "clock", text: "Setup in under 10 minutes" },
              { icon: "shield", text: "Enterprise-grade security" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  {item.icon === "sparkles" && (
                    <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  )}
                  {item.icon === "clock" && (
                    <svg className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {item.icon === "shield" && (
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-white/80">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Trusted by</p>
            <div className="flex items-center gap-6 text-white/30 text-xs font-semibold">
              <span>Hotels</span>
              <span className="text-white/10">|</span>
              <span>Travel Agencies</span>
              <span className="text-white/10">|</span>
              <span>Tour Operators</span>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:w-[55%] p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 mb-6">
                <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Thank you!</h3>
              <p className="mt-2 text-slate-500">We&apos;ll reach out within 24 hours to schedule your demo.</p>
              <button
                onClick={() => setShow(false)}
                className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900">See Foxes Voice AI in Action</h2>
              <p className="mt-1 text-sm text-slate-500">Book your 30-minute personalized demo</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="First Name*"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name*"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Work Email*"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number*"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
                <select
                  value={form.agents}
                  onChange={(e) => setForm({ ...form, agents: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition appearance-none bg-white"
                >
                  <option value="" disabled>Number of Agents Needed</option>
                  <option value="1">1 Agent</option>
                  <option value="2-5">2-5 Agents</option>
                  <option value="6-10">6-10 Agents</option>
                  <option value="10+">10+ Agents</option>
                </select>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl transition"
                  >
                    Book a demo
                  </button>
                  <span className="text-xs text-slate-400">
                    or call us: <span className="font-medium text-slate-600">+1 (555) 123-4567</span>
                  </span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
