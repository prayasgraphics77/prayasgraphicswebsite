import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-8 rounded-[32px] bg-white px-8 py-12 shadow-sm md:px-16 md:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-heading text-2xl font-bold text-zinc-900">
              Prayas Graphics
            </Link>
            <p className="text-sm font-medium text-zinc-500 max-w-xs">
              Premium Signboards and Display Advertising Solutions for Every Business.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Browse</p>
              <Link href="/services" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">Services</Link>
              <Link href="/gallery" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">Gallery</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Company</p>
              <Link href="/about" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">About Us</Link>
              <Link href="/contact" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">Contact Us</Link>
              <Link href="/blog" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">Blog</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Legal</p>
              <Link href="/disclaimer" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">Disclaimer</Link>
              <Link href="/privacy-policy" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">Privacy &amp; Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-6">
          <p className="text-xs font-medium text-zinc-400">
            © 2026 Prayas Graphics Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
