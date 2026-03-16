"use client";

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M. (Café Owner)",
      quote: "The quality of our new LED signboard is simply stunning. It's incredibly bright and completely transformed our storefront at night.",
    },
    {
      name: "Michael T. (Retail Director)",
      quote: "We were looking for impactful channel letters for our new branch. Prayas Graphics delivered perfectly on time and on budget.",
    },
    {
      name: "Emma Davis (Agency Partner)",
      quote: "Fast production and expert installation. Our corporate office acrylic signage looks incredibly premium.",
    },
    {
      name: "David Chen (Tech Startup)",
      quote: "The attention to detail on our lobby's edge-lit logo is remarkable. I'll definitely be using Prayas Graphics for all future locations.",
    },
    {
      name: "Jessica P. (Boutique Owner)",
      quote: "Beautiful craftsmanship. The mirror gold acrylic letters give our boutique exactly the luxurious feel we were aiming for.",
    },
    {
      name: "Robert K. (Restaurant Manager)",
      quote: "Exceeded my expectations. The flex backlit board is huge, vibrant, and draws in so many walking customers.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-zinc-100 px-6 py-20 shadow-sm md:py-32">
        <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
          Real Stories From Happy Clients
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500">
          See what our customers have to say
        </p>

        <div className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8 hover:shadow-md transition-shadow"
            >
              <p className="text-[15px] leading-relaxed text-zinc-600 font-medium">"{t.quote}"</p>
              
              <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-6">
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-linear-to-b from-zinc-200 to-zinc-100" />
                   <span className="text-sm font-bold text-zinc-900">{t.name}</span>
                 </div>
                 <div className="flex gap-1">
                   {[1, 2, 3, 4, 5].map((s) => (
                     <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
