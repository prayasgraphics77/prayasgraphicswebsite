import Footer from "@/components/Footer";
import Link from "next/link";

const blogPosts = [
  {
    title: "Signboard Prices in Nagpur — The Honest 2025 Cost Guide",
    category: "Pricing Guide",
    date: "March 2025",
    slug: "/signboard-price-nagpur-2025-guide",
    imagePlaceholder: "bg-linear-to-tr from-red-600 to-rose-400",
  },
  {
    title: "5 Costly Signboard Mistakes Nagpur Businesses Make",
    category: "Business Advice",
    date: "March 2025",
    slug: "/signboard-mistakes-nagpur-businesses",
    imagePlaceholder: "bg-linear-to-br from-zinc-800 to-zinc-900",
  },
  {
    title: "ACP vs Acrylic vs Flex — Which Survives Nagpur's Weather?",
    category: "Materials",
    date: "March 2025",
    slug: "/acp-vs-acrylic-vs-flex-signboard-nagpur",
    imagePlaceholder: "bg-linear-to-bl from-blue-600 to-indigo-800",
  },
  {
    title: "Best Signboard Ideas for Restaurants & Cafes in Nagpur",
    category: "Food & Beverage",
    date: "March 2025",
    slug: "/restaurant-cafe-signboard-ideas-nagpur",
    imagePlaceholder: "bg-linear-to-tl from-green-600 to-emerald-400",
  },
  {
    title: "NMC Signboard Rules Nagpur 2025 — Essential Guide",
    category: "Legal Guide",
    date: "March 2025",
    slug: "/nmc-signboard-rules-nagpur-2025",
    imagePlaceholder: "bg-linear-to-t from-purple-600 to-fuchsia-400",
  },
  {
    title: "Golden Acrylic vs Stainless Steel Letters in Nagpur",
    category: "Luxury Signage",
    date: "March 2025",
    slug: "/golden-acrylic-vs-ss-letters-nagpur",
    imagePlaceholder: "bg-linear-to-b from-amber-400 to-yellow-600",
  },
  {
    title: "ACP Elevation Cladding Nagpur — Architects Guide",
    category: "Architecture",
    date: "March 2025",
    slug: "/acp-elevation-cladding-nagpur-guide",
    imagePlaceholder: "bg-linear-to-r from-stone-500 to-stone-700",
  },
  {
    title: "Best Signboard Makers on Wardha Road Nagpur",
    category: "Local Spotlight",
    date: "March 2025",
    slug: "/best-signboard-makers-wardha-road-nagpur",
    imagePlaceholder: "bg-linear-to-l from-red-500 to-orange-500",
  },
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      
      {/* Blog Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 md:px-6">
        <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-sm md:py-24">
          <h1 className="text-center font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 max-w-md text-center text-[15px] font-medium text-zinc-500">
            Explore our blog for signage industry insights, expert tips, and the latest trends in display advertising in Nagpur.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <Link
              href={post.slug}
              key={idx}
              className="group flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:border-zinc-300 hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-100">
                 <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900/10 group-hover:to-zinc-900/30 transition-all z-10" />
                 <div className={`h-full w-full ${post.imagePlaceholder} group-hover:scale-105 transition-transform duration-500`} />
                 <span className="absolute top-4 right-4 z-20 rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-800">
                    {post.category}
                 </span>
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <span className="text-sm font-semibold text-zinc-400">{post.date}</span>
                <h3 className="font-heading text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
