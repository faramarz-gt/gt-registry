"use client"

import * as React from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Cell, LabelList, Pie, PieChart, ResponsiveContainer, Sector, Label } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

// 1. Basic Pie Chart
const basicPieData = [
  { browser: "chrome", visitors: 275, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 200, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 187, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 173, fill: "var(--chart-5)" },
  { browser: "other", visitors: 90, fill: "var(--chart-1)" },
]

const basicPieConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-3)", // Peppermint Green
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)", // Sea Blue
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)", // Monsoon Green
  },
  edge: {
    label: "Edge",
    color: "var(--chart-5)", // Lime Green
  },
  other: {
    label: "Other",
    color: "var(--chart-1)", // Night Blue
  },
} satisfies ChartConfig

export function BasicPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={basicPieConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={basicPieData}
              dataKey="visitors"
              nameKey="browser"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 2. Pie Chart with Labels
const labeledPieData = [
  { browser: "chrome", visitors: 280, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 195, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 190, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 170, fill: "var(--chart-5)" },
  { browser: "other", visitors: 85, fill: "var(--chart-1)" },
]

const labeledPieConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-3)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-5)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function LabeledPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={labeledPieConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={labeledPieData}
              dataKey="visitors"
              nameKey="browser"
              label
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 3. Pie Chart with Custom Labels
const customLabelPieData = [
  { browser: "chrome", visitors: 270, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 185, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 195, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 165, fill: "var(--chart-5)" },
  { browser: "other", visitors: 75, fill: "var(--chart-1)" },
]

export function CustomLabelPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Custom Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={basicPieConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={customLabelPieData}
              dataKey="visitors"
              nameKey="browser"
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {`${payload.browser} (${payload.visitors})`}
                  </text>
                )
              }}
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 4. Pie Chart with Label List
const labelListPieData = [
  { browser: "chrome", visitors: 260, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 215, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 175, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 155, fill: "var(--chart-5)" },
  { browser: "other", visitors: 70, fill: "var(--chart-1)" },
]

const labelListPieConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-3)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-5)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function LabelListPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={labelListPieConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={labelListPieData} dataKey="visitors" nameKey="browser">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof labelListPieConfig) =>
                  labelListPieConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 5. Pie Chart with Legend
const legendPieData = [
  { browser: "chrome", visitors: 290, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 210, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 180, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 160, fill: "var(--chart-5)" },
  { browser: "other", visitors: 80, fill: "var(--chart-1)" },
]

const legendPieConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-3)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-5)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function LegendPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Legend</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={legendPieConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={legendPieData} dataKey="visitors" nameKey="browser" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// 6. Donut Chart
const donutData = [
  { browser: "chrome", visitors: 285, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 205, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 185, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 175, fill: "var(--chart-5)" },
  { browser: "other", visitors: 95, fill: "var(--chart-1)" },
]

const donutConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-3)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-5)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function DonutChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={donutConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={donutData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 7. Donut Chart with Text
export function DonutWithTextChart() {
  const totalVisitors = React.useMemo(() => {
    return donutData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={donutConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={donutData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 8. Donut Active Chart
export function DonutActiveChart() {
  const id = "pie-donut-active-interactive"
  const [activeIndex, setActiveIndex] = React.useState(-1)

  const activeItem = React.useMemo(
    () => donutData[activeIndex],
    [activeIndex]
  )

  return (
    <Card data-chart={id} className="flex flex-col">
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Pie Chart - Donut Active</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {activeItem && (
            <div className="grid gap-1 text-center text-sm">
              <div className="text-2xl font-bold leading-none">
                {activeItem.visitors.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">
                {activeItem.browser}
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={donutConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={donutData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: any) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 9. Stacked Pie Chart (Nested Donuts)
const stackedData = [
  { month: "jan", desktop: 186, mobile: 80 },
  { month: "feb", desktop: 305, mobile: 200 },
  { month: "mar", desktop: 237, mobile: 120 },
  { month: "apr", desktop: 73, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
  { month: "jun", desktop: 214, mobile: 140 },
]

export function StackedPieChart() {
  const desktopData = stackedData.map((item, index) => ({
    month: item.month,
    desktop: item.desktop,
    fill: "var(--chart-3)",
    key: `desktop-${index}`,
  }))
  
  const mobileData = stackedData.map((item, index) => ({
    month: item.month,
    mobile: item.mobile,
    fill: "var(--chart-2)",
    key: `mobile-${index}`,
  }))

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "var(--chart-3)",
            },
            mobile: {
              label: "Mobile", 
              color: "var(--chart-2)",
            },
          }}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              outerRadius={80}
            >
              {desktopData.map((entry, index) => (
                <Cell
                  key={`desktop-cell-${entry.month}-${index}`}
                  fill={entry.fill}
                />
              ))}
            </Pie>
            <Pie
              data={mobileData}
              dataKey="mobile"
              nameKey="month"
              innerRadius={90}
              outerRadius={120}
            >
              {mobileData.map((entry, index) => (
                <Cell
                  key={`mobile-cell-${entry.month}-${index}`}
                  fill={entry.fill}
                />
              ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

// 10. Interactive Pie Chart
const interactivePieData = [
  { browser: "chrome", visitors: 265, fill: "var(--chart-3)" },
  { browser: "safari", visitors: 220, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 170, fill: "var(--chart-4)" },
  { browser: "edge", visitors: 150, fill: "var(--chart-5)" },
  { browser: "other", visitors: 65, fill: "var(--chart-1)" },
]

const interactivePieConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-3)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-5)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function InteractivePieChart() {
  const [activeIndex, setActiveIndex] = React.useState(-1)

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Interactive</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={interactivePieConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={interactivePieData}
              dataKey="visitors"
              nameKey="browser"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {interactivePieData.map((entry, index) => (
                <Cell
                  key={`interactive-cell-${entry.browser}-${index}`}
                  fill={entry.fill}
                  fillOpacity={index === activeIndex ? 0.8 : 0.6}
                  stroke={index === activeIndex ? "var(--chart-3)" : "none"}
                  strokeWidth={index === activeIndex ? 2 : 0}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
} 