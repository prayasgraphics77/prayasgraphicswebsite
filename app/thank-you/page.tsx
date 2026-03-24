import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Thank You | Prayas Graphics",
  description: "Your enquiry has been received.",
};

export default function ThankYouPage() {
  const whatsappNumber = "919876543210"; // Placeholder for client number
  const whatsappMessage = encodeURIComponent("Hi, I just submitted an enquiry on the website and wanted to follow up.");
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 pb-20 pt-24 overflow-x-hidden">
      <div className="w-full max-w-lg px-4 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 ring-8 ring-green-50 shadow-inner">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-950 mb-4">
          Enquiry Received!
        </h1>
        <p className="text-lg text-zinc-600 mb-8 font-medium">
          Thank you for reaching out. We have received your detailed requirements and will send you a custom quotation via WhatsApp within <strong className="text-zinc-900">14 hours</strong>.
        </p>

        <div className="space-y-4 flex flex-col items-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-80 h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 font-bold text-white transition-all hover:bg-[#1DA851] hover:scale-[1.02] shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us Directly
          </a>
          
          <Link
            href="/services"
            className="flex w-full sm:w-80 h-14 items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-8 font-bold text-zinc-700 transition-all hover:bg-zinc-50 hover:border-zinc-300"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </main>
  );
}
