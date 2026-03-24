import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <ContactForm />
      <FaqSection />
      <Footer />
    </main>
  );
}
