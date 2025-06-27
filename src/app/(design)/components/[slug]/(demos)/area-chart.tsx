"use client";

import {
  BasicAreaChart,
  RevenueAreaChart,
  MetricsAreaChart,
  LayeredAreaChart,
} from "@/components/area-charts";

export default function AreaChartDemo() {
  return (
    <div className="grid gap-6">
      <BasicAreaChart />
      <RevenueAreaChart />
      <MetricsAreaChart />
      <LayeredAreaChart />
    </div>
  );
}
