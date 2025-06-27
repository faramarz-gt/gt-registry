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
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

// Data for Business Unit Revenue Performance
const buRevenueData = [
  { businessUnit: "Global Treasury", revenue: 2840, budget: 2650 },
  { businessUnit: "North America", revenue: 2120, budget: 2200 },
  { businessUnit: "Europe", revenue: 1950, budget: 1850 },
  { businessUnit: "Asia Pacific", revenue: 1680, budget: 1750 },
  { businessUnit: "Latin America", revenue: 890, budget: 950 },
];

// Data for Cash Flow by Department
const departmentCashFlowData = [
  { department: "Treasury Operations", cashFlow: 1250 },
  { department: "Risk Management", cashFlow: 980 },
  { department: "Investment Banking", cashFlow: 875 },
  { department: "Foreign Exchange", cashFlow: 720 },
  { department: "Corporate Finance", cashFlow: 650 },
  { department: "Compliance", cashFlow: 420 },
];

// Data for Regional Profitability
const regionalProfitData = [
  { region: "Americas", profit: 3200, margin: 18.5 },
  { region: "EMEA", profit: 2850, margin: 16.2 },
  { region: "Asia-Pacific", profit: 2100, margin: 15.8 },
  { region: "Latin America", profit: 1450, margin: 12.3 },
];

// Data for Cost Center Analysis
const costCenterData = [
  { center: "Technology", cost: 1850, allocated: 1750 },
  { center: "Operations", cost: 1420, allocated: 1500 },
  { center: "Risk & Compliance", cost: 980, allocated: 950 },
  { center: "Human Resources", cost: 750, allocated: 800 },
  { center: "Facilities", cost: 620, allocated: 650 },
];

const chartConfigs = {
  revenue: {
    revenue: { label: "Revenue", color: "hsl(var(--primary))" }, // Primary theme color
    budget: { label: "Budget", color: "hsl(var(--secondary))" }, // Secondary theme color
    label: { color: "var(--background)" },
  } satisfies ChartConfig,

  cashFlow: {
    cashFlow: { label: "Cash Flow", color: "hsl(var(--chart-1))" }, // Chart-1 token
    label: { color: "var(--background)" },
  } satisfies ChartConfig,

  profit: {
    profit: { label: "Profit", color: "hsl(var(--chart-2))" }, // Chart-2 token
    label: { color: "var(--background)" },
  } satisfies ChartConfig,

  cost: {
    cost: { label: "Actual Cost", color: "hsl(var(--chart-3))" }, // Chart-3 token
    allocated: { label: "Allocated", color: "hsl(var(--chart-4))" }, // Chart-4 token
    label: { color: "var(--background)" },
  } satisfies ChartConfig,
};

export function BusinessUnitRevenueChart() {
  const totalRevenue = buRevenueData.reduce(
    (sum, item) => sum + item.revenue,
    0,
  );
  const totalBudget = buRevenueData.reduce((sum, item) => sum + item.budget, 0);
  const variance = ((totalRevenue - totalBudget) / totalBudget) * 100;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">
          Business Unit Revenue Performance
        </CardTitle>
        <CardDescription className="text-sm">
          Revenue vs Budget by Business Unit (millions USD)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigs.revenue}>
          <BarChart
            accessibilityLayer
            data={buRevenueData}
            layout="vertical"
            margin={{ right: 80, left: 120 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="businessUnit"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                value.length > 12 ? value.slice(0, 12) + "..." : value
              }
              width={110}
            />
            <XAxis dataKey="revenue" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="revenue"
              layout="vertical"
              fill="var(--color-revenue)"
              radius={4}
            >
              <LabelList
                dataKey="revenue"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={11}
                formatter={(value: number) => `$${value}M`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {variance > 0 ? (
            <>
              Revenue exceeded budget by {variance.toFixed(1)}%{" "}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </>
          ) : (
            <>
              Revenue below budget by {Math.abs(variance).toFixed(1)}%{" "}
              <TrendingDown className="h-4 w-4 text-red-500" />
            </>
          )}
        </div>
        <div className="text-muted-foreground leading-none">
          Total revenue: ${totalRevenue.toLocaleString()}M vs $
          {totalBudget.toLocaleString()}M budget
        </div>
      </CardFooter>
    </Card>
  );
}

