"use client";

import { useState } from "react";
import { ArrowLeft, BarChart3, Activity, PieChart, Radar, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import all chart components
import { AreaChartComponent } from "@/app/(design)/components/[slug]/(demos)/area-chart";
import { BarChartComponent } from "@/app/(design)/components/[slug]/(demos)/bar-chart";
import { LineChartComponent } from "@/app/(design)/components/[slug]/(demos)/line-chart";
import { PieChartComponent } from "@/app/(design)/components/[slug]/(demos)/pie-chart";
import { RadarChartComponent } from "@/app/(design)/components/[slug]/(demos)/radar-chart";
import { RadialChartComponent } from "@/app/(design)/components/[slug]/(demos)/radial-chart";

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
        name: "Area Chart - Linear",
        description: "Showing total visitors for the last 6 months",
        component: <AreaChartComponent />,
        slug: "area-chart"
      },
      {
        name: "Area Chart - Step",
        description: "Showing total visitors for the last 6 months",
        component: <AreaChartComponent />,
        slug: "area-chart"
      }
    ]
  },
  {
    id: "bar",
    label: "Bar Charts",
    icon: BarChart3,
    description: "Ideal for comparing categories and showing distributions",
    charts: [
      {
        name: "Bar Chart",
        description: "January - June 2024",
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
        name: "Bar Chart - Stacked",
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
    description: "Great for displaying data trends and changes over time",
    charts: [
      {
        name: "Line Chart",
        description: "January - June 2024",
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
      }
    ]
  },
  {
    id: "pie",
    label: "Pie Charts",
    icon: PieChart,
    description: "Perfect for showing proportions and percentages",
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
        name: "Radar Chart - Multiple",
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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A collection of ready-to-use chart components built with Recharts.
            From basic charts to rich data displays, copy and paste into your apps.
          </p>
          <div className="flex gap-4 justify-center mt-6">
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
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
            <TabsContent key={type.id} value={type.id} className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{type.label}</h2>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {type.charts.map((chart, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{chart.name}</CardTitle>
                          <CardDescription>{chart.description}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/components/${chart.slug}`}>
                              View Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg border bg-background">
                        <div className="h-full w-full scale-75 origin-top-left transform">
                          {chart.component}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
} 