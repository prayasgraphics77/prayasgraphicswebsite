"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

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
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link href={`/services/${service.slug}`} className="group flex flex-col justify-between rounded-[24px] bg-white p-8 shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-md hover:border-zinc-200 h-full">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex relative items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-zinc-950 transition-colors duration-300 w-12 h-12">
                      <Icon className="h-5 w-5 text-zinc-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-500">
                      {service.tag}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed font-medium text-zinc-500 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  Get a Quote 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
