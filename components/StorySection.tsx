"use client";

import { motion } from "framer-motion";

const placeholderItems = [1, 2, 3, 4];

function Column({
  items,
  reverse = false,
  className,
  speed = 20,
}: {
  items: number[];
  reverse?: boolean;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`relative flex flex-col gap-4 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] ${className || ""}`}>
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-4"
      >
        {/* Render items twice to create the seamless infinite scroll effect */}
        {[...items, ...items].map((_, i) => (
          <div
            key={i}
            className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function StorySection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:p-6 lg:p-8">
      {/* Left Section: Information and Call to Action */}
      <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white p-8 shadow-sm md:p-14">
        <h2 className="max-w-md font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl lg:text-[56px]">
          Let Your Signage Tell Your Brand&apos;s Story!
        </h2>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-500">
          From vibrant art prints to minimalist designs, we offer a diverse collection perfect for home, office, or gifting. Make a lasting impression today.
        </p>
        <div className="mt-10">
          <button className="flex w-fit items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-95">
            Explore Our Collection
          </button>
        </div>
      </div>

      {/* Right Section: Animated Dynamic Carousel */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[32px] bg-zinc-100 p-8 shadow-sm min-h-[500px] md:min-h-[600px] lg:min-h-[640px]">
        {/* Animated Background Grid */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 px-4 opacity-80 mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
          aria-hidden="true"
        >
          {/* Column 1 */}
          <Column
            items={placeholderItems}
            reverse={false}
            speed={25}
            className="translate-y-[-10%]"
          />
          {/* Column 2 */}
          <Column
            items={placeholderItems}
            reverse={true}
            speed={20}
            className="translate-y-[10%]"
          />
          {/* Column 3 (Hidden on smaller screens to prevent crowding) */}
          <Column
            items={placeholderItems}
            reverse={false}
            speed={28}
            className="hidden sm:flex translate-y-[-5%]"
          />
        </div>

        {/* Center Static Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="flex aspect-4/3 w-[280px] md:w-[320px] items-center justify-center rounded-2xl bg-white shadow-2xl border-12 border-white md:rounded-3xl">
            <h3 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900">
              Prayas Graphics
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
