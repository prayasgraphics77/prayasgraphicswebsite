"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  { id: 1, title: "Backlit LED Signage", category: "LED Displays", aspect: "tall", src: "/gallery/gallery_images (1).webp" },
  { id: 2, title: "Glow Sign Board", category: "LED Displays", aspect: "wide", src: "/gallery/gallery_images (24).webp" },
  { id: 3, title: "Silver ACP Finish", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (25).webp" },
  { id: 4, title: "Custom Poster Printing", category: "Printing", aspect: "square", src: "/gallery/gallery_images (26).webp" },
  { id: 5, title: "Structural Glass Glazing", category: "Facade", aspect: "tall", src: "/gallery/gallery_images (27).webp" },
  { id: 6, title: "Titanium Finish Letters", category: "Signage", aspect: "wide", src: "/gallery/gallery_images (28).webp" },
  { id: 7, title: "Mirror Finish Acrylic", category: "Signage", aspect: "square", src: "/gallery/gallery_images (29).webp" },
  { id: 8, title: "Louvered ACP Cladding", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (30).webp" },
  { id: 9, title: "Neon Flexible Lights", category: "LED Displays", aspect: "wide", src: "/gallery/gallery_images (31).webp" },
  { id: 10, title: "Marble Texture ACP", category: "ACP Work", aspect: "tall", src: "/gallery/gallery_images (32).webp" },
  { id: 11, title: "CNC Router Cutting", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (33).webp" },
  { id: 12, title: "Mesh Banner Print", category: "Printing", aspect: "wide", src: "/gallery/gallery_images (34).webp" },
  { id: 13, title: "3D Corporate Identity", category: "Signage", aspect: "square", src: "/gallery/gallery_images (35).webp" },
  { id: 14, title: "Exterior Facade Panel", category: "Facade", aspect: "tall", src: "/gallery/gallery_images (36).webp" },
  { id: 15, title: "Storefront LED Display", category: "LED Displays", aspect: "wide", src: "/gallery/gallery_images (37).webp" },
  { id: 16, title: "Precision Cut Metal", category: "Signage", aspect: "square", src: "/gallery/gallery_images (38).webp" },
  { id: 17, title: "Vinyl Graphics Print", category: "Printing", aspect: "square", src: "/gallery/gallery_images (39).webp" },
  { id: 18, title: "High-Rise Signage", category: "Signage", aspect: "wide", src: "/gallery/gallery_images (40).webp" },
  { id: 19, title: "Fabric Lightbox", category: "LED Displays", aspect: "tall", src: "/gallery/gallery_images (41).webp" },
  { id: 20, title: "Glass ACP Cladding", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (42).webp" },
  { id: 21, title: "Directional Signage", category: "Signage", aspect: "square", src: "/gallery/gallery_images (43).webp" },
  { id: 22, title: "Architectural Lettering", category: "Signage", aspect: "wide", src: "/gallery/gallery_images (44).webp" },
  { id: 23, title: "Matte Finish ACP", category: "ACP Work", aspect: "square", src: "/gallery/gallery_images (45).webp" },
  { id: 24, title: "Multi-Color Printing", category: "Printing", aspect: "square", src: "/gallery/gallery_images (1).png" },
  { id: 25, title: "Exhibition Branding", category: "Printing", aspect: "wide", src: "/gallery/gallery_images (3).png" },
  { id: 26, title: "Premium Shop Sign", category: "Signage", aspect: "tall", src: "/gallery/gallery_images (1).jpg" },
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
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[160px] sm:auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[280px]"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index % 10 * 0.05,
                ease: [0.23, 1, 0.32, 1] 
              }}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] border border-zinc-100 shadow-xs transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-950/10 hover:border-zinc-200",
                aspectClasses[item.aspect] ?? ""
              )}
              onClick={() => setLightboxItem(item)}
            >
              <div className="relative h-full w-full bg-zinc-50 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Polish Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-7 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                   <div className="flex items-center gap-2 mb-1 sm:mb-2 text-[10px] font-bold uppercase tracking-wider text-white/70">
                     <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-[#800080]" />
                     {item.category}
                   </div>
                   <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                     {item.title}
                   </h3>
                </div>

                {/* Mobile Always-Visible Category Indicator - Hidden on Hover */}
                <div className="absolute left-3 top-3 group-hover:hidden sm:hidden">
                    <span className="rounded-full bg-black/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                      {item.category}
                    </span>
                </div>

                {/* Zoom indicator */}
                <div className="absolute right-3 top-3 sm:right-4 sm:top-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 border border-white/20 hover:bg-white/20">
                  <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/98 p-3 sm:p-4 backdrop-blur-2xl"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative aspect-auto max-h-[90dvh] w-full max-w-5xl overflow-hidden rounded-[28px] sm:rounded-[40px] bg-zinc-900 shadow-2xl border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full bg-zinc-800">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent p-6 sm:p-8 md:p-14">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                   <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-[#800080]" />
                   <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                     {lightboxItem.category}
                   </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl md:text-6xl font-black text-white mb-3 sm:mb-6 tracking-tight">
                  {lightboxItem.title}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                  A comprehensive showcase of our premium {lightboxItem.category} project. This implementation features high-grade materials and precision engineering to ensure lasting impact and durability.
                </p>
              </div>
              
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute right-4 top-4 sm:right-8 sm:top-8 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:scale-110 active:scale-95 border border-white/10 group"
              >
                <X className="h-5 w-5 sm:h-7 sm:w-7 transition-transform group-hover:rotate-90" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
