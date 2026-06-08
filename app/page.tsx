"use client";
import { useState } from "react";
import ShowcaseSection from "./ShowcaseSection";
import Image from "next/image";

const skills = [
  { icon: "🎨", name: "Adobe Photoshop", desc: "Photo editing, compositing, retouching" },
  { icon: "🎬", name: "Da Vinci", desc: "Video editing ,Motion Design" },
  { icon: "🧩", name: "Figma", desc: "UI/UX design, prototyping" },
  { icon: "🖼️", name: "Canva", desc: "Raw designs" },
];

const marqueeItems = [
  "Merch Design", "Adobe Photoshop", "UI/UX",
   "Typography", "Video Editing",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1a1612] font-sans overflow-x-hidden">
      <title>Srijan Shubh`s Portfolio</title>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 md:py-6 bg-[#faf8f5]/85 backdrop-blur-md border-b border-black/10">
        <span className="font-serif font-bold text-lg tracking-tight">Srijan Shubh</span>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-px bg-[#1a1612] transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-px bg-[#1a1612] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-px bg-[#1a1612] transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none items-center">
          {["Resume"].map((item) => (
            <li key={item}>
              <a   href="/works/resume.pdf"
                target="_blank"
                rel="noopener noreferrer" className="text-[0.82rem] font-normal text-[#6b6560] uppercase tracking-widest hover:text-[#1a1612] transition-colors no-underline">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.78rem] font-medium bg-[#1a1612] text-white px-5 py-2 rounded-full uppercase tracking-widest hover:bg-[#D85A30] transition-colors no-underline">
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf8f5] border-b border-black/10 px-6 py-5 flex flex-col gap-5">
            <a href="#" className="text-[0.82rem] font-normal text-[#6b6560] uppercase tracking-widest hover:text-[#1a1612] transition-colors no-underline">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.78rem] font-medium bg-[#1a1612] text-white px-5 py-2 rounded-full uppercase tracking-widest hover:bg-[#D85A30] transition-colors no-underline text-center">
              LinkedIn
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-end gap-10 md:gap-16 px-6 md:px-12 pt-28 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#F5C4B3]/30 pointer-events-none" />

        {/* Left */}
        <div className="flex flex-col justify-end pl-10 md:pl-20">
          <div className="flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#D85A30] mb-6">
            <span className="inline-block w-6 h-px bg-[#D85A30]" />
            Available for work
          </div>

          <h1 className="font-serif font-black text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] tracking-[-0.03em] text-[#1a1612]">
            Srijan<br />
            <em className="italic text-[#D85A30]">Shubh</em>
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-end justify-center md:justify-end md:ml-auto md:pr-20">
          <div className="relative rounded-[2rem] overflow-hidden w-[420px] md:w-[420px] aspect-[4/5] transition-transform duration-500 hover:scale-105 shadow-[0_32px_64px_rgba(216,90,48,0.25)]">
            <Image
              src="/works/Events/4.png"
              alt="Srijan Shubh"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-8 border-t border-b border-black/10 bg-[#1a1612] overflow-hidden flex">
        <div className="flex shrink-0 animate-[marquee_20s_linear_infinite]" style={{ animationTimingFunction: "linear" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-10 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-white/50 flex items-center gap-8 whitespace-nowrap after:content-['✦'] after:text-[#D85A30] after:text-[0.6rem]">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <ShowcaseSection />

      {/* ── ABOUT ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-[#1a1612] text-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <div className="flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#F0997B] mb-3">
            <span className="inline-block w-5 h-px bg-[#F0997B]" />
            About Me
          </div>
          <h2 className="font-serif font-bold text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white">
            Design - The visual{" "}
            <em className="italic text-[#F0997B]">intelligence</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-white/60 mt-6">
            Growth marketer and product design enthusiast with experience driving startup growth through data-driven strategies. Generated 150+ sales meetings, increased social media reach by 50,000+ impressions, and leveraged SQL, PowerBI, and design tools for business impact. Proven leader who managed large-scale events and high-performing teams.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-white/60 mt-4">
            Based in India · Working worldwide · Fluent in Adobe Creative Suite, Figma, and more.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="p-5 border border-white/10 rounded-2xl hover:border-[#F0997B]/40 hover:bg-[#F0997B]/5 transition-all cursor-default"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="text-[0.875rem] font-medium text-white mb-1">{s.name}</div>
              <div className="text-[0.75rem] text-white/40">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-12 py-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#faf8f5]">
        <span className="font-serif font-bold text-base">Srijan Shubh</span>
        <span className="text-[0.78rem] text-[#6b6560] text-center">© 2026 Srijan Shubh. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="" target="_blank" className="text-[0.78rem] text-[#6b6560] no-underline hover:text-[#D85A30] transition-colors">
            shubhsrijan15@gmail.com 
          </a>
          <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.78rem] text-[#6b6560] no-underline hover:text-[#D85A30] transition-colors">
            LinkedIn
          </a>
          <a href="" target="_blank" className="text-[0.78rem] text-[#6b6560] no-underline hover:text-[#D85A30] transition-colors">
            +91 720-968-2555
          </a>
          
        </div>
      </footer>
    </main>
  );
}