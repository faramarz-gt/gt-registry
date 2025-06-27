"use client";

import { ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

import { ComponentCard } from "@/components/design/component-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const components = [
  {
    title: "Accordion",
    name: "accordion",
    description: "Collapsible content sections with smooth animations for FAQs and content organization.",
    previewUrl: "/components/accordion",
    tags: ["ui", "navigation", "collapsible", "content"],
  },
  {
    title: "Alert",
    name: "alert",
    description: "Contextual feedback messages for success, error, warning, and informational states.",
    previewUrl: "/components/alert",
    tags: ["ui", "feedback", "notification", "status"],
  },
  {
    title: "Avatar",
    name: "avatar",
    description: "User profile images with fallback initials and various sizes for user representation.",
    previewUrl: "/components/avatar",
    tags: ["ui", "user", "profile", "image"],
  },
  {
    title: "Badge",
    name: "badge",
    description: "Small status indicators and labels with multiple variants and color options.",
    previewUrl: "/components/badge",
    tags: ["ui", "status", "label", "indicator"],
  },
  {
    title: "Button",
    name: "button",
    description: "Interactive buttons with multiple variants, sizes, and states for user actions.",
    previewUrl: "/components/button",
    tags: ["ui", "interactive", "action", "form"],
  },
  {
    title: "Card",
    name: "card",
    description: "Flexible container component for grouping related content with headers and actions.",
    previewUrl: "/components/card",
    tags: ["ui", "container", "layout", "content"],
  },
  {
    title: "Checkbox",
    name: "checkbox",
    description: "Form input for boolean selections with indeterminate state support.",
    previewUrl: "/components/checkbox",
    tags: ["ui", "form", "input", "selection"],
  },
  {
    title: "Dialog",
    name: "dialog",
    description: "Modal windows and overlays for focused user interactions and confirmations.",
    previewUrl: "/components/dialog",
    tags: ["ui", "modal", "overlay", "interaction"],
  },
  {
    title: "Dropdown Menu",
    name: "dropdown-menu",
    description: "Contextual menus with keyboard navigation and nested submenu support.",
    previewUrl: "/components/dropdown-menu",
    tags: ["ui", "navigation", "menu", "contextual"],
  },
  {
    title: "Input",
    name: "input",
    description: "Text input fields with validation states and various input types.",
    previewUrl: "/components/input",
    tags: ["ui", "form", "text", "validation"],
  },
  {
    title: "Select",
    name: "select",
    description: "Dropdown selection component with search functionality and custom options.",
    previewUrl: "/components/select",
    tags: ["ui", "form", "dropdown", "selection"],
  },
  {
    title: "Switch",
    name: "switch",
    description: "Toggle switches for binary settings and preferences with smooth animations.",
    previewUrl: "/components/switch",
    tags: ["ui", "form", "toggle", "boolean"],
  },
  {
    title: "Table",
    name: "table",
    description: "Data tables with sorting, filtering, and pagination for structured data display.",
    previewUrl: "/components/table",
    tags: ["ui", "data", "table", "structured"],
  },
  {
    title: "Tabs",
    name: "tabs",
    description: "Tabbed interface for organizing content into separate views and sections.",
    previewUrl: "/components/tabs",
    tags: ["ui", "navigation", "organization", "content"],
  },
  {
    title: "Tooltip",
    name: "tooltip",
    description: "Contextual help text that appears on hover with customizable positioning.",
    previewUrl: "/components/tooltip",
    tags: ["ui", "help", "contextual", "hover"],
  },
];

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = Array.from(
    new Set(components.flatMap((component) => component.tags || [])),
  );

  // Filter components based on search term and selected tags
  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (component.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => (component.tags || []).includes(tag));

    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
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
        <h1 className="font-bold text-3xl tracking-tight">UI Components</h1>
        <p className="mt-2 text-muted-foreground">
          Individual building blocks for your interface - reusable, customizable,
          and ready to drop into any project.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search components or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tags Filter */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Filter by tags:</span>
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="h-6 px-2 text-xs"
              >
                <X className="mr-1 h-3 w-3" />
                Clear all
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredComponents.length} of {components.length} components
        </div>
      </div>

      {/* Components Grid */}
      <div className="space-y-8">
        {filteredComponents.length > 0 ? (
          filteredComponents.map((component) => (
            <ComponentCard
              key={component.name}
              name={component.name}
              baseUrl={
                process.env.VERCEL_BRANCH_URL ?? "gt-registry.vercel.app"
              }
              title={component.title}
              description={component.description}
              promptTitle={`${component.title} Component`}
              previewUrl={component.previewUrl}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">No components found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or clearing the filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 