import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, ShoppingCart, CreditCard, Globe, Package } from "lucide-react";

const MarketMap = () => {
  const customerSegments = [
    { segment: "High-Income Families", percentage: 42, color: "bg-primary", description: "Household income >$75K, bulk buyers" },
    { segment: "Small Businesses", percentage: 28, color: "bg-accent", description: "B2B customers, frequent visits" },
    { segment: "Value Seekers", percentage: 20, color: "bg-growth-green", description: "Price-conscious consumers" },
    { segment: "Premium Shoppers", percentage: 10, color: "bg-warning-orange", description: "Organic/premium product focus" }
  ];

  const productMix = [
    { category: "Fresh Foods", revenue: 26.8, growth: "+4.2%", icon: <ShoppingCart className="w-5 h-5" /> },
    { category: "Grocery/Sundries", revenue: 31.2, growth: "+3.8%", icon: <Package className="w-5 h-5" /> },
    { category: "Gas & Pharmacy", revenue: 18.5, growth: "+8.1%", icon: <CreditCard className="w-5 h-5" /> },
    { category: "Hardlines", revenue: 12.8, growth: "+2.4%", icon: <Users className="w-5 h-5" /> },
    { category: "Softlines", revenue: 10.7, growth: "+1.9%", icon: <Globe className="w-5 h-5" /> }
  ];

  const revenueChannels = [
    { channel: "Membership Fees", value: "$4.6B", percentage: 2.1, description: "High-margin recurring revenue" },
    { channel: "Warehouse Sales", value: "$192.1B", percentage: 87.4, description: "Core retail operations" },
    { channel: "E-commerce", value: "$15.8B", percentage: 7.2, description: "Fastest growing segment" },
    { channel: "Gas Stations", value: "$7.2B", percentage: 3.3, description: "Member traffic driver" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Market Map & Revenue Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding Costco's customer base, product portfolio, and revenue diversification 
            across multiple channels and business segments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Customer Segments */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle>Customer Segments</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {customerSegments.map((segment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{segment.segment}</span>
                    <span className="text-sm font-bold">{segment.percentage}%</span>
                  </div>
                  <Progress value={segment.percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">{segment.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Product Mix */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <CardTitle>Product Mix by Revenue</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {productMix.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{product.icon}</div>
                    <div>
                      <div className="font-medium text-sm">{product.category}</div>
                      <div className="text-xs text-growth-green">{product.growth}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{product.revenue}%</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Revenue Channels */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                <CardTitle>Revenue Channels</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {revenueChannels.map((channel, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{channel.channel}</div>
                      <div className="text-2xl font-bold text-primary">{channel.value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Share</div>
                      <div className="font-bold">{channel.percentage}%</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{channel.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">118.9M</div>
              <div className="text-sm text-muted-foreground mb-1">Total Members</div>
              <div className="text-xs text-growth-green">+6.8% YoY</div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">$1,940</div>
              <div className="text-sm text-muted-foreground mb-1">Avg Annual Spend</div>
              <div className="text-xs text-growth-green">+4.2% YoY</div>
            </CardContent>
          </Card>
          
          <Card className="bg-growth-green/5 border-growth-green/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-growth-green mb-2">92.6%</div>
              <div className="text-sm text-muted-foreground mb-1">Renewal Rate</div>
              <div className="text-xs text-growth-green">+0.4pp YoY</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketMap;