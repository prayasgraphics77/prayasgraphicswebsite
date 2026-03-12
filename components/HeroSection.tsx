"use client";

import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-24 pb-8 md:flex-row md:px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[450px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-6 md:min-h-[600px] md:p-10 shadow-sm"
      >
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Holiday Sale! Posters are up to 50% off!
          </div>

          <div className="max-w-md pt-12 md:pt-24">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 md:text-5xl lg:text-[72px]">
              High-Quality Art Prints for Every Space and Story.
            </h1>
            <p className="mt-6 max-w-sm text-base text-zinc-500 font-medium">
              Transform your space with stunning posters that inspire, motivate, and captivate!
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500 font-medium">
              Powered by <a href="https://intrface.in" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-800 hover:underline">intrface</a>
            </div>
            <div className="hidden items-center gap-3 text-zinc-400 sm:flex">
              <span className="text-sm font-bold">X</span>
              <span className="text-sm font-bold">IG</span>
              <span className="text-sm font-bold">TK</span>
            </div>
          </div>

          <button className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-zinc-950 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-zinc-900 shadow-sm hover:shadow-xl hover:shadow-zinc-900/20 active:scale-[0.98]">
            <span className="relative z-10 flex items-center gap-2">
              Find Your Poster
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search posters..."
              className="w-full rounded-full border border-zinc-200 py-3 pl-4 pr-10 text-sm font-medium outline-none transition-colors focus:border-zinc-300"
            />
            <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[450px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-6 shadow-sm md:min-h-[600px]"
      >
        <div className="flex flex-1 items-center justify-center">
          {/* Main Showcase Image Placeholder */}
          <div className="relative aspect-3/4 w-2/3 max-w-[320px] shadow-2xl transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center overflow-hidden">
               <div className="h-full w-full bg-linear-to-tr from-zinc-200 to-zinc-50" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between rounded-xl bg-zinc-100 px-4 py-3">
            <span className="text-sm font-semibold text-zinc-800">Less is more</span>
            <span className="text-sm font-semibold text-zinc-800">$15.00</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 transition-colors",
                  i === 1 ? "border-zinc-800 p-1" : "border-transparent hover:border-zinc-200"
                )}
              >
                <div className="h-full w-full bg-zinc-100 rounded-lg overflow-hidden">
                   <div className="h-full w-full bg-linear-to-br from-zinc-200 to-zinc-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
