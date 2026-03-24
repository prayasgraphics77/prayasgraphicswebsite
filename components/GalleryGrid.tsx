"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Acrylic Corporate Board", category: "Signage", aspect: "tall", src: "/gallery/gallery_images (1).webp" },
  { id: 2, title: "Front-lit Shop Sign", category: "LED Displays", aspect: "wide", src: "/gallery/gallery_images (2).webp" },
  { id: 3, title: "Brushed Metal Finish", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (3).webp" },
  { id: 4, title: "Large Format Flex", category: "Printing", aspect: "square", src: "/gallery/gallery_images (4).webp" },
  { id: 5, title: "Building Elevation", category: "Facade", aspect: "tall", src: "/gallery/gallery_images (5).webp" },
  { id: 6, title: "RGB Neon Lettering", category: "LED Displays", aspect: "wide", src: "/gallery/gallery_images (6).webp" },
  { id: 7, title: "Directional Wayfinding", category: "Signage", aspect: "square", src: "/gallery/gallery_images (7).webp" },
  { id: 8, title: "Router Cut Panel", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (8).webp" },
  { id: 9, title: "Modern Showroom Front", category: "Facade", aspect: "wide", src: "/gallery/gallery_images (9).webp" },
  { id: 10, title: "Golden Mirror Finish", category: "Signage", aspect: "tall", src: "/gallery/gallery_images (10).webp" },
  { id: 11, title: "Backlit Fabric Frame", category: "LED Displays", aspect: "square", src: "/gallery/gallery_images (11).webp" },
  { id: 12, title: "Event Venue Branding", category: "Printing", aspect: "wide", src: "/gallery/gallery_images (12).webp" },
  { id: 13, title: "3D Business Identiy", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (13).webp" },
  { id: 14, title: "Premium Reception Desk", category: "Signage", aspect: "tall", src: "/gallery/gallery_images (14).webp" },
  { id: 15, title: "Mall Retail Facade", category: "Facade", aspect: "wide", src: "/gallery/gallery_images (15).webp" },
  { id: 16, title: "Custom Totem Sign", category: "Signage", aspect: "square", src: "/gallery/gallery_images (16).webp" },
  { id: 17, title: "Industrial LED Strip", category: "LED Displays", aspect: "square", src: "/gallery/gallery_images (17).webp" },
  { id: 18, title: "Vehicle Graphics", category: "Printing", aspect: "wide", src: "/gallery/gallery_images (18).webp" },
  { id: 19, title: "Architectural Louvers", category: "Facade", aspect: "tall", src: "/gallery/gallery_images (19).webp" },
];

const categories = ["All", "Signage", "LED Displays", "ACP Work", "Printing", "Facade"];

const aspectClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "row-span-1 col-span-1",
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
              <div className="relative h-full w-full bg-zinc-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
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
              <div className="relative aspect-4/3 w-full bg-zinc-100">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
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
