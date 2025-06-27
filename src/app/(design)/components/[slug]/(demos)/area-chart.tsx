"use client";

import {
  BasicAreaChart,
  LayeredAreaChart,
  MetricsAreaChart,
  RevenueAreaChart,
} from "@/components/area-charts";

export default function AreaChartDemo() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BasicAreaChart />
      <RevenueAreaChart />
      <MetricsAreaChart />
      <LayeredAreaChart />
    </div>
  );
}
