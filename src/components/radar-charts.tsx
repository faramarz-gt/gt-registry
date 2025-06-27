"use client";

import { TrendingUp } from "lucide-react";
import * as React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 1. Basic Radar Chart
const basicRadarData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const basicRadarConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))", // Primary theme color (first priority)
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--secondary))", // Secondary theme color (second priority)
  },
} satisfies ChartConfig;

export function BasicRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Radar Chart</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={basicRadarConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={basicRadarData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.2}
              stroke="var(--color-desktop)"
              strokeWidth={3}
              dot={{
                fill: "var(--color-desktop)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 4,
              }}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.2}
              stroke="var(--color-mobile)"
              strokeWidth={3}
              strokeDasharray="8 4"
              dot={{
                fill: "var(--color-mobile)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 4,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}

// 2. Skills Radar Chart
const skillsRadarData = [
  { skill: "JavaScript", score: 90 },
  { skill: "TypeScript", score: 85 },
  { skill: "React", score: 95 },
  { skill: "Node.js", score: 80 },
  { skill: "Python", score: 75 },
  { skill: "SQL", score: 88 },
];

const skillsRadarConfig = {
  score: {
    label: "Skill Level",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function SkillsRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Skills Radar Chart</CardTitle>
        <CardDescription>Technical skill assessment</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={skillsRadarConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={skillsRadarData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              dataKey="score"
              fill="var(--color-score)"
              fillOpacity={0.3}
              stroke="var(--color-score)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-score)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 5,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Strong performance across all skills{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Assessment results from Q4 2024
        </div>
      </CardFooter>
    </Card>
  );
}

// 3. Performance Radar Chart
const performanceRadarData = [
  { metric: "Speed", current: 85, target: 90 },
  { metric: "Quality", current: 92, target: 88 },
  { metric: "Efficiency", current: 78, target: 85 },
  { metric: "Innovation", current: 88, target: 80 },
  { metric: "Collaboration", current: 95, target: 92 },
  { metric: "Leadership", current: 82, target: 85 },
];

const performanceRadarConfig = {
  current: {
    label: "Current Performance",
    color: "hsl(var(--primary))",
  },
  target: {
    label: "Target Performance",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig;

export function PerformanceRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Performance Radar Chart</CardTitle>
        <CardDescription>Current vs Target Performance Metrics</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={performanceRadarConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={performanceRadarData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <PolarAngleAxis dataKey="metric" />
            <PolarGrid />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              dataKey="current"
              fill="var(--color-current)"
              fillOpacity={0.2}
              stroke="var(--color-current)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-current)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 4,
              }}
            />
            <Radar
              dataKey="target"
              fill="var(--color-target)"
              fillOpacity={0.1}
              stroke="var(--color-target)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{
                fill: "var(--color-target)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 4,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Exceeding targets in 3 out of 6 metrics{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Performance review for Q4 2024
        </div>
      </CardFooter>
    </Card>
  );
}

// 4. Multi-Dataset Radar Chart
const multiDatasetRadarData = [
  { category: "Marketing", teamA: 80, teamB: 65, teamC: 90 },
  { category: "Sales", teamA: 75, teamB: 85, teamC: 70 },
  { category: "Support", teamA: 90, teamB: 78, teamC: 85 },
  { category: "Development", teamA: 85, teamB: 92, teamC: 88 },
  { category: "Design", teamA: 88, teamB: 70, teamC: 95 },
  { category: "Operations", teamA: 82, teamB: 88, teamC: 75 },
];

const multiDatasetRadarConfig = {
  teamA: {
    label: "Team Alpha",
    color: "hsl(var(--primary))",
  },
  teamB: {
    label: "Team Beta",
    color: "hsl(var(--secondary))",
  },
  teamC: {
    label: "Team Gamma",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MultiDatasetRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Multi-Dataset Radar Chart</CardTitle>
        <CardDescription>Team Performance Comparison</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={multiDatasetRadarConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={multiDatasetRadarData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <PolarAngleAxis dataKey="category" />
            <PolarGrid />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              dataKey="teamA"
              fill="var(--color-teamA)"
              fillOpacity={0.15}
              stroke="var(--color-teamA)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-teamA)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 3,
              }}
            />
            <Radar
              dataKey="teamB"
              fill="var(--color-teamB)"
              fillOpacity={0.15}
              stroke="var(--color-teamB)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{
                fill: "var(--color-teamB)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 3,
              }}
            />
            <Radar
              dataKey="teamC"
              fill="var(--color-teamC)"
              fillOpacity={0.15}
              stroke="var(--color-teamC)"
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={{
                fill: "var(--color-teamC)",
                strokeWidth: 2,
                stroke: "var(--background)",
                r: 3,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Team Gamma leading in design and marketing{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Q4 2024 team performance comparison
        </div>
      </CardFooter>
    </Card>
  );
}
