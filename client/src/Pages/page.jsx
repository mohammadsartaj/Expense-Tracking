import Header from "./LandingPage/Header";
import HeroSection from "./LandingPage/HeroSection";
import FeaturesSection from "./LandingPage/FeaturesSection";
import Login from "./LandingPage/Login";
// import SignUp from "./LandingPage/SignUp";
import MockupSection from "./LandingPage/MockUpSection";
import Footer from "./LandingPage/Footer";
import ComparisonSection from "./LandingPage/ComparisonSection";
import CTASection from "./LandingPage/CTASection";
import FAQSection from "./LandingPage/FAQSection";
import Howitwork from "./LandingPage/Howitwork";
import OverviewSection from "./LandingPage/OverviewSection";
import ScreenshotsSection from "./LandingPage/ScreenshotsSection";
import SecuritySection from "./LandingPage/SecuritySection";
import TestimonialsSection from "./LandingPage/TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <MockupSection />
        <FeaturesSection />
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Howitwork />
        <ScreenshotsSection />
        <ComparisonSection />
        <OverviewSection />
        <SecuritySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
