import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MeaningSection from "@/components/MeaningSection";
import PainpointSection from "@/components/PainpointSection";
import QuestionSection from "@/components/QuestionSection";
import FeatureIconsSection from "@/components/FeatureIconsSection";
import CTASection from "@/components/CTASection";
import FeatureIntroSection from "@/components/FeatureIntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MeaningSection />
      <PainpointSection />
      <QuestionSection />
      <FeatureIconsSection />
      <CTASection />
      <FeatureIntroSection />
      <FeaturesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