export function DepartmentCashFlowChart() {
  const totalCashFlow = departmentCashFlowData.reduce(
    (sum, item) => sum + item.cashFlow,
    0,
  );
  const avgCashFlow = totalCashFlow / departmentCashFlowData.length;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">
          Department Cash Flow Analysis
        </CardTitle>
        <CardDescription className="text-sm">
          Monthly cash flow by department (thousands USD)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigs.cashFlow}>
          <BarChart
            accessibilityLayer
            data={departmentCashFlowData}
            layout="vertical"
            margin={{ right: 80, left: 140 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="department"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                value.length > 15 ? value.slice(0, 15) + "..." : value
              }
              width={130}
            />
            <XAxis dataKey="cashFlow" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="cashFlow"
              layout="vertical"
              fill="var(--color-cashFlow)"
              radius={4}
            >
              <LabelList
                dataKey="cashFlow"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={11}
                formatter={(value: number) => `$${value}K`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Strong cash generation across departments{" "}
          <DollarSign className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total monthly cash flow: ${totalCashFlow.toLocaleString()}K • Average:
          ${avgCashFlow.toFixed(0)}K
        </div>
      </CardFooter>
    </Card>
  );
}

export function RegionalProfitabilityChart() {
  const totalProfit = regionalProfitData.reduce(
    (sum, item) => sum + item.profit,
    0,
  );
  const avgMargin =
    regionalProfitData.reduce((sum, item) => sum + item.margin, 0) /
    regionalProfitData.length;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">
          Regional Profitability Overview
        </CardTitle>
        <CardDescription className="text-sm">
          Profit by region with margin indicators (millions USD)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigs.profit}>
          <BarChart
            accessibilityLayer
            data={regionalProfitData}
            layout="vertical"
            margin={{ right: 100, left: 100 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="region"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={90}
            />
            <XAxis dataKey="profit" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [
                    name === "profit" ? `$${value}M` : `${value}%`,
                    name === "profit" ? "Profit" : "Margin",
                  ]}
                />
              }
            />
            <Bar
              dataKey="profit"
              layout="vertical"
              fill="var(--color-profit)"
              radius={4}
            >
              <LabelList
                dataKey="profit"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={11}
                formatter={(value: number) => `$${value}M`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Healthy margins across all regions{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total profit: ${totalProfit.toLocaleString()}M • Average margin:{" "}
          {avgMargin.toFixed(1)}%
        </div>
      </CardFooter>
    </Card>
  );
}

