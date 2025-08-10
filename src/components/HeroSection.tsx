import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Users, DollarSign } from "lucide-react";
import heroImage from "@/assets/costco-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Costco warehouse store" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-accent/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Costco's Growth &
            <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Revenue Forecast
            </span>
            <span className="block text-4xl md:text-5xl">Playbook</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            A comprehensive strategy analysis blending corporate expansion insights 
            with financial forecasting to unlock sustainable growth in the membership retail model.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Building2 className="w-5 h-5" />
              <span>Store Expansion</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>Market Analysis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="w-5 h-5" />
              <span>Revenue Forecasting</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <DollarSign className="w-5 h-5" />
              <span>Strategic Insights</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Explore the Playbook
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <TrendingUp className="w-6 h-6 mx-auto mb-2" />
          <p className="text-sm">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;