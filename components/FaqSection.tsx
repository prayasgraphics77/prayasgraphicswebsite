import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Enquiry and Orders",
    items: [
      { q: "How do I request a quote?", a: "Add services to your quote list and click 'Send Quote Request' to trigger an email to us." },
      { q: "Do you offer on-site measurements?", a: "Yes, for large signage projects in Nagpur, we perform on-site visits for precise measurements." },
    ],
  },
  {
    category: "Manufacturing and Delivery",
    items: [
      { q: "How long does manufacturing take?", a: "Depending on complexity, standard boards take 3-5 days, while complex LED/ACP work may take 7-10 days." },
      { q: "Do you handle installation?", a: "Yes, we have a professional team for signage installation across Nagpur." },
    ],
  },
  {
    category: "Product Materials",
    items: [
      { q: "What materials do you use for ACP boards?", a: "We use high-grade 3mm or 4mm ACP sheets with weather-resistant finishes." },
      { q: "Are your LED boards energy efficient?", a: "Yes, we use industrial-grade LED modules that offer high brightness with low power consumption." },
    ],
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-7xl flex-col items-center gap-4 px-4 py-8 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-sm md:py-24">
        <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500">
          Answers to some common questions we get.
        </p>

        <div className="mt-16 flex w-full max-w-3xl flex-col gap-6">
          {faqs.map((faqGroup, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-100 p-6 shadow-sm">
              <h3 className="mb-4 text-center text-sm font-semibold text-zinc-900">{faqGroup.category}</h3>
              <div className="flex flex-col gap-3">
                {faqGroup.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-zinc-100 p-4 transition-colors hover:border-zinc-300"
                  >
                    <span className="text-sm font-medium text-zinc-700">{item.q}</span>
                    <ChevronDown className="h-4 w-4 text-zinc-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
