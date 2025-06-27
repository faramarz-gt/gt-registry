"use client";

import { useState } from "react";
import * as React from "react";
import { ArrowLeft, BarChart3, Activity, PieChart, Radar, Target, TrendingUp, Copy, Eye } from "lucide-react";
import Link from "next/link";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import all chart components - these will use the latest implementations
import { AreaChartComponent } from "@/app/(design)/components/[slug]/(demos)/area-chart";
import { BarChartComponent } from "@/app/(design)/components/[slug]/(demos)/bar-chart";
import { LineChartComponent } from "@/app/(design)/components/[slug]/(demos)/line-chart";
import { PieChartComponent } from "@/app/(design)/components/[slug]/(demos)/pie-chart";
import { RadarChartComponent } from "@/app/(design)/components/[slug]/(demos)/radar-chart";
import { RadialChartComponent } from "@/app/(design)/components/[slug]/(demos)/radial-chart";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
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
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const chartTypes = [
  {
    id: "area",
    label: "Area Charts",
    icon: Activity,
    description: "Perfect for showing trends over time with filled areas",
    charts: [
      {
        name: "Area Chart",
        description: "Showing total visitors for the last 3 months",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Stacked",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Gradient",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Axis",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Legend",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Icons",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Linear",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Step",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Interactive",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Custom Tooltip",
        description: "January - June 2024",
        component: <AreaChartComponent />,
        slug: "area-chart"
      }
    ]
  },
  {
    id: "bar",
    label: "Bar Charts",
    icon: BarChart3,
    description: "Great for comparing categories and showing discrete data",
    charts: [
      {
        name: "Bar Chart",
        description: "Showing total visitors for the last 6 months",
        component: <BarChartComponent />,
        slug: "bar-chart"
      },
      {
        name: "Bar Chart - Horizontal",
        description: "January - June 2024",
        component: <BarChartComponent />,
        slug: "bar-chart"
      },
      {
        name: "Bar Chart - Multiple",
        description: "January - June 2024",
        component: <BarChartComponent />,
        slug: "bar-chart"
      },
      {
        name: "Bar Chart - Label",
        description: "January - June 2024",
        component: <BarChartComponent />,
        slug: "bar-chart"
      },
      {
        name: "Bar Chart - Mixed",
        description: "January - June 2024",
        component: <BarChartComponent />,
        slug: "bar-chart"
      },
      {
        name: "Bar Chart - Negative",
        description: "January - June 2024",
        component: <BarChartComponent />,
        slug: "bar-chart"
      }
    ]
  },
  {
    id: "line",
    label: "Line Charts",
    icon: TrendingUp,
    description: "Ideal for displaying trends and changes over time",
    charts: [
      {
        name: "Line Chart",
        description: "Showing total visitors for the last 6 months",
        component: <LineChartComponent />,
        slug: "line-chart"
      },
      {
        name: "Line Chart - Multiple",
        description: "January - June 2024",
        component: <LineChartComponent />,
        slug: "line-chart"
      },
      {
        name: "Line Chart - Dots",
        description: "January - June 2024",
        component: <LineChartComponent />,
        slug: "line-chart"
      },
      {
        name: "Line Chart - Custom",
        description: "January - June 2024",
        component: <LineChartComponent />,
        slug: "line-chart"
      },
      {
        name: "Line Chart - Label",
        description: "January - June 2024",
        component: <LineChartComponent />,
        slug: "line-chart"
      }
    ]
  },
  {
    id: "pie",
    label: "Pie Charts",
    icon: PieChart,
    description: "Best for showing proportions and parts of a whole",
    charts: [
      {
        name: "Pie Chart",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Donut",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Donut with Text",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Label",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Legend",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Separator",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Simple",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      },
      {
        name: "Pie Chart - Interactive",
        description: "January - June 2024",
        component: <PieChartComponent />,
        slug: "pie-chart"
      }
    ]
  },
  {
    id: "radar",
    label: "Radar Charts",
    icon: Radar,
    description: "Excellent for comparing multiple variables across categories",
    charts: [
      {
        name: "Radar Chart",
        description: "Showing total visitors for the last 6 months",
        component: <RadarChartComponent />,
        slug: "radar-chart"
      },
      {
        name: "Radar Chart - Dots",
        description: "January - June 2024",
        component: <RadarChartComponent />,
        slug: "radar-chart"
      },
      {
        name: "Radar Chart - Multiple",
        description: "January - June 2024",
        component: <RadarChartComponent />,
        slug: "radar-chart"
      },
      {
        name: "Radar Chart - Lines Only",
        description: "January - June 2024",
        component: <RadarChartComponent />,
        slug: "radar-chart"
      },
      {
        name: "Radar Chart - Label",
        description: "January - June 2024",
        component: <RadarChartComponent />,
        slug: "radar-chart"
      },
      {
        name: "Radar Chart - Grid",
        description: "January - June 2024",
        component: <RadarChartComponent />,
        slug: "radar-chart"
      }
    ]
  },
  {
    id: "radial",
    label: "Radial Charts",
    icon: Target,
    description: "Ideal for showing progress and hierarchical data",
    charts: [
      {
        name: "Radial Chart",
        description: "January - June 2024",
        component: <RadialChartComponent />,
        slug: "radial-chart"
      },
      {
        name: "Radial Chart - Label",
        description: "January - June 2024",
        component: <RadialChartComponent />,
        slug: "radial-chart"
      },
      {
        name: "Radial Chart - Grid",
        description: "January - June 2024",
        component: <RadialChartComponent />,
        slug: "radial-chart"
      },
      {
        name: "Radial Chart - Text",
        description: "January - June 2024",
        component: <RadialChartComponent />,
        slug: "radial-chart"
      },
      {
        name: "Radial Chart - Shape",
        description: "January - June 2024",
        component: <RadialChartComponent />,
        slug: "radial-chart"
      },
      {
        name: "Radial Chart - Stacked",
        description: "January - June 2024",
        component: <RadialChartComponent />,
        slug: "radial-chart"
      }
    ]
  }
];

export default function ChartsPage() {
  const [activeTab, setActiveTab] = useState("area");

  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl tracking-tight mb-4">
            Beautiful Charts & Graphs
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            A collection of ready-to-use chart components built with Recharts.
            From basic charts to rich data displays, copy and paste into your apps.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/components/chart">Browse Charts</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://recharts.org/en-US/" target="_blank" rel="noopener noreferrer">
                Documentation
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Interactive Chart */}
        <div className="mb-12">
          <ChartAreaInteractive />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {chartTypes.map((type) => {
              const Icon = type.icon;
              return (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{type.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {chartTypes.map((type) => (
            <TabsContent key={type.id} value={type.id} className="mt-0">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">{type.label}</h2>
                <p className="text-muted-foreground text-lg">{type.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {type.charts.map((chart, index) => (
                  <div key={index} className="group">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{chart.name}</h3>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/components/${chart.slug}`}>
                              <Eye className="h-4 w-4" />
                              View Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{chart.description}</p>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-shadow">
                      <div className="w-full">
                        {chart.component}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
} 