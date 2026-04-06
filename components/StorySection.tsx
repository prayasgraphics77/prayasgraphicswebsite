"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ClientLogo {
  src: string;
  alt: string;
  name: string;
}

const allLogos: ClientLogo[] = [
  { src: "/clients/logo (1).jpeg", alt: "Chola Logo", name: "Chola" },
  { src: "/clients/logo (2).jpeg", alt: "SMFG India Credit Logo", name: "SMFG India Credit" },
  { src: "/clients/logo (3).jpeg", alt: "Fortune Logo", name: "Fortune" },
  { src: "/clients/logo (4).jpeg", alt: "NoBroker Logo", name: "NoBroker" },
  { src: "/clients/logo (5).jpeg", alt: "PNB Logo", name: "PNB" },
  { src: "/clients/logo (6).jpeg", alt: "QuickClean Logo", name: "QuickClean" },
  { src: "/clients/logo (7).jpeg", alt: "Cube Highways Trust Logo", name: "Cube Highways Trust" },
  { src: "/clients/logo (8).jpeg", alt: "EazyDiner Logo", name: "EazyDiner" },
  { src: "/clients/logo (9).jpeg", alt: "Samsung Logo", name: "Samsung" },
  { src: "/clients/logo (10).jpeg", alt: "Terex Logo", name: "Terex" },
  { src: "/clients/logo (11).jpeg", alt: "Mankind Logo", name: "Mankind" },
];

const column1Logos = [allLogos[0], allLogos[3], allLogos[6], allLogos[9]];
const column2Logos = [allLogos[1], allLogos[4], allLogos[7], allLogos[10]];
const column3Logos = [allLogos[2], allLogos[5], allLogos[8], allLogos[10]];

function Column({
  logos,
  reverse = false,
  className,
  speed = 25,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
  className?: string;
  speed?: number;
}) {
  return (
    <div
      className={`relative flex flex-col gap-6 min-w-[150px] sm:min-w-[170px] md:min-w-[210px] ${className || ""}`}
    >
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-6"
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <motion.div
            key={`${logo.name}-${i}`}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-purple-500/30 hover:border-purple-400/50"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-purple-500/10 via-transparent to-indigo-500/10 pointer-events-none z-0" />
            <div className="relative z-10 w-full h-full flex items-center justify-center p-6 bg-white/95 transition-colors duration-300 group-hover:bg-white">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, 210px"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function StorySection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 md:flex-row md:py-12 lg:p-8">
      <div className="flex flex-1 flex-col items-start justify-center rounded-[32px] sm:rounded-[40px] bg-white p-8 text-left shadow-sm ring-1 ring-zinc-100 sm:aspect-square md:p-14 lg:p-16 xl:p-20">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-purple-500/50" />
          <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
            Professional Printing Excellence
          </span>
        </div>
        <h2 className="max-w-md font-heading text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-3xl lg:text-5xl">
          Let Your Signage Tell Your Brand&apos;s Story!
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500 sm:mt-6 sm:text-base md:text-lg">
          Partnering with leading brands to create impactful visual identities. High-precision printing architecture for modern commercial signage.
        </p>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[32px] sm:rounded-[40px] bg-zinc-950 p-6 shadow-2xl aspect-square">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`, backgroundSize: `32px 32px` }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center gap-4 px-4 opacity-40 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
          aria-hidden="true"
        >
          <Column
            logos={column1Logos}
            reverse={false}
            speed={35}
            className="mt-[-20%]"
          />
          <Column
            logos={column2Logos}
            reverse={true}
            speed={30}
            className="mt-[10%]"
          />
          <Column
            logos={column3Logos}
            reverse={false}
            speed={40}
            className="hidden lg:flex mt-[-15%]"
          />
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="group relative flex aspect-square w-[130px] sm:w-[150px] md:w-[200px] lg:w-[220px] items-center justify-center rounded-[32px] sm:rounded-[48px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-4 sm:border-6 border-zinc-900/30 backdrop-blur-3xl"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-40 lg:h-40">
              <Image
                src="/Prayas-Graphics-Logo.svg"
                alt="Prayas Graphics Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
