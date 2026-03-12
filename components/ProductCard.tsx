"use client";

import { cn } from "@/lib/utils";

export interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  badges?: { text: string; type: "sale" | "popular" | "new" }[];
}

export default function ProductCard({ title, price, originalPrice, badges }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
      <div className="relative flex aspect-square items-center justify-center p-8 bg-white">
        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute left-4 right-4 top-4 flex justify-between z-10">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  badge.type === "sale" && "border border-blue-200 text-blue-500 bg-white",
                  badge.type === "popular" && "bg-blue-600 text-white",
                  badge.type === "new" && "bg-blue-600 text-white",
                  idx > 0 && badge.type === "sale" ? "ml-auto" : "", // push second badge to right if needed
                  idx > 0 && badge.type !== "sale" ? "ml-auto" : ""
                )}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}

        {/* Product Image Placeholder */}
        <div className="relative aspect-3/4 w-[200px] shadow-xl group-hover:scale-105 transition-transform duration-500">
           <div className="h-full w-full bg-linear-to-tr from-zinc-200 to-zinc-50 rounded-sm" />
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-zinc-100 p-5 bg-white">
        <h3 className="font-heading text-lg font-bold text-zinc-900">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-zinc-900">{price}</span>
          {originalPrice && (
            <span className="text-sm font-medium text-zinc-400 line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
