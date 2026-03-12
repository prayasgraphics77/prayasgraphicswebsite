"use client";

import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

export default function CartPanel() {
  const { items, isOpen, closeCart, subtotal, removeItem, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ─────────────────────────────────────────────────── */}
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

          {/* ── Panel ────────────────────────────────────────────────────── */}
          <motion.aside
            key="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-70 flex h-full w-full flex-col bg-white shadow-2xl sm:w-[420px]"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-zinc-800" />
                <h2 className="font-heading text-lg font-bold tracking-tight text-zinc-900">
                  Your Cart
                </h2>
                {items.length > 0 && (
                  <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100">
                    <ShoppingBag className="h-8 w-8 text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-zinc-700">
                      Your cart is empty
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Add some posters you love!
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 flex items-center gap-2 rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white"
                  >
                    Continue Shopping
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
                      {/* Thumbnail placeholder */}
                      <div className="h-16 w-14 shrink-0 rounded-xl bg-linear-to-tr from-zinc-200 to-zinc-100 shadow-sm" />

                      {/* Details */}
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-heading text-sm font-semibold leading-tight text-zinc-900">
                            {item.title}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="shrink-0 text-zinc-300 transition-colors hover:text-red-400"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity controls */}
                          <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-1 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold text-zinc-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Item total */}
                          <p className="text-sm font-bold text-zinc-900">
                            ${(item.priceValue * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-zinc-100 px-6 py-6">
                {/* Subtotal row */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-500">Subtotal</span>
                  <span className="font-heading text-xl font-bold text-zinc-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Divider */}
                <p className="mb-4 text-center text-xs text-zinc-400">
                  Shipping & taxes calculated at checkout
                </p>

                {/* Checkout button */}
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-zinc-800 active:scale-[0.98]">
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Continue shopping */}
                <button
                  onClick={closeCart}
                  className="mt-3 w-full text-center text-xs font-medium text-zinc-400 underline-offset-2 transition-colors hover:text-zinc-700 hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
