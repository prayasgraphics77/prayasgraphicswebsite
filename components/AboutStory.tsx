export default function AboutStory() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:px-6">
      <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
        <h2 className="max-w-md font-heading text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
          Our Story
        </h2>
        <p className="mt-4 max-w-md text-[15px] font-medium text-zinc-500 leading-relaxed md:text-base md:mt-6">
          Founded with a passion for creativity and design, Prayas Graphics was born out of a desire to make high-quality art prints accessible to everyone. We believe that art shouldn't be confined to galleries—it should be a part of your everyday life. What started as a small project has grown into a community of art lovers and creators who share offering a diverse collection.
        </p>
        <div className="mt-8 flex items-center gap-6 md:mt-10">
           <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-[13px] text-zinc-500 font-medium md:text-sm">
             Follow us
             <div className="flex items-center gap-3 text-zinc-400 ml-1 md:ml-2">
               <span className="font-bold hover:text-zinc-800 transition-colors cursor-pointer">X</span>
               <span className="font-bold hover:text-zinc-800 transition-colors cursor-pointer">IG</span>
               <span className="font-bold hover:text-zinc-800 transition-colors cursor-pointer">TK</span>
             </div>
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
