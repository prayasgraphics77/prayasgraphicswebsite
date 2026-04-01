"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const heroImages = [
  { src: "/hero/hero (1).jpg", alt: "Premium Signage Showcase 1" },
  { src: "/hero/hero (2).png", alt: "Premium Signage Showcase 2" },
  { src: "/hero/hero (3).webp", alt: "Premium Signage Showcase 3" },
  { src: "/hero/hero (4).webp", alt: "Premium Signage Showcase 4" },
  { src: "/hero/hero (5).webp", alt: "Premium Signage Showcase 5" },
  { src: "/hero/hero (6).webp", alt: "Premium Signage Showcase 6" },
  { src: "/hero/hero (7).webp", alt: "Premium Signage Showcase 7" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-24 pb-8 md:flex-row md:px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[450px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-6 md:min-h-[600px] md:p-10 shadow-sm"
      >
        <div className="flex flex-col gap-6">
          <div className="max-w-md pt-12 md:pt-24">
            <h1 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 md:text-4xl lg:text-[52px]">
              High-Quality Signboards for Every Business.
            </h1>
            <p className="mt-6 max-w-sm text-base text-zinc-500 font-medium">
              Transform your brand's visibility with stunning, durable, and captivating signage solutions!
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500 font-medium">
              Powered by <a href="https://intrface.in" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-800 hover:underline">intrface</a>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              {/* X (Twitter) */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-linear-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.24 8.24 0 0 0 4.83 1.55V6.84a4.85 4.85 0 0 1-1.06-.15z" />
                </svg>
              </a>
            </div>
          </div>

          <button className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-zinc-950 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-zinc-900 shadow-sm hover:shadow-xl hover:shadow-zinc-900/20 active:scale-[0.98]">
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[450px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-6 shadow-sm md:min-h-[600px]"
      >
        <div className="flex flex-1 items-center justify-center">
          {/* Main Showcase Image Carousel */}
          <div className="relative aspect-3/4 w-2/3 max-w-[320px] shadow-2xl transition-transform duration-500 hover:scale-[1.02] rounded-[16px] overflow-hidden bg-zinc-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[activeIndex].src}
                  alt={heroImages[activeIndex].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 66vw, 320px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between rounded-xl bg-zinc-100 px-4 py-3">
            <span className="text-sm font-semibold text-zinc-800">Premium Quality</span>
            <span className="text-sm font-semibold text-zinc-800">Custom Built</span>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {heroImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition-colors duration-300",
                  activeIndex === i ? "border-zinc-800 p-0.5" : "border-transparent hover:border-zinc-200"
                )}
              >
                <div className="relative h-full w-full rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    src={img.src}
                    alt={`Thumbnail ${img.alt}`}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      activeIndex !== i && "hover:scale-110"
                    )}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
