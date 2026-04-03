export default function ContactForm() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-24 pb-8 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-[15px] font-medium text-zinc-500 max-w-md">
            If you can't find the information you need, feel free to reach out.
          </p>

          <div className="mt-12 flex w-full max-w-sm flex-col gap-4">
            <div className="flex items-center justify-between rounded-full border border-zinc-200 px-6 py-3.5">
              <span className="text-sm font-medium text-zinc-500">Email</span>
              <span className="text-[13px] font-semibold text-zinc-900 md:text-sm">prayasgraphics77@gmail.com</span>
            </div>
            <div className="flex items-center justify-between rounded-full border border-zinc-200 px-6 py-3.5">
              <span className="text-sm font-medium text-zinc-500">Phone</span>
              <span className="text-[13px] font-semibold text-zinc-900 md:text-sm">+91 878 827 0495</span>
            </div>
            <p className="mt-4 text-center text-xs font-medium text-zinc-400">
              We assess inquiries in 24 hours (usually, we aim to respond within 14 hours).
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[32px] bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full bg-zinc-100 px-6 py-4 text-sm font-medium outline-none transition-colors focus:bg-zinc-200/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full bg-zinc-100 px-6 py-4 text-sm font-medium outline-none transition-colors focus:bg-zinc-200/50"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={8}
              className="w-full resize-none rounded-2xl bg-zinc-100 p-6 text-sm font-medium outline-none transition-colors focus:bg-zinc-200/50 md:min-h-auto min-h-[150px]"
            ></textarea>
          </div>
          <button className="mt-6 flex w-full items-center justify-center rounded-full bg-primary py-4 text-sm font-semibold text-white transition-colors hover:bg-[#800080]/90">
            Send message
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row text-center px-2">
         <div className="flex flex-1 items-center justify-center rounded-2xl md:rounded-full bg-white px-4 py-4 md:py-4 shadow-sm">
           <span className="text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
             Address: <br className="md:hidden" /> <span className="text-zinc-900 inline-block mt-1 md:mt-0">123 Art Avenue, Your City, State, Zip Code, Country</span>
           </span>
         </div>
         <div className="flex flex-1 items-center justify-center rounded-2xl md:rounded-full bg-white px-4 py-4 md:py-4 shadow-sm">
           <span className="text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
             Store hours: <br className="md:hidden" /> <span className="text-zinc-900 inline-block mt-1 md:mt-0">Mon - Fri: 9:00am - 6:00pm, Sat - Sun: 10:00am - 4:00pm</span>
           </span>
         </div>
      </div>
    </section>
  );
}
