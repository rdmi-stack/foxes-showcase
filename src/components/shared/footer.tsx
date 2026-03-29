import Link from "next/link";

const productLinks = [
  { name: "Voice Agent", href: "/voice-agent" },
  { name: "Search Agent", href: "/search-agent" },
  { name: "Hotel Booking", href: "/hotel-booking" },
];

const companyLinks = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-pink-500 to-orange-500">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Foxes Technology</span>
            </div>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed">
              AI-powered solutions for hospitality, travel, and service businesses. Voice agents, semantic search, and booking management — all in one platform.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-white transition">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Foxes Technology LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
