import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OrderSection from "../components/OrderSection";
import BenefitSection from "../components/BenefitSection";
import GetAppSection from "../components/GetAppSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
        <Navbar />
      <div className="container mx-auto px-16">
        <HeroSection />
        <OrderSection />
        <BenefitSection />
        <GetAppSection />
        <Footer />
      </div>
    </>
  );
}
