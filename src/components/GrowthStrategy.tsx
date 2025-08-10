import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Package, Users, ArrowUpRight } from "lucide-react";

const GrowthStrategy = () => {
  const strategies = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Store Expansion Trends",
      description: "Costco has opened 26 new warehouses in FY2023, focusing on suburban markets with high household income demographics.",
      metrics: [
        { label: "New Stores (FY2023)", value: "26", trend: "+18%" },
        { label: "Total Warehouses", value: "847", trend: "+3.2%" },
        { label: "Avg Store Revenue", value: "$230M", trend: "+5.1%" }
      ],
      status: "Strong Growth"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Expansion",
      description: "Strategic focus on Asia-Pacific markets, particularly Japan and South Korea, with digital integration initiatives.",
      metrics: [
        { label: "International Revenue", value: "$47B", trend: "+12%" },
        { label: "Countries", value: "14", trend: "+1" },
        { label: "International Stores", value: "273", trend: "+8.7%" }
      ],
      status: "Accelerating"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Kirkland Private Label",
      description: "Private label strategy driving margin expansion and customer loyalty with 25% of total sales volume.",
      metrics: [
        { label: "Kirkland Revenue", value: "$58B", trend: "+15%" },
        { label: "Margin Contribution", value: "35%", trend: "+3pp" },
        { label: "SKU Count", value: "750+", trend: "+12%" }
      ],
      status: "Market Leader"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Competitive Positioning",
      description: "Maintaining market leadership vs Sam's Club and BJ's through superior customer experience and value proposition.",
      metrics: [
        { label: "Market Share", value: "62%", trend: "+2pp" },
        { label: "Member Renewal", value: "92.6%", trend: "+0.4pp" },
        { label: "NPS Score", value: "78", trend: "+3pts" }
      ],
      status: "Dominant"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Strong Growth": return "bg-growth-green/10 text-growth-green border-growth-green/20";
      case "Accelerating": return "bg-revenue-blue/10 text-revenue-blue border-revenue-blue/20";
      case "Market Leader": return "bg-warning-orange/10 text-warning-orange border-warning-orange/20";
      case "Dominant": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Growth Strategy Teardown</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Analyzing Costco's multi-faceted approach to sustainable growth across store expansion, 
            international markets, private label dominance, and competitive positioning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {strategies.map((strategy, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {strategy.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{strategy.title}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={getStatusColor(strategy.status)}
                      >
                        {strategy.status}
                      </Badge>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">{strategy.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {strategy.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                      <div className="text-xs text-growth-green font-medium">{metric.trend}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStrategy;