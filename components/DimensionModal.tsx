"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { DimensionUnit } from "@/lib/cart-context";
import { computeArea } from "@/lib/quote-utils";

export interface DimensionFormValues {
  width: number;
  height: number;
  unit: DimensionUnit;
  area: number;
  notes?: string;
}

interface DimensionModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  onConfirm: (values: DimensionFormValues) => void;
}

export default function DimensionModal({
  isOpen,
  onClose,
  serviceName,
  onConfirm,
}: DimensionModalProps) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<DimensionUnit>("ft");
  const [notes, setNotes] = useState("");

  const w = parseFloat(width) || 0;
  const h = parseFloat(height) || 0;
  const area = w > 0 && h > 0 ? computeArea(w, h, unit) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (w <= 0 || h <= 0) return;
    onConfirm({
      width: w,
      height: h,
      unit,
      area,
      notes: notes.trim() || undefined,
    });
    setWidth("");
    setHeight("");
    setNotes("");
    onClose();
  };

  const handleClose = () => {
    setWidth("");
    setHeight("");
    setNotes("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="dim-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-zinc-950/40 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
          <motion.dialog
            key="dim-modal"
            open
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[90] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl outline-none"
            aria-label="Enter dimensions"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <h3 className="font-heading text-lg font-bold text-zinc-900">
                Add to Quote
              </h3>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-sm font-medium text-zinc-600">{serviceName}</p>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dim-width" className="mb-1 block text-sm font-medium text-zinc-700">
                    Width
                  </label>
                  <input
                    id="dim-width"
                    type="number"
                    min="0"
                    step="0.01"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="0"
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dim-height" className="mb-1 block text-sm font-medium text-zinc-700">
                    Height
                  </label>
                  <input
                    id="dim-height"
                    type="number"
                    min="0"
                    step="0.01"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="0"
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">
                  Unit
                </label>
                <div className="flex gap-3">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="unit"
                      value="ft"
                      checked={unit === "ft"}
                      onChange={() => setUnit("ft")}
                      className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-500"
                    />
                    <span className="text-sm font-medium text-zinc-700">Feet (ft)</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="unit"
                      value="in"
                      checked={unit === "in"}
                      onChange={() => setUnit("in")}
                      className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-500"
                    />
                    <span className="text-sm font-medium text-zinc-700">Inches (in)</span>
                  </label>
                </div>
              </div>

              {area > 0 && (
                <p className="rounded-xl bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-800">
                  Area: {area.toFixed(2)} sq.ft
                </p>
              )}

              <div>
                <label htmlFor="dim-notes" className="mb-1 block text-sm font-medium text-zinc-700">
                  Notes (optional)
                </label>
                <input
                  id="dim-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requirements"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 rounded-full border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={area <= 0}
                  className="flex-1 rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
                >
                  Add to Quote
                </button>
              </div>
            </form>
          </motion.dialog>
        </>
      )}
    </AnimatePresence>
  );
}
