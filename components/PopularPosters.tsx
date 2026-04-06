"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/lib/services-data";

export default function PopularPosters() {
  // Grab 3 featured services automatically.
  const featuredSlugs = ["acrylic-acp-signboard", "ss-letter-backlit-golden", "flex-roll-up-standee"];
  const featuredServices = servicesData.filter((s) => featuredSlugs.includes(s.slug));

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-20 shadow-sm border border-zinc-100 md:py-32">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl text-center">
          Featured Services
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500 max-w-md">
          Discover our most requested manufacturing and signage services in Nagpur. Configure them right here.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service, idx) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            serviceName={service.title}
            description={service.description}
            image={service.image}
            imageFit={service.imageFit}
            originalPrice={service.originalPrice}
            offerPrice={service.offerPrice}
            badges={idx === 0 ? [{ text: "Core Service", type: "popular" as const }] : (idx === 1 ? [{ text: "Premium", type: "new" as const }] : [])}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Link 
          href="/services" 
          className="group flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-bold text-zinc-900 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:shadow"
        >
          Check All Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
