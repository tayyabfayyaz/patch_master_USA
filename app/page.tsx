// import { Layout } from "@/app/components/layout/Layout";
import { HeroSection } from "@/app/components/home/HeroSection";
import { AboutSection } from "@/app/components/home/AboutSection";
import { WhyChooseSection } from "@/app/components/home/WhyChoseSection";
import { SpecialOfferSection } from "@/app/components/home/SpecialOfferSection";
import { PromiseSection } from "@/app/components/home/PromiseSection";
import { ReviewsSection } from "@/app/components/home/ReviewsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <SpecialOfferSection />
      <PromiseSection />
      <ReviewsSection />
    </>
  );
};

export default Home;
