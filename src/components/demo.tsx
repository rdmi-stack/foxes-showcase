"use client";

import { useState, useEffect } from "react";

function Waveform() {
  const [bars, setBars] = useState<number[]>([]);
  useEffect(() => {
    setBars(Array.from({ length: 32 }, (_, i) => 15 + Math.sin(i * 0.5) * 30 + Math.random() * 40));
  }, []);
  if (bars.length === 0) return <div className="flex h-24 items-end justify-center gap-1.5 mb-8" />;
  return (
    <div className="flex h-24 items-end justify-center gap-1.5 mb-8">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-indigo-500 via-pink-500 to-orange-400"
          style={{ height: `${h}%`, animationDelay: `${i * 0.05}s`, opacity: 0.7 }}
        />
      ))}
    </div>
  );
}

const sampleQuestions = [
  "What tours do you offer?",
  "How much is the Pyramids & Nile Cruise?",
  "What's your cancellation policy?",
  "I want to book a Red Sea trip for 2",
  "Do you have Arabic-speaking guides?",
  "What are your contact details?",
];

export function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Live Demo</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">Talk to our AI agent now</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Click the voice widget in the bottom-right corner to start a conversation.
            Ask anything about Egypt tours — the agent has a full knowledge base.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Try asking</h3>
            <div className="space-y-3">
              {sampleQuestions.map((q) => (
                <div
                  key={q}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 hover:bg-indigo-50 hover:border-indigo-200 transition cursor-default"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700 font-medium">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 shadow-2xl">
              <div className="text-center">
                {/* Animated waveform */}
                <Waveform />

                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/10 px-6 py-3 backdrop-blur">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <span className="text-white font-medium">Emma is listening...</span>
                </div>

                <p className="mt-6 text-white/40 text-sm">
                  Click the microphone button in the bottom-right corner to start
                </p>

                {/* Agent info */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: "Agent", value: "Emma" },
                    { label: "Engine", value: "GPT + TTS" },
                    { label: "KB Docs", value: "14" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <p className="text-xs text-white/40">{item.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pointer to widget */}
            <div className="absolute -bottom-4 right-8 flex items-center gap-2 text-sm text-slate-400">
              <span>Widget is here</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
