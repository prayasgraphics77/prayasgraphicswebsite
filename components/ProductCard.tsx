"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import DimensionModal, { type DimensionFormValues } from "@/components/DimensionModal";
import { ShoppingBag, Plus } from "lucide-react";

export interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  badges?: { text: string; type: "sale" | "popular" | "new" }[];
}

/**
 * Legacy product card: adds to quote with dimensions (same flow as ServiceCard).
 * Prefer ServiceCard for new usage.
 */
export default function ProductCard({ id, title, price, originalPrice, badges }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToQuote = () => {
    setModalOpen(true);
  };

  const handleConfirmDimensions = (values: DimensionFormValues) => {
    addItem({
      id: `${id}-${Date.now()}`,
      serviceName: title,
      width: values.width,
      height: values.height,
      unit: values.unit,
      area: values.area,
      notes: values.notes,
    });
    openCart();
  };

  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
        <div className="relative flex aspect-square items-center justify-center p-8 bg-white overflow-hidden">
          {badges && badges.length > 0 && (
            <div className="absolute left-4 right-4 top-4 flex justify-between z-10">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    badge.type === "sale" && "border border-[#800080]/20 text-[#800080] bg-white",
                    badge.type === "popular" && "bg-[#800080] text-white",
                    badge.type === "new" && "bg-[#800080] text-white",
                    idx > 0 && badge.type === "sale" ? "ml-auto" : "",
                    idx > 0 && badge.type !== "sale" ? "ml-auto" : ""
                  )}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}

          <div className="relative aspect-3/4 w-[200px] shadow-xl group-hover:scale-105 transition-transform duration-500">
            <div className="h-full w-full bg-linear-to-tr from-zinc-200 to-zinc-50 rounded-sm" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 px-4 pb-4 z-20">
            <button
              onClick={handleAddToQuote}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-zinc-700 active:scale-[0.97]"
              aria-label={`Add ${title} to quote`}
            >
              <Plus className="h-3.5 w-3.5" />
              Add to Quote
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-zinc-100 p-5 bg-white">
          <h3 className="font-heading text-lg font-bold text-zinc-900">{title}</h3>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-zinc-900">{price}</span>
              {originalPrice && (
                <span className="text-sm font-medium text-zinc-400 line-through">
                  {originalPrice}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToQuote}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white sm:hidden"
              aria-label={`Add ${title} to quote`}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <DimensionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={title}
        onConfirm={handleConfirmDimensions}
      />
    </>
  );
}
