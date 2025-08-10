import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Truck, Crown, Zap, Smartphone, Building } from "lucide-react";

const FutureInnovations = () => {
  const innovations = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Driven Inventory Optimization",
      timeline: "2024-2025",
      impact: "High",
      description: "Machine learning algorithms to predict demand patterns, optimize stock levels, and reduce waste by 15-20%.",
      keyFeatures: [
        "Predictive demand forecasting",
        "Dynamic pricing optimization",
        "Automated replenishment systems"
      ],
      roiProjection: "$2.3B savings annually"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Micro-Fulfillment Centers",
      timeline: "2025-2026",
      impact: "Medium",
      description: "Strategic placement of automated fulfillment hubs in urban areas to enable same-day delivery for core products.",
      keyFeatures: [
        "Urban market penetration",
        "Same-day delivery capability",
        "Reduced logistics costs"
      ],
      roiProjection: "$1.8B incremental revenue"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Membership Tiers",
      timeline: "2024",
      impact: "High",
      description: "Introduction of platinum-level membership with enhanced benefits, exclusive products, and premium services.",
      keyFeatures: [
        "Exclusive product access",
        "Premium customer service",
        "Enhanced delivery options"
      ],
      roiProjection: "$3.2B additional membership revenue"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Shopping Experience",
      timeline: "2024-2025",
      impact: "Medium",
      description: "Advanced mobile app with AR product visualization, smart shopping lists, and seamless checkout integration.",
      keyFeatures: [
        "Augmented reality features",
        "AI-powered recommendations",
        "Frictionless checkout"
      ],
      roiProjection: "$4.1B e-commerce growth"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainable Energy Integration",
      timeline: "2025-2027",
      impact: "Medium",
      description: "Solar installations and EV charging networks across warehouse locations to reduce operational costs and attract eco-conscious consumers.",
      keyFeatures: [
        "Solar power generation",
        "EV charging stations",
        "Carbon footprint reduction"
      ],
      roiProjection: "$0.8B cost savings"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Flexible Format Stores",
      timeline: "2026-2027",
      impact: "Low",
      description: "Smaller format stores in dense urban markets, maintaining Costco's value proposition in space-constrained locations.",
      keyFeatures: [
        "Urban market access",
        "Curated product selection",
        "Membership model retention"
      ],
      roiProjection: "$1.2B new market revenue"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-costco-red/10 text-costco-red border-costco-red/20";
      case "Medium": return "bg-warning-orange/10 text-warning-orange border-warning-orange/20";
      case "Low": return "bg-muted/10 text-muted-foreground border-muted/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const totalProjectedValue = innovations.reduce((sum, innovation) => {
    const value = parseFloat(innovation.roiProjection.match(/\$([0-9.]+)B/)?.[1] || "0");
    return sum + value;
  }, 0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What's Next: Innovation Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic initiatives Costco could implement over the next 5 years to sustain growth, 
            enhance customer experience, and maintain competitive advantage in evolving retail landscape.
          </p>
        </div>

        {/* Summary Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">${totalProjectedValue.toFixed(1)}B</div>
              <div className="text-sm text-muted-foreground">Total Value Opportunity</div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">Innovation Initiatives</div>
            </CardContent>
          </Card>
          
          <Card className="bg-growth-green/5 border-growth-green/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-growth-green mb-2">2024-2027</div>
              <div className="text-sm text-muted-foreground">Implementation Timeline</div>
            </CardContent>
          </Card>
        </div>

        {/* Innovation Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {innovations.map((innovation, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {innovation.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{innovation.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline">{innovation.timeline}</Badge>
                        <Badge 
                          variant="outline" 
                          className={getImpactColor(innovation.impact)}
                        >
                          {innovation.impact} Impact
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">{innovation.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {innovation.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Projected ROI Impact:</span>
                    <span className="font-bold text-primary">{innovation.roiProjection}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Strategy */}
        <Card className="mt-16 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Implementation Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Phase 1</div>
                <div className="text-sm font-medium mb-2">2024-2025</div>
                <p className="text-sm text-muted-foreground">
                  Launch premium membership tiers and AI inventory systems. Focus on high-impact, 
                  technology-driven improvements.
                </p>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-accent mb-2">Phase 2</div>
                <div className="text-sm font-medium mb-2">2025-2026</div>
                <p className="text-sm text-muted-foreground">
                  Deploy micro-fulfillment centers and enhanced digital experiences. 
                  Expand urban market penetration.
                </p>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-growth-green mb-2">Phase 3</div>
                <div className="text-sm font-medium mb-2">2026-2027</div>
                <p className="text-sm text-muted-foreground">
                  Integrate sustainable energy solutions and test flexible store formats. 
                  Focus on long-term competitive positioning.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-primary to-accent text-white">
                Download Full Innovation Roadmap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FutureInnovations;