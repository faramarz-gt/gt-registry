"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

// 1. Basic Stacked Area Chart with Gradient
const basicData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const basicConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))", // Sea Blue - GTreasury primary
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-3))", // Peppermint Green - GTreasury primary
  },
} satisfies ChartConfig;

export function BasicAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Desktop vs Mobile visitors with gradient fill
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={basicConfig}>
          <AreaChart
            accessibilityLayer
            data={basicData}
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
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 2. Revenue Trend Area Chart
const revenueData = [
  { quarter: "Q1", revenue: 15000, target: 18000 },
  { quarter: "Q2", revenue: 22000, target: 24000 },
  { quarter: "Q3", revenue: 28000, target: 26000 },
  { quarter: "Q4", revenue: 35000, target: 32000 },
];

const revenueConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))", // Sea Blue - GTreasury primary
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-3))", // Peppermint Green - GTreasury primary
  },
} satisfies ChartConfig;

export function RevenueAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Trend - Area Chart</CardTitle>
        <CardDescription>
          Quarterly revenue vs target performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={revenueConfig}>
          <AreaChart
            accessibilityLayer
            data={revenueData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="quarter"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTarget" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-target)"
                  stopOpacity={0.6}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-target)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="target"
              type="natural"
              fill="url(#fillTarget)"
              fillOpacity={0.3}
              stroke="var(--color-target)"
              strokeDasharray="5 5"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              fillOpacity={0.5}
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Revenue exceeded target by 12% in Q4{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing quarterly performance for 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 3. Single Metric Area Chart
const metricsData = [
  { week: "Week 1", users: 820 },
  { week: "Week 2", users: 932 },
  { week: "Week 3", users: 1045 },
  { week: "Week 4", users: 1180 },
  { week: "Week 5", users: 1055 },
  { week: "Week 6", users: 1220 },
];

const metricsConfig = {
  users: {
    label: "Active Users",
    color: "hsl(var(--chart-3))", // Peppermint Green - GTreasury primary
  },
} satisfies ChartConfig;

export function MetricsAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth - Area Chart</CardTitle>
        <CardDescription>
          Weekly active users with smooth gradient
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={metricsConfig}>
          <AreaChart
            accessibilityLayer
            data={metricsData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.replace("Week ", "W")}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-users)"
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-users)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="users"
              type="natural"
              fill="url(#fillUsers)"
              fillOpacity={0.6}
              stroke="var(--color-users)"
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              User growth up 48% over 6 weeks <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - February 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 4. Multi-Layer Area Chart
const layerData = [
  { month: "Jan", organic: 120, paid: 180, social: 90 },
  { month: "Feb", organic: 150, paid: 200, social: 110 },
  { month: "Mar", organic: 180, paid: 160, social: 130 },
  { month: "Apr", organic: 200, paid: 220, social: 140 },
  { month: "May", organic: 240, paid: 190, social: 160 },
  { month: "Jun", organic: 280, paid: 250, social: 180 },
];

const layerConfig = {
  organic: {
    label: "Organic",
    color: "hsl(var(--chart-2))", // Sea Blue - GTreasury primary
  },
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-3))", // Peppermint Green - GTreasury primary
  },
  social: {
    label: "Social",
    color: "hsl(var(--chart-4))", // Monsoon Green - GTreasury primary
  },
} satisfies ChartConfig;

export function LayeredAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Sources - Layered Areas</CardTitle>
        <CardDescription>
          Organic, Paid, and Social traffic breakdown
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={layerConfig}>
          <AreaChart
            accessibilityLayer
            data={layerData}
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <defs>
              <linearGradient id="fillOrganic" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-organic)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-organic)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillPaid" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-paid)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-paid)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSocial" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-social)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-social)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="social"
              type="natural"
              fill="url(#fillSocial)"
              fillOpacity={0.4}
              stroke="var(--color-social)"
              stackId="a"
            />
            <Area
              dataKey="paid"
              type="natural"
              fill="url(#fillPaid)"
              fillOpacity={0.4}
              stroke="var(--color-paid)"
              stackId="a"
            />
            <Area
              dataKey="organic"
              type="natural"
              fill="url(#fillOrganic)"
              fillOpacity={0.4}
              stroke="var(--color-organic)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Organic traffic growing faster than paid{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing 6 months of traffic data
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
