"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ServiceCard from "@/components/ServiceCard";
import CategoriesSidebar from "@/components/CategoriesSidebar";

const services = [
  {
    id: "service-acp-sheet",
    serviceName: "ACP Sheet Work",
    description: "Aluminium Composite Panel signboards for durable, weather-resistant outdoor and indoor signage.",
    badges: [{ text: "Core Service", type: "popular" as const }],
  },
  {
    id: "service-signage-board",
    serviceName: "Signage Board",
    description: "Custom sign boards for retail, offices, and branding. Multiple sizes and finishes.",
    badges: [{ text: "Bestseller", type: "popular" as const }],
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
    description: "High-quality flex banner and hoarding printing for events, construction, and advertising.",
    badges: [{ text: "Standard", type: "new" as const }],
  },
  {
    id: "service-vinyl-printing",
    serviceName: "Vinyl Printing",
    description: "Vinyl stickers, vehicle wraps, and window graphics for branding and promotion.",
  },
  {
    id: "service-acrylic-letters",
    serviceName: "3D Acrylic Letters",
    description: "Custom 3D acrylic lettering for facades, reception areas, and premium branding.",
    badges: [{ text: "Premium", type: "popular" as const }],
  },
  {
    id: "service-neon-signs",
    serviceName: "Neon Signs",
    description: "Vintage and modern neon sign boards for cafes, bars, and retail spaces.",
    badges: [{ text: "Trending", type: "new" as const }],
  },
  {
    id: "service-totem-pylon",
    serviceName: "Totem & Pylon Signs",
    description: "Freestanding totem and pylon signs for wayfinding and outdoor branding.",
  },
];

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 px-4 py-8 md:px-6 mt-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col rounded-[32px] bg-white px-6 py-12 shadow-sm md:px-12 md:py-20 lg:p-20">
            <div className="flex flex-col items-center justify-center text-center w-full mb-12">
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
                Signage Services
              </h1>
              <p className="mt-4 text-sm font-medium text-zinc-500 max-w-md">
                Choose a service, add dimensions, and request a quote. We’ll get back with rates and options.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mt-8">
              <div className="lg:w-1/4 xl:w-1/5 py-4">
                <CategoriesSidebar />
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    serviceName={service.serviceName}
                    description={service.description}
                    badges={service.badges}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
