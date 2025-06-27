# GTreasury Design System - Component Library

A comprehensive guide to all components, charts, and blocks available in the GTreasury Design System Registry.

## Table of Contents

- [Charts & Data Visualization](#charts--data-visualization)
- [Enterprise Components](#enterprise-components)
- [Brand Assets](#brand-assets)
- [UI Components](#ui-components)
- [Layouts & Starters](#layouts--starters)
- [Installation Guide](#installation-guide)

## Charts & Data Visualization

### Bar Charts (10 Variants)

All bar charts use GTreasury color scheme with Peppermint Green and Sea Blue as primary colors.

#### 1. Basic Multi-Series Bar Chart
```tsx
import { BasicBarChart } from "@/components/bar-charts"

<BasicBarChart />
```
- **Data**: Desktop vs Mobile usage
- **Features**: Multi-series comparison, tooltips, legend
- **Use Case**: General performance metrics

#### 2. Horizontal Bar Chart
```tsx
import { HorizontalBarChart } from "@/components/bar-charts"

<HorizontalBarChart />
```
- **Data**: Revenue by industry
- **Features**: Horizontal orientation, category comparison
- **Use Case**: Industry analysis, category rankings

#### 3. Stacked Bar Chart
```tsx
import { StackedBarChart } from "@/components/bar-charts"

<StackedBarChart />
```
- **Data**: Sales, Returns, Profit breakdown
- **Features**: Stacked data visualization
- **Use Case**: Component analysis, part-to-whole relationships

#### 4. Bar Chart with Custom Labels
```tsx
import { LabeledBarChart } from "@/components/bar-charts"

<LabeledBarChart />
```
- **Data**: Sales vs Target comparison
- **Features**: Custom data labels, target indicators
- **Use Case**: Performance vs goals, KPI tracking

#### 5. Negative Values Bar Chart
```tsx
import { NegativeBarChart } from "@/components/bar-charts"

<NegativeBarChart />
```
- **Data**: Profit/Loss with reference line
- **Features**: Handles negative values, zero reference line
- **Use Case**: P&L statements, variance analysis

#### 6. Mixed Bar Chart
```tsx
import { MixedBarChart } from "@/components/bar-charts"

<MixedBarChart />
```
- **Data**: Revenue (bars) and Orders (line)
- **Features**: Combined chart types
- **Use Case**: Dual metrics visualization

#### 7. Interactive Bar Chart
```tsx
import { InteractiveBarChart } from "@/components/bar-charts"

<InteractiveBarChart />
```
- **Data**: Budget vs Spending
- **Features**: Hover states, interactive tooltips
- **Use Case**: Budget analysis, interactive dashboards

#### 8. Grouped Bar Chart
```tsx
import { GroupedBarChart } from "@/components/bar-charts"

<GroupedBarChart />
```
- **Data**: Quarterly performance by region
- **Features**: Multiple groupings, regional comparison
- **Use Case**: Multi-dimensional analysis

#### 9. Percentage Bar Chart
```tsx
import { PercentageBarChart } from "@/components/bar-charts"

<PercentageBarChart />
```
- **Data**: Traffic source distribution
- **Features**: Percentage-based values
- **Use Case**: Market share, distribution analysis

#### 10. KPI Dashboard Bar Chart
```tsx
import { KPIBarChart } from "@/components/bar-charts"

<KPIBarChart />
```
- **Data**: Performance indicators with targets
- **Features**: KPI-focused design, target lines
- **Use Case**: Executive dashboards, performance monitoring

### Area Charts (4 Variants)

All area charts feature gradient fills using GTreasury colors.

#### 1. Basic Area Chart
```tsx
import { BasicAreaChart } from "@/components/area-charts"

<BasicAreaChart />
```
- **Features**: Gradient fills, smooth curves
- **Use Case**: Trend visualization, time series

#### 2. Revenue Trend Area Chart
```tsx
import { RevenueTrendAreaChart } from "@/components/area-charts"

<RevenueTrendAreaChart />
```
- **Data**: Revenue vs Target over time
- **Features**: Dual area comparison
- **Use Case**: Financial performance tracking

#### 3. User Growth Chart
```tsx
import { UserGrowthChart } from "@/components/area-charts"

<UserGrowthChart />
```
- **Data**: Single metric growth
- **Features**: Clean single-series design
- **Use Case**: Growth metrics, user analytics

#### 4. Traffic Sources Chart
```tsx
import { TrafficSourcesChart } from "@/components/area-charts"

<TrafficSourcesChart />
```
- **Data**: Multi-layered traffic data
- **Features**: Stacked areas, multiple sources
- **Use Case**: Marketing analytics, source attribution

### Pie Charts (10 Variants)

Comprehensive pie chart collection with GTreasury theming.

#### 1. Basic Pie Chart
```tsx
import { BasicPieChart } from "@/components/pie-charts"

<BasicPieChart />
```
- **Features**: Simple pie visualization
- **Use Case**: Basic proportional data

#### 2. Labeled Pie Chart
```tsx
import { LabeledPieChart } from "@/components/pie-charts"

<LabeledPieChart />
```
- **Features**: Data labels on segments
- **Use Case**: Clear value identification

#### 3. Custom Label Pie Chart
```tsx
import { CustomLabelPieChart } from "@/components/pie-charts"

<CustomLabelPieChart />
```
- **Features**: Custom label formatting
- **Use Case**: Specialized label requirements

#### 4. Label List Pie Chart
```tsx
import { LabelListPieChart } from "@/components/pie-charts"

<LabelListPieChart />
```
- **Features**: External label list
- **Use Case**: Detailed breakdowns

#### 5. Legend Pie Chart
```tsx
import { LegendPieChart } from "@/components/pie-charts"

<LegendPieChart />
```
- **Features**: Interactive legend
- **Use Case**: Multi-category data

#### 6. Donut Chart
```tsx
import { DonutChart } from "@/components/pie-charts"

<DonutChart />
```
- **Features**: Donut style with center space
- **Use Case**: Modern pie chart alternative

#### 7. Donut with Text Chart
```tsx
import { DonutWithTextChart } from "@/components/pie-charts"

<DonutWithTextChart />
```
- **Features**: Center text display
- **Use Case**: Key metric highlighting

#### 8. Donut Active Chart
```tsx
import { DonutActiveChart } from "@/components/pie-charts"

<DonutActiveChart />
```
- **Features**: Interactive hover states
- **Use Case**: Interactive dashboards

#### 9. Stacked Pie Chart
```tsx
import { StackedPieChart } from "@/components/pie-charts"

<StackedPieChart />
```
- **Features**: Nested donut rings
- **Use Case**: Hierarchical data

#### 10. Interactive Pie Chart
```tsx
import { InteractivePieChart } from "@/components/pie-charts"

<InteractivePieChart />
```
- **Features**: Full interactivity, hover effects
- **Use Case**: Engaging data exploration

## Enterprise Components

### Navigation & Layout

#### GT Navigation Header
```tsx
import { GTNavigationHeader } from "@/components/gt-navigation-header"

<GTNavigationHeader />
```
- **Features**: Complete navigation with GTreasury branding
- **Includes**: Logo, navigation menu, search, user menu
- **Responsive**: Mobile-optimized with collapsible menu
- **Theming**: Night Blue background with Peppermint Green accents

#### Brand Header
```tsx
import { BrandHeader } from "@/components/brand-header"

<BrandHeader />
```
- **Features**: Minimal header with logo and user controls
- **Responsive**: Adaptive logo (full/mark) based on sidebar state
- **Use Case**: Internal applications, admin panels

#### Brand Sidebar
```tsx
import { BrandSidebar } from "@/components/brand-sidebar"

<BrandSidebar />
```
- **Features**: Collapsible sidebar with navigation
- **Responsive**: Icon-only collapsed state
- **Use Case**: Dashboard layouts, admin interfaces

## Brand Assets

### Logo Components

#### Main Logo Component
```tsx
import { Logo } from "@/components/logo"

// Full logo (responsive to theme)
<Logo variant="full" />

// Logo mark only
<Logo variant="mark" />
```
- **Variants**: Full logo, logo mark
- **Theming**: Automatic light/dark mode switching
- **Fallback**: Text fallback if images fail to load

#### GTreasury Logo Collection
```tsx
import { 
  LogoFull, 
  LogoFullWhite, 
  LogoSymbol, 
  LogoMark 
} from "@/components/logos"

<LogoFull />      // Color version
<LogoFullWhite /> // White version for dark backgrounds
<LogoSymbol />    // Symbol only
<LogoMark />      // Simplified mark
```

#### GSmart Logo Collection
```tsx
import { 
  GSmartConnectivity,
  GSmartForecast,
  GSmartLedger,
  GSmartLiquidity,
  GSmartRisk,
  GSmartSymbol
} from "@/components/logos"

<GSmartConnectivity />  // Connectivity module
<GSmartForecast />      // Forecast module
<GSmartLedger />        // Ledger module
<GSmartLiquidity />     // Liquidity module
<GSmartRisk />          // Risk module
<GSmartSymbol />        // GSmart symbol
```

#### Complete Logo Grid
```tsx
import { LogosGrid } from "@/components/logos"

<LogosGrid />
```
- **Features**: Complete showcase of all logos
- **Organization**: GTreasury and GSmart sections
- **Details**: Descriptions and file paths for each logo

## UI Components

All standard shadcn/ui components are available with GTreasury theming:

### Form Components
- Button, Input, Textarea, Select, Checkbox, Radio Group
- Form validation and error handling
- GTreasury color scheme integration

### Navigation Components
- Breadcrumb, Navigation Menu, Pagination
- Consistent with brand guidelines

### Data Display
- Table, Card, Badge, Avatar
- Chart-compatible styling

### Feedback Components
- Alert, Toast (Sonner), Progress, Skeleton
- Brand-appropriate styling

### Overlay Components
- Dialog, Sheet, Popover, Tooltip, Hover Card
- Consistent z-index and theming

## Layouts & Starters

### Minimal Layout
```tsx
// Available at /starters/blank
export default function MinimalPage() {
  return (
    <div>
      {/* Clean, minimal layout */}
    </div>
  )
}
```

### Shell Layout
```tsx
// Available at /starters/dashboard
export default function ShellPage() {
  return (
    <div>
      <BrandHeader />
      <BrandSidebar />
      {/* Main content area */}
    </div>
  )
}
```

### GT Navigation Layout
```tsx
// Available at /starters/gt-navigation-header
export default function GTNavigationPage() {
  return (
    <div>
      <GTNavigationHeader />
      {/* Content with GTreasury navigation */}
    </div>
  )
}
```

## Installation Guide

### Installing Individual Components

```bash
# Install specific components
npx shadcn@latest add https://your-registry.vercel.app/r/gt-navigation-header.json
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart-basic.json
npx shadcn@latest add https://your-registry.vercel.app/r/logo.json

# Install chart collections
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart.json
npx shadcn@latest add https://your-registry.vercel.app/r/area-chart.json
npx shadcn@latest add https://your-registry.vercel.app/r/pie-chart.json

# Install brand assets
npx shadcn@latest add https://your-registry.vercel.app/r/logos.json
```

### Installing Complete Collections

```bash
# Install all bar charts at once
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart-basic.json
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart-stacked.json
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart-horizontal.json
# ... etc for all variants

# Or use the main collections
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart.json
```

### Theme Installation

```bash
# Install the complete theme
npx shadcn@latest add https://your-registry.vercel.app/r/theme.json
```

## Usage Examples

### Building a Dashboard

```tsx
import { GTNavigationHeader } from "@/components/gt-navigation-header"
import { BasicBarChart, StackedBarChart } from "@/components/bar-charts"
import { DonutChart } from "@/components/pie-charts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <GTNavigationHeader />
      
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <BasicBarChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Market Share</CardTitle>
            </CardHeader>
            <CardContent>
              <DonutChart />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Performance Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <StackedBarChart />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
```

### Creating a Reports Page

```tsx
import { Logo } from "@/components/logo"
import { 
  NegativeBarChart, 
  InteractiveBarChart, 
  KPIBarChart 
} from "@/components/bar-charts"
import { RevenueTrendAreaChart } from "@/components/area-charts"

export default function Reports() {
  return (
    <div className="space-y-8">
      <header className="flex items-center gap-4">
        <Logo variant="mark" />
        <h1 className="text-2xl font-bold">Financial Reports</h1>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueTrendAreaChart />
        <NegativeBarChart />
        <InteractiveBarChart />
        <KPIBarChart />
      </div>
    </div>
  )
}
```

## Color Reference

### GTreasury Colors
```css
--night-blue: #012030        /* Primary dark */
--sea-blue: #115D7E          /* Secondary blue */
--peppermint-green: #45C4B0  /* Primary accent */
--monsoon-green: #9AEBA3     /* Light accent */
--lime-green: #BAEB4F        /* Bright accent */
```

### GSmart Colors
```css
--gsmart-primary: #E33277    /* Hot pink */
--gsmart-secondary: #F4C548  /* Yellow */
```

### Chart Color Mapping
```css
--chart-1: var(--night-blue)
--chart-2: var(--sea-blue)
--chart-3: var(--peppermint-green)
--chart-4: var(--monsoon-green)
--chart-5: var(--lime-green)
```

## Best Practices

### Chart Usage
1. **Consistency**: Use the same color scheme across all charts
2. **Accessibility**: Ensure proper contrast ratios
3. **Responsiveness**: Test charts on different screen sizes
4. **Performance**: Use appropriate chart types for data size

### Component Integration
1. **Theming**: Always use CSS custom properties for colors
2. **Typography**: Maintain consistent font scales
3. **Spacing**: Follow the established spacing system
4. **Branding**: Use appropriate logo variants for context

### Brand Guidelines
1. **Logo Usage**: Use full logos for primary branding, marks for compact spaces
2. **Color Hierarchy**: Night Blue and Sea Blue as primary, Peppermint Green for accents
3. **GSmart Integration**: Use GSmart gradients appropriately for product-specific content
4. **Consistency**: Maintain brand consistency across all components

---

For more detailed information, visit the [live registry](https://registry-starter.vercel.app) or check the [main documentation](README.md). 