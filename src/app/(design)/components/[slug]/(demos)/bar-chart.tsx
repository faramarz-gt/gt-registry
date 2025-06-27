"use client";

import {
  BasicBarChart,
  GroupedBarChart,
  HorizontalBarChart,
  InteractiveBarChart,
  KPIBarChart,
  LabeledBarChart,
  MixedBarChart,
  NegativeBarChart,
  PercentageBarChart,
  StackedBarChart,
} from "@/components/bar-charts";

export default function BarChartDemo() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BasicBarChart />
      <HorizontalBarChart />
      <StackedBarChart />
      <LabeledBarChart />
      <NegativeBarChart />
      <MixedBarChart />
      <InteractiveBarChart />
      <GroupedBarChart />
      <PercentageBarChart />
      <KPIBarChart />
    </div>
  );
}
