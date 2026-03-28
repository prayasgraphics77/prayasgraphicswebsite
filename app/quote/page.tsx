import QuoteForm from "@/components/QuoteForm";
import { Suspense } from "react";

export const metadata = {
  title: "Request a Quote | Prayas Graphics",
  description: "Get a custom quote for your signboard, 3D letters, or elevation work. We respond within 14 hours.",
};

export default function QuotePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 pt-24 overflow-x-hidden">
      <div className="w-full max-w-7xl px-4 md:px-6 relative text-center pt-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#800080]/10 px-3 py-1 text-xs font-semibold text-[#800080] mb-6">
          Quick Estimate
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 md:text-5xl max-w-2xl mx-auto">
          Request a Custom Quote
        </h1>
        <p className="mt-4 text-base font-medium text-zinc-500 max-w-lg mx-auto">
          Fill out the form below with your requirements, and our team will get back to you with pricing and timelines on WhatsApp.
        </p>

        <Suspense fallback={<div className="mt-12 text-zinc-500 font-medium">Loading form...</div>}>
          <QuoteForm />
        </Suspense>
      </div>
    </main>
  );
}
