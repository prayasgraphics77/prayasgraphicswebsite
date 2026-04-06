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
            {/* Google Reviews */}
            <a href="https://g.page/r/CbL_ssLkBR47EAI/review" target="_blank" rel="noopener noreferrer" aria-label="Review us on Google"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-[#4285F4] hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.79-4.01-8.79-8.97s3.95-8.97 8.79-8.97c2.75 0 4.59 1.17 5.65 2.18l2.58-2.49c-1.66-1.55-3.82-2.5-8.23-2.5-6.63 0-12 5.37-12 12s5.37 12 12 12c6.92 0 11.52-4.87 11.52-11.72 0-.79-.08-1.39-.18-1.99h-11.34z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/prayas_graphics_77/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-linear-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/prayasgraphics/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 hover:bg-[#1877F2] hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.55 9.8V14.8h-2.6v-2.8h2.6v-2.15c0-2.57 1.52-3.98 3.86-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.27 0-1.67.79-1.67 1.6v1.8h2.85l-.45 2.8h-2.4V21.8c5.11-.93 8.55-4.96 8.55-9.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[32px] bg-white px-4 py-16 shadow-sm min-h-[400px] md:min-h-[500px] md:p-8">
         {/* Placeholder for the framed poster in About Story */}
         <div className="relative aspect-3/4 w-3/4 max-w-[280px] shadow-2xl transition-transform duration-500 hover:scale-105 border-12 md:border-16 border-zinc-900 bg-white">
            <div className="absolute inset-0 bg-zinc-900/5 m-3 md:m-4 flex items-center justify-center overflow-hidden">
               <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/about/prayasgraphicsshop.jpeg')" }}></div>
            </div>
         </div>
         {/* Drop shadow effect under frame */}
         <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-6 md:h-8 bg-black/20 blur-xl rounded-full"></div>
      </div>
    </section>
  );
}
