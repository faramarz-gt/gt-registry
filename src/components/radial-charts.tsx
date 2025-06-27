"use client";

import { TrendingUp } from "lucide-react";
import * as React from "react";
import { Label, PolarGrid, RadialBar, RadialBarChart } from "recharts";

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

// 1. Basic Radial Chart
const basicRadialData = [
  { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 1103, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 906, fill: "var(--color-edge)" },
  { browser: "chrome", visitors: 850, fill: "var(--color-chrome)" },
  { browser: "other", visitors: 173, fill: "var(--color-other)" },
];

const basicRadialConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--primary))", // Primary theme color (first priority)
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--secondary))", // Secondary theme color (second priority)
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-1))", // Chart-1 token (third priority)
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-2))", // Chart-2 token (fourth priority)
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-3))", // Chart-3 token (fifth priority)
  },
} satisfies ChartConfig;

export function BasicRadialChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={basicRadialConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            data={basicRadialData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar
              dataKey="visitors"
              background={{ fill: "var(--muted)", opacity: 0.3 }}
              cornerRadius={10}
              stroke="var(--background)"
              strokeWidth={2}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

// 2. Radial Chart with Text
const radialWithTextData = [
  { name: "Desktop", value: 1260, fill: "hsl(var(--primary))" },
];

const radialWithTextConfig = {
  value: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function RadialWithTextChart() {
  const totalVisitors = React.useMemo(() => {
    return radialWithTextData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - With Text</CardTitle>
        <CardDescription>Desktop Visitors</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={radialWithTextConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={radialWithTextData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
            <PolarGrid gridType="circle" />
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Showing total desktop visitors
        </div>
      </CardFooter>
    </Card>
  );
}

// 3. Stacked Radial Chart
const stackedRadialData = [
  { month: "jan", desktop: 186, mobile: 80 },
  { month: "feb", desktop: 305, mobile: 200 },
  { month: "mar", desktop: 237, mobile: 120 },
  { month: "apr", desktop: 73, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
  { month: "jun", desktop: 214, mobile: 140 },
];

const stackedRadialConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig;

export function StackedRadialChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Stacked Radial Chart</CardTitle>
        <CardDescription>Desktop vs Mobile - 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={stackedRadialConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            data={stackedRadialData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <PolarGrid gridType="circle" />
            <RadialBar
              dataKey="desktop"
              stackId="stack"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              stackId="stack"
              cornerRadius={5}
              fill="var(--color-mobile)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Mobile usage increasing <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}

// 4. Progress Radial Chart
const progressRadialData = [
  { name: "progress", value: 73, fill: "hsl(var(--primary))" },
];

const progressRadialConfig = {
  value: {
    label: "Progress",
  },
  progress: {
    label: "Completion",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ProgressRadialChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Progress Radial Chart</CardTitle>
        <CardDescription>Project Completion Status</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={progressRadialConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={progressRadialData}
            startAngle={90}
            endAngle={450}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar
              dataKey="value"
              background
              cornerRadius={10}
              fill="var(--color-progress)"
            />
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {progressRadialData[0].value}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Complete
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          On track for completion <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Project milestone progress
        </div>
      </CardFooter>
    </Card>
  );
}
