"use client";

import { useState, useEffect, useRef } from "react";

const ALGOLIA_APP_ID = "WMDNV9WSOI";
const ALGOLIA_SEARCH_KEY = "f485b4906072cedbd2f51a46e5ac2637";
const ALGOLIA_INDEX = "foxes_technology";

interface Hit {
  objectID: string;
  title?: string;
  name?: string;
  description?: string;
  location?: string;
  destination?: { name?: string } | string;
  duration?: string;
  price?: number;
  salePrice?: number;
  rating?: number;
  reviewCount?: number;
  images?: string[];
  featured?: boolean;
}

export function SearchDemo() {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!query.trim()) { setHits([]); setSearched(false); return; }

    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX}/query`,
          {
            method: "POST",
            headers: {
              "X-Algolia-Application-Id": ALGOLIA_APP_ID,
              "X-Algolia-API-Key": ALGOLIA_SEARCH_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, hitsPerPage: 6 }),
          }
        );
        const data = await res.json();
        setHits(data.hits || []);
        setSearched(true);
      } catch {
        setHits([]);
      }
      setLoading(false);
    }, 300);
  }, [query]);

  const getDestName = (hit: Hit) => {
    if (typeof hit.destination === "object" && hit.destination?.name) return hit.destination.name;
    if (typeof hit.destination === "string") return hit.destination;
    return hit.location || "";
  };

  return (
    <section id="search-demo" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Live Demo</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">Try it now</h2>
          <p className="mt-4 text-lg text-slate-500">Search across tours, destinations, and activities — powered by AI semantic search.</p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-8 sm:p-10 shadow-2xl">
          {/* Search input */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: pyramids tour, snorkeling, nile cruise, desert safari..."
              className="w-full rounded-2xl bg-white/10 border border-white/10 pl-12 pr-4 py-4 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/50 backdrop-blur"
            />
            {loading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Results */}
          {searched && hits.length > 0 && (
            <div className="mt-6 space-y-3">
              {hits.map((hit) => (
                <div key={hit.objectID} className="flex gap-4 rounded-xl bg-white/5 border border-white/5 p-4 hover:bg-white/10 transition">
                  {hit.images?.[0] && (
                    <img src={hit.images[0]} alt="" className="w-20 h-20 rounded-lg object-cover shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-white font-semibold text-sm truncate">{hit.title || hit.name}</h4>
                      {hit.featured && <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full shrink-0">Featured</span>}
                    </div>
                    <p className="text-white/40 text-xs mt-1 line-clamp-2">{hit.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      {getDestName(hit) && (
                        <span className="text-xs text-white/50 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                          {getDestName(hit)}
                        </span>
                      )}
                      {hit.duration && <span className="text-xs text-white/50">{hit.duration}</span>}
                      {hit.rating && <span className="text-xs text-amber-400">{"★".repeat(Math.round(hit.rating))} {hit.rating}</span>}
                      {hit.price && (
                        <span className="text-xs font-semibold text-emerald-400 ml-auto">
                          {hit.salePrice ? <><span className="line-through text-white/30 mr-1">${hit.price}</span>${hit.salePrice}</> : `$${hit.price}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-xs text-white/20 text-center pt-2">Showing {hits.length} results — powered by Algolia + Pinecone vectors</p>
            </div>
          )}

          {searched && hits.length === 0 && !loading && (
            <div className="mt-8 text-center text-white/40 text-sm">No results found for &ldquo;{query}&rdquo;</div>
          )}

          {!searched && (
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {["Pyramids tour", "Snorkeling Red Sea", "Nile cruise", "Desert safari", "Luxor temple"].map((s) => (
                <button key={s} onClick={() => setQuery(s)} className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/10 transition">
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
