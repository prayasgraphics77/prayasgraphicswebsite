"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Gallery items with gradient placeholders (replace src with actual images later)
const galleryItems = [
  { id: 1, title: "Abstract Bloom", category: "Abstract", aspect: "tall", gradient: "from-rose-200 via-pink-100 to-orange-100" },
  { id: 2, title: "Urban Geometry", category: "Architecture", aspect: "wide", gradient: "from-slate-300 via-blue-100 to-indigo-100" },
  { id: 3, title: "Golden Hour", category: "Nature", aspect: "square", gradient: "from-amber-200 via-yellow-100 to-orange-50" },
  { id: 4, title: "Midnight Minimal", category: "Minimal", aspect: "square", gradient: "from-zinc-900 via-zinc-700 to-zinc-600" },
  { id: 5, title: "Ocean Drift", category: "Nature", aspect: "tall", gradient: "from-cyan-200 via-sky-100 to-teal-50" },
  { id: 6, title: "Type Study No. 3", category: "Typography", aspect: "wide", gradient: "from-violet-200 via-purple-100 to-pink-50" },
  { id: 7, title: "Botanical Series", category: "Nature", aspect: "square", gradient: "from-emerald-200 via-green-100 to-lime-50" },
  { id: 8, title: "Street Light", category: "Urban", aspect: "square", gradient: "from-orange-200 via-red-100 to-pink-100" },
  { id: 9, title: "Monolith", category: "Abstract", aspect: "wide", gradient: "from-stone-400 via-stone-200 to-stone-50" },
];

const categories = ["All", "Abstract", "Architecture", "Nature", "Minimal", "Typography", "Urban"];

const aspectClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 md:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] bg-white px-8 py-12 shadow-sm md:px-14 mb-4"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-blue-500" />
          Our Work
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
          The Gallery
        </h1>
        <p className="mt-4 max-w-lg text-[15px] font-medium text-zinc-500">
          A showcase of our premium manufacturing projects — from complex ACP works to vibrant LED displays and high-quality flex printing.
        </p>
      </motion.div>

      {/* Category filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-zinc-950 text-white"
                : "bg-white text-zinc-500 shadow-sm hover:bg-zinc-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 gap-4 md:grid-cols-3 auto-rows-[200px]"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative cursor-pointer overflow-hidden rounded-[20px] shadow-sm ${
                aspectClasses[item.aspect] ?? ""
              }`}
              onClick={() => setLightboxItem(item)}
            >
              <div
                className={`h-full w-full bg-linear-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  {item.category}
                </p>
                <p className="font-heading text-base font-bold text-white leading-tight">
                  {item.title}
                </p>
              </div>
              {/* Zoom icon */}
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4 text-zinc-700" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-[24px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`aspect-4/3 w-full bg-linear-to-br ${lightboxItem.gradient}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  {lightboxItem.category}
                </p>
                <p className="font-heading text-2xl font-bold text-white">
                  {lightboxItem.title}
                </p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
