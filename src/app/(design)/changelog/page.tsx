import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3,
  Blocks,
  Code,
  Layout,
  Palette,
  Rocket,
  Search,
  Sparkles,
  ToyBrick,
  Zap,
} from "lucide-react";

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    type: "added" | "changed" | "fixed" | "improved" | "deprecated" | "removed";
    items: string[];
  }[];
}

const changelogData: ChangelogEntry[] = [
  {
    version: "1.4.0",
    date: "2024-01-15",
    title: "Enhanced Navigation & Collapsible Sidebar",
    description: "Major navigation improvements with new header design and smart sidebar functionality for better user experience.",
    changes: [
      {
        type: "added",
        items: [
          "New registry header with dropdown navigation menus",
          "Collapsible sidebar with icon-only mode and tooltips",
          "Quick access navigation for all component categories",
          "Enhanced search functionality in header",
          "Tooltip system for collapsed sidebar icons"
        ]
      },
      {
        type: "improved",
        items: [
          "Responsive layout with proper header-sidebar integration",
          "Better mobile navigation experience",
          "Streamlined component discovery workflow",
          "Reduced cognitive load with organized navigation structure"
        ]
      },
      {
        type: "changed",
        items: [
          "Sidebar now supports collapsed state for more content space",
          "Theme toggle moved to header for consistent access",
          "Navigation structure optimized for quick component access"
        ]
      }
    ]
  },
  {
    version: "1.3.0",
    date: "2024-01-08",
    title: "UI Blocks & Advanced Component Patterns",
    description: "Introduction of reusable UI blocks and enhanced component patterns for faster development workflows.",
    changes: [
      {
        type: "added",
        items: [
          "Hero blocks with multiple layout variations",
          "Login form blocks with GTreasury branding",
          "Logo showcase blocks for brand consistency",
          "Variance bar chart blocks for financial data visualization",
          "Enhanced card patterns with better visual hierarchy"
        ]
      },
      {
        type: "improved",
        items: [
          "Component documentation with live examples",
          "Better component preview functionality",
          "Enhanced code snippet generation",
          "Improved accessibility across all block components"
        ]
      }
    ]
  },
  {
    version: "1.2.0",
    date: "2024-01-01",
    title: "Comprehensive Chart Library & Data Visualization",
    description: "Complete chart component library with 10+ chart types, built for financial data visualization and analytics.",
    changes: [
      {
        type: "added",
        items: [
          "Area charts with multiple data series support",
          "Bar charts (basic, stacked, horizontal, grouped)",
          "Line charts with trend indicators",
          "Pie charts with customizable labels and legends",
          "Radar charts for multi-dimensional data",
          "Radial charts for progress and completion metrics",
          "Interactive chart features (hover, selection, zoom)",
          "Chart theming system aligned with GTreasury brand"
        ]
      },
      {
        type: "improved",
        items: [
          "Chart performance optimization for large datasets",
          "Responsive chart behavior across all screen sizes",
          "Enhanced chart accessibility with ARIA labels",
          "Better chart color system with semantic meanings"
        ]
      }
    ]
  },
  {
    version: "1.1.0",
    date: "2023-12-25",
    title: "Design System Foundation & Core Components",
    description: "Establishment of the core design system with essential UI components and GTreasury brand integration.",
    changes: [
      {
        type: "added",
        items: [
          "Complete GTreasury brand color palette and design tokens",
          "Core UI component library (20+ components)",
          "Form components with validation patterns",
          "Navigation components (breadcrumb, menu, tabs)",
          "Feedback components (alerts, toasts, progress)",
          "Data display components (tables, badges, cards)",
          "GTreasury logo variants and brand assets",
          "Dark and light theme support"
        ]
      },
      {
        type: "improved",
        items: [
          "Component API consistency across all components",
          "TypeScript support with proper type definitions",
          "Enhanced documentation with usage guidelines",
          "Accessibility compliance (WCAG 2.1 AA)"
        ]
      }
    ]
  }
];

const getChangeTypeIcon = (type: string) => {
  switch (type) {
    case "added":
      return <Sparkles className="size-4 text-green-600" />;
    case "changed":
      return <Zap className="size-4 text-blue-600" />;
    case "improved":
      return <ToyBrick className="size-4 text-purple-600" />;
    case "fixed":
      return <Code className="size-4 text-orange-600" />;
    case "deprecated":
      return <Layout className="size-4 text-yellow-600" />;
    case "removed":
      return <Blocks className="size-4 text-red-600" />;
    default:
      return <Sparkles className="size-4 text-gray-600" />;
  }
};

const getChangeTypeBadge = (type: string) => {
  const variants = {
    added: "default",
    changed: "secondary",
    improved: "outline",
    fixed: "destructive",
    deprecated: "secondary",
    removed: "destructive"
  } as const;

  return (
    <Badge variant={variants[type as keyof typeof variants] || "default"} className="capitalize">
      {type}
    </Badge>
  );
};

export default function ChangelogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary p-2">
            <Rocket className="size-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-3xl tracking-tight">Changelog</h1>
            <p className="text-muted-foreground">
              Track the latest updates, improvements, and new features in the GTreasury Design System Registry
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <ToyBrick className="size-4 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Components</div>
                  <div className="text-2xl font-bold">25+</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="size-4 text-green-600" />
                <div>
                  <div className="font-semibold text-sm">Chart Types</div>
                  <div className="text-2xl font-bold">8</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Blocks className="size-4 text-purple-600" />
                <div>
                  <div className="font-semibold text-sm">UI Blocks</div>
                  <div className="text-2xl font-bold">4</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Palette className="size-4 text-orange-600" />
                <div>
                  <div className="font-semibold text-sm">Themes</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Changelog Entries */}
      <div className="space-y-8">
        {changelogData.map((entry, index) => (
          <Card key={entry.version} className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      v{entry.version}
                    </Badge>
                    {entry.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">{entry.description}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {entry.changes.map((changeGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <div className="flex items-center gap-2 mb-3">
                      {getChangeTypeIcon(changeGroup.type)}
                      {getChangeTypeBadge(changeGroup.type)}
                    </div>
                    <ul className="space-y-2 ml-6">
                      {changeGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {groupIndex < entry.changes.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <Card className="bg-muted/30">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              This changelog is automatically updated with each release. For detailed technical documentation, 
              visit individual component pages or check our development notes.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="outline" className="text-xs">
                <Search className="size-3 mr-1" />
                Searchable
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Code className="size-3 mr-1" />
                Version Controlled
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Layout className="size-3 mr-1" />
                Documented
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 