export function CostCenterAnalysisChart() {
  const totalActual = costCenterData.reduce((sum, item) => sum + item.cost, 0);
  const totalAllocated = costCenterData.reduce(
    (sum, item) => sum + item.allocated,
    0,
  );
  const efficiency = ((totalAllocated - totalActual) / totalAllocated) * 100;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Cost Center Analysis</CardTitle>
        <CardDescription className="text-sm">
          Actual vs Allocated costs by center (thousands USD)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigs.cost}>
          <BarChart
            accessibilityLayer
            data={costCenterData}
            layout="vertical"
            margin={{ right: 80, left: 120 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="center"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={110}
            />
            <XAxis dataKey="cost" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="cost"
              layout="vertical"
              fill="var(--color-cost)"
              radius={4}
            >
              <LabelList
                dataKey="cost"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={11}
                formatter={(value: number) => `$${value}K`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {efficiency > 0 ? (
            <>
              Cost efficiency: {efficiency.toFixed(1)}% under budget{" "}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </>
          ) : (
            <>
              Cost overrun: {Math.abs(efficiency).toFixed(1)}% over budget{" "}
              <TrendingDown className="h-4 w-4 text-red-500" />
            </>
          )}
        </div>
        <div className="text-muted-foreground leading-none">
          Total actual: ${totalActual.toLocaleString()}K vs $
          {totalAllocated.toLocaleString()}K allocated
        </div>
      </CardFooter>
    </Card>
  );
}

// Data for Top 5 Closing Balance Variances by Business Unit (from Forecasting Consolidation Report)
const closingBalanceVarianceData = [
  {
    businessUnit: "BELGIUM",
    variance: 160,
    description: "Highest variance in consolidation",
  },
  {
    businessUnit: "IRELAND",
    variance: 75,
    description: "Significant cash position variance",
  },
  {
    businessUnit: "LONDON",
    variance: 40,
    description: "Moderate variance detected",
  },
  {
    businessUnit: "ARGENTINA",
    variance: 20,
    description: "Minor variance identified",
  },
  {
    businessUnit: "CM NEW BU1",
    variance: 18,
    description: "New business unit variance",
  },
];

const forecastingChartConfig = {
  variance: {
    label: "Closing Balance Variance",
    color: "hsl(var(--primary))", // Primary theme color
  },
  label: { color: "var(--background)" },
} satisfies ChartConfig;

export function ForecastingConsolidationChart() {
  const totalVariance = closingBalanceVarianceData.reduce(
    (sum, item) => sum + item.variance,
    0,
  );
  const maxVariance = Math.max(
    ...closingBalanceVarianceData.map((item) => item.variance),
  );
  const maxVarianceUnit = closingBalanceVarianceData.find(
    (item) => item.variance === maxVariance,
  );

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">
          Top 5 Closing Balance Variances by Business Unit
        </CardTitle>
        <CardDescription className="text-sm">
          Forecasting Consolidation Report - Variance amounts in millions USD
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={forecastingChartConfig}>
          <BarChart
            accessibilityLayer
            data={closingBalanceVarianceData}
            layout="vertical"
            margin={{ right: 80, left: 100 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="businessUnit"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={90}
              tick={{ fontSize: 12 }}
            />
            <XAxis dataKey="variance" type="number" hide domain={[0, 180]} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(label) => `${label}`}
                  formatter={(value, name) => [
                    `$${value}M`,
                    "Closing Balance Variance",
                  ]}
                />
              }
            />
            <Bar
              dataKey="variance"
              layout="vertical"
              fill="var(--color-variance)"
              radius={[0, 4, 4, 0]}
            >
              <LabelList
                dataKey="variance"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={11}
                formatter={(value: number) => `${value}m`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {maxVarianceUnit?.businessUnit} shows highest variance at $
          {maxVariance}M
          <TrendingUp className="h-4 w-4 text-blue-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total variance across top 5 units: ${totalVariance}M • Requires
          immediate attention for forecasting accuracy
        </div>
      </CardFooter>
    </Card>
  );
}

// New chart matching the provided image design
const closingBalanceData = [
  { businessUnit: "BELGIUM", variance: 160 },
  { businessUnit: "IRELAND", variance: 75 },
  { businessUnit: "LONDON", variance: 40 },
  { businessUnit: "ARGENTINA", variance: 20 },
  { businessUnit: "CM NEW BU1", variance: 18 },
];

const customLabelChartConfig = {
  variance: {
    label: "Variance",
    color: "hsl(var(--primary))", // Primary theme color
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

export function ClosingBalanceVariancesChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Top 5 Closing Balance Variances by Business Unit</CardTitle>
        <CardDescription>Variance amounts in millions USD</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={customLabelChartConfig}>
          <BarChart
            accessibilityLayer
            data={closingBalanceData}
            layout="vertical"
            margin={{
              right: 60,
              left: 10,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="businessUnit"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="variance" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="variance"
              layout="vertical"
              fill="var(--color-variance)"
              radius={4}
            >
              <LabelList
                dataKey="businessUnit"
                position="insideLeft"
                offset={8}
                className="fill-[var(--color-label)]"
                fontSize={12}
              />
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
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Belgium shows highest variance at 160M{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing closing balance variances across top 5 business units
        </div>
      </CardFooter>
    </Card>
  );
}
