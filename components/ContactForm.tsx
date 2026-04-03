"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus({ type: "success", message: result.message || "Message sent successfully!" });
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else {
      setStatus({ type: "error", message: result.error || "Failed to send message." });
    }
    setIsSubmitting(false);

    // Clear status after 8 seconds
    setTimeout(() => {
      setStatus(null);
    }, 8000);
  }

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-24 pb-8 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-[15px] font-medium text-zinc-500 max-w-md">
            If you can&apos;t find the information you need, feel free to reach out. Our team will get back to you within 24 hours.
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
          <form id="contact-form" action={handleSubmit} className="flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full bg-zinc-100 px-6 py-4 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-zinc-200/70"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full bg-zinc-100 px-6 py-4 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-zinc-200/70"
              />
            </div>
            <textarea
              required
              name="message"
              placeholder="How can we help you?"
              rows={8}
              className="w-full resize-none rounded-2xl bg-zinc-100 p-6 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-zinc-200/70 md:min-h-auto min-h-[150px] flex-1"
            ></textarea>
            
            <div className="space-y-4 pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex w-full items-center justify-center rounded-full bg-zinc-950 py-4 text-sm font-semibold text-white transition-all hover:bg-zinc-900 shadow-sm active:scale-[0.98] disabled:opacity-70",
                  status?.type === "success" && "bg-green-600",
                  status?.type === "error" && "bg-red-600"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : status?.type === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Message Sent</span>
                  </>
                ) : status?.type === "error" ? (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    <span>Error Occurred</span>
                  </>
                ) : (
                  "Send message"
                )}
              </button>

              {status && (
                <p className={cn(
                  "text-center text-xs font-semibold animate-in fade-in slide-in-from-top-1",
                  status.type === "success" ? "text-green-600" : "text-red-500"
                )}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row text-center px-2">
         <div className="flex flex-[2] items-center justify-center rounded-2xl md:rounded-full bg-white px-6 py-4 shadow-sm border border-zinc-100/50">
           <span className="text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
              Address: <br className="md:hidden" /> <span className="text-zinc-900 inline-block mt-1 md:mt-0 ml-1">Madhuvatsalya Apartment Shop no 3 Tukdoji Sqr, Manewada Rd, opp. MSEB Office, appt, Nagpur, Maharashtra 440027</span>
           </span>
         </div>
         <div className="flex flex-1 items-center justify-center rounded-2xl md:rounded-full bg-white px-4 py-4 md:py-4 shadow-sm border border-zinc-100/50">
           <span className="text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
              Store hours: <br className="md:hidden" /> <span className="text-zinc-900 inline-block mt-1 md:mt-0 ml-1">Mon - Sat: 10:00am - 8:00pm, Sun: Closed</span>
           </span>
         </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[32px] bg-white p-4 shadow-sm border border-zinc-100/50">
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
