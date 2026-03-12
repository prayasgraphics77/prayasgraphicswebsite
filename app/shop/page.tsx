"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import CategoriesSidebar from "@/components/CategoriesSidebar";

const allProducts = [
  {
    id: "poster-less-is-more",
    title: "Less is more",
    price: "$15.00",
    originalPrice: "$30.00",
    badges: [{ text: "Sale", type: "sale" as const }, { text: "Popular", type: "popular" as const }],
  },
  {
    id: "poster-quiet-horizon",
    title: "Quiet Horizon",
    price: "$15.00",
    originalPrice: "$40.00",
    badges: [{ text: "Sale", type: "sale" as const }, { text: "Popular", type: "popular" as const }],
  },
  {
    id: "poster-chaos-in-color",
    title: "Chaos in Color",
    price: "$15.00",
    badges: [{ text: "New", type: "new" as const }],
  },
  {
    id: "poster-city-lights",
    title: "City Lights",
    price: "$15.00",
    badges: [{ text: "New", type: "new" as const }],
  },
  {
    id: "poster-concrete-dreams",
    title: "Concrete Dreams",
    price: "$15.00",
    badges: [{ text: "New", type: "new" as const }],
  },
  {
    id: "poster-fragmented-dreams",
    title: "Fragmented Dreams",
    price: "$15.00",
    originalPrice: "$40.00",
    badges: [{ text: "Sale", type: "sale" as const }],
  },
  {
    id: "poster-into-the-forest",
    title: "Into the Forest",
    price: "$23.00",
    originalPrice: "$40.00",
    badges: [{ text: "Sale", type: "sale" as const }],
  },
  {
    id: "poster-golden-hour-meadows",
    title: "Golden Hour Meadows",
    price: "$23.00",
    originalPrice: "$40.00",
    badges: [{ text: "Sale", type: "sale" as const }],
  },
  {
    id: "poster-classic-chrome",
    title: "Classic Chrome",
    price: "$25.00",
    originalPrice: "$40.00",
    badges: [{ text: "Sale", type: "sale" as const }],
  },
  {
    id: "poster-speed-lines",
    title: "Speed Lines",
    price: "$15.00",
    originalPrice: "$40.00",
    badges: [{ text: "Sale", type: "sale" as const }],
  },
];

export default function PostersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 px-4 py-8 md:px-6 mt-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col rounded-[32px] bg-white px-6 py-12 shadow-sm md:px-12 md:py-20 lg:p-20">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center w-full mb-12">
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
                All Posters
              </h1>
              <p className="mt-4 text-sm font-medium text-zinc-500 max-w-md">
                Explore our curated collection and find the perfect poster for you.
              </p>
            </div>

            {/* Layout Box */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mt-8">
              {/* Sidebar */}
              <div className="lg:w-1/4 xl:w-1/5 py-4">
                 <CategoriesSidebar />
              </div>

              {/* Product Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                {allProducts.map((product, idx) => (
                  <ProductCard key={idx} {...product} />
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
