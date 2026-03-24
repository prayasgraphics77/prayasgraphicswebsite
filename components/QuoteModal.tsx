"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSlug: string;
}

export default function QuoteModal({ isOpen, onClose, serviceSlug }: QuoteModalProps) {
  // AnimatePresence requires conditional rendering to be tight around the motion components
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl z-10 my-auto"
          >
            {/* The QuoteForm itself has margin top 8, we can offset the close button slightly or put it inside */}
            <div className="absolute right-4 top-12 z-20">
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors shadow-sm"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="max-h-[90vh] overflow-y-auto rounded-[32px] custom-scrollbar">
              <QuoteForm inlineService={serviceSlug} onComplete={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
