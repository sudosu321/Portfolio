"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  "/works/Events/1.png",
  "/works/Events/3.png",
  "/works/Events/4.png",
  "/works/Graphics/4.png",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const transitioning = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (transitioning.current) return;
      transitioning.current = true;
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % slides.length;
      });
      setTimeout(() => { transitioning.current = false; }, 700);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const getStyle = (i: number) => {
    if (i === current) return { transform: "translateX(0%)", transition: "transform 0.7s ease", zIndex: 2 };
    if (i === prev)    return { transform: "translateX(-100%)", transition: "transform 0.7s ease", zIndex: 1 };
    return { transform: "translateX(100%)", transition: "none", zIndex: 0 };
  };

  return (
    <div
      className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)" }}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={getStyle(i)}
        >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover scale-110 blur-xl brightness-100"
              priority={i === 0}
            />
            {/* Actual image on top */}
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-contain relative z-10"
              priority={i === 0}
            />
          
        </div>
      ))}
    </div>
  );
}