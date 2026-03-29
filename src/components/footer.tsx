export function Footer() {
  return (
    <footer className="bg-slate-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-pink-500 to-orange-500">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Foxes Voice AI</span>
          </div>
          <p className="text-sm text-white/40 max-w-md">
            Intelligent voice agents for hospitality, travel, and service businesses. Built by Foxes Technology.
          </p>
          <div className="mt-8 text-xs text-white/30">
            &copy; {new Date().getFullYear()} Foxes Technology LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
