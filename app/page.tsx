import HeroSection from "@/components/HeroSection";
import PopularPosters from "@/components/PopularPosters";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <HeroSection />
      <PopularPosters />
      <StorySection />
      <FeaturesSection />
      <HowItWorks />
      <CtaSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
