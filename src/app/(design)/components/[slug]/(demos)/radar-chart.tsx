"use client";

import {
  BasicRadarChart,
  MultiDatasetRadarChart,
  PerformanceRadarChart,
  SkillsRadarChart,
} from "@/components/radar-charts";

export default function RadarChartDemo() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BasicRadarChart />
      <SkillsRadarChart />
      <PerformanceRadarChart />
      <MultiDatasetRadarChart />
    </div>
  );
}
