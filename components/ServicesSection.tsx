"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Printer, Palette, Frame, Truck, Sparkles, Layers } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "ACP Inlay Signboard",
    description:
      "Durable Aluminum Composite Panel with precision-cut inlay text and logos. Ideal for sleek, modern, and long-lasting corporate identities.",
    tag: "Premium",
  },
  {
    icon: Layers,
    title: "Acrylic Letter Signboard",
    description:
      "Vibrant and versatile 3D acrylic letters. Perfect for indoor and outdoor retail environments requiring high visibility and depth.",
    tag: "Popular",
  },
  {
    icon: Sparkles,
    title: "Aluminium Channel Letter",
    description:
      "Robust aluminium channels with illuminated acrylic faces. Built for maximum architectural impact and weather resistance.",
    tag: "Architectural",
  },
  {
    icon: Frame,
    title: "Acrylic Mirror Gold Signboard",
    description:
      "Luxurious mirror-finish gold acrylic elements. Designed to give your brand a high-end, sophisticated aesthetic.",
    tag: "Luxury",
  },
  {
    icon: Palette,
    title: "Edge Lit Acrylic Letters",
    description:
      "Sleek acrylic letters illuminated from the edge, creating a stunning halo effect. Excellent for modern interiors and elegant storefronts.",
    tag: "Modern",
  },
  {
    icon: Truck,
    title: "Backlit Letters Signboard",
    description:
      "Bold letters with powerful rear illumination. Creates a striking contrast against any facade, ensuring your business stands out at night.",
    tag: "High-Visibility",
  },
  {
    icon: Printer,
    title: "Flex Backlit Board (GSB)",
    description:
      "Cost-effective, large-format flexible material stretched over a custom frame with internal lighting. The standard for large retail signage.",
    tag: "Standard",
  },
  {
    icon: Palette,
    title: "Lollipop Board",
    description:
      "Double-sided protruding signs, often circular or custom-shaped. Essential for capturing foot traffic attention from multiple directions.",
    tag: "Foot-Traffic",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 md:px-6">
      {/* Header card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] bg-zinc-950 px-8 py-14 text-white md:px-16 md:py-20 mb-4"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-400" />
          What We Offer
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl max-w-2xl">
          Art that speaks.
          <br />
          <span className="text-zinc-400">Services that deliver.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base font-medium text-zinc-400">
          From a single custom print to a large-scale corporate installation, Prayas Graphics has the expertise and infrastructure to bring your vision to life.
        </p>
      </motion.div>

      {/* Services grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group flex flex-col justify-between rounded-[24px] bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-zinc-950 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-zinc-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-500">
                    {service.tag}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-bold text-zinc-900 tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed font-medium text-zinc-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
