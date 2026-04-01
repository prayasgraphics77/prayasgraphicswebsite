import GalleryGrid from "@/components/GalleryGrid";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Galleries – Prayas Graphics Nagpur",
  description: "Explore our portfolio of premium LED signboards, ACP cladding, building facades, and high-quality digital printing projects across Nagpur.",
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50/50 pb-20 overflow-x-hidden pt-20">
      <GalleryGrid />
      <CtaSection />
      <Footer />
    </main>
  );
}
