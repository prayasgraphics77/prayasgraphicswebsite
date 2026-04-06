"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import QuoteModal from "@/components/QuoteModal";
import { Plus, ShoppingBag } from "lucide-react";

export interface ServiceCardProps {
  slug: string;
  serviceName: string;
  description: string;
  badges?: { text: string; type: "popular" | "new" }[];
  image?: string;
  imageFit?: "cover" | "contain";
  originalPrice?: number;
  offerPrice?: number;
}

export default function ServiceCard({
  slug,
  serviceName,
  description,
  badges,
  image,
  imageFit = "cover",
  originalPrice,
  offerPrice,
}: ServiceCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToQuote = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleAddToQuote(e);
    }
  };

  return (
    <>
      <div 
        onClick={() => handleAddToQuote()}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="group relative flex flex-col overflow-hidden rounded-[20px] border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-md transition-all h-full cursor-pointer"
        aria-label={`View details and get a quote for ${serviceName}`}
      >
        <div className="relative flex aspect-4/3 items-center justify-center bg-zinc-100 w-full overflow-hidden">
          {badges && badges.length > 0 && (
            <div className="absolute left-4 right-4 top-4 flex justify-between z-20">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
                    badge.type === "popular" && "bg-[#800080] text-white",
                    badge.type === "new" && "bg-[#800080] text-white",
                    idx > 0 ? "ml-auto" : ""
                  )}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}

          <div className="absolute inset-0 z-0">
            {image ? (
              <Image 
                src={image} 
                alt={serviceName} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={cn(
                  "group-hover:scale-105 transition-transform duration-500",
                  imageFit === "contain" ? "object-contain p-4" : "object-cover"
                )} 
              />
            ) : (
              <div className="h-full w-full bg-linear-to-tr from-zinc-200 to-zinc-50" />
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 px-4 pb-4 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToQuote();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-zinc-700 active:scale-[0.97]"
              aria-label={`Get a quote for ${serviceName}`}
            >
              <Plus className="h-3.5 w-3.5" />
              Configure & Quote
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 border-t border-zinc-100 p-5 bg-white">
          <h3 className="font-heading text-lg font-bold text-zinc-900">{serviceName}</h3>
          <p className="text-sm text-zinc-500 line-clamp-3 mt-1 flex-1">{description}</p>
          <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-zinc-100">
            {originalPrice ? (
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Offer Price</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-zinc-400 line-through font-medium">₹{originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-sm font-bold text-[#800080]">
                    {offerPrice ? `₹${offerPrice.toLocaleString('en-IN')}` : "Special Rate"}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-sm font-semibold text-zinc-600">Price on Request</span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToQuote();
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
              aria-label={`Get a quote for ${serviceName}`}
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceSlug={slug}
      />
    </>
  );
}
