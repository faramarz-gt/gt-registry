"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 1. Basic Line Chart
const basicLineData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const basicLineConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))", // Night Blue - primary brand color
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))", // Sea Blue - primary theme color
  },
} satisfies ChartConfig;

export function BasicLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={basicLineConfig}>
          <LineChart
            accessibilityLayer
            data={basicLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={3}
              dot={{
                fill: "var(--color-desktop)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 4,
              }}
              activeDot={{
                r: 6,
                stroke: "var(--color-desktop)",
                strokeWidth: 2,
                fill: "var(--background)",
              }}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={3}
              strokeDasharray="8 4"
              dot={{
                fill: "var(--color-mobile)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 4,
              }}
              activeDot={{
                r: 6,
                stroke: "var(--color-mobile)",
                strokeWidth: 2,
                fill: "var(--background)",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 2. Multi-Line Chart
const multiLineData = [
  { month: "Jan", revenue: 1860, expenses: 1200, profit: 660 },
  { month: "Feb", revenue: 3050, expenses: 1800, profit: 1250 },
  { month: "Mar", revenue: 2370, expenses: 1500, profit: 870 },
  { month: "Apr", revenue: 730, expenses: 1100, profit: -370 },
  { month: "May", revenue: 2090, expenses: 1300, profit: 790 },
  { month: "Jun", revenue: 2140, expenses: 1400, profit: 740 },
];

const multiLineConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))", // Sea Blue - primary theme color
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-3))", // Peppermint Green - primary brand color
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-4))", // Monsoon Green - primary brand color
  },
} satisfies ChartConfig;

export function MultiLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-Line Chart</CardTitle>
        <CardDescription>Financial Performance - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={multiLineConfig}>
          <LineChart
            accessibilityLayer
            data={multiLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-revenue)",
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              dataKey="expenses"
              type="monotone"
              stroke="var(--color-expenses)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{
                fill: "var(--color-expenses)",
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              dataKey="profit"
              type="monotone"
              stroke="var(--color-profit)"
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={{
                fill: "var(--color-profit)",
                strokeWidth: 2,
                r: 4,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Revenue trending up by 12.3% this quarter{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing financial performance for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 3. Stepped Line Chart
const steppedLineData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 150 },
  { month: "Mar", users: 140 },
  { month: "Apr", users: 200 },
  { month: "May", users: 280 },
  { month: "Jun", users: 320 },
];

const steppedLineConfig = {
  users: {
    label: "Active Users",
    color: "hsl(var(--chart-2))", // Sea Blue - primary theme color
  },
} satisfies ChartConfig;

export function SteppedLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stepped Line Chart</CardTitle>
        <CardDescription>User Growth - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={steppedLineConfig}>
          <LineChart
            accessibilityLayer
            data={steppedLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="users"
              type="stepAfter"
              stroke="var(--color-users)"
              strokeWidth={3}
              dot={{
                fill: "var(--color-users)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 5,
              }}
              activeDot={{
                r: 7,
                stroke: "var(--color-users)",
                strokeWidth: 2,
                fill: "var(--background)",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              User growth up 220% this period <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing active user count for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 4. Smooth Line Chart
const smoothLineData = [
  { month: "Jan", temperature: 15.2 },
  { month: "Feb", temperature: 18.7 },
  { month: "Mar", temperature: 22.1 },
  { month: "Apr", temperature: 26.8 },
  { month: "May", temperature: 31.4 },
  { month: "Jun", temperature: 35.9 },
];

const smoothLineConfig = {
  temperature: {
    label: "Temperature (°C)",
    color: "hsl(var(--chart-3))", // Peppermint Green - secondary brand color
  },
} satisfies ChartConfig;

export function SmoothLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Smooth Line Chart</CardTitle>
        <CardDescription>Average Temperature - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={smoothLineConfig}>
          <LineChart
            accessibilityLayer
            data={smoothLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="temperature"
              type="monotone"
              stroke="var(--color-temperature)"
              strokeWidth={4}
              dot={false}
              strokeLinecap="round"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Temperature rising steadily <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Average monthly temperature readings
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 5. Cash Position Chart
const cashPositionData = [
  { month: "Jan", forecast: 1.2, actual: 0.9 },
  { month: "Feb", forecast: 1.4, actual: 1.0 },
  { month: "Mar", forecast: 1.6, actual: 1.2 },
  { month: "Apr", forecast: 1.8, actual: 1.3 },
  { month: "May", forecast: 2.0, actual: 1.4 },
  { month: "Jun", forecast: 2.2, actual: 1.5 },
  { month: "Jul", forecast: 2.4, actual: 1.7 },
  { month: "Aug", forecast: 2.3, actual: 1.6 },
  { month: "Sep", forecast: 2.5, actual: 1.8 },
  { month: "Oct", forecast: 2.6, actual: 1.9 },
  { month: "Nov", forecast: 2.8, actual: 2.0 },
  { month: "Dec", forecast: 3.0, actual: 2.2 },
];

const cashPositionConfig = {
  forecast: {
    label: "Forecast",
    color: "hsl(var(--chart-2))", // Sea Blue - primary theme color for forecasts
  },
  actual: {
    label: "Actuals",
    color: "hsl(var(--chart-3))", // Peppermint Green - secondary brand color for actuals
  },
} satisfies ChartConfig;

export function CashPositionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cash Position Chart</CardTitle>
        <CardDescription>
          Forecast vs Actual Cash Position - 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={cashPositionConfig}>
          <LineChart
            accessibilityLayer
            data={cashPositionData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}m`}
              domain={[0.5, 3.5]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="forecast"
              type="monotone"
              stroke="var(--color-forecast)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="actual"
              type="monotone"
              stroke="var(--color-actual)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Actual performance tracking well with forecast{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Comparing forecasted vs actual cash position
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
