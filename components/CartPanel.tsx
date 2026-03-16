"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatDimensions } from "@/lib/quote-utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight, Mail } from "lucide-react";

const ENQUIRY_EMAIL = "prayasgraphics@email.com";
const SUBJECT = "Enquiry for Signage Work - Prayas Graphics";

function buildEmailBody(
  items: { serviceName: string; width?: number; height?: number; unit?: "ft" | "in"; area?: number }[],
  name?: string,
  phone?: string
): string {
  const servicesBlock = items
    .map((item, i) => {
      const size =
        item.width != null && item.height != null && item.unit
          ? `Size: ${item.width} ${item.unit} x ${item.height} ${item.unit}`
          : "Size: Not specified";
      const areaLine =
        item.area != null ? `\n   Area: ${item.area.toFixed(2)} sq.ft` : "";
      return `${i + 1}. ${item.serviceName}\n   ${size}${areaLine}`;
    })
    .join("\n\n");

  let body = `Hi Prayas Graphics Team,

I am interested in the following services and would like rate details.

Services Requested:

${servicesBlock}

Please let me know:

* Rate per sq.ft
* Material options
* Estimated timeline

Thank you.`;

  if (name?.trim() || phone?.trim()) {
    body =
      (name?.trim() ? `Name: ${name.trim()}\n` : "") +
      (phone?.trim() ? `Phone: ${phone.trim()}\n\n` : "") +
      body;
  }

  return body;
}

export default function CartPanel() {
  const { items, isOpen, closeCart, removeItem } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendEnquiry = () => {
    const body = buildEmailBody(items, name, phone);
    const mailtoLink = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 bg-zinc-950/40 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          <motion.aside
            key="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-70 flex h-full w-full flex-col bg-white shadow-2xl sm:w-[420px]"
            aria-label="Your quote request"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-zinc-800" />
                <h2 className="font-heading text-lg font-bold tracking-tight text-zinc-900">
                  Your Quote Request
                </h2>
                {items.length > 0 && (
                  <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {items.length}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                aria-label="Close quote panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100">
                    <ShoppingBag className="h-8 w-8 text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-zinc-700">
                      Your quote request list is empty
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Add services you need rates for!
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 flex items-center gap-2 rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white"
                  >
                    Browse Services
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
                    >
                      <div className="h-16 w-14 shrink-0 rounded-xl bg-linear-to-tr from-zinc-200 to-zinc-100 shadow-sm" />

                      <div className="flex flex-1 flex-col gap-2 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-heading text-sm font-semibold leading-tight text-zinc-900">
                            {item.serviceName}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="shrink-0 text-zinc-300 transition-colors hover:text-red-400"
                            aria-label={`Remove ${item.serviceName}`}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        {item.width != null && item.height != null && item.unit && (
                          <p className="text-sm text-zinc-600">
                            Size: {formatDimensions(item.width, item.height, item.unit)}
                          </p>
                        )}
                        {item.area != null && (
                          <p className="text-sm font-medium text-zinc-700">
                            Area: {item.area.toFixed(2)} sq.ft
                          </p>
                        )}
                        {item.notes && (
                          <p className="text-xs text-zinc-500 italic">{item.notes}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-zinc-100 px-6 py-6 mt-auto space-y-4">
                <p className="text-center text-sm text-zinc-500">
                  We’ll prepare rates based on your dimensions. Optional details below will be included in your enquiry.
                </p>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                  />
                </div>

                <button
                  onClick={handleSendEnquiry}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-zinc-800 active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4" />
                  Request Rates / Send Enquiry
                </button>

                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs font-medium text-zinc-400 underline-offset-2 transition-colors hover:text-zinc-700 hover:underline"
                >
                  Browse Services
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
