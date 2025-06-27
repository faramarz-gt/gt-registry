"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { MCPTabs } from "@/components/design/mcp-tabs";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  const sections = [
    { id: "getting-started", label: "Getting Started" },
    { id: "installation", label: "Installation" },
    { id: "mcp", label: "MCP Integration" },
    { id: "usage", label: "Usage" },
    { id: "customization", label: "Customization" },
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
            Back to Home
          </Link>
        </Button>
        <h1 className="font-bold text-3xl tracking-tight">Documentation</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to use and customize the registry components in your projects.
          Complete guides for installation, configuration, and best practices.
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

      <div className="space-y-12">
        <section id="getting-started" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                Welcome to the GTreasury Design System Registry. This documentation
                will help you understand how to use and customize the components
                in your projects.
              </p>
              <p className="text-muted-foreground">
                The registry provides a collection of reusable components, blocks,
                and charts that follow GTreasury's design standards and best practices.
              </p>
            </div>
          </div>
        </section>

        <section id="installation" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                Components can be installed individually using the registry CLI or
                copied directly from the component pages.
              </p>
              <div className="rounded-md bg-muted p-4">
                <code className="text-sm font-mono">npx registry-cli add [component-name]</code>
              </div>
            </div>
          </div>
        </section>

        <section id="mcp" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Model Context Protocol (MCP)</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none mb-6">
              <p className="text-muted-foreground">
                Integrate this registry with AI IDEs using Model Context Protocol
                (MCP) using the follow code. This utilizes this Registry's style
                tokens and the Shadcn CLI. To ensure this works, double check that
                the{" "}
                <Link href="/r/registry.json" className="underline">
                  <code className="inline text-sm tabular-nums">
                    style:registry
                  </code>
                </Link>{" "}
                contains the same colors as your{" "}
                <code className="inline text-sm tabular-nums">tokens.css</code>
              </p>
            </div>
            
            <MCPTabs rootUrl={process.env.VERCEL_BRANCH_URL ?? ""} />
          </div>
        </section>

        <section id="usage" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                Each component comes with examples, props documentation, and
                customization options. Visit the individual component pages to
                see detailed usage instructions.
              </p>
            </div>
          </div>
        </section>

        <section id="customization" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Customization</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                All components are built with Tailwind CSS and can be customized
                using design tokens. Visit the Design Tokens page to learn more
                about the available customization options.
              </p>
            </div>
          </div>
        </section>

        <section id="contributing" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Contributing</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                We welcome contributions to the design system. Please follow the
                contribution guidelines and ensure your components follow the
                established patterns and standards.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 