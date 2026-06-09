"use client";

import { useState, useEffect } from "react";

const works = [
  { file: "Events/1.png", category: "Events" },
  { file: "Events/2.png", category: "Events" },
  { file: "Events/3.png", category: "Events" },
  { file: "Events/4.png", category: "Events" },
  { file: "Events/5.png", category: "Events" },
  { file: "Merch/1.png", category: "Merch" },
  { file: "Merch/2.png", category: "Merch" },
  { file: "Merch/3.png", category: "Merch" },
  { file: "Merch/4.png", category: "Merch" },
  { file: "Graphics/1.png", category: "Graphics" },
  { file: "Graphics/2.png", category: "Graphics" },
  { file: "Graphics/3.png", category: "Graphics" },
  { file: "Graphics/4.png", category: "Graphics" },
  { file: "Graphics/5.png", category: "Graphics" },
  { file: "Graphics/6.png", category: "Graphics" },
  { file: "video/1.mp4", category: "Video Editing" },
  { file: "video/3.mp4", category: "Video Editing" },
];

function isVideo(file: string) {
  return file.endsWith(".mp4");
}

function WorkItem({
  item,
  onClick,
}: {
  item: (typeof works)[0];
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {isVideo(item.file) ? (
        <video
          src={`/works/${item.file}`}
          className="w-full h-auto block transition-all duration-500"
          style={{ filter: hovered ? "grayscale(0%)" : "grayscale(100%)" }}
          muted
          autoPlay
          loop
          playsInline
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/works/${item.file}`}
          alt={item.category}
          className="w-full h-auto block transition-all duration-500 hover:scale-105"
          style={{ filter: hovered ? "grayscale(0%)" : "grayscale(40%)" }}
        />
      )}

      {/* Category label on hover */}
      <div
        className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 pointer-events-none ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white font-black text-[0.6rem] uppercase tracking-[0.3em] bg-black/60 px-3 py-1.5">
          {item.category}
        </span>
      </div>
    </div>
  );
}

function Modal({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: (typeof works)[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-white font-black text-[0.65rem] uppercase tracking-[0.25em] border-2 border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors z-10"
        onClick={onClose}
      >
        Close ✕
      </button>

      {/* Category label */}
      <div className="absolute top-6 left-6 text-white font-black text-[0.65rem] uppercase tracking-[0.25em] z-10">
        {item.category}
      </div>

      {/* Media */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo(item.file) ? (
          <video
            key={item.file}
            src={`/works/${item.file}`}
            className="max-w-full max-h-[85vh] w-auto h-auto block"
            controls
            autoPlay
            loop
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.file}
            src={`/works/${item.file}`}
            alt={item.category}
            className="max-w-full max-h-[85vh] w-auto h-auto block"
          />
        )}
      </div>

      {/* Prev / Next */}
      <button
        className="
  absolute left-4 md:left-8 top-1/2 -translate-y-1/2
  text-white font-black text-[0.65rem]
  uppercase tracking-[0.2em]
  bg-white/10 backdrop-blur-md
  border border-white/40
  shadow-[0_0_25px_rgba(255,255,255,0.25)]
  w-12 h-12
  flex items-center justify-center
  hover:bg-white hover:text-black
  hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]
  transition-all duration-300
  "
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <h1>←</h1>
      </button>
      <button
className="
absolute right-4 md:right-8 top-1/2 -translate-y-1/2
text-white font-black text-[0.65rem]
uppercase tracking-[0.2em]
bg-white/10 backdrop-blur-md
border border-white/40
shadow-[0_0_25px_rgba(255,255,255,0.25)]
w-12 h-12
flex items-center justify-center
hover:bg-white hover:text-black
hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]
hover:scale-110
transition-all duration-300
z-10
"     onClick={(e) => { e.stopPropagation(); onNext(); }}
      ><h1>→</h1>
        
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 font-black text-[0.6rem] uppercase tracking-[0.25em]">
        {works.indexOf(item) + 1} / {works.length}
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (i: number) => setActiveIndex(i);
  const closeModal = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? 0 : (i - 1 + works.length) % works.length));
  const next = () => setActiveIndex((i) => (i === null ? 0 : (i + 1) % works.length));

  return (
    <section className="bg-white py-20 border-b-2 border-black">
      {/* Header */}
      <div className="px-8 md:px-16 mb-12 flex items-end justify-between">
        <div>
          <div className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-black/40 mb-2">
            # PORTFOLIO
          </div>
          <h2 className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-[-0.03em] uppercase text-black">
            Some of my works
          </h2>
        </div>
        <div className="font-black text-[clamp(4rem,10vw,7rem)] leading-none tracking-[-0.05em] text-black/5 select-none pointer-events-none">
          {String(works.length).padStart(2, "0")}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="px-8 md:px-16">
        <div className="columns-2 sm:columns-2 md:columns-3 gap-4">
          {works.map((item, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <WorkItem item={item} onClick={() => openModal(i)} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <Modal
          item={works[activeIndex]}
          onClose={closeModal}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}