"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { formatDimensions } from "@/lib/quote-utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight, Loader2, MessageCircle } from "lucide-react";

export default function CartPanel() {
  const { items, isOpen, closeCart, removeItem, clearQuote } = useCart();
  const router = useRouter();
  
  const [customerDetails, setCustomerDetails] = useState({
    fullName: "",
    businessName: "",
    whatsapp: "",
    city: "",
    urgency: "Standard (7–10 days)"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalEstimatedPrice = items.reduce((sum, item) => sum + (item.estimatedPrice || 0), 0);

  const handleSendEnquiry = async () => {
    if (!customerDetails.fullName || !customerDetails.whatsapp || !customerDetails.city) {
      setError("Name, WhatsApp, and City are required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          totalEstimatedPrice,
          customerDetails,
        }),
      });

      if (response.ok) {
        clearQuote();
        closeCart();
        router.push("/thank-you");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
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
            className="fixed inset-0 z-[100] bg-zinc-950/40 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          <motion.aside
            key="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-[101] flex h-full w-full flex-col bg-white shadow-2xl sm:w-[500px]"
            aria-label="Your quote request cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 bg-white shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-zinc-800" />
                <h2 className="font-heading text-lg font-bold tracking-tight text-zinc-900">
                  Quote Cart
                </h2>
                {items.length > 0 && (
                  <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {items.length}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 bg-zinc-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-stone-50">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center px-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm border border-zinc-100">
                    <ShoppingBag className="h-8 w-8 text-zinc-300" />
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-zinc-700">
                      Your quote cart is empty
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Configure services and add them here to request a master quote!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                        closeCart();
                        router.push("/services");
                    }}
                    className="mt-2 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 shadow-md"
                  >
                    Browse Services
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <div className="px-5 py-6 space-y-6">
                  {/* Items List */}
                  <ul className="flex flex-col gap-4">
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm relative overflow-hidden"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="font-heading text-base font-bold leading-tight text-zinc-900">
                            {item.serviceName}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="shrink-0 -mr-2 -mt-2 rounded-md p-2 text-zinc-300 transition-colors hover:bg-red-50 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {/* Display Dimensions if captured via new form */}
                        {(item.width || item.height) && (
                           <div className="text-sm border-l-2 border-emerald-400 pl-3 py-1 mb-3 bg-emerald-50/50 text-emerald-800 rounded-r-lg">
                             <strong>Size:</strong> {item.width} x {item.height} {item.unit} <br/>
                             <span className="text-emerald-600 font-medium">Approx. Area: {item.area?.toFixed(2)} sq.ft</span>
                           </div>
                        )}

                        {/* Rendering custom details dynamically */}
                        {item.details && Object.keys(item.details).length > 0 && (
                          <div className="mt-1 text-sm text-zinc-600 grid grid-cols-2 gap-y-2 gap-x-2 bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                            {Object.entries(item.details).map(([k, v]) => (
                              v && v !== "Select" && k !== "Size" ? (
                                  <div key={k} className="col-span-2 sm:col-span-1">
                                    <span className="font-semibold text-zinc-500 text-[10px] uppercase tracking-wider block">{k}</span>
                                    {v}
                                  </div>
                              ) : null
                            ))}
                          </div>
                        )}

                        <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
                           <span className="text-sm text-zinc-500 font-medium">Demo Estimate</span>
                           <span className="font-heading font-bold text-zinc-900 text-lg">
                             {item.estimatedPrice ? `₹${item.estimatedPrice.toLocaleString('en-IN')}` : "Custom"}
                           </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Customer Checkout Form */}
                  <div className="rounded-2xl bg-white border border-zinc-100 p-6 shadow-sm space-y-5 relative">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-2">
                       <h3 className="font-heading text-lg font-bold text-zinc-900">Estimated Total</h3>
                       <p className="font-heading text-2xl font-black text-blue-600 tracking-tight">
                          ₹{totalEstimatedPrice.toLocaleString('en-IN')}
                       </p>
                    </div>

                    <p className="text-xs text-zinc-500 bg-blue-50/80 p-3 rounded-xl font-medium">
                       * Note: This is a demo estimated rate calculated via base sq.ft metrics. The exact quote will be confirmed upon receiving proper design files.
                    </p>

                    <h3 className="font-heading text-md font-bold text-zinc-900 mt-6">Contact Details</h3>
                    
                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium border border-red-100">
                        {error}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Full Name *"
                          value={customerDetails.fullName}
                          onChange={(e) => setCustomerDetails(c => ({...c, fullName: e.target.value}))}
                          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-zinc-50 hover:bg-white transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                          <div>
                            <input
                              type="tel"
                              placeholder="WhatsApp *"
                              value={customerDetails.whatsapp}
                              onChange={(e) => setCustomerDetails(c => ({...c, whatsapp: e.target.value}))}
                              className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-zinc-50 hover:bg-white transition-colors"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="City *"
                              value={customerDetails.city}
                              onChange={(e) => setCustomerDetails(c => ({...c, city: e.target.value}))}
                              className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-zinc-50 hover:bg-white transition-colors"
                            />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-zinc-100 bg-white px-6 py-5 shrink-0 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
                <button
                  onClick={handleSendEnquiry}
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-4 text-base font-bold text-white shadow-lg shadow-zinc-900/20 transition-all hover:bg-zinc-800 active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-5 w-5 animate-spin"/> Confirming Checkout...</>
                  ) : (
                    <>Submit Quote Request <ArrowRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" /></>
                  )}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
