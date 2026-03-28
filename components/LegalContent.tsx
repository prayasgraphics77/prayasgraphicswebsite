"use client";

import { motion } from "framer-motion";

interface Section {
  heading: string;
  body: string | string[];
}

interface LegalContentProps {
  tag: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalContent({
  tag,
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalContentProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 md:px-6">
      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] bg-zinc-950 px-8 py-14 text-white md:px-16 md:py-20 mb-4"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-[#800080]/80" />
          {tag}
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base font-medium text-zinc-400">{subtitle}</p>
        <p className="mt-6 text-xs font-medium text-zinc-500">Last updated: {lastUpdated}</p>
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] bg-white px-8 py-12 shadow-sm md:px-16 md:py-16"
      >
        <div className="max-w-3xl flex flex-col gap-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-heading text-xl font-bold text-zinc-900 mb-3">
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                <ul className="flex flex-col gap-2">
                  {section.body.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] leading-relaxed font-medium text-zinc-500">
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[14px] leading-relaxed font-medium text-zinc-500">
                  {section.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
