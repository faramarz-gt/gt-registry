"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const varianceData = [
  {
    region: "USA",
    variance: -1800, // $1.8M unfavorable (negative)
    percentage: -49.6,
    forecast: 3630,
    actual: 5430,
    description: "Actuals significantly exceeded forecasts"
  },
  {
    region: "Netherlands", 
    variance: -900, // $0.9M unfavorable (negative)
    percentage: -42.0,
    forecast: 2143,
    actual: 3043,
    description: "Actuals exceeded forecasts by substantial margin"
  },
  {
    region: "Belgium",
    variance: 450, // Positive variance (favorable)
    percentage: 18.2,
    forecast: 2475,
    actual: 2025,
    description: "Conservative forecasting - actuals below forecast"
  },
  {
    region: "Switzerland",
    variance: 320, // Positive variance (favorable) 
    percentage: 15.8,
    forecast: 2025,
    actual: 1705,
    description: "Conservative forecasting - actuals below forecast"
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isNegative = data.variance < 0;
    
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-semibold">{label}</p>
        <p className={`text-sm ${isNegative ? 'text-primary' : 'text-secondary'}`}>
          Variance: {isNegative ? '-' : '+'}${Math.abs(data.variance).toLocaleString()}K ({data.percentage > 0 ? '+' : ''}{data.percentage}%)
        </p>
        <p className="text-sm text-muted-foreground">
          Forecast: ${data.forecast.toLocaleString()}K
        </p>
        <p className="text-sm text-muted-foreground">
          Actual: ${data.actual.toLocaleString()}K
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {data.description}
        </p>
      </div>
    );
  }
  return null;
};

export default function VarianceBarChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Regional Forecast Variance Analysis</CardTitle>
        <CardDescription>
          Variance between forecasted and actual results by region. Negative values indicate unfavorable variances (actuals exceeded forecasts).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={varianceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                dataKey="region" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value > 0 ? '+' : ''}${value}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
              <Bar dataKey="variance" radius={[4, 4, 0, 0]}>
                {varianceData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.variance < 0 ? "#115D7E" : "#45C4B0"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Key Insights */}
          <div className="mt-6 rounded-lg border bg-muted/20 p-4">
            <h3 className="font-semibold text-sm mb-3">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span className="font-medium">Unfavorable Variances</span>
                </div>
                <ul className="text-muted-foreground space-y-1 ml-5">
                  <li>• USA: $1.8M over forecast (49.6% variance)</li>
                  <li>• Netherlands: $0.9M over forecast (42.0% variance)</li>
                  <li>• Both regions show actuals significantly exceeding forecasts</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded"></div>
                  <span className="font-medium">Favorable Variances</span>
                </div>
                <ul className="text-muted-foreground space-y-1 ml-5">
                  <li>• Belgium: $450K under forecast (18.2% variance)</li>
                  <li>• Switzerland: $320K under forecast (15.8% variance)</li>
                  <li>• Conservative forecasting in these regions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 