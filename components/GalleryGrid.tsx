"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  { id: 1, title: "Backlit LED Signage", category: "LED Displays", aspect: "tall", src: "/gallery/led-displays/backlit-led-signage.webp" },
  { id: 2, title: "Glow Sign Board", category: "LED Displays", aspect: "wide", src: "/gallery/led-displays/glow-sign-board.webp" },
  { id: 3, title: "Silver ACP Finish", category: "ACP Work", aspect: "square", src: "/gallery/acp-work/silver-acp-finish.webp" },
  { id: 4, title: "Custom Poster Printing", category: "Printing", aspect: "square", src: "/gallery/printing/custom-poster-printing.webp" },
  { id: 5, title: "Structural Glass Glazing", category: "Facade", aspect: "tall", src: "/gallery/facade/structural-glass-glazing.webp" },
  { id: 6, title: "Titanium Finish Letters", category: "Signage", aspect: "wide", src: "/gallery/signage/titanium-finish-letters.webp" },
  { id: 7, title: "Mirror Finish Acrylic", category: "Signage", aspect: "square", src: "/gallery/signage/mirror-finish-acrylic.webp" },
  { id: 8, title: "Louvered ACP Cladding", category: "ACP Work", aspect: "square", src: "/gallery/acp-work/louvered-acp-cladding.webp" },
  { id: 9, title: "Neon Flexible Lights", category: "LED Displays", aspect: "wide", src: "/gallery/led-displays/neon-flexible-lights.webp" },
  { id: 10, title: "Marble Texture ACP", category: "ACP Work", aspect: "tall", src: "/gallery/acp-work/marble-texture-acp.webp" },
  { id: 11, title: "CNC Router Cutting", category: "ACP Work", aspect: "square", src: "/gallery/acp-work/cnc-router-cutting.webp" },
  { id: 12, title: "Mesh Banner Print", category: "Printing", aspect: "wide", src: "/gallery/printing/mesh-banner-print.webp" },
  { id: 13, title: "3D Corporate Identity", category: "Signage", aspect: "square", src: "/gallery/signage/3d-corporate-identity.webp" },
  { id: 14, title: "Exterior Facade Panel", category: "Facade", aspect: "tall", src: "/gallery/facade/exterior-facade-panel.webp" },
  { id: 15, title: "Storefront LED Display", category: "LED Displays", aspect: "wide", src: "/gallery/led-displays/storefront-led-display.webp" },
  { id: 16, title: "Precision Cut Metal", category: "Signage", aspect: "square", src: "/gallery/signage/precision-cut-metal.webp" },
  { id: 17, title: "Vinyl Graphics Print", category: "Printing", aspect: "square", src: "/gallery/printing/vinyl-graphics-print.webp" },
  { id: 18, title: "High-Rise Signage", category: "Signage", aspect: "wide", src: "/gallery/signage/high-rise-signage.webp" },
  { id: 19, title: "Fabric Lightbox", category: "LED Displays", aspect: "tall", src: "/gallery/led-displays/fabric-lightbox.webp" },
  { id: 20, title: "Glass ACP Cladding", category: "ACP Work", aspect: "square", src: "/gallery/acp-work/glass-acp-cladding.webp" },
  { id: 21, title: "Directional Signage", category: "Signage", aspect: "square", src: "/gallery/signage/directional-signage.webp" },
  { id: 22, title: "Architectural Lettering", category: "Signage", aspect: "wide", src: "/gallery/signage/architectural-lettering.webp" },
  { id: 23, title: "Matte Finish ACP", category: "ACP Work", aspect: "square", src: "/gallery/acp-work/matte-finish-acp.webp" },
  { id: 24, title: "Multi-Color Printing", category: "Printing", aspect: "square", src: "/gallery/printing/multi-color-printing.png" },
  { id: 25, title: "Exhibition Branding", category: "Printing", aspect: "wide", src: "/gallery/printing/exhibition-branding.png" },
  { id: 26, title: "Premium Shop Sign", category: "Signage", aspect: "tall", src: "/gallery/signage/premium-shop-sign.jpg" },
];

const categories = ["All", "Signage", "LED Displays", "ACP Work", "Printing", "Facade"];

const aspectClasses: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-4 sm:pt-10 pb-8 md:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white border border-zinc-100 p-6 sm:p-10 md:p-16 mb-8 md:mb-12 shadow-sm"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-purple-50 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl opacity-50" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-[13px] font-bold text-zinc-600 mb-4 sm:mb-6 tracking-tight">
            <span className="flex h-2 w-2 rounded-full bg-[#800080] animate-pulse" />
            Product Gallery
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-zinc-900 mb-4 sm:mb-6">
            The Signage <span className="text-zinc-400">Vault</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl font-medium text-zinc-500 leading-relaxed">
            From precision-cut ACP letters to custom-built LED displays, every project in this gallery represents our commitment to manufacturing excellence and durable visual branding.
          </p>
        </div>
      </motion.div>

      {/* Filter Toolbar */}
      <div className="sticky top-20 sm:top-24 z-30 mb-8 flex items-center justify-between gap-4 rounded-[28px] bg-white/70 border border-white/20 p-2 backdrop-blur-xl shadow-xl ring-1 ring-zinc-950/5">
        <div className="no-scrollbar flex w-full overflow-x-auto gap-1 sm:gap-1.5 p-1 md:w-auto md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative flex-shrink-0 rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 text-[13px] sm:text-sm font-bold transition-all duration-300 overflow-hidden",
                activeCategory === cat
                  ? "text-white shadow-md"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
              )}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 z-0 bg-zinc-900"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-2 pr-6 border-l border-zinc-200 ml-4 pl-6">
           <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap">
             {filtered.length} Projects
           </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-5 space-y-3 sm:space-y-4 md:space-y-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index % 12 * 0.05,
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="break-inside-avoid relative"
            >
              <div 
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] border border-zinc-100 shadow-xs transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-950/10 hover:border-zinc-200 block bg-zinc-50 w-full",
                    aspectClasses[item.aspect] ?? "aspect-square"
                  )}
                  onClick={() => setLightboxItem(item)}
              >
                  <Image
                    src={item.src}
                    alt="Gallery Image"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Centered Zoom Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/98 p-3 sm:p-4 backdrop-blur-2xl"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-[90vw] max-w-6xl h-[80vh] md:h-[90vh] overflow-hidden rounded-[20px] sm:rounded-[32px] bg-zinc-950 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={lightboxItem.src}
                  alt="Gallery Zoom Image"
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
              
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-xl transition-all hover:bg-black/80 hover:scale-110 active:scale-95 border border-white/20 z-10 group"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:rotate-90" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
