import HeroSection from "@/components/HeroSection";
import GrowthStrategy from "@/components/GrowthStrategy";
import MarketMap from "@/components/MarketMap";
import ForecastDashboard from "@/components/ForecastDashboard";
import FutureInnovations from "@/components/FutureInnovations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GrowthStrategy />
      <MarketMap />
      <ForecastDashboard />
      <FutureInnovations />
    </div>
  );
};

export default Index;
