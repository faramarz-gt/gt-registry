"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const varianceData = [
  {
    region: "USA",
    variance: -1800, // $1.8M unfavorable (negative)
    percentage: -49.6,
    forecast: 3630,
    actual: 5430,
    description: "Actuals significantly exceeded forecasts",
  },
  {
    region: "Netherlands",
    variance: -900, // $0.9M unfavorable (negative)
    percentage: -42.0,
    forecast: 2143,
    actual: 3043,
    description: "Actuals exceeded forecasts by substantial margin",
  },
  {
    region: "Belgium",
    variance: 450, // Positive variance (favorable)
    percentage: 18.2,
    forecast: 2475,
    actual: 2025,
    description: "Conservative forecasting - actuals below forecast",
  },
  {
    region: "Switzerland",
    variance: 320, // Positive variance (favorable)
    percentage: 15.8,
    forecast: 2025,
    actual: 1705,
    description: "Conservative forecasting - actuals below forecast",
  },
];

const chartConfig = {
  variance: {
    label: "Variance",
  },
  unfavorable: {
    label: "Unfavorable",
    color: "hsl(var(--chart-1))", // Using registry chart-1 token
  },
  favorable: {
    label: "Favorable",
    color: "hsl(var(--chart-3))", // Using registry chart-3 token
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (
    active &&
    payload &&
    payload.length > 0 &&
    payload[0] &&
    payload[0].payload
  ) {
    const data = payload[0].payload;
    if (!data || typeof data.variance === "undefined") return null;

    const isNegative = data.variance < 0;

    return (
      <div className="rounded-lg border bg-background p-2 shadow-md max-w-48">
        <p className="font-semibold text-sm">{label}</p>
        <p
          className={`text-sm ${isNegative ? "text-[hsl(var(--chart-1))]" : "text-[hsl(var(--chart-3))]"}`}
        >
          {isNegative ? "-" : "+"}${Math.abs(data.variance).toLocaleString()}K (
          {data.percentage > 0 ? "+" : ""}
          {data.percentage}%)
        </p>
        <p className="text-xs text-muted-foreground">
          F: ${data.forecast.toLocaleString()}K • A: $
          {data.actual.toLocaleString()}K
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
          Variance between forecasted and actual results by region. Negative
          values indicate unfavorable variances (actuals exceeded forecasts).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={varianceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
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
                tickFormatter={(value) => `${value > 0 ? "+" : ""}${value}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
              <Bar dataKey="variance" radius={[4, 4, 0, 0]}>
                {varianceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.variance < 0
                        ? "hsl(var(--chart-1))"
                        : "hsl(var(--chart-3))"
                    }
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
                  <div
                    className="w-4 h-4 rounded border"
                    style={{ backgroundColor: "hsl(var(--chart-1))" }}
                  ></div>
                  <div>
                    <span className="font-medium">Chart Primary</span>
                    <div className="text-xs text-muted-foreground">
                      <code>--chart-1</code> • Registry Token
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Used for unfavorable variances (negative values)
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded border"
                    style={{ backgroundColor: "hsl(var(--chart-3))" }}
                  ></div>
                  <div>
                    <span className="font-medium">Chart Secondary</span>
                    <div className="text-xs text-muted-foreground">
                      <code>--chart-3</code> • Registry Token
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Used for favorable variances (positive values)
                </p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-4 rounded-lg border bg-muted/20 p-4">
            <h3 className="font-semibold text-sm mb-3">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: "hsl(var(--chart-1))" }}
                  ></div>
                  <span className="font-medium">Unfavorable Variances</span>
                </div>
                <ul className="text-muted-foreground space-y-1 ml-5">
                  <li>• USA: $1.8M over forecast (49.6% variance)</li>
                  <li>• Netherlands: $0.9M over forecast (42.0% variance)</li>
                  <li>
                    • Both regions show actuals significantly exceeding
                    forecasts
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: "hsl(var(--chart-3))" }}
                  ></div>
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
        <CardTitle>Variance Analysis - Hover Tooltip</CardTitle>
        <CardDescription>
          Same variance data with hover-based tooltip display. Hover over bars
          to see detailed variance information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ChartContainer config={chartConfig}>
            <BarChart
              data={varianceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
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
                tickFormatter={(value) => `${value > 0 ? "+" : ""}${value}K`}
              />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
              <Bar dataKey="variance" radius={[4, 4, 0, 0]}>
                {varianceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.variance < 0
                        ? "hsl(var(--chart-1))"
                        : "hsl(var(--chart-3))"
                    }
                  />
                ))}
              </Bar>
              <Tooltip content={<CustomTooltip />} />
            </BarChart>
          </ChartContainer>

          {/* Tooltip Feature Highlight */}
          <div className="mt-6 rounded-lg border bg-emerald-50/50 border-emerald-200 p-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Hover Tooltip Feature
            </h3>
            <div className="text-sm space-y-2">
              <p className="text-muted-foreground">
                This chart demonstrates standard hover-based tooltips with
                detailed variance information including forecast vs actual
                comparisons.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-emerald-200 rounded"></div>
                <span>Tooltip shows on hover with financial formatting</span>
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
  {
    region: "USA",
    variance: -1800,
    percentage: -49.6,
    forecast: 3630,
    actual: 5430,
  },
  {
    region: "Netherlands",
    variance: -900,
    percentage: -42.0,
    forecast: 2143,
    actual: 3043,
  },
  {
    region: "Belgium",
    variance: 450,
    percentage: 18.2,
    forecast: 2475,
    actual: 2025,
  },
  {
    region: "Switzerland",
    variance: 320,
    percentage: 15.8,
    forecast: 2025,
    actual: 1705,
  },
  {
    region: "Germany",
    variance: -650,
    percentage: -28.5,
    forecast: 2280,
    actual: 2930,
  },
  {
    region: "France",
    variance: 280,
    percentage: 12.3,
    forecast: 2275,
    actual: 1995,
  },
  {
    region: "UK",
    variance: -420,
    percentage: -19.8,
    forecast: 2121,
    actual: 2541,
  },
  {
    region: "Italy",
    variance: 185,
    percentage: 9.7,
    forecast: 1905,
    actual: 1720,
  },
  {
    region: "Spain",
    variance: -310,
    percentage: -16.2,
    forecast: 1914,
    actual: 2224,
  },
  {
    region: "Canada",
    variance: 125,
    percentage: 6.8,
    forecast: 1838,
    actual: 1713,
  },
  {
    region: "Japan",
    variance: -180,
    percentage: -8.9,
    forecast: 2022,
    actual: 2202,
  },
  {
    region: "Australia",
    variance: 95,
    percentage: 5.2,
    forecast: 1825,
    actual: 1730,
  },
];

export function VarianceBarChartCompact() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">
          Global Variance - Maximum Scale
        </CardTitle>
        <CardDescription className="text-sm">
          Demonstrates maximum data points (12 regions) while maintaining
          readability and UX.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={expandedVarianceData}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
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
                tickFormatter={(value) => `${value > 0 ? "+" : ""}${value}K`}
                width={40}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
              <Bar dataKey="variance" radius={[1, 1, 0, 0]}>
                {expandedVarianceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.variance < 0
                        ? "hsl(var(--chart-1))"
                        : "hsl(var(--chart-3))"
                    }
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
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--chart-1))" }}
                ></div>
                <span>7 Unfavorable</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--chart-3))" }}
                ></div>
                <span>5 Favorable</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Forecast accuracy data based on the image
const forecastAccuracyData = [
  {
    period: "Period 1",
    accuracy: 45,
    description: "Initial forecast accuracy baseline",
  },
  {
    period: "Period 2",
    accuracy: 48,
    description: "Slight improvement in accuracy",
  },
  {
    period: "Period 3",
    accuracy: 55,
    description: "Moderate accuracy improvement",
  },
  {
    period: "Period 4",
    accuracy: 77,
    description: "Significant accuracy improvement",
  },
  {
    period: "Period 5",
    accuracy: 79,
    description: "Continued strong performance",
  },
  {
    period: "Period 6",
    accuracy: 78,
    description: "Maintaining high accuracy",
  },
  {
    period: "Period 7",
    accuracy: 85,
    description: "Peak forecast accuracy achieved",
  },
];

const forecastChartConfig = {
  accuracy: {
    label: "Forecast Accuracy %",
    color: "hsl(var(--primary))", // Using theme primary color (Sea Blue)
  },
} satisfies ChartConfig;

const ForecastTooltip = ({ active, payload, label }: any) => {
  if (
    active &&
    payload &&
    payload.length > 0 &&
    payload[0] &&
    payload[0].payload
  ) {
    const data = payload[0].payload;
    if (!data || typeof data.accuracy === "undefined") return null;

    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-semibold text-sm">{label}</p>
        <p
          className="text-sm font-medium"
          style={{ color: "hsl(var(--primary))" }}
        >
          {data.accuracy}% Accuracy
        </p>
        <p className="text-xs text-muted-foreground mt-1">{data.description}</p>
      </div>
    );
  }
  return null;
};

export function ForecastAccuracyChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Forecast Accuracy Trending</CardTitle>
        <CardDescription>
          Sure, here is a chart showing how your forecast accuracy is trending.
          Short LLM generated description......
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={forecastChartConfig}>
          <BarChart
            accessibilityLayer
            data={forecastAccuracyData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="period"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => [`${value}%`, "Accuracy"]}
                  labelFormatter={(label) => `${label}`}
                />
              }
            />
            <Bar
              dataKey="accuracy"
              fill="var(--color-accuracy)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>

        {/* Chart Insights with theme colors */}
        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "hsl(var(--primary))" }}
            ></div>
            Forecast Accuracy Trends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Period 1-3:</span>
                <span className="text-muted-foreground">
                  Building Foundation
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Started at 45% accuracy with gradual improvement to 55%
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Period 4-7:</span>
                <span className="text-muted-foreground">
                  Strong Performance
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Achieved 77-85% accuracy range with peak at Period 7
              </p>
            </div>
          </div>

          {/* Color Token Reference */}
          <div className="mt-4 pt-3 border-t border-primary/20">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                ></div>
                <span className="font-medium">Primary Color</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Sea Blue (#115D7E) from theme tokens
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Mixed bar chart data for business unit performance
const businessUnitData = [
  { unit: "treasury", performance: 275, fill: "var(--color-treasury)" },
  { unit: "risk", performance: 200, fill: "var(--color-risk)" },
  { unit: "compliance", performance: 187, fill: "var(--color-compliance)" },
  { unit: "operations", performance: 173, fill: "var(--color-operations)" },
  { unit: "other", performance: 90, fill: "var(--color-other)" },
];

const mixedChartConfig = {
  performance: {
    label: "Performance Score",
  },
  treasury: {
    label: "Treasury",
    color: "hsl(var(--chart-1))", // Using chart-1 token
  },
  risk: {
    label: "Risk Management",
    color: "hsl(var(--chart-2))", // Using chart-2 token
  },
  compliance: {
    label: "Compliance",
    color: "hsl(var(--chart-3))", // Using chart-3 token
  },
  operations: {
    label: "Operations",
    color: "hsl(var(--chart-4))", // Using chart-4 token
  },
  other: {
    label: "Other Units",
    color: "hsl(var(--chart-5))", // Using chart-5 token
  },
} satisfies ChartConfig;

export function BusinessUnitPerformanceMixed() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business Unit Performance - Mixed</CardTitle>
        <CardDescription>
          Q1 2024 Performance Scores by Business Unit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={mixedChartConfig}>
          <BarChart
            accessibilityLayer
            data={businessUnitData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="unit"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                mixedChartConfig[value as keyof typeof mixedChartConfig]?.label
              }
            />
            <XAxis dataKey="performance" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="performance" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Treasury units leading performance this quarter{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing performance scores across all business units for Q1 2024
        </div>
      </CardFooter>
    </Card>
  );
}

// Horizontal bar chart for closing balance variances matching the provided image
const closingBalanceData = [
  { businessUnit: "BELGIUM", variance: 160 },
  { businessUnit: "IRELAND", variance: 75 },
  { businessUnit: "LONDON", variance: 40 },
  { businessUnit: "ARGENTINA", variance: 20 },
  { businessUnit: "CM NEW BU1", variance: 18 },
];

const closingBalanceChartConfig = {
  variance: {
    label: "Variance (M)",
    color: "hsl(var(--primary))", // Using theme primary color (Sea Blue)
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

export function Top5ClosingBalanceVariancesChart() {
  // Data for the insights mini chart
  const insightsData = [
    { category: "Belgium", value: 160, label: "Highest variance" },
    { category: "Ireland", value: 75, label: "Second highest" },
    { category: "London", value: 40, label: "Third highest" },
    { category: "Argentina", value: 20, label: "Fourth highest" },
    { category: "CM NEW BU1", value: 18, label: "Fifth highest" },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-red-600 text-sm">🎯</span>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">
              Sure, here is a bar chart showing the top 5 closing balance
              variances by business unit:
            </CardTitle>
            <CardDescription className="text-sm mt-2">
              Short LLM generated description......
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={closingBalanceChartConfig}>
          <BarChart
            accessibilityLayer
            data={closingBalanceData}
            layout="vertical"
            margin={{
              left: 80,
              right: 60,
              top: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis
              dataKey="businessUnit"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={75}
              tick={{ fontSize: 12 }}
            />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}m`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => [`${value}m`, "Variance"]}
                  labelFormatter={(label) => `Business Unit: ${label}`}
                />
              }
            />
            <Bar
              dataKey="variance"
              fill="var(--color-variance)"
              radius={[0, 4, 4, 0]}
            >
              <LabelList
                dataKey="variance"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `${value}m`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>

        {/* Top Variance Insights - Now as a horizontal bar chart with theme colors */}
        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "hsl(var(--primary))" }}
            ></div>
            Top Variance Insights
          </h3>

          {/* Mini horizontal bar chart for insights */}
          <div className="space-y-3">
            {insightsData.map((item, index) => (
              <div key={item.category} className="flex items-center gap-3">
                <div className="w-20 text-xs font-medium text-right">
                  {item.category}:
                </div>
                <div className="flex-1 relative">
                  <div className="w-full bg-muted rounded-full h-6 relative overflow-hidden">
                    <div
                      className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500 ease-out"
                      style={{
                        width: `${(item.value / 160) * 100}%`,
                        background:
                          index === 0
                            ? "hsl(var(--primary))" // Highest value uses primary color
                            : "hsl(var(--secondary))", // Others use secondary color
                      }}
                    >
                      <span className="text-white text-xs font-medium">
                        {item.value}M
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-24 text-xs text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}

            {/* Summary stats */}
            <div className="pt-3 border-t border-primary/20 mt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Total:</span>
                  <span className="text-muted-foreground">
                    313M across top 5 units
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Range:</span>
                  <span className="text-muted-foreground">
                    18M - 160M variance spread
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Belgium shows highest closing balance variance{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing variance amounts in millions USD for top 5 business units
        </div>
      </CardFooter>
    </Card>
  );
}
