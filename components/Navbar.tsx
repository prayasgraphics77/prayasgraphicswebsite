"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/" className="text-xl font-heading font-semibold tracking-tight" onClick={() => setMobileMenuOpen(false)}>
            Prayas Graphics
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/support">Support</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden text-zinc-500 transition-colors hover:text-zinc-950 sm:flex">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/cart" className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-950">
            <ShoppingBag className="h-4 w-4" />
            <span className="text-sm font-medium">0</span>
          </Link>
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
              <MobileNavLink href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/support" onClick={() => setMobileMenuOpen(false)}>Support</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
              <div className="mt-4 border-t border-zinc-100 pt-4">
                 <button className="flex w-full items-center gap-2 text-[15px] font-medium text-zinc-600">
                    <Search className="h-4 w-4" /> Search
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
