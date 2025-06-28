"use client";

import { ArrowLeft, Copy, ExternalLink } from "lucide-react";
import Link from "next/link";

import { MCPTabs } from "@/components/design/mcp-tabs";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  const sections = [
    { id: "getting-started", label: "Getting Started" },
    { id: "authentication", label: "Authentication" },
    { id: "installation", label: "Installation" },
    { id: "components", label: "Components" },
    { id: "charts", label: "Charts" },
    { id: "theming", label: "Theming" },
    { id: "deployment", label: "Deployment" },
    { id: "mcp", label: "MCP Integration" },
    { id: "file-structure", label: "File Structure" },
    { id: "contributing", label: "Contributing" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container p-5 md:p-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Registry
          </Link>
        </Button>
        <h1 className="font-bold text-3xl tracking-tight">Documentation</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          *Where wisdom flows like code through digital rivers*
        </p>
        <p className="mt-1 text-muted-foreground">
          Complete guides for installation, authentication, customization, and scaling GTreasury's design language across your projects.
        </p>
      </div>

      {/* Horizontal Navigation */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b mb-8">
        <nav className="flex space-x-1 p-2 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-16">
        <section id="getting-started" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
            <p className="text-muted-foreground mt-2">*Begin your journey through GTreasury's design cosmos*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-muted-foreground">
                Welcome to the GTreasury Design System Registry—a living sanctuary where financial precision meets digital artistry. This registry is more than a component library; it's GTreasury's visual DNA flowing through every interface.
              </p>
              
              <div className="grid gap-6 md:grid-cols-3 mt-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">🎨 For Designers</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore the component gallery like walking through digital gardens. Copy design tokens that carry GTreasury's visual soul.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">⚡ For Developers</h4>
                  <p className="text-sm text-muted-foreground">
                    Authenticate with your @gtreasury.com credentials. Browse components with live code examples. Build dashboards that sing with corporate harmony.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">📊 For Product Managers</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover what's possible in the component showcase. Ensure brand consistency across all digital touchpoints.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mt-6">
                <h4 className="font-medium mb-2">🚀 Quick Start</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Sign in with your @gtreasury.com email</li>
                  <li>Browse components and charts</li>
                  <li>Copy code or install via Shadcn CLI</li>
                  <li>Customize with GTreasury design tokens</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="authentication" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Authentication</h2>
            <p className="text-muted-foreground mt-2">*The Sacred Gateway to Design Treasures*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-muted-foreground">
                Our Registry breathes with **magic link authentication**—a seamless dance between Redis-powered tokens and Zapier's gentle whispers. Only those bearing @gtreasury.com may enter this sanctum of design.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2">🔐 How Authentication Flows</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• **SHA-256 encrypted token** births itself in Redis clouds ☁️</li>
                  <li>• **Zapier webhook** carries your golden key through internet highways 📧</li>
                  <li>• **24 hours** you have to claim your destiny, then tokens dissolve like morning mist 🌅</li>
                  <li>• **One time only**—each key opens but once, then crumbles to digital dust ✨</li>
                </ul>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h4 className="font-medium mb-2">Environment Setup</h4>
                <pre className="text-sm overflow-x-auto"><code>{`NEXTAUTH_SECRET=your-secret-whispered-to-the-wind
NEXTAUTH_URL=https://your-domain.vercel.app
REDIS_URL=redis://your-redis-connection-string
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/your-webhook-path`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section id="installation" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
            <p className="text-muted-foreground mt-2">*Summoning Components to Your Project*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-6">
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-muted-foreground">
                Components flow into your project like digital poetry, each carrying GTreasury's design essence.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Individual Components</h4>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm font-mono">npx shadcn@latest add https://your-registry.vercel.app/r/gt-navigation-header.json</code>
                  </div>
                  <div className="rounded-md bg-muted p-4 mt-2">
                    <code className="text-sm font-mono">npx shadcn@latest add https://your-registry.vercel.app/r/bar-chart-basic.json</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Complete Collections</h4>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm font-mono">npx shadcn@latest add https://your-registry.vercel.app/r/logos.json</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Local Development Setup</h4>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm"><code>{`# Gather the dependencies
pnpm install

# Breathe life into the development server
pnpm dev

# Watch as localhost:3000 becomes your portal`}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="components" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Component Usage</h2>
            <p className="text-muted-foreground mt-2">*Breathing Life into Interface Elements*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-6">
            <div className="prose prose-sm max-w-none space-y-4">
              <div>
                <h4 className="font-medium mb-2">GTreasury Navigation</h4>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto"><code>{`import { GTNavigationHeader } from "@/components/gt-navigation-header"
import { Logo } from "@/components/logo"

export default function Dashboard() {
  return (
    <div>
      <GTNavigationHeader />
      <main className="p-6">
        <Logo variant="full" />
      </main>
    </div>
  )
}`}</code></pre>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Enterprise Components Library</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">🏢 Enterprise Components</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• GT Navigation Header: Complete branded navigation</li>
                      <li>• Brand Header/Sidebar: Responsive layouts</li>
                      <li>• Dashboard Layouts: Shell and minimal templates</li>
                      <li>• Logo Components: GTreasury and GSmart variants</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">🧩 UI Foundation</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Forms, Buttons, Cards, Tables, Modals</li>
                      <li>• Navigation, Tooltips, Badges, Alerts</li>
                      <li>• Data entry, Selection, Feedback components</li>
                      <li>• All with GTreasury theming applied</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="charts" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Charts & Data Visualization</h2>
            <p className="text-muted-foreground mt-2">*Where Data Dances with Beauty*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-6">
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-muted-foreground">
                Charts that dance with your data, telling stories that balance sheets could only dream of.
              </p>

              <div>
                <h4 className="font-medium mb-2">Chart Integration Example</h4>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto"><code>{`import { 
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
}`}</code></pre>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-primary">📊 Bar Charts (10 variants)</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Basic: Simple towers of truth</li>
                    <li>• Stacked: Layers of insight</li>
                    <li>• Horizontal: Flowing like revenue rivers</li>
                    <li>• Interactive: Touch and reveal secrets</li>
                    <li>• Grouped, Negative, Mixed, Labeled</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-primary">📈 Area & Line Charts</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Gradient Hills: Data meets artistry</li>
                    <li>• Revenue Rivers: Flowing trends</li>
                    <li>• User Valleys: Growth patterns</li>
                    <li>• Multi-series with trend indicators</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-primary">🎯 Circular Charts</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Pie Charts: Perfect portions</li>
                    <li>• Radial Progress: Spinning achievement</li>
                    <li>• Donut Delights: Stories at center</li>
                    <li>• Radar Charts: Multi-dimensional data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="theming" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Theming & Design Tokens</h2>
            <p className="text-muted-foreground mt-2">*The Palette of Possibilities*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-6">
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-muted-foreground">
                Colors that tell GTreasury's story, from Night Blue depths to Peppermint Green freshness.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">GTreasury Color Palette</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md" style={{backgroundColor: '#012030'}}></div>
                      <div>
                        <code className="text-sm font-mono">--night-blue: #012030</code>
                        <p className="text-xs text-muted-foreground">Deep as midnight oceans</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md" style={{backgroundColor: '#115D7E'}}></div>
                      <div>
                        <code className="text-sm font-mono">--sea-blue: #115D7E</code>
                        <p className="text-xs text-muted-foreground">Where waves meet wisdom</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md" style={{backgroundColor: '#45C4B0'}}></div>
                      <div>
                        <code className="text-sm font-mono">--peppermint-green: #45C4B0</code>
                        <p className="text-xs text-muted-foreground">Fresh as morning dew</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">GSmart Gradient System</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md" style={{background: 'linear-gradient(45deg, #E33277, #F4C548)'}}></div>
                      <div>
                        <code className="text-sm font-mono">#E33277 → #F4C548</code>
                        <p className="text-xs text-muted-foreground">Sunrise captured in code</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-md bg-muted p-3">
                    <h5 className="text-sm font-medium mb-2">CSS Utilities</h5>
                    <div className="text-xs font-mono space-y-1 text-muted-foreground">
                      <div>.gsmart-gradient</div>
                      <div>.gsmart-text-gradient</div>
                      <div>.gsmart-border-gradient</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Chart Color System</h4>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm"><code>{`--chart-1: var(--night-blue)
--chart-2: var(--sea-blue) 
--chart-3: var(--peppermint-green)
--chart-4: var(--monsoon-green)
--chart-5: var(--lime-green)`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="deployment" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Deployment</h2>
            <p className="text-muted-foreground mt-2">*Ascending to the Digital Clouds*</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <div className="prose prose-sm max-w-none space-y-4">
              <div className="flex items-center gap-4">
                <Link
                  href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fregistry-starter&project-name=gtreasury-registry&repository-name=gtreasury-registry"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy with Vercel
                  <ExternalLink className="size-4" />
                </Link>
                <span className="text-muted-foreground">One-click deployment to the clouds</span>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Production Build</h4>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm"><code>{`# Build the registry and application
pnpm run registry:build
pnpm build

# Start production server
pnpm start`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mcp" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">MCP Integration</h2>
            <p className="text-muted-foreground mt-2">*Bridging Human Creativity with AI Assistance*</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none mb-6">
              <p className="text-muted-foreground">
                Every component sings with an "Open in v0" button—a bridge between human creativity and AI assistance. 
                Click, and watch as v0 understands your GTreasury context, ready to birth new interfaces from your design language.
              </p>
              <p className="text-muted-foreground">
                Integrate this registry with AI IDEs using Model Context Protocol (MCP). 
                Ensure the <Link href="/r/registry.json" className="underline"><code className="inline text-sm">style:registry</code></Link> contains 
                the same colors as your <code className="inline text-sm">tokens.css</code>.
              </p>
            </div>
            
            <MCPTabs rootUrl={process.env.VERCEL_BRANCH_URL ?? ""} />
          </div>
        </section>

        <section id="file-structure" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">File Structure</h2>
            <p className="text-muted-foreground mt-2">*The Architecture of Excellence*</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none">
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm overflow-x-auto"><code>{`src/
├── app/
│   ├── (design)/           # The showcase halls
│   │   ├── components/     # Where UI elements perform
│   │   ├── charts/         # The data visualization theater
│   │   ├── blocks/         # Building blocks of beauty
│   │   ├── docs/           # Wisdom written in words
│   │   └── logos/          # Brand emblems in their glory
│   ├── auth/               # The guardian's chambers
│   │   ├── signin/         # Where journeys begin
│   │   └── error/          # Where lost souls find comfort
│   └── starters/           # Templates for new adventures
├── components/             # The component constellation
│   ├── ui/                 # Foundation stones of interface
│   ├── auth/               # Session guardians
│   └── design/             # Registry's own interface magic
└── lib/
    └── auth.ts             # The heart of authentication`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section id="contributing" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Contributing</h2>
            <p className="text-muted-foreground mt-2">*Growing the Design Ecosystem Together*</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-muted-foreground">
                This is a living registry that grows with every commit, evolves with every new component, 
                and adapts to GTreasury's expanding digital universe.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2">🌟 Contribution Guidelines</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Follow GTreasury design standards and accessibility guidelines</li>
                  <li>• Ensure components work with existing design tokens</li>
                  <li>• Include comprehensive documentation and examples</li>
                  <li>• Test across different screen sizes and interaction modes</li>
                  <li>• Add components to registry.json for distribution</li>
                </ul>
              </div>

              <p className="text-muted-foreground">
                Every button knows its purpose. Every color has its place. Every chart tells truth through beauty. 
                This Registry is GTreasury's gift to itself—a promise that every digital experience will carry 
                the same soul, the same attention to detail, the same respect for both data and design.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 