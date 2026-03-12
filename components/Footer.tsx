import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="flex flex-col justify-between gap-8 rounded-[32px] bg-white px-8 py-12 shadow-sm md:flex-row md:items-center md:px-16 md:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-heading text-2xl font-bold text-zinc-900">
            Vetrina
          </Link>
          <p className="text-sm font-medium text-zinc-500">
            © 2026 Vetrina Inc. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-zinc-500">
          <Link href="/shop" className="transition-colors hover:text-zinc-900">Shop</Link>
          <Link href="/about" className="transition-colors hover:text-zinc-900">About</Link>
          <Link href="/support" className="transition-colors hover:text-zinc-900">Support</Link>
          <Link href="/blog" className="transition-colors hover:text-zinc-900">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
