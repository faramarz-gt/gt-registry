"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { ColorBlock, LogoBlock, GTColorBlock, GTTintFamily } from "./color-block";

// GTreasury Color Data
const primaryColors = [
  {
    name: "Night Blue",
    token: "--night-blue",
    hex: "#012030",
    description: "The primary brand color used for page headers and wherever existing dark blue is currently used.",
    usage: "Page headers, navigation backgrounds, primary text"
  },
  {
    name: "Sea Blue", 
    token: "--sea-blue",
    hex: "#115D7E",
    description: "Primary action color for buttons and interactive elements.",
    usage: "Primary buttons (solid), primary button outlines (border and text)"
  },
  {
    name: "Peppermint Green",
    token: "--peppermint-green", 
    hex: "#45C4B0",
    description: "Secondary accent color for secondary actions and highlights.",
    usage: "Secondary buttons (solid background with Night Blue text), outlined buttons (border with white background and Night Blue text)"
  },
  {
    name: "Monsoon Green",
    token: "--monsoon-green",
    hex: "#9AEBA3", 
    description: "Tertiary color used for highlights and success states.",
    usage: "Highlights, success indicators, accent elements"
  },
  {
    name: "White",
    token: "--white",
    hex: "#FFFFFF",
    description: "Pure white for backgrounds and contrast.",
    usage: "Backgrounds, cards, text on dark backgrounds"
  }
];

const secondaryColors = [
  {
    name: "Lime Green",
    token: "--lime-green",
    hex: "#BAEB4F",
    description: "Additional accent color for special highlights.",
    usage: "Special highlights, call-to-action elements"
  },
  {
    name: "Sage Green", 
    token: "--sage-green",
    hex: "#D9FCBA",
    description: "Soft green for subtle backgrounds and overlays.",
    usage: "Subtle backgrounds, light overlays, soft accents"
  },
  {
    name: "Pale Yellow",
    token: "--pale-yellow",
    hex: "#FFFAD6",
    description: "Light yellow for informational states and warnings.",
    usage: "Information panels, warning backgrounds, soft highlights"
  }
];

const nightBlueTints = [
  { name: "Night Blue", token: "--night-blue-100", hex: "#012030", intensity: "100" },
  { name: "Night Blue", token: "--night-blue-90", hex: "#1A3645", intensity: "90" },
  { name: "Night Blue", token: "--night-blue-80", hex: "#344D59", intensity: "80" },
  { name: "Night Blue", token: "--night-blue-70", hex: "#4D636E", intensity: "70" },
  { name: "Night Blue", token: "--night-blue-60", hex: "#677983", intensity: "60" },
  { name: "Night Blue", token: "--night-blue-50", hex: "#809098", intensity: "50" },
  { name: "Night Blue", token: "--night-blue-40", hex: "#99A6AC", intensity: "40" },
  { name: "Night Blue", token: "--night-blue-30", hex: "#B3BCC1", intensity: "30" },
  { name: "Night Blue", token: "--night-blue-20", hex: "#CCD2D6", intensity: "20" },
  { name: "Night Blue", token: "--night-blue-10", hex: "#E6E9EA", intensity: "10" }
];

const seaBlueTints = [
  { name: "Sea Blue", token: "--sea-blue-130", hex: "#0C4158", intensity: "130" },
  { name: "Sea Blue", token: "--sea-blue-120", hex: "#0E4A65", intensity: "120" },
  { name: "Sea Blue", token: "--sea-blue-110", hex: "#0F5471", intensity: "110" },
  { name: "Sea Blue", token: "--sea-blue-100", hex: "#115D7E", intensity: "100" },
  { name: "Sea Blue", token: "--sea-blue-90", hex: "#296D8B", intensity: "90" },
  { name: "Sea Blue", token: "--sea-blue-80", hex: "#417D98", intensity: "80" },
  { name: "Sea Blue", token: "--sea-blue-70", hex: "#588EA5", intensity: "70" },
  { name: "Sea Blue", token: "--sea-blue-60", hex: "#709EB2", intensity: "60" },
  { name: "Sea Blue", token: "--sea-blue-50", hex: "#88AEBF", intensity: "50" },
  { name: "Sea Blue", token: "--sea-blue-40", hex: "#A0BEC8", intensity: "40" },
  { name: "Sea Blue", token: "--sea-blue-30", hex: "#B8CED8", intensity: "30" },
  { name: "Sea Blue", token: "--sea-blue-20", hex: "#CFDFE5", intensity: "20" },
  { name: "Sea Blue", token: "--sea-blue-10", hex: "#E7EFF2", intensity: "10" }
];

