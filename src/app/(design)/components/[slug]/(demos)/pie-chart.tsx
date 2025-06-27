"use client";

import {
  BasicPieChart,
  LabeledPieChart,
  CustomLabelPieChart,
  LabelListPieChart,
  LegendPieChart,
  DonutChart,
  DonutWithTextChart,
  DonutActiveChart,
  StackedPieChart,
  InteractivePieChart,
} from "@/components/pie-charts";

export default function PieChartDemo() {
  return (
    <div className="grid gap-6">
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
