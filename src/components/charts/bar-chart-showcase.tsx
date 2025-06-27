"use client";

import {
  BasicBarChart,
  HorizontalBarChart,
  StackedBarChart,
  LabeledBarChart,
  NegativeBarChart,
  MixedBarChart,
  InteractiveBarChart,
  GroupedBarChart,
  PercentageBarChart,
  KPIBarChart,
} from "@/components/bar-charts";

const chartExamples = [
  {
    title: "Basic Multi-Series",
    description: "Desktop vs Mobile visitors with legend",
    component: BasicBarChart,
  },
  {
    title: "Horizontal Layout",
    description: "Revenue by industry sector",
    component: HorizontalBarChart,
  },
  {
    title: "Stacked Data",
    description: "Sales, Returns, and Profit breakdown",
    component: StackedBarChart,
  },
  {
    title: "Custom Labels",
    description: "Sales vs Target comparison",
    component: LabeledBarChart,
  },
  {
    title: "Negative Values",
    description: "Profit and Loss visualization",
    component: NegativeBarChart,
  },
  {
    title: "Mixed Data Types",
    description: "Revenue and Order correlation",
    component: MixedBarChart,
  },
  {
    title: "Interactive Hover",
    description: "Budget vs Actual spending",
    component: InteractiveBarChart,
  },
  {
    title: "Grouped Categories",
    description: "Quarterly performance by region",
    component: GroupedBarChart,
  },
  {
    title: "Percentage Display",
    description: "Traffic distribution by device",
    component: PercentageBarChart,
  },
  {
    title: "KPI Dashboard",
    description: "Performance indicators vs targets",
    component: KPIBarChart,
  },
];

export function BarChartShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Bar Chart Collection</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive collection of 10 different bar chart configurations built with Recharts and shadcn/ui. 
          Each chart demonstrates different use cases and styling approaches for data visualization.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
        {chartExamples.map((example, index) => {
          const Component = example.component;
          return (
            <div key={index} className="space-y-2">
              <div className="flex flex-col space-y-1">
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
} 