"use client";

import { motion } from "framer-motion";
import { SearchIcon, ClipboardPenLine, MessageSquareQuote, Target } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: SearchIcon,
      title: "Browse Services",
      description: "Explore our range of signboards and premium display solutions.",
    },
    {
      icon: ClipboardPenLine,
      title: "Submit Enquiry",
      description: "Fill in your requirements using our quick multi-step quote form.",
    },
    {
      icon: MessageSquareQuote,
      title: "Get Your Quote",
      description: "We'll respond within 14 hours with pricing and timelines on WhatsApp.",
    },
    {
      icon: Target,
      title: "We Build & Install",
      description: "Sit back while we handle the seamless production and installation.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:px-6 border-t border-zinc-100">
      <div className="text-center mb-16">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mb-6">
          Simple Process
        </div>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl text-zinc-900 mb-4">
          How It Works
        </h2>
        <p className="max-w-xl mx-auto text-lg text-zinc-500 font-medium">
          From concept to installation, we make getting professional signage effortless.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-zinc-100 -z-10" />

        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="h-24 w-24 rounded-full bg-white shadow-lg border border-zinc-100 flex items-center justify-center mb-6 relative z-10 mx-auto">
              <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white text-sm font-bold shadow-sm">
                {idx + 1}
              </div>
              <step.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold font-heading text-zinc-900 mb-3">{step.title}</h3>
            <p className="text-zinc-500 font-medium px-4 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
