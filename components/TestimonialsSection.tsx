"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Café Owner",
    quote: "The quality of our new LED signboard is simply stunning. It's incredibly bright and completely transformed our storefront at night.",
    gradient: "from-amber-500/10 to-orange-500/5",
  },
  {
    name: "Michael T.",
    role: "Retail Director",
    quote: "We were looking for impactful channel letters for our new branch. Prayas Graphics delivered perfectly on time and on budget.",
    gradient: "from-[#800080]/10 to-indigo-500/5",
  },
  {
    name: "Emma Davis",
    role: "Agency Partner",
    quote: "Fast production and expert installation. Our corporate office acrylic signage looks incredibly premium.",
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    name: "David Chen",
    role: "Tech Startup",
    quote: "The attention to detail on our lobby's edge-lit logo is remarkable. I'll definitely be using Prayas Graphics for all future locations.",
    gradient: "from-purple-500/10 to-pink-500/5",
  },
  {
    name: "Jessica P.",
    role: "Boutique Owner",
    quote: "Beautiful craftsmanship. The mirror gold acrylic letters give our boutique exactly the luxurious feel we were aiming for.",
    gradient: "from-rose-500/10 to-red-500/5",
  },
  {
    name: "Robert K.",
    role: "Restaurant Manager",
    quote: "Exceeded my expectations. The flex backlit board is huge, vibrant, and draws in so many walking customers.",
    gradient: "from-cyan-500/10 to-[#800080]/5",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className={cn(
    "relative flex flex-col w-[350px] shrink-0 p-8 rounded-3xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden",
  )}>
    <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", testimonial.gradient)} />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="h-8 w-8 text-zinc-100 group-hover:text-zinc-200 transition-colors" />
      </div>

      <p className="text-[15px] leading-relaxed text-zinc-600 font-medium mb-8">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-linear-to-b from-zinc-100 to-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-xs uppercase tracking-wider">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-zinc-900">{testimonial.name}</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-[#800080]" />
          </div>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-tight">{testimonial.role}</span>
        </div>
      </div>
    </div>
  </div>
);

import Image from "next/image";

const brandLogos = [
  { src: "/clients/logo (1).jpeg", alt: "Chola Logo" },
  { src: "/clients/logo (2).jpeg", alt: "SMFG India Credit Logo" },
  { src: "/clients/logo (3).jpeg", alt: "Fortune Logo" },
  { src: "/clients/logo (4).jpeg", alt: "NoBroker Logo" },
  { src: "/clients/logo (5).jpeg", alt: "PNB Logo" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Our Success Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-zinc-900 mb-6"
          >
            Real Stories From <span className="text-zinc-400 underline decoration-zinc-200 decoration-offset-4">Happy Clients</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 font-medium"
          >
            Join hundreds of businesses that have transformed their visibility with Prayas Graphics.
          </motion.p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex gap-6 animate-marquee py-12"
          animate={{
            x: [0, -1 * (350 * testimonials.length + 24 * testimonials.length)]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {/* First set */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`first-${idx}`} testimonial={t} />
          ))}
          {/* Second set for infinite effect */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`second-${idx}`} testimonial={t} />
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <div className="mt-20 flex justify-center">
        <div className="flex -space-x-4">
          {brandLogos.map((logo, i) => (
            <div 
              key={i} 
              className="h-12 w-12 rounded-full border-4 border-white bg-white flex items-center justify-center overflow-hidden relative shadow-sm ring-1 ring-zinc-100"
              style={{ zIndex: brandLogos.length - i }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
          <div className="flex items-center pl-8 text-zinc-900">
            <span className="text-sm font-bold tracking-tight">500+ Businesses Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
