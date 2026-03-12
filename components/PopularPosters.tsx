"use client";

import ProductCard from "./ProductCard";

export default function PopularPosters() {
  const products = [
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
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-20 shadow-sm md:py-32">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          Popular Posters
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500 max-w-md">
          Discover our top picks that blend style, creativity, and inspiration.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
