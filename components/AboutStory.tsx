export default function AboutStory() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:px-6">
      <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
        <h2 className="max-w-md font-heading text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
          Our Story
        </h2>
        <p className="mt-4 max-w-md text-[15px] font-medium text-zinc-500 leading-relaxed md:text-base md:mt-6">
          Founded in Nagpur with a passion for high-impact visual communication, Prayas Graphics was built on the principle of quality manufacturing. We believe that signage is the face of your business, and it should reflect excellence. What started as a local printing shop has grown into a full-scale manufacturing unit specializing in ACP, LED, and complex display solutions.
        </p>
        <div className="mt-8 flex items-center gap-3 md:mt-10">
          <span className="text-[13px] font-medium text-zinc-400 md:text-sm">Follow us</span>
          <div className="flex items-center gap-2">
            {/* X (Twitter) */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-linear-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.24 8.24 0 0 0 4.83 1.55V6.84a4.85 4.85 0 0 1-1.06-.15z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[32px] bg-white px-4 py-16 shadow-sm min-h-[400px] md:min-h-[500px] md:p-8">
         {/* Placeholder for the framed poster in About Story */}
         <div className="relative aspect-3/4 w-3/4 max-w-[280px] shadow-2xl transition-transform duration-500 hover:scale-105 border-12 md:border-16 border-zinc-900 bg-white">
            <div className="absolute inset-0 bg-zinc-900/5 m-3 md:m-4 flex items-center justify-center overflow-hidden">
               <div className="h-full w-full bg-zinc-900"></div>
            </div>
         </div>
         {/* Drop shadow effect under frame */}
         <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-6 md:h-8 bg-black/20 blur-xl rounded-full"></div>
      </div>
    </section>
  );
}
