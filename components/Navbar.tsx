"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 flex h-14 w-full max-w-7xl items-center justify-between rounded-full bg-white px-6 shadow-sm transition-all duration-300 md:top-6",
          scrolled ? "w-[90%] md:w-[85%] lg:max-w-4xl shadow-md" : "w-[95%]"
        )}
      >
        <div className="flex items-center gap-2">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Prayas Graphics Home" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/Prayas-Graphics-Logo.svg"
              alt="Prayas Graphics Logo"
              width={64}
              height={64}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-all object-contain shrink-0"
              priority
            />
            <Image
              src="/Prayas-Graphics-title.svg"
              alt="Prayas Graphics Title"
              width={200}
              height={64}
              className="h-6 w-auto sm:h-8 md:h-10 lg:h-12 transition-all object-contain shrink-0"
              priority
            />
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden text-zinc-500 transition-colors hover:text-zinc-950 sm:flex">
            <Search className="h-4 w-4" />
          </button>

          {/* Cart trigger button with live count badge */}
          <button
            onClick={openCart}
            aria-label={`Open quote request, ${totalCount} service${totalCount !== 1 ? "s" : ""}`}
            className="relative flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ShoppingBag className="h-4 w-4" />
            <AnimatePresence mode="wait">
              <motion.span
                key={totalCount}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "text-sm font-semibold tabular-nums",
                  totalCount > 0 ? "text-zinc-950" : "text-zinc-500"
                )}
              >
                {totalCount}
              </motion.span>
            </AnimatePresence>
            {/* Dot indicator when cart has items */}
            {totalCount > 0 && (
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-500" />
            )}
          </button>

          <button
            className="flex items-center justify-center text-zinc-500 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[95%] rounded-3xl bg-white p-6 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-4">
              <MobileNavLink href="/services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
              <div className="mt-4 border-t border-zinc-100 pt-4 flex flex-col gap-3">
                <button className="flex w-full items-center gap-2 text-[15px] font-medium text-zinc-600">
                  <Search className="h-4 w-4" /> Search
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); openCart(); }}
                  className="flex w-full items-center gap-2 text-[15px] font-medium text-zinc-600"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Quote Request
                  {totalCount > 0 && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                      {totalCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[13px] font-medium text-zinc-600 transition-colors hover:text-zinc-950">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="block rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">
      {children}
    </Link>
  );
}
