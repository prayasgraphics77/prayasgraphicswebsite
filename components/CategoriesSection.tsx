"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CategoriesSection() {
  const categories = ["LED Signs", "Acrylic Letters", "ACP Boards", "Neon Signs", "Flex Hoardings", "Directional Signs"];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-sm md:py-24">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          Browse Categories
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500 max-w-md">
          Explore solutions tailored perfectly for your brand's unique needs.
        </p>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category, idx) => (
            <Link
              href="/"
              key={idx}
              className="group flex h-24 items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-all hover:border-zinc-300 hover:shadow-sm"
            >
              <span className="text-base font-semibold text-zinc-800 transition-transform group-hover:scale-105">
                {category}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/categories"
          className="mt-12 flex items-center gap-2 border-b border-zinc-900 pb-1 text-[15px] font-semibold text-zinc-900 transition-opacity hover:opacity-70"
        >
          View all categories
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
