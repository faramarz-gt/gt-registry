"use client";

import {
  BasicRadialChart,
  ProgressRadialChart,
  RadialWithTextChart,
  StackedRadialChart,
} from "@/components/radial-charts";

export default function RadialChartDemo() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BasicRadialChart />
      <RadialWithTextChart />
      <StackedRadialChart />
      <ProgressRadialChart />
    </div>
  );
}
