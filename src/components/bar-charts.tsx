"use client";

import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Target, ArrowUp, ArrowDown } from "lucide-react";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Cell, 
  LabelList, 
  ReferenceLine,
  ResponsiveContainer 
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
import * as React from "react";

// 1. Basic Multi-Series Bar Chart
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
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  mobile: {
    label: "Mobile", 
    color: "var(--chart-2)", // Sea Blue - GTreasury primary
  },
} satisfies ChartConfig;

export function BasicBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Multi-Series Bar Chart</CardTitle>
        <CardDescription>Desktop vs Mobile visitors</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={basicConfig}>
          <BarChart accessibilityLayer data={basicData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" />
            <Bar dataKey="mobile" fill="var(--color-mobile)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 2. Horizontal Bar Chart
const horizontalData = [
  { category: "Technology", value: 425 },
  { category: "Healthcare", value: 380 },
  { category: "Finance", value: 310 },
  { category: "Education", value: 285 },
  { category: "Retail", value: 245 },
];

const horizontalConfig = {
  value: {
    label: "Revenue (K)",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
} satisfies ChartConfig;

export function HorizontalBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Horizontal Bar Chart</CardTitle>
        <CardDescription>Revenue by industry sector</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={horizontalConfig}>
          <BarChart
            accessibilityLayer
            data={horizontalData}
            layout="horizontal"
            margin={{ left: 80 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="category"
              type="category"
              tickMargin={10}
              width={70}
            />
            <XAxis dataKey="value" type="number" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 3. Stacked Bar Chart with Legend
const stackedData = [
  { month: "Jan", sales: 400, returns: 50, profit: 350 },
  { month: "Feb", sales: 500, returns: 70, profit: 430 },
  { month: "Mar", sales: 350, returns: 40, profit: 310 },
  { month: "Apr", sales: 450, returns: 60, profit: 390 },
  { month: "May", sales: 550, returns: 80, profit: 470 },
  { month: "Jun", sales: 480, returns: 55, profit: 425 },
];

const stackedConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  returns: {
    label: "Returns", 
    color: "var(--chart-2)", // Sea Blue - GTreasury primary
  },
  profit: {
    label: "Profit",
    color: "var(--chart-4)", // Monsoon Green - GTreasury primary (lighter green for profit)
  },
} satisfies ChartConfig;

export function StackedBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stacked Bar Chart</CardTitle>
        <CardDescription>Sales, Returns, and Profit breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={stackedConfig}>
          <BarChart accessibilityLayer data={stackedData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="sales" stackId="a" fill="var(--color-sales)" />
            <Bar dataKey="returns" stackId="a" fill="var(--color-returns)" />
            <Bar dataKey="profit" stackId="a" fill="var(--color-profit)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Profit margin improved by 12% <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing 6 months of financial data
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 4. Bar Chart with Custom Labels
const labelData = [
  { product: "Product A", sales: 4500, target: 5000 },
  { product: "Product B", sales: 3200, target: 3500 },
  { product: "Product C", sales: 5800, target: 5500 },
  { product: "Product D", sales: 2900, target: 3200 },
  { product: "Product E", sales: 4100, target: 4000 },
];

const labelConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  target: {
    label: "Target",
    color: "var(--chart-2)", // Sea Blue - GTreasury primary
  },
} satisfies ChartConfig;

export function LabeledBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart with Custom Labels</CardTitle>
        <CardDescription>Sales vs Target comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={labelConfig}>
          <BarChart accessibilityLayer data={labelData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="product" tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="sales" fill="var(--color-sales)">
              <LabelList dataKey="sales" position="top" className="fill-foreground" fontSize={12} />
            </Bar>
            <Bar dataKey="target" fill="var(--color-target)">
              <LabelList dataKey="target" position="top" className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 5. Negative Values Bar Chart
const negativeData = [
  { quarter: "Q1", profit: 1200, loss: -800 },
  { quarter: "Q2", profit: 1500, loss: -600 },
  { quarter: "Q3", profit: 900, loss: -1200 },
  { quarter: "Q4", profit: 1800, loss: -400 },
];

const negativeConfig = {
  profit: {
    label: "Profit",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary (positive values)
  },
  loss: {
    label: "Loss",
    color: "var(--chart-2)", // Sea Blue - GTreasury primary (negative values)
  },
} satisfies ChartConfig;

export function NegativeBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart with Negative Values</CardTitle>
        <CardDescription>Profit and Loss by quarter</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={negativeConfig}>
          <BarChart accessibilityLayer data={negativeData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="quarter" tickMargin={10} />
            <YAxis />
            <ReferenceLine y={0} stroke="var(--border)" strokeWidth={2} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="profit" fill="var(--color-profit)" />
            <Bar dataKey="loss" fill="var(--color-loss)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Net positive growth of 8.5% <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 6. Mixed Bar Chart (Bar + Line)
const mixedData = [
  { month: "Jan", revenue: 2400, orders: 120 },
  { month: "Feb", revenue: 1398, orders: 98 },
  { month: "Mar", revenue: 9800, orders: 180 },
  { month: "Apr", revenue: 3908, orders: 145 },
  { month: "May", revenue: 4800, orders: 190 },
  { month: "Jun", revenue: 3800, orders: 165 },
];

const mixedConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  orders: {
    label: "Orders",
    color: "var(--chart-2)", // Sea Blue - GTreasury primary
  },
} satisfies ChartConfig;

export function MixedBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mixed Bar Chart</CardTitle>
        <CardDescription>Revenue and Order volume correlation</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={mixedConfig}>
          <BarChart accessibilityLayer data={mixedData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" />
            <Bar dataKey="orders" fill="var(--color-orders)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 7. Interactive Bar Chart with Active State
const interactiveData = [
  { category: "Marketing", budget: 45000, spent: 42000 },
  { category: "Development", budget: 68000, spent: 65000 },
  { category: "Sales", budget: 32000, spent: 28000 },
  { category: "Support", budget: 25000, spent: 23000 },
  { category: "Research", budget: 38000, spent: 35000 },
];

const interactiveConfig = {
  budget: {
    label: "Budget",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  spent: {
    label: "Spent",
    color: "var(--chart-2)", // Sea Blue - GTreasury primary  
  },
} satisfies ChartConfig;

export function InteractiveBarChart() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Bar Chart</CardTitle>
        <CardDescription>Budget vs Actual spending by department</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={interactiveConfig}>
          <BarChart
            accessibilityLayer
            data={interactiveData}
            onMouseEnter={(data, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="category" tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="budget" fill="var(--color-budget)" />
            <Bar dataKey="spent" fill="var(--color-spent)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 8. Grouped Bar Chart with Multiple Categories
const groupedData = [
  { region: "North", q1: 120, q2: 140, q3: 160, q4: 180 },
  { region: "South", q1: 90, q2: 110, q3: 130, q4: 150 },
  { region: "East", q1: 110, q2: 120, q3: 140, q4: 170 },
  { region: "West", q1: 100, q2: 130, q3: 150, q4: 160 },
];

const groupedConfig = {
  q1: {
    label: "Q1",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  q2: {
    label: "Q2",
    color: "var(--chart-2)", // Sea Blue - GTreasury primary
  },
  q3: {
    label: "Q3",
    color: "var(--chart-4)", // Monsoon Green - GTreasury primary (light green)
  },
  q4: {
    label: "Q4",
    color: "var(--chart-6)", // Sea Blue tint - additional shade
  },
} satisfies ChartConfig;

export function GroupedBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grouped Bar Chart</CardTitle>
        <CardDescription>Quarterly performance by region</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={groupedConfig}>
          <BarChart accessibilityLayer data={groupedData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="region" tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="q1" fill="var(--color-q1)" />
            <Bar dataKey="q2" fill="var(--color-q2)" />
            <Bar dataKey="q3" fill="var(--color-q3)" />
            <Bar dataKey="q4" fill="var(--color-q4)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 9. Percentage Bar Chart
const percentageData = [
  { segment: "Mobile", percentage: 45, value: 4500 },
  { segment: "Desktop", percentage: 35, value: 3500 },
  { segment: "Tablet", percentage: 20, value: 2000 },
];

const percentageConfig = {
  percentage: {
    label: "Percentage",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
} satisfies ChartConfig;

export function PercentageBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Percentage Bar Chart</CardTitle>
        <CardDescription>Traffic distribution by device type</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={percentageConfig}>
          <BarChart accessibilityLayer data={percentageData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="segment" tickMargin={10} />
            <YAxis tickFormatter={(value) => `${value}%`} />
            <ChartTooltip
              content={<ChartTooltipContent formatter={(value) => [`${value}%`, "Share"]} />}
            />
            <Bar dataKey="percentage" fill="var(--color-percentage)">
              <LabelList
                dataKey="percentage"
                position="top"
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Mobile traffic increased by 5% <ArrowUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// 10. KPI Dashboard Bar Chart
const kpiData = [
  { metric: "Revenue", current: 85000, target: 100000, icon: DollarSign },
  { metric: "Users", current: 1250, target: 1500, icon: Users },
  { metric: "Orders", current: 340, target: 400, icon: ShoppingCart },
  { metric: "Conversion", current: 3.2, target: 4.0, icon: Target },
];

const kpiConfig = {
  current: {
    label: "Current",
    color: "var(--chart-3)", // Peppermint Green - GTreasury primary
  },
  target: {
    label: "Target",
    color: "var(--chart-2)", // Sea Blue - GTreasury primary
  },
} satisfies ChartConfig;

export function KPIBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>KPI Dashboard Bar Chart</CardTitle>
        <CardDescription>Key Performance Indicators vs Targets</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={kpiConfig}>
          <BarChart accessibilityLayer data={kpiData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="metric" tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="current" fill="var(--color-current)" />
            <Bar dataKey="target" fill="var(--color-target)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span>Revenue: 85% of target</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-500" />
            <span>Conversion: 80% of target</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}