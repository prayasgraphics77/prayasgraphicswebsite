"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  "All Posters",
  "Minimal",
  "Abstract",
  "Nature",
  "Urban",
  "Cars",
  "Retro"
];

export default function CategoriesSidebar() {
  const [activeCategory, setActiveCategory] = useState("All Posters");

  return (
    <div className="w-full lg:w-48 flex-shrink-0">
      {/* 
        Mobile: Horizontal scrollable row 
        Desktop: Vertical stack
      */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "flex-shrink-0 px-5 py-3 rounded-full text-sm font-semibold transition-colors duration-200 text-left",
              activeCategory === category
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
