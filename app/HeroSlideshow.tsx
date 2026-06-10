"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/works/Events/1.png",
  "/works/Events/3.png",
  "/works/Events/4.png",
  "/works/Graphics/4.png",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[600px] aspect-[4/3]   ">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-all bg-black/5 backdrop-blur-3xl  rounded-2xl hover:scale-105"
          style={{  opacity: i === current ? 1 : 0,
  transform: i === current ? "translateX(0)" : "translateX(100%)",
  transition: "all 0.7s ease",
  pointerEvents: i === current ? "auto" : "none",
boxShadow: "0 25px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)"}}
             
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            className="object-contain transition-all duration-700 backdrop-blur-3xl rounded-2xl"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dot indicators */}
    </div>
  );
}