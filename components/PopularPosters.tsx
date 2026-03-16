"use client";

import ServiceCard from "./ServiceCard";

const featuredServices = [
  {
    id: "service-acp-sheet",
    serviceName: "ACP Sheet Work",
    description: "Aluminium Composite Panel signboards for durable, weather-resistant signage.",
    badges: [{ text: "Core Service", type: "popular" as const }],
  },
  {
    id: "service-led-glow",
    serviceName: "LED Glow Sign Board",
    description: "Eye-catching illuminated sign boards with LED lighting for 24/7 visibility.",
    badges: [{ text: "Premium", type: "new" as const }, { text: "Popular", type: "popular" as const }],
  },
  {
    id: "service-flex-printing",
    serviceName: "Flex Printing",
    description: "High-quality flex banner and hoarding printing for events and advertising.",
    badges: [{ text: "Standard", type: "new" as const }],
  },
];

export default function PopularPosters() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-20 shadow-sm md:py-32">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          Featured Services
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500 max-w-md">
          Discover our most requested manufacturing and signage services in Nagpur.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            serviceName={service.serviceName}
            description={service.description}
            badges={service.badges}
          />
        ))}
      </div>
    </section>
  );
}
