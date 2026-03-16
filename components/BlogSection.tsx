import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      title: "Why LED Signboards are Trending in Retail",
      excerpt: "Explore the reasons behind the rise of illuminated signage and how it can elevate your storefront.",
      date: "Oct 12, 2026",
    },
    {
      title: "How to Choose the Perfect Outdoor Signage",
      excerpt: "A comprehensive guide on selecting the right materials and lighting to maximize your brand's visibility.",
      date: "Sep 28, 2026",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-sm md:py-24">
        <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
          Latest Blog Posts
        </h2>
        <p className="mt-4 text-center text-[15px] font-medium text-zinc-500">
          News, tips, and inspiration from our experts
        </p>

        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post, idx) => (
            <Link
              href="/blog"
              key={idx}
              className="group flex flex-col gap-6 rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:border-zinc-300 hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100">
                 <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900/10 group-hover:to-zinc-900/30 transition-all z-10" />
                 <div className="h-full w-full bg-linear-to-r from-zinc-200 to-zinc-100 group-hover:scale-105 transition-transform duration-500" />
                 <span className="absolute top-4 left-4 z-20 rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-800">
                    Signage Guide
                 </span>
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <span className="text-sm font-semibold text-zinc-400">{post.date}</span>
                <h3 className="font-heading text-2xl font-bold text-zinc-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-base font-medium text-zinc-500 leading-relaxed mt-1">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
