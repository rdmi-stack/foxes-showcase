const steps = [
  {
    num: "01",
    title: "User speaks or types",
    desc: "Voice is captured via the browser microphone and transcribed using OpenAI Whisper, or the user types a message directly.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    num: "02",
    title: "AI processes with tools",
    desc: "GPT analyzes the request, searches the knowledge base via vector similarity, and calls tools like booking or complaint handlers.",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    num: "03",
    title: "Voice response streams back",
    desc: "The response is streamed sentence-by-sentence to OpenAI TTS, generating natural audio that plays as it arrives — under 2 seconds.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">How It Works</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">Three steps to a conversation</h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className={`flex gap-6 rounded-2xl border ${step.border} ${step.bg} p-8 items-start`}>
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ${step.color} text-2xl font-bold shadow-sm border ${step.border}`}>
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block ml-auto shrink-0 self-center">
                  <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-6">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-400">
            {["OpenAI GPT", "Whisper STT", "OpenAI TTS", "MongoDB Atlas", "Vector Search", "Node.js", "Next.js", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
