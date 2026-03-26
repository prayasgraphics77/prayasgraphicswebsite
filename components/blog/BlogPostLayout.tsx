import React from "react";
import Footer from "@/components/Footer";
import StructuredData from "./StructuredData";
import Link from "next/link";


export interface BlogPostLayoutProps {
  title: string;
  metaDescription: string;
  eyebrow: string;
  slug: string;
  date: string; // ISO string preferred
  readTime: string;
  location?: string;
  lede: string;
  children: React.ReactNode;
  keywords?: string[];
  toc?: { title: string; id: string }[];
}

export default function BlogPostLayout({
  title,
  metaDescription,
  eyebrow,
  slug,
  date,
  readTime,
  location = "Nagpur, Maharashtra",
  lede,
  children,
  keywords = [],
  toc = [],
}: BlogPostLayoutProps) {
  const formattedDate = date ? new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" }) : "";

  return (
    <main className="flex min-h-screen flex-col bg-stone-50 overflow-x-hidden pt-24 font-sans text-zinc-900">
      <StructuredData
        title={title}
        description={metaDescription}
        url={"/" + slug}
        datePublished={date}
        dateModified={date}
      />

      {/* Back to Blog */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 mb-8 mt-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-red-600 transition-colors"
        >
          &larr; Back to all posts
        </Link>
      </div>

      <article className="mx-auto w-full max-w-7xl px-4 md:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          
          {/* Main Article Content */}
          <div className="art-content min-w-0">
            <header className="mb-10">
              <p className="text-[11px] font-bold tracking-widest uppercase text-red-600 mb-3 block">
                {eyebrow}
              </p>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-[52px] font-black text-zinc-950 leading-[1.1] mb-5 tracking-tight">
                {title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 pb-6 border-b border-zinc-200 mb-8">
                {location && (
                  <span className="text-sm text-zinc-500 flex items-center gap-1.5">
                    <svg className="w-4 h-4 fill-red-600" viewBox="0 0 24 24">
                      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" />
                    </svg>
                    {location}
                  </span>
                )}
                <span className="text-sm text-zinc-500 flex items-center gap-1.5">
                  <svg className="w-4 h-4 fill-red-600" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 15H11v-6h1.5V17zm0-8H11V7h1.5v2z" />
                  </svg>
                  {readTime}
                </span>
                {formattedDate && (
                  <span className="text-sm text-zinc-500">Updated: {formattedDate}</span>
                )}
              </div>
              
              <p className="text-lg md:text-[19px] text-zinc-600 font-light leading-relaxed pl-5 border-l-[3px] border-red-600">
                {lede}
              </p>
            </header>

            <section className="prose prose-zinc prose-lg max-w-none text-zinc-700 font-light leading-relaxed 
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-zinc-950 prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-10 prose-h2:border-t prose-h2:border-zinc-200
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:mb-5 
              prose-a:text-red-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:font-semibold prose-strong:text-zinc-900
              prose-ul:my-6 prose-ul:pl-6
              prose-li:my-2
              "
            >
              {children}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit hidden lg:block space-y-6">


            {toc.length > 0 && (
              <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white">
                <div className="bg-zinc-950 text-white px-5 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase">
                  Jump To
                </div>
                <div className="p-5">
                  <ul className="space-y-3">
                    {toc.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={"#" + item.id}
                          className="text-[13.5px] text-zinc-500 font-light hover:text-red-600 flex items-start gap-2 leading-snug transition-colors"
                        >
                          <span className="text-red-600 leading-[1.2] text-lg">&rsaquo;</span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {keywords.length > 0 && (
              <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white">
                <div className="bg-zinc-950 text-white px-5 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase">
                  Topics Covered
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-stone-50 border border-zinc-200 rounded-full px-3 py-1.5 text-zinc-500 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}
