import AboutHero from "@/components/AboutHero";
import MeetTheMaker from "@/components/MeetTheMaker";
import AboutStory from "@/components/AboutStory";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <AboutHero />
      <MeetTheMaker />
      <AboutStory />
      <FeaturesSection />
      <BlogSection />
      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
