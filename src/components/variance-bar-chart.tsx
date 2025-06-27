"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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

const chartConfig = {
  variance: {
    label: "Variance",
  },
  unfavorable: {
    label: "Unfavorable",
    color: "#115D7E", // Sea Blue
  },
  favorable: {
    label: "Favorable", 
    color: "#45C4B0", // Peppermint Green
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isNegative = data.variance < 0;
    
    return (
      <div className="rounded-lg border bg-background p-2 shadow-md max-w-48">
        <p className="font-semibold text-sm">{label}</p>
        <p className={`text-sm ${isNegative ? 'text-[#115D7E]' : 'text-[#45C4B0]'}`}>
          {isNegative ? '-' : '+'}${Math.abs(data.variance).toLocaleString()}K ({data.percentage > 0 ? '+' : ''}{data.percentage}%)
        </p>
        <p className="text-xs text-muted-foreground">
          F: ${data.forecast.toLocaleString()}K • A: ${data.actual.toLocaleString()}K
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
          
          {/* Color Token Reference */}
          <div className="mt-6 rounded-lg border bg-blue-50/50 border-blue-200 p-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Chart Color Tokens Used
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded border" style={{ backgroundColor: "#115D7E" }}></div>
                  <div>
                    <span className="font-medium">Sea Blue</span>
                    <div className="text-xs text-muted-foreground">
                      <code>--sea-blue</code> • <code>#115D7E</code>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">Used for unfavorable variances (negative values)</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded border" style={{ backgroundColor: "#45C4B0" }}></div>
                  <div>
                    <span className="font-medium">Peppermint Green</span>
                    <div className="text-xs text-muted-foreground">
                      <code>--peppermint-green</code> • <code>#45C4B0</code>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">Used for favorable variances (positive values)</p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-4 rounded-lg border bg-muted/20 p-4">
            <h3 className="font-semibold text-sm mb-3">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: "#115D7E" }}></div>
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
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: "#45C4B0" }}></div>
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

export function VarianceBarChartWithTooltip() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Variance Analysis - Always Visible Tooltip</CardTitle>
        <CardDescription>
          Same variance data with persistent tooltip display (defaults to Netherlands data). Hover over bars to see other regions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ChartContainer config={chartConfig}>
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
              <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
              <Bar 
                dataKey="variance" 
                radius={[4, 4, 0, 0]}
              >
                {varianceData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.variance < 0 ? "#115D7E" : "#45C4B0"}
                  />
                ))}
              </Bar>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(label) => `${label} Region`}
                    formatter={(value: any, name, props) => {
                      const data = props.payload;
                      const isNegative = data.variance < 0;
                      return [
                        <div key="variance" className="space-y-1">
                          <div className={`font-medium text-sm ${isNegative ? 'text-[#115D7E]' : 'text-[#45C4B0]'}`}>
                            {isNegative ? '-' : '+'}${Math.abs(data.variance).toLocaleString()}K ({data.percentage > 0 ? '+' : ''}{data.percentage}%)
                          </div>
                          <div className="text-xs text-muted-foreground">
                            F: ${data.forecast.toLocaleString()}K • A: ${data.actual.toLocaleString()}K
                          </div>
                        </div>,
                        ""
                      ];
                    }}
                  />
                }
                cursor={false}
                defaultIndex={1}
              />
            </BarChart>
          </ChartContainer>
          
          {/* Tooltip Feature Highlight */}
          <div className="mt-6 rounded-lg border bg-emerald-50/50 border-emerald-200 p-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Always-Visible Tooltip Feature
            </h3>
            <div className="text-sm space-y-2">
              <p className="text-muted-foreground">
                This chart demonstrates the <code>defaultIndex</code> feature of shadcn chart tooltips, 
                which keeps a tooltip visible even without mouse interaction.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-emerald-200 rounded"></div>
                <span>Tooltip defaults to index 1 (Netherlands)</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Expanded dataset for maximum scalability demonstration
const expandedVarianceData = [
  { region: "USA", variance: -1800, percentage: -49.6, forecast: 3630, actual: 5430 },
  { region: "Netherlands", variance: -900, percentage: -42.0, forecast: 2143, actual: 3043 },
  { region: "Belgium", variance: 450, percentage: 18.2, forecast: 2475, actual: 2025 },
  { region: "Switzerland", variance: 320, percentage: 15.8, forecast: 2025, actual: 1705 },
  { region: "Germany", variance: -650, percentage: -28.5, forecast: 2280, actual: 2930 },
  { region: "France", variance: 280, percentage: 12.3, forecast: 2275, actual: 1995 },
  { region: "UK", variance: -420, percentage: -19.8, forecast: 2121, actual: 2541 },
  { region: "Italy", variance: 185, percentage: 9.7, forecast: 1905, actual: 1720 },
  { region: "Spain", variance: -310, percentage: -16.2, forecast: 1914, actual: 2224 },
  { region: "Canada", variance: 125, percentage: 6.8, forecast: 1838, actual: 1713 },
  { region: "Japan", variance: -180, percentage: -8.9, forecast: 2022, actual: 2202 },
  { region: "Australia", variance: 95, percentage: 5.2, forecast: 1825, actual: 1730 }
];

export function VarianceBarChartCompact() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Global Variance - Maximum Scale</CardTitle>
        <CardDescription className="text-sm">
          Demonstrates maximum data points (12 regions) while maintaining readability and UX.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={expandedVarianceData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <XAxis 
                dataKey="region" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9 }}
                angle={-45}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9 }}
                tickFormatter={(value) => `${value > 0 ? '+' : ''}${value}K`}
                width={40}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
              <Bar dataKey="variance" radius={[1, 1, 0, 0]}>
                {expandedVarianceData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.variance < 0 ? "#115D7E" : "#45C4B0"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Compact Color Reference with Stats */}
          <div className="rounded border bg-blue-50/50 border-blue-200 p-3">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-xs">Global Overview</h4>
              <span className="text-xs text-muted-foreground">12 Regions</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded border" style={{ backgroundColor: "#115D7E" }}></div>
                <span>7 Unfavorable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded border" style={{ backgroundColor: "#45C4B0" }}></div>
                <span>5 Favorable</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 