const peppermintGreenTints = [
  { name: "Peppermint Green", token: "--peppermint-green-150", hex: "#236258", intensity: "150" },
  { name: "Peppermint Green", token: "--peppermint-green-140", hex: "#29766A", intensity: "140" },
  { name: "Peppermint Green", token: "--peppermint-green-130", hex: "#30897B", intensity: "130" },
  { name: "Peppermint Green", token: "--peppermint-green-120", hex: "#379B8D", intensity: "120" },
  { name: "Peppermint Green", token: "--peppermint-green-110", hex: "#3EB09E", intensity: "110" },
  { name: "Peppermint Green", token: "--peppermint-green-100", hex: "#45C4B0", intensity: "100" },
  { name: "Peppermint Green", token: "--peppermint-green-90", hex: "#58CAB8", intensity: "90" },
  { name: "Peppermint Green", token: "--peppermint-green-80", hex: "#6AD0C0", intensity: "80" },
  { name: "Peppermint Green", token: "--peppermint-green-70", hex: "#7DD6C8", intensity: "70" },
  { name: "Peppermint Green", token: "--peppermint-green-60", hex: "#8FDCD0", intensity: "60" },
  { name: "Peppermint Green", token: "--peppermint-green-50", hex: "#A2E2D8", intensity: "50" },
  { name: "Peppermint Green", token: "--peppermint-green-40", hex: "#B5E7DF", intensity: "40" },
  { name: "Peppermint Green", token: "--peppermint-green-30", hex: "#C7EDE7", intensity: "30" },
  { name: "Peppermint Green", token: "--peppermint-green-20", hex: "#DAF3EF", intensity: "20" },
  { name: "Peppermint Green", token: "--peppermint-green-10", hex: "#ECF9F7", intensity: "10" }
];

const monsoonGreenTints = [
  { name: "Monsoon Green", token: "--monsoon-green-150", hex: "#4D7652", intensity: "150" },
  { name: "Monsoon Green", token: "--monsoon-green-140", hex: "#5C8D62", intensity: "140" },
  { name: "Monsoon Green", token: "--monsoon-green-130", hex: "#6CA572", intensity: "130" },
  { name: "Monsoon Green", token: "--monsoon-green-120", hex: "#7BBC82", intensity: "120" },
  { name: "Monsoon Green", token: "--monsoon-green-110", hex: "#8BD493", intensity: "110" },
  { name: "Monsoon Green", token: "--monsoon-green-100", hex: "#9AEBA3", intensity: "100" },
  { name: "Monsoon Green", token: "--monsoon-green-90", hex: "#A4EDAC", intensity: "90" },
  { name: "Monsoon Green", token: "--monsoon-green-80", hex: "#AEEFB5", intensity: "80" },
  { name: "Monsoon Green", token: "--monsoon-green-70", hex: "#B8F1BF", intensity: "70" },
  { name: "Monsoon Green", token: "--monsoon-green-60", hex: "#C2F3C8", intensity: "60" },
  { name: "Monsoon Green", token: "--monsoon-green-50", hex: "#CDF5D1", intensity: "50" },
  { name: "Monsoon Green", token: "--monsoon-green-40", hex: "#D7F7DA", intensity: "40" },
  { name: "Monsoon Green", token: "--monsoon-green-30", hex: "#E1F9E3", intensity: "30" },
  { name: "Monsoon Green", token: "--monsoon-green-20", hex: "#EBFBED", intensity: "20" },
  { name: "Monsoon Green", token: "--monsoon-green-10", hex: "#F5FDF6", intensity: "10" }
];

