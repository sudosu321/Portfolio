"use client";
import { useState } from "react";
import ShowcaseSection from "./ShowcaseSection";
import Image from "next/image";

const skills = [
  { icon: "01", name: "Adobe Photoshop", desc: "Photo editing, compositing, retouching" },
  { icon: "02", name: "Da Vinci", desc: "Video editing, Motion Design" },
  { icon: "03", name: "Figma", desc: "UI/UX design, prototyping" },
  { icon: "04", name: "Canva", desc: "Raw designs" },
];

const marqueeItems = [
  "Merh Design", "Adobe Photoshop", "UI/UX",
  "Typography", "Video Editing",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black font-sans overflow-x-hidden" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}>
      <title>Srijan Shubh`s Portfolio</title>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 md:py-6 bg-white border-b-2 border-black">
        <span className="font-black text-base tracking-[0.2em] uppercase">Srijan Shubh</span>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-black transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-black transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none items-center">
          {["Resume"].map((item) => (
            <li key={item}>
              <a href="/works/resume.pdf" target="_blank" className="text-[0.72rem] font-black text-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity no-underline">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.72rem] font-black bg-black text-white px-6 py-2.5 uppercase tracking-[0.15em] hover:bg-white hover:text-black border-2 border-black transition-colors no-underline">
              LinkedIn ↗
            </a>
          </li>
        </ul>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-black px-6 py-6 flex flex-col gap-5">
            <a href="#" className="text-[0.72rem] font-black text-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity no-underline">
              About
            </a>
            <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.72rem] font-black bg-black text-white px-6 py-2.5 uppercase tracking-[0.15em] hover:bg-white hover:text-black border-2 border-black transition-colors no-underline text-center">
              LinkedIn ↗
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-end pt-28 md:pt-32 relative border-b-2 border-black overflow-hidden">
        {/* Large background number */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[clamp(14rem,35vw,28rem)] leading-none tracking-tighter text-black/5 translate-y-8">
            SS
          </span>
        </div>

        {/* Left */}
        <div className="flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16 z-10">
          <div className=" hero-reveal delay-3 flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-black mb-8">
            <span className="inline-block w-8 h-[2px] bg-black" />
            Available for work
          </div>

          <div className="hero-reveal delay-3  text-[0.65rem] font-black uppercase tracking-[0.25em] text-black/40 mb-3">
            MINIMAL — 2025–2027
          </div>
          <h1 className="hero-reveal delay-3 font-black text-[clamp(4rem,12vw,9rem)] leading-[0.88] tracking-[-0.04em] text-black uppercase transition-all hover:scale-105 transition-300">
            Srijan<br />
            Shubh
          </h1>

          <p className="hero-reveal delay-3 mt-6 text-[0.8rem] text-black/50 uppercase tracking-[0.15em] font-bold max-w-xs">
            Graphic Designer · Video Editor · Growth Marketer
          </p>
        </div>

                {/* Right — photo */}
        <div className="hero-reveal delay-3 flex items-end justify-center md:justify-end z-10 px-6 md:px-12 pb-8 md:pb-12">
          <div
            className="relative w-full max-w-[600px] aspect-[4/3]"
            style={{ filter: "grayscale(0%)" }}
          >
            <Image
              src="/works/Events/1.png"
              alt="Srijan Shubh"
              fill
              className="object-contain transition-transform duration-400 hover:scale-105"
              priority
            />

            <div className="absolute inset-0 border-0 border-black pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-5 border-b-2 border-black bg-black overflow-hidden flex">
        <div className="flex shrink-0 animate-[marquee_20s_linear_infinite]">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-10 text-[0.65rem] font-black tracking-[0.25em] uppercase text-white/70 flex items-center gap-8 whitespace-nowrap after:content-['✦'] after:text-white/30 after:text-[0.55rem]">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <ShowcaseSection />

      {/* ── ABOUT ── */}
      <section className="bg-black text-white grid grid-cols-1 md:grid-cols-2 border-t-2 border-white/10">
        {/* Left — text */}
        <div className="px-6 md:px-12 py-20 md:py-28 border-b-2 md:border-b-0 md:border-r-2 border-white/10">
          <div className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-white/40 mb-4">
            # ABOUT ME
          </div>
          <h2 className="font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-[-0.03em] uppercase text-white mb-10">
            Design<br />
            Visual<br />
            Intel<span className="text-white/20">ligence</span>
          </h2>
          <p className="text-[0.9rem] leading-[1.9] text-white/50 font-normal mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Growth marketer and product design enthusiast with experience driving startup growth through data-driven strategies. Generated 150+ sales meetings, increased social media reach by 50,000+ impressions, and leveraged SQL, PowerBI, and design tools for business impact.
          </p>
          <p className="text-[0.9rem] leading-[1.9] text-white/50 font-normal" style={{ fontFamily: "Georgia, serif" }}>
            Based in India · Working worldwide · Fluent in Adobe Creative Suite, Figma, and more.
          </p>
          <div className="mt-10">
            <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.65rem] font-black bg-white text-black px-6 py-3 uppercase tracking-[0.2em] hover:bg-black hover:text-white border-2 border-white transition-colors no-underline inline-block">
              Connect ↗
            </a>
          </div>
        </div>

        {/* Right — skill grid */}
        <div className="grid grid-cols-2">
          {skills.map((s, idx) => (
            <div
              key={s.name}
              className={`p-8 border-white/10 hover:bg-white hover:text-black transition-all duration-200 cursor-default group
                ${idx % 2 === 0 ? "border-r-2" : ""}
                ${idx < 2 ? "border-b-2" : ""}
              `}
            >
              <div className="font-black text-[3.5rem] leading-none text-white/10 group-hover:text-black/10 mb-4 tracking-[-0.04em]">
                {s.icon}
              </div>
              <div className="text-[0.72rem] font-black uppercase tracking-[0.15em] text-white group-hover:text-black mb-1">{s.name}</div>
              <div className="text-[0.68rem] text-white/40 group-hover:text-black/50 uppercase tracking-wider">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-12 py-7 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
        <span className="font-black text-sm uppercase tracking-[0.2em]">Srijan Shubh</span>
        <span className="text-[0.65rem] text-black/40 text-center font-bold uppercase tracking-widest">© 2026 Srijan Shubh. All rights reserved.</span>
        <div className="flex gap-8">
          <a href="" target="_blank" className="text-[0.65rem] font-black text-black/40 no-underline hover:text-black transition-colors uppercase tracking-widest">
            shubhsrijan15@gmail.com
          </a>
          
          <a href="https://www.linkedin.com/in/srijanshubh/" target="_blank" className="text-[0.65rem] font-black text-black/40 no-underline hover:text-black transition-colors uppercase tracking-widest">
            LinkedIn ↗
          </a>
          <a href="" target="_blank" className="text-[0.65rem] font-black text-black/40 no-underline hover:text-black transition-colors uppercase tracking-widest">
          +91 720-968-2555
          </a>
        </div>
      </footer>
    </main>
  );
}