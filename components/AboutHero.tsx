import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-24 pb-8 md:flex-row md:px-6">
      <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
        <h1 className="max-w-md font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 md:text-5xl lg:text-[72px]">
          Transforming Spaces, One Poster at a Time
        </h1>
        <p className="mt-6 max-w-[400px] text-[15px] font-medium text-zinc-500 leading-relaxed md:text-base">
          Welcome to Prayas Graphics, where we believe that a well-chosen poster can instantly change the mood of any room. We are passionate...
        </p>
        <div className="mt-10">
          <Link href="/shop" className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:py-4 md:text-base">
            Explore our posters
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 overflow-hidden rounded-[32px] shadow-sm min-h-[300px] md:min-h-[500px]">
        <div className="absolute inset-0 bg-zinc-200">
           {/* Placeholder for About Hero Image */}
           <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2000&auto=format&fit=crop')" }}></div>
        </div>
      </div>
    </section>
  );
}
