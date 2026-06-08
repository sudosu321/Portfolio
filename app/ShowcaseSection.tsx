"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "Events",
    works: [
      { file: "Events/1.png", title: "" },
      { file: "Events/2.png", title: "" },
      { file: "Events/3.png", title: "" },
      { file: "Events/4.png", title: "" },
      { file: "Events/5.png", title: "" },
    ],
  },
  {
    label: "Merch",
    works: [
      { file: "Merch/1.png", title: "" },
      { file: "Merch/2.png", title: "" },
      { file: "Merch/3.png", title: "" },
      { file: "Merch/4.png", title: "" },
    ],
  },
  {
    label: "Graphics",
    works: [
      { file: "Graphics/1.png", title: "" },
      { file: "Graphics/2.png", title: "" },
      { file: "Graphics/3.png", title: "" },
      { file: "Graphics/4.png", title: "" },
      { file: "Graphics/5.png", title: "" },
      { file: "Graphics/6.png", title: "" },
    ],
  },
  {
    label: "Video Editing",
    works: [
      { file: "video/1.mp4", title: "" },
      { file: "video/3.mp4", title: "" },
    ],
  },
];

function isVideo(file: string) {
  return file.endsWith(".mp4");
}

// ── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  works,
  startIndex,
  onClose,
}: {
  works: (typeof tabs)[number]["works"];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + works.length) % works.length),
    [works.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % works.length),
    [works.length]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const work = works[idx];

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* panel — stop click from closing when clicking inside */}
      <div
        className="relative flex flex-col items-center max-w-[92vw] max-h-[92vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >

        {/* close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-3xl leading-none select-none"
        >
          ×
        </button>

        {/* media */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-[#111] shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
          style={{ maxHeight: "80vh", aspectRatio: "4/3" }}
        >
          {isVideo(work.file) ? (
            <video
              key={work.file}
              src={`/works/${work.file}`}
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              key={work.file}
              src={`/works/${work.file}`}
              alt={work.title}
              fill
              className="object-contain"
              priority
            />
          )}
        </div>

        {/* nav row */}
        <div className="flex items-center gap-6 mt-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#D85A30] transition-all"
          >
            ‹
          </button>

          {/* dot strip */}
          <div className="flex gap-2">
            {works.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === idx ? "w-5 bg-[#D85A30]" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#D85A30] transition-all"
          >
            ›
          </button>
        </div>

        {/* counter */}
        <p className="mt-3 text-[0.72rem] text-white/40 tracking-widest uppercase">
          {idx + 1} / {works.length}
        </p>
      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  function handleTab(i: number) {
    setActiveTab(i);
    setActiveImg(0);
  }

  const current = tabs[activeTab];
  const activeWork = current.works[activeImg];

  return (
    <>
      {lightboxIdx !== null && (
        <Lightbox
          works={current.works}
          startIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}

      <section className="bg-[#faf8f5] py-24 px-12 overflow-hidden">
        <title>Srijan Shubh`s Portfolio</title>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#D85A30] mb-3">
            <span className="inline-block w-[18px] h-px bg-[#D85A30]" />
            Portfolio
          </div>
          <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.02em] text-[#1a1612]">
            Some of my works
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-black/10 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => handleTab(i)}
              className={`relative px-8 py-4 text-[0.82rem] bg-transparent border-none cursor-pointer tracking-wide transition-colors whitespace-nowrap font-sans ${
                activeTab === i
                  ? "text-[#1a1612] font-medium"
                  : "text-[#6b6560] hover:text-[#1a1612] font-normal"
              }`}
            >
              {tab.label}
              {activeTab === i && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#D85A30]" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-[1fr_260px] gap-6 items-start">

          {/* Main display — click opens lightbox */}
          <button
            onClick={() => setLightboxIdx(activeImg)}
            className="relative rounded-[1.5rem] overflow-hidden max-w-2xl bg-[#1a1612] shadow-[0_24px_60px_rgba(26,22,18,0.15)] group cursor-zoom-in text-left"
            style={{ aspectRatio: "4/3" }}
            aria-label="Open full screen"
          >
            {isVideo(activeWork.file) ? (
              /* Videos: don't hijack click for lightbox — let controls work */
              <video
                key={activeWork.file}
                src={`/works/${activeWork.file}`}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <>
                <Image
                  key={activeWork.file}
                  src={`/works/${activeWork.file}`}
                  alt={activeWork.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                {/* hover hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
                  <span className="bg-black/60 text-white text-[0.78rem] tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-sm">
                    Open
                  </span>
                </div>
              </>
            )}

            {/* bottom label */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
              <span className="text-white/90 text-[0.8rem] font-medium tracking-wide">
                {activeWork.title}
              </span>
            </div>
          </button>

          {/* Thumbnail stack */}
          <div className="flex flex-col gap-4 max-w-36">
            {current.works.map((w, i) => (
              <button
                key={w.file}
                onClick={() => setActiveImg(i)}
                onDoubleClick={() => setLightboxIdx(i)}
                className={`relative rounded-2xl overflow-hidden bg-[#1a1612] border-2 transition-all duration-200 cursor-pointer w-full ${
                  activeImg === i
                    ? "border-[#D85A30] scale-[1.02]"
                    : "border-transparent opacity-60 hover:opacity-90 hover:scale-[1.01]"
                }`}
                style={{ aspectRatio: "4/3" }}
                aria-label={`View item ${i + 1}`}
                title="Click to select · Double-click to open"
              >
                {isVideo(w.file) ? (
                  <video
                    src={`/works/${w.file}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={`/works/${w.file}`}
                    alt={w.title}
                    fill
                    className="object-cover"
                  />
                )}
                {activeImg === i && (
                  <div className="absolute inset-0 ring-2 ring-[#D85A30] rounded-2xl pointer-events-none" />
                )}
              </button>
            ))}

            {/* dot indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {current.works.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1.5 rounded-full transition-all duration-250 ${
                    activeImg === i
                      ? "w-5 bg-[#D85A30]"
                      : "w-1.5 bg-black/20 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="mt-8 flex items-center gap-3">
          <span className="text-[0.75rem] text-[#6b6560] tracking-widest uppercase">
            {activeImg + 1} / {current.works.length}
          </span>
          <span className="inline-block flex-1 h-px bg-black/10" />
          <span className="text-[0.75rem] text-[#6b6560] tracking-widest uppercase">
            {current.label}
          </span>
        </div>
      </section>
    </>
  );
}