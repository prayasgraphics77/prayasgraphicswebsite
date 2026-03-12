"use client";

import { Package, Truck, RotateCcw, Lock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Package className="h-6 w-6 text-zinc-700" strokeWidth={1.5} />,
      title: "Worldwide shipping",
    },
    {
      icon: <Truck className="h-6 w-6 text-zinc-700" strokeWidth={1.5} />,
      title: "Fast shipping",
    },
    {
      icon: <RotateCcw className="h-6 w-6 text-zinc-700" strokeWidth={1.5} />,
      title: "30 days returns",
    },
    {
      icon: <Lock className="h-6 w-6 text-zinc-700" strokeWidth={1.5} />,
      title: "Secure payments",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-sm md:py-24">
        <h2 className="max-w-2xl text-center font-heading text-2xl font-bold leading-tight tracking-tight text-zinc-900 md:text-3xl">
          High-quality materials, customizable options, and fast shipping ensure every piece is as unique as your style.
        </h2>

        <div className="mt-16 grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-zinc-100 p-8 text-center transition-colors hover:bg-zinc-200/80"
            >
              {feature.icon}
              <span className="text-sm font-semibold text-zinc-700">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
