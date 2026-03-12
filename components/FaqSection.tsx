import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Ordering and Payments",
    items: [
      { q: "How do I place an order?", a: "" },
      { q: "What payment methods do you accept?", a: "" },
      { q: "Can I change my order after it's been placed?", a: "" },
    ],
  },
  {
    category: "Shipping and Delivery",
    items: [
      { q: "Do you ship internationally?", a: "" },
      { q: "How long does shipping take?", a: "" },
      { q: "How can I track my order?", a: "" },
    ],
  },
  {
    category: "Returns and Refunds",
    items: [
      { q: "What is your return policy?", a: "" },
      { q: "Can I exchange an item?", a: "" },
      { q: "What if my poster arrived damaged?", a: "" },
    ],
  },
  {
    category: "Product Information",
    items: [
      { q: "What materials are your posters printed on?", a: "" },
      { q: "Do you offer framing options?", a: "" },
      { q: "Can I customize a poster?", a: "" },
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
