<a href="https://registry-starter.vercel.app/">
  <h1 align="center">GTreasury Design System Registry</h1>
</a>

<p align="center">
    A comprehensive design system registry built with Next.js and Shadcn/ui, featuring GTreasury and GSmart branded components, charts, and layouts.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#component-library"><strong>Component Library</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>Read Docs</strong></a>
</p>
<br/>

## Features

🎨 **Complete Design System** - 100+ components, blocks, and starters with GTreasury/GSmart branding  
📊 **Rich Chart Library** - 10+ bar charts, area charts, pie charts with business-ready styling  
🏢 **Enterprise Components** - Navigation headers, sidebars, dashboards, and layouts  
🎯 **Brand Consistency** - Unified GTreasury and GSmart color systems and logos  
⚡ **AI-Native** - Optimized for v0.dev integration and MCP compatibility  
🚀 **Production Ready** - Built with Next.js 15, TypeScript, and Tailwind CSS v4  

## Component Library

### 📊 Charts & Data Visualization
- **Bar Charts** (10 variants): Basic, Horizontal, Stacked, Labeled, Negative Values, Mixed, Interactive, Grouped, Percentage, KPI Dashboard
- **Area Charts** (4 variants): Basic gradient fills, Revenue trends, User growth, Multi-layered traffic
- **Pie Charts** (10 variants): Basic, Labeled, Custom labels, Legends, Donuts, Interactive, Stacked
- **Line Charts**: Multi-series with trend indicators
- **Radar Charts**: Performance metrics visualization
- **Radial Charts**: Progress and completion tracking

### 🏢 Enterprise Components
- **GT Navigation Header**: Complete navigation with GTreasury branding
- **Brand Header/Sidebar**: Responsive layouts with logo integration
- **Dashboard Layouts**: Shell and minimal starter templates
- **Logo Components**: GTreasury and GSmart logo variants

### 🎨 Brand Assets
- **GTreasury Logos**: Full color, white, symbol-only, logo mark
- **GSmart Logos**: Connectivity, Forecast, Ledger, Liquidity, Risk modules
- **Color Systems**: Night Blue, Sea Blue, Peppermint Green palettes + GSmart gradients
- **Design Tokens**: Comprehensive CSS custom properties

### 🧩 UI Components
All standard shadcn/ui components with GTreasury theming:
- Forms, Buttons, Cards, Tables, Modals
- Navigation, Tooltips, Badges, Alerts
- Data entry, Selection, Feedback components

## Deploy Your Own

You can deploy your own version of the GTreasury Design System Registry to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fregistry-starter&project-name=gtreasury-registry&repository-name=gtreasury-registry&demo-title=GTreasury%20Design%20System&demo-description=A%20comprehensive%20design%20system%20registry%20built%20with%20Next.js%20and%20Shadcn%2Fui%2C%20featuring%20GTreasury%20and%20GSmart%20branded%20components%2C%20charts%2C%20and%20layouts.&demo-url=https%3A%2F%2Fregistry-starter.vercel.app&demo-image=%2F%2Fregistry-starter.vercel.app%2Fpreview.png)

## Open in v0

[![Open in v0](https://registry-starter.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=GTreasury+Dashboard&prompt=These+are+existing+GTreasury+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build+enterprise+financial+dashboards.&url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Fdashboard.json)

This registry application exposes `Open in v0` buttons for each component. Once deployed, the `Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this registry's `/r/${component_name}.json` endpoint. This provides v0 with the necessary file information, content, and metadata to start your v0 chat with GTreasury components, themes, and related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` processes based on the repository's [`registry.json`](./registry.json). For more information, refer to the [documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Usage Examples

### Installing Components

```bash
# Install individual components
npx shadcn@latest add https://your-registry.vercel.app/r/gt-navigation-header.json
npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart-basic.json

# Install complete collections
npx shadcn@latest add https://your-registry.vercel.app/r/logos.json
```

### Using GTreasury Components

```tsx
import { GTNavigationHeader } from "@/components/gt-navigation-header"
import { Logo } from "@/components/logo"
import { BasicBarChart } from "@/components/bar-charts"

export default function Dashboard() {
  return (
    <div>
      <GTNavigationHeader />
      <main className="p-6">
        <Logo variant="full" />
        <BasicBarChart />
      </main>
    </div>
  )
}
```

### Chart Integration

```tsx
import { 
  BasicBarChart, 
  StackedBarChart, 
  InteractiveBarChart 
} from "@/components/bar-charts"

export default function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BasicBarChart />
      <StackedBarChart />
      <InteractiveBarChart />
    </div>
  )
}
```

## Theming

The registry uses a comprehensive GTreasury/GSmart color system defined in [`tokens.css`](./src/app/tokens.css):

### GTreasury Colors
- **Night Blue** (`--night-blue`): Primary dark color #012030
- **Sea Blue** (`--sea-blue`): Secondary blue #115D7E  
- **Peppermint Green** (`--peppermint-green`): Accent color #45C4B0
- **Monsoon Green** (`--monsoon-green`): Light accent #9AEBA3
- **Lime Green** (`--lime-green`): Bright accent #BAEB4F

### GSmart Colors
- **Primary Gradient**: #E33277 → #F4C548 (31% to 100%)
- **Gradient Utilities**: `.gsmart-gradient`, `.gsmart-text-gradient`, `.gsmart-border-gradient`
- **Directional Variants**: Diagonal, horizontal, vertical, radial gradients

### Chart Colors
Charts use CSS custom properties for consistent theming:
```css
--chart-1: var(--night-blue)
--chart-2: var(--sea-blue) 
--chart-3: var(--peppermint-green)
--chart-4: var(--monsoon-green)
--chart-5: var(--lime-green)
```

#### MCP Integration

For MCP compatibility, edit [`registry.json`](./registry.json)'s first `registry-item` named `registry`. This `registry:style` item contains design tokens that can be used with MCP:

```json
{
  "name": "registry",
  "type": "registry:style",
  "cssVars": {
    "light": {
      "night-blue": "#012030",
      "sea-blue": "#115D7E",
      "peppermint-green": "#45C4B0",
      "gsmart-primary": "#E33277",
      "gsmart-secondary": "#F4C548"
    }
  }
}
```

## Running locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build registry files
pnpm run registry:build

# Build for production
pnpm build
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

```
├── app/(design)/              # Registry showcase pages
│   ├── components/           # Component demos
│   ├── charts/              # Chart showcase
│   ├── blocks/              # Block components (logos, etc.)
│   ├── tokens/              # Design token documentation
│   └── starters/            # Starter templates
├── app/starters/            # Starter applications
│   ├── (minimal)/          # Minimal layout starters
│   └── (shell)/            # Shell layout starters  
├── components/              # Component library
│   ├── ui/                 # Base shadcn/ui components
│   ├── design/             # Registry-specific components
│   ├── bar-charts.tsx      # Bar chart collection
│   ├── area-charts.tsx     # Area chart collection
│   ├── pie-charts.tsx      # Pie chart collection
│   ├── logos.tsx           # Logo components
│   └── gt-navigation-header.tsx
├── public/
│   ├── assets/
│   │   ├── gtreasury/      # GTreasury brand assets
│   │   └── gsmart/         # GSmart brand assets
│   └── r/                  # Generated registry files
├── r/                      # Local registry files
└── src/
    ├── app/tokens.css      # Design system tokens
    ├── lib/                # Utilities and business logic
    └── hooks/              # React hooks
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for the GTreasury ecosystem
</p>