export default function TokensPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">GTreasury Design Tokens</h1>
        <p className="mt-1 text-muted-foreground">
          A comprehensive color system for GTreasury applications with primary palette, secondary colors, and tint families
        </p>
      </div>

      {/* Brand Assets */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Brand Assets</h2>
        <p className="mb-6 text-muted-foreground">
          Various versions of the GTreasury brand logo for different use cases and backgrounds.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <LogoBlock
            name="Full Logo (Color)"
            src="/assets/gtreasury-logo-rgb.svg"
            description="Primary logo with full branding and color gradient"
          />
          <LogoBlock
            name="Full Logo (White)"
            src="/assets/gtreasury-logo-rgb-white.svg"
            description="White version for dark backgrounds and overlays"
            className="bg-slate-800 p-4 rounded"
          />
          <LogoBlock
            name="Symbol Only"
            src="/assets/gtreasury-logo-rgb-symbol-only.svg"
            description="Standalone symbol without text for compact spaces"
          />
          <LogoBlock
            name="Logo Mark"
            src="/assets/gtreasury-logo-mark.svg"
            description="Simplified logo mark for icons and favicons"
          />
        </div>
      </section>

      {/* Primary Color Palette */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Primary Color Palette</h2>
        <p className="mb-6 text-muted-foreground">
          The primary color scheme to be used throughout the identity—most of the brand should be represented using these colors.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {primaryColors.map((color) => (
            <GTColorBlock
              key={color.token}
              name={color.name}
              token={color.token}
              hex={color.hex}
              description={color.description}
              usage={color.usage}
              isPrimary={true}
            />
          ))}
        </div>
      </section>

      {/* Secondary Color Palette */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Secondary Color Palette</h2>
        <p className="mb-6 text-muted-foreground">
          The secondary color scheme can be used in certain scenarios where the primary color palette does not suffice or extra colors are required.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryColors.map((color) => (
            <GTColorBlock
              key={color.token}
              name={color.name}
              token={color.token}
              hex={color.hex}
              description={color.description}
              usage={color.usage}
            />
          ))}
        </div>
      </section>

      {/* Color Usage Guidelines & Accessibility */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Color Usage Guidelines & Accessibility</h2>
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-3">Primary Color Priority</h3>
            <p className="text-muted-foreground mb-4">
              The primary colors (including white) should be used for the majority of the brand output. The color usage should follow these guidelines:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>White, Night Blue, and Sea Blue</strong> should be the predominant colors</li>
              <li>• <strong>Peppermint Green and Monsoon Green</strong> should be used more for highlights and accents</li>
              <li>• <strong>Secondary colors</strong> can be used when additional variety is required</li>
              <li>• Always maintain proper contrast ratios for accessibility</li>
            </ul>
          </div>
          
          <div className="rounded-lg border bg-amber-50/50 border-amber-200 p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              WCAG AA Compliance
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Contrast Requirements:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Normal Text:</strong> 4.5:1 minimum</li>
                  <li>• <strong>Large Text:</strong> 3:1 minimum</li>
                  <li>• <strong>AAA Level:</strong> 7:1 for enhanced accessibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recommended Combinations:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Night Blue on White:</strong> Excellent contrast</li>
                  <li>• <strong>Sea Blue on White:</strong> AA compliant</li>
                  <li>• <strong>White on Night Blue:</strong> Excellent contrast</li>
                  <li>• <strong>White on Sea Blue:</strong> AA compliant</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-blue-50/50 border-blue-200 p-6">
            <h3 className="font-semibold text-lg mb-3">Primary Color Combinations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium">High Contrast (AAA)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 p-2 rounded border bg-white">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#012030" }}></div>
                    <span>Night Blue on White</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">16.3:1</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded border" style={{ backgroundColor: "#012030", color: "white" }}>
                    <div className="w-4 h-4 rounded bg-white"></div>
                    <span>White on Night Blue</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">16.3:1</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Good Contrast (AA)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 p-2 rounded border bg-white">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#115D7E" }}></div>
                    <span>Sea Blue on White</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">5.8:1</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded border" style={{ backgroundColor: "#115D7E", color: "white" }}>
                    <div className="w-4 h-4 rounded bg-white"></div>
                    <span>White on Sea Blue</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">5.8:1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Color System */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Chart Color System</h2>
        <p className="mb-6 text-muted-foreground">
          Chart colors prioritize PRIMARY GTreasury colors first, then use shades for additional data series while maintaining AA accessibility compliance.
        </p>
        
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-4">Primary Chart Colors (Use First)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--night-blue)" }}>
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">1</div>
                </div>
                <span className="text-sm font-medium">Night Blue</span>
                <code className="text-xs text-muted-foreground">--chart-1</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--sea-blue)" }}>
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">2</div>
                </div>
                <span className="text-sm font-medium">Sea Blue</span>
                <code className="text-xs text-muted-foreground">--chart-2</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--peppermint-green)" }}>
                  <div className="w-full h-full flex items-center justify-center text-black text-xs font-medium">3</div>
                </div>
                <span className="text-sm font-medium">Peppermint Green</span>
                <code className="text-xs text-muted-foreground">--chart-3</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--monsoon-green)" }}>
                  <div className="w-full h-full flex items-center justify-center text-black text-xs font-medium">4</div>
                </div>
                <span className="text-sm font-medium">Monsoon Green</span>
                <code className="text-xs text-muted-foreground">--chart-4</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-gray-100">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--white)", border: "2px solid #ddd" }}>
                  <div className="w-full h-full flex items-center justify-center text-black text-xs font-medium">5</div>
                </div>
                <span className="text-sm font-medium">White</span>
                <code className="text-xs text-muted-foreground">--chart-5</code>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-4">Secondary Chart Colors (Additional Data)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--night-blue-70)" }}>
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">6</div>
                </div>
                <span className="text-sm font-medium">Night Blue 70</span>
                <code className="text-xs text-muted-foreground">--chart-6</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--sea-blue-80)" }}>
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">7</div>
                </div>
                <span className="text-sm font-medium">Sea Blue 80</span>
                <code className="text-xs text-muted-foreground">--chart-7</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--peppermint-green-130)" }}>
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">8</div>
                </div>
                <span className="text-sm font-medium">Peppermint 130</span>
                <code className="text-xs text-muted-foreground">--chart-8</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--monsoon-green-130)" }}>
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">9</div>
                </div>
                <span className="text-sm font-medium">Monsoon 130</span>
                <code className="text-xs text-muted-foreground">--chart-9</code>
              </div>
              <div className="flex flex-col items-center p-3 rounded border bg-white">
                <div className="w-12 h-12 rounded-lg border shadow-sm mb-2" style={{ backgroundColor: "var(--night-blue-30)" }}>
                  <div className="w-full h-full flex items-center justify-center text-black text-xs font-medium">10</div>
                </div>
                <span className="text-sm font-medium">Night Blue 30</span>
                <code className="text-xs text-muted-foreground">--chart-10</code>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-emerald-50/50 border-emerald-200 p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Chart Color Usage Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Color Priority Order:</h4>
                <ol className="space-y-1 text-muted-foreground list-decimal list-inside">
                  <li><strong>Night Blue</strong> - Primary data series</li>
                  <li><strong>Sea Blue</strong> - Secondary data series</li>
                  <li><strong>Peppermint Green</strong> - Third data series</li>
                  <li><strong>Monsoon Green</strong> - Fourth data series</li>
                  <li><strong>White</strong> - Background contrast series</li>
                </ol>
              </div>
              <div>
                <h4 className="font-medium mb-2">Best Practices:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Use primary colors for most important data</li>
                  <li>• Reserve shades for additional series</li>
                  <li>• Maintain contrast ratios for accessibility</li>
                  <li>• Test charts in both light and dark themes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tint Families */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Tints for Web Usage</h2>
        <p className="mb-6 text-muted-foreground">
          These color tints can be used to create an expanded web color scheme to build a flexible user interface.
        </p>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <GTTintFamily familyName="Night Blue" colors={nightBlueTints} />
          <GTTintFamily familyName="Sea Blue" colors={seaBlueTints} />
          <GTTintFamily familyName="Peppermint Green" colors={peppermintGreenTints} />
          <GTTintFamily familyName="Monsoon Green" colors={monsoonGreenTints} />
        </div>
      </section>

      {/* Legacy Theme Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Legacy Theme Integration</h2>
        <p className="mb-6 text-muted-foreground">
          Current theme colors used in the existing design system for backward compatibility.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ColorBlock name="Background" className="bg-background" />
          <ColorBlock name="Foreground" className="bg-foreground" />
          <ColorBlock name="Primary" className="bg-primary" />
          <ColorBlock name="Primary Foreground" className="bg-primary-foreground" />
          <ColorBlock name="Secondary" className="bg-secondary" />
          <ColorBlock name="Secondary Foreground" className="bg-secondary-foreground" />
          <ColorBlock name="Muted" className="bg-muted" />
          <ColorBlock name="Muted Foreground" className="bg-muted-foreground" />
          <ColorBlock name="Border" className="bg-border" />
          <ColorBlock name="Card" className="bg-card" />
          <ColorBlock name="Card Foreground" className="bg-card-foreground" />
        </div>
      </section>
    </div>
  );
}
