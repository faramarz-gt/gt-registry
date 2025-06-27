"use client";

import {
  BasicLineChart,
  MultiLineChart,
  SmoothLineChart,
  SteppedLineChart,
} from "@/components/line-charts";

export default function LineChartDemo() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BasicLineChart />
      <MultiLineChart />
      <SteppedLineChart />
      <SmoothLineChart />
    </div>
  );
}
