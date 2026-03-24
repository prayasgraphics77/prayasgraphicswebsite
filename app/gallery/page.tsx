import GalleryGrid from "@/components/GalleryGrid";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery – Prayas Graphics",
  description: "Browse our curated gallery of poster art — abstract, nature, typography, and more. Each print available as a high-quality poster.",
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <GalleryGrid />
      <CtaSection />
      <Footer />
    </main>
  );
}
