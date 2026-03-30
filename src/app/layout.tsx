import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Foxes Technology | AI-Powered Solutions for Hospitality",
  description: "Explore our suite of AI products: Voice Agents, Semantic Search, and Hotel Booking — built for hospitality and travel businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* DNS prefetch for widget domains */}
        <link rel="dns-prefetch" href="https://foxesapp.netlify.app" />
        <link rel="dns-prefetch" href="https://ai-search-agent.netlify.app" />
        <link rel="dns-prefetch" href="https://foxes-hotel.netlify.app" />
        <link rel="preconnect" href="https://foxesapp.netlify.app" />
        <link rel="preconnect" href="https://ai-search-agent.netlify.app" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
