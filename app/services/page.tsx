import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services – Prayas Graphics",
  description: "Explore our comprehensive range of custom signboards: ACP Inlays, Acrylic Letters, Flex Boards, and more from Prayas Graphics.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <ServicesSection />
      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
