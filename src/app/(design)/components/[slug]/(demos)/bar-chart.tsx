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

export default function BarChartDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
