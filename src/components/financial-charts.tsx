"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Data for Top 5 Variances (Comparison Report)
const top5VariancesData = [
  { businessUnit: "Belgium", variance: 145.2, type: "favorable" },
  { businessUnit: "Ireland", variance: 89.7, type: "favorable" },
  { businessUnit: "London", variance: 67.3, type: "unfavorable" },
  { businessUnit: "Argentina", variance: 42.8, type: "favorable" },
  { businessUnit: "CM New BU1", variance: 38.5, type: "unfavorable" },
];

// Data for Cash Position Forecast (Comparison Report)
const cashPositionData = [
  { period: "Jan", forecast: 1200, actuals: 950 },
  { period: "Feb", forecast: 1450, actuals: 1180 },
  { period: "Mar", forecast: 1750, actuals: 1320 },
  { period: "Apr", forecast: 2100, actuals: 1480 },
  { period: "May", forecast: 2300, actuals: 1650 },
  { period: "Jun", forecast: 2450, actuals: 1780 },
  { period: "Jul", forecast: 2400, actuals: 1950 },
  { period: "Aug", forecast: 2350, actuals: 2080 },
  { period: "Sep", forecast: 2500, actuals: 2200 },
  { period: "Oct", forecast: 2750, actuals: 2350 },
  { period: "Nov", forecast: 2900, actuals: 2480 },
  { period: "Dec", forecast: 3000, actuals: 2650 },
];

// Data for Forecast Accuracy Trending (Comparison Report)
const forecastAccuracyData = [
  { period: "Period 1", accuracy: 45.2 },
  { period: "Period 2", accuracy: 47.8 },
  { period: "Period 3", accuracy: 52.6 },
  { period: "Period 4", accuracy: 76.4 },
  { period: "Period 5", accuracy: 78.9 },
  { period: "Period 6", accuracy: 77.2 },
  { period: "Period 7", accuracy: 83.6 },
];

// Data for Business Unit Cash Positions (Consolidation Report)
const buCashPositionsData = [
  { businessUnit: "Global Treasury", cashPosition: 2840.5 },
  { businessUnit: "North America", cashPosition: 2120.8 },
  { businessUnit: "Europe", cashPosition: 1950.3 },
  { businessUnit: "Asia Pacific", cashPosition: 1680.7 },
  { businessUnit: "Latin America", cashPosition: 890.2 },
];

// Data for Cash Runway (Consolidation Report)
const cashRunwayData = [
  { week: "Week 1", balance: 8500 },
  { week: "Week 4", balance: 7800 },
  { week: "Week 8", balance: 7200 },
  { week: "Week 12", balance: 6400 },
  { week: "Week 16", balance: 5700 },
  { week: "Week 20", balance: 5000 },
  { week: "Week 24", balance: 4200 },
  { week: "Week 28", balance: 3500 },
  { week: "Week 32", balance: 2800 },
  { week: "Week 36", balance: 2100 },
  { week: "Week 40", balance: 1400 },
  { week: "Week 44", balance: 700 },
];

// Data for Week-over-Week Forecast Changes (Consolidation Report)
const forecastChangesData = [
  { businessUnit: "Treasury Ops", change: 285.4, type: "increase" },
  { businessUnit: "Risk Mgmt", change: -156.7, type: "decrease" },
  { businessUnit: "Cash Mgmt", change: 198.2, type: "increase" },
  { businessUnit: "FX Trading", change: -89.3, type: "decrease" },
  { businessUnit: "Investments", change: 145.8, type: "increase" },
  { businessUnit: "Liquidity", change: -67.4, type: "decrease" },
];

const chartConfig = {
  variance: { label: "Variance" },
  forecast: { label: "Forecast", color: "hsl(var(--primary))" }, // Primary theme color
  actuals: { label: "Actuals", color: "hsl(var(--secondary))" }, // Secondary theme color
  accuracy: { label: "Accuracy", color: "hsl(var(--chart-1))" }, // Chart-1 token
  cashPosition: { label: "Cash Position", color: "hsl(var(--chart-2))" }, // Chart-2 token
  balance: { label: "Balance", color: "hsl(var(--chart-3))" }, // Chart-3 token
  change: { label: "Change" },
} satisfies ChartConfig;

const CompactTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-2 shadow-md max-w-48">
        <p className="font-semibold text-sm">{label}</p>
        <p className="text-sm text-muted-foreground">
          {payload[0].name}:{" "}
          {typeof payload[0].value === "number"
            ? `${payload[0].value.toLocaleString()}${payload[0].name.includes("accuracy") ? "%" : "K"}`
            : payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

// Comparison Report Charts
export function Top5VariancesChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Top 5 Variances (Absolute)</CardTitle>
        <CardDescription className="text-sm">
          Highest variance amounts by business unit (millions).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={top5VariancesData}
              margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
            >
              <XAxis
                dataKey="businessUnit"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}M`}
              />
              <Tooltip content={<CompactTooltip />} />
              <Bar dataKey="variance" radius={[2, 2, 0, 0]}>
                {top5VariancesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.type === "favorable"
                        ? "hsl(var(--chart-3))"
                        : "hsl(var(--chart-1))"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="rounded border bg-blue-50/50 border-blue-200 p-3">
            <h4 className="font-medium text-xs mb-2">Color Legend</h4>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--chart-3))" }}
                ></div>
                <span>Favorable</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--chart-1))" }}
                ></div>
                <span>Unfavorable</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CashPositionForecastChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">
          Cash Position Forecast Impact
        </CardTitle>
        <CardDescription className="text-sm">
          Latest forecast vs actual cash position over time (thousands).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={cashPositionData}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}K`}
              />
              <Tooltip content={<CompactTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="actuals"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
                dot={{ fill: "#45C4B0", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="rounded border bg-emerald-50/50 border-emerald-200 p-3">
            <h4 className="font-medium text-xs mb-2">Trend Analysis</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                ></div>
                <span>Forecast Trend</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                ></div>
                <span>Actual Performance</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ForecastAccuracyChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Forecast Accuracy Trending</CardTitle>
        <CardDescription className="text-sm">
          MAPE (Mean Absolute Percentage Error) by period - higher is better.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={forecastAccuracyData}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <Tooltip content={<CompactTooltip />} />
              <Bar dataKey="accuracy" radius={[2, 2, 0, 0]} fill="#115D7E" />
            </BarChart>
          </ResponsiveContainer>

          <div className="rounded border bg-blue-50/50 border-blue-200 p-3">
            <h4 className="font-medium text-xs mb-2">Performance Metrics</h4>
            <div className="text-xs text-muted-foreground">
              <p>Current accuracy: 83.6% • Trend: ↗ Improving</p>
              <p>Target accuracy: 85% • Gap: 1.4%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Consolidation Report Charts
export function BusinessUnitCashChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">BU Cash Positions</CardTitle>
        <CardDescription className="text-sm">
          Current cash positions by business unit (millions).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={buCashPositionsData}
              layout="horizontal"
              margin={{ top: 10, right: 10, left: 80, bottom: 20 }}
            >
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}M`}
              />
              <YAxis
                type="category"
                dataKey="businessUnit"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                width={120}
              />
              <Tooltip content={<CompactTooltip />} />
              <Bar
                dataKey="cashPosition"
                radius={[0, 2, 2, 0]}
                fill="#9AEBA3"
              />
            </BarChart>
          </ResponsiveContainer>

          <div className="rounded border bg-emerald-50/50 border-emerald-200 p-3">
            <h4 className="font-medium text-xs mb-2">Consolidation Summary</h4>
            <div className="text-xs text-muted-foreground">
              <p>
                Total consolidated cash: $9.5B • Largest position: Global
                Treasury
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CashRunwayChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Consolidated Cash Runway</CardTitle>
        <CardDescription className="text-sm">
          Projected cash depletion based on current burn rates (thousands).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={cashRunwayData}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}K`}
              />
              <Tooltip content={<CompactTooltip />} />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#012030"
                strokeWidth={3}
                dot={{ fill: "#012030", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="rounded border bg-red-50/50 border-red-200 p-3">
            <h4 className="font-medium text-xs mb-2">Runway Analysis</h4>
            <div className="text-xs text-muted-foreground">
              <p>Estimated runway: 44 weeks • Critical threshold: Week 36</p>
              <p>
                Avg weekly burn: $175K • Recommended action: Review expenses
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ForecastChangesChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Week-over-Week Changes</CardTitle>
        <CardDescription className="text-sm">
          Forecast changes from last week's submission by BU (thousands).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={forecastChangesData}
              margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
            >
              <XAxis
                dataKey="businessUnit"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value > 0 ? "+" : ""}${value}K`}
              />
              <Tooltip content={<CompactTooltip />} />
              <Bar dataKey="change" radius={[2, 2, 0, 0]}>
                {forecastChangesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.type === "increase" ? "#9AEBA3" : "#E33277"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="rounded border bg-yellow-50/50 border-yellow-200 p-3">
            <h4 className="font-medium text-xs mb-2">Change Summary</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--chart-1))" }}
                ></div>
                <span>3 Increases</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded border"
                  style={{ backgroundColor: "hsl(var(--chart-2))" }}
                ></div>
                <span>3 Decreases</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
