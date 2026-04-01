import Image from "next/image";

export default function MeetTheMaker() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-4 px-4 py-8 md:flex-row md:px-6">
      <div className="relative flex flex-1 overflow-hidden rounded-[32px] shadow-sm min-h-[400px] md:min-h-[500px]">
         <div className="absolute inset-0 bg-zinc-200">
             {/* Placeholder for Maker Image */}
             <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/about/rohitmore.jpeg')" }}></div>
         </div>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center text-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
        <div className="max-w-md">
           <svg className="mx-auto h-10 w-10 text-zinc-300 mb-6 md:h-12 md:w-12 md:mb-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
             <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
           </svg>
           <h2 className="font-heading text-xl font-bold leading-relaxed tracking-tight text-zinc-900 md:text-2xl lg:text-3xl">
             I believe art has the power to transform not just spaces, but the way we feel in them. At Prayas Graphics, my goal is to make beautiful, inspiring designs accessible to everyone, so every wall can tell a story that connects with you are.
           </h2>
           <p className="mt-6 text-xs font-semibold text-zinc-400 tracking-wider uppercase md:text-sm md:mt-8">
             The Team at Prayas Graphics
           </p>
        </div>
      </div>
    </section>
  );
}
