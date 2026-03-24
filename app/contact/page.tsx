import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us – Prayas Graphics",
  description: "Get in touch with the Prayas Graphics team. We respond to all inquiries within 14 hours.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <ContactForm />
      <FaqSection />
      <Footer />
    </main>
  );
}
