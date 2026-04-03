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
         <div className="flex flex-[2] items-center justify-center rounded-2xl md:rounded-full bg-white px-6 py-4 shadow-sm">
           <span className="text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
             Address: <br className="md:hidden" /> <span className="text-zinc-900 inline-block mt-1 md:mt-0 ml-1">Madhuvatsalya Apartment Shop no 3 Tukdoji Sqr, Manewada Rd, opp. MSEB Office, appt, Nagpur, Maharashtra 440027</span>
           </span>
         </div>
         <div className="flex flex-1 items-center justify-center rounded-2xl md:rounded-full bg-white px-4 py-4 md:py-4 shadow-sm">
           <span className="text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
             Store hours: <br className="md:hidden" /> <span className="text-zinc-900 inline-block mt-1 md:mt-0 ml-1">Mon - Sat: 10:00am - 8:00pm, Sun: Closed</span>
           </span>
         </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[32px] bg-white p-4 shadow-sm">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7443020843207!2d79.10267937420798!3d21.12275798454544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c147e4d218c3%3A0x3b1e05e4c2b2ffb2!2sPRAYAS%20GRAPHICS%20%7C%20ACP%20Sheet%20Work%20%7C%20Signages%20Board%20%7C%20LED%20Glow%20Sign%20Board%20%7C%20Flex%20Printing%20%7C%20Manufacturers%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1775206503124!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
    </section>
  );
}
