"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
              {/* Google Reviews */}
              <a href="https://g.page/r/CbL_ssLkBR47EAI/review" target="_blank" rel="noopener noreferrer" aria-label="Review us on Google"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-[#4285F4] hover:text-white hover:-translate-y-0.5 hover:shadow-md">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.79-4.01-8.79-8.97s3.95-8.97 8.79-8.97c2.75 0 4.59 1.17 5.65 2.18l2.58-2.49c-1.66-1.55-3.82-2.5-8.23-2.5-6.63 0-12 5.37-12 12s5.37 12 12 12c6.92 0 11.52-4.87 11.52-11.72 0-.79-.08-1.39-.18-1.99h-11.34z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/prayas_graphics_77/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-linear-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/prayasgraphics/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-[#1877F2] hover:text-white hover:-translate-y-0.5 hover:shadow-md">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.55 9.8V14.8h-2.6v-2.8h2.6v-2.15c0-2.57 1.52-3.98 3.86-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.27 0-1.67.79-1.67 1.6v1.8h2.85l-.45 2.8h-2.4V21.8c5.11-.93 8.55-4.96 8.55-9.8z"/>
                </svg>
              </a>
            </div>
          </div>

          <Link href="/services" className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-zinc-950 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-zinc-900 shadow-sm hover:shadow-xl hover:shadow-zinc-900/20 active:scale-[0.98]">
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </Link>
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
