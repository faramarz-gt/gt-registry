"use client";

import {
  BasicPieChart,
  CustomLabelPieChart,
  DonutActiveChart,
  DonutChart,
  DonutWithTextChart,
  InteractivePieChart,
  LabelListPieChart,
  LabeledPieChart,
  LegendPieChart,
  StackedPieChart,
} from "@/components/pie-charts";

export default function PieChartDemo() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BasicPieChart />
      <LabeledPieChart />
      <CustomLabelPieChart />
      <LabelListPieChart />
      <LegendPieChart />
      <DonutChart />
      <DonutWithTextChart />
      <DonutActiveChart />
      <StackedPieChart />
      <InteractivePieChart />
    </div>
  );
}
