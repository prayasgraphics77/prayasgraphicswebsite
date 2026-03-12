"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:px-6">
      <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white p-8 md:p-14 shadow-sm">
        <h2 className="max-w-md font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl lg:text-[56px]">
          Let Your Walls Tell Your Story!
        </h2>
        <p className="mt-6 max-w-sm text-base font-medium text-zinc-500">
          From vibrant art prints to minimalist designs, we offer a diverse collection perfect for home, office, or gifting.
        </p>
        <div className="mt-10">
          <button className="flex w-fit items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-700">
            Explore Our Collection
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[32px] bg-zinc-100 p-8 shadow-sm min-h-[500px]">
        {/* Placeholder for the masonry grid */}
        <div className="grid grid-cols-3 gap-4 w-[140%] -rotate-6 scale-110 opacity-60">
           <div className="aspect-3/4 bg-white rounded-lg shadow-md" />
           <div className="aspect-3/4 bg-white rounded-lg shadow-md mt-10" />
           <div className="aspect-3/4 bg-white rounded-lg shadow-md" />
           
           <div className="aspect-3/4 bg-white rounded-lg shadow-md" />
           <div className="aspect-3/4 bg-white rounded-lg shadow-md mt-10" />
           <div className="aspect-3/4 bg-white rounded-lg shadow-md" />

           <div className="aspect-3/4 bg-white rounded-lg shadow-md" />
           <div className="aspect-3/4 bg-white rounded-lg shadow-md mt-10" />
           <div className="aspect-3/4 bg-white rounded-lg shadow-md" />
        </div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex aspect-3/4 w-64 items-center justify-center bg-white shadow-2xl rounded-sm border-12 border-white">
               <h3 className="font-heading text-4xl font-extrabold text-zinc-900">Prayas Graphics</h3>
            </div>
        </div>
      </div>
    </section>
  );
}
