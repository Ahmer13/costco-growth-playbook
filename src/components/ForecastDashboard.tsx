import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Calculator, BarChart3 } from "lucide-react";

const ForecastDashboard = () => {
  const [selectedScenario, setSelectedScenario] = useState("base");

  const scenarios = {
    base: {
      name: "Base Case",
      description: "Current growth trajectory with moderate expansion",
      revenue2027: 285.6,
      growth: "5.2%",
      newStores: 140,
      membershipFee: 60,
      confidence: "High"
    },
    optimistic: {
      name: "Optimistic",
      description: "Accelerated expansion with premium tier launch",
      revenue2027: 324.8,
      growth: "7.8%",
      newStores: 180,
      membershipFee: 75,
      confidence: "Medium"
    },
    conservative: {
      name: "Conservative", 
      description: "Slower growth due to economic headwinds",
      revenue2027: 251.2,
      growth: "3.1%",
      newStores: 100,
      membershipFee: 60,
      confidence: "High"
    }
  };

  const revenueProjections = [
    { year: "2023", actual: 230.4, projected: null },
    { year: "2024", actual: null, projected: 242.6 },
    { year: "2025", actual: null, projected: 255.8 },
    { year: "2026", actual: null, projected: 270.2 },
    { year: "2027", actual: null, projected: scenarios[selectedScenario].revenue2027 }
  ];

  const keyDrivers = [
    {
      driver: "Store Expansion",
      impact: "+12.8%",
      description: "New warehouse openings in suburban markets",
      trend: "up"
    },
    {
      driver: "E-commerce Growth",
      impact: "+8.4%",
      description: "Digital transformation and delivery expansion", 
      trend: "up"
    },
    {
      driver: "Membership Price Increase",
      impact: "+3.2%",
      description: "Strategic pricing optimization",
      trend: "up"
    },
    {
      driver: "Economic Sensitivity",
      impact: "-2.1%",
      description: "Consumer spending pressure risk",
      trend: "down"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Interactive Forecasting Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore multiple revenue scenarios based on key strategic drivers and market conditions. 
            Adjust assumptions to see real-time impact on growth projections.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Scenario Selection */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedScenario === key 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedScenario(key)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{scenario.name}</CardTitle>
                    <Badge 
                      variant={scenario.confidence === "High" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {scenario.confidence}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{scenario.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">2027 Revenue</span>
                      <span className="font-bold text-primary">${scenario.revenue2027}B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">CAGR</span>
                      <span className="font-bold text-growth-green">{scenario.growth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Revenue Projection Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <CardTitle>Revenue Projections (2023-2027)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueProjections.map((year, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{year.year}</span>
                      <div className="flex items-center gap-4">
                        {year.actual && (
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Actual</div>
                            <div className="font-bold">${year.actual}B</div>
                          </div>
                        )}
                        {year.projected && (
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Projected</div>
                            <div className="font-bold text-primary">${year.projected}B</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    <span className="font-medium">Scenario Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The <strong>{scenarios[selectedScenario].name}</strong> scenario projects 
                    <strong className="text-primary"> ${scenarios[selectedScenario].revenue2027}B</strong> in 
                    2027 revenue with <strong className="text-growth-green">{scenarios[selectedScenario].growth}</strong> CAGR.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Drivers */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <CardTitle>Revenue Growth Drivers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyDrivers.map((driver, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className={`p-2 rounded-full ${
                        driver.trend === 'up' 
                          ? 'bg-growth-green/10 text-growth-green' 
                          : 'bg-destructive/10 text-destructive'
                      }`}>
                        {driver.trend === 'up' ? 
                          <TrendingUp className="w-4 h-4" /> : 
                          <TrendingDown className="w-4 h-4" />
                        }
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{driver.driver}</div>
                        <div className="text-xs text-muted-foreground">{driver.description}</div>
                      </div>
                      <div className={`font-bold ${
                        driver.trend === 'up' ? 'text-growth-green' : 'text-destructive'
                      }`}>
                        {driver.impact}
                      </div>
                    </div>
                  ))}
                </div>

                <Tabs defaultValue="assumptions" className="mt-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="assumptions">Assumptions</TabsTrigger>
                    <TabsTrigger value="sensitivity">Sensitivity</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="assumptions" className="space-y-3 mt-4">
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>New Stores (5yr):</span>
                        <span className="font-medium">{scenarios[selectedScenario].newStores}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Membership Fee:</span>
                        <span className="font-medium">${scenarios[selectedScenario].membershipFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Same-Store Growth:</span>
                        <span className="font-medium">3.2% CAGR</span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sensitivity" className="space-y-3 mt-4">
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>+$5 membership fee:</span>
                        <span className="font-medium text-growth-green">+$0.6B revenue</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+10 new stores:</span>
                        <span className="font-medium text-growth-green">+$2.3B revenue</span>
                      </div>
                      <div className="flex justify-between">
                        <span>-1% same-store growth:</span>
                        <span className="font-medium text-destructive">-$4.2B revenue</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastDashboard;