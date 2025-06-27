"use client";

import { ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

import { ComponentCard } from "@/components/design/component-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blocks = [
  {
    title: "Hero",
    name: "hero",
    description:
      "A powerful hero section with customizable title, description, call-to-action button, and background image.",
    previewUrl: "/blocks/hero",
    tags: ["hero", "landing", "cta", "header"],
  },
  {
    title: "Insights Panel",
    name: "insights-panel",
    description:
      "Financial insights panel with executive summary, variance analysis, and interactive visualization options for data-driven decision making.",
    previewUrl: "/blocks/insights-panel",
    tags: ["finance", "panel", "insights", "analytics", "dashboard"],
  },
  {
    title: "Login",
    name: "login",
    description:
      "Clean and professional login form with email/username input, password field, and authentication options.",
    previewUrl: "/blocks/login",
    tags: ["auth", "form", "login", "authentication"],
  },
  {
    title: "Logos",
    name: "logos",
    description:
      "Responsive logo gallery showcasing brand logos in various layouts and styles for partner displays.",
    previewUrl: "/blocks/logos",
    tags: ["logos", "brands", "gallery", "partners"],
  },
  {
    title: "Promo",
    name: "promo",
    description:
      "Eye-catching promotional section with feature highlights, pricing information, and conversion elements.",
    previewUrl: "/blocks/promo",
    tags: ["promo", "marketing", "features", "conversion"],
  },
  {
    title: "Variance Bar Chart",
    name: "variance-bar-chart",
    description:
      "Advanced financial chart displaying variance analysis with positive/negative indicators and detailed tooltips.",
    previewUrl: "/blocks/variance-bar-chart",
    tags: ["chart", "finance", "variance", "analytics", "data"],
  },
];

export default function BlocksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blocks.flatMap((block) => block.tags || [])),
  );

  // Filter blocks based on search term and selected tags
  const filteredBlocks = blocks.filter((block) => {
    const matchesSearch =
      block.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      block.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (block.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => (block.tags || []).includes(tag));

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
        <h1 className="font-bold text-3xl tracking-tight">UI Blocks</h1>
        <p className="mt-2 text-muted-foreground">
          Pre-composed sections that combine multiple components into common patterns.
          Perfect for quickly building consistent layouts and user interfaces.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search blocks or tags..."
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
          Showing {filteredBlocks.length} of {blocks.length} blocks
        </div>
      </div>

      {/* blocks Grid */}
      <div className="space-y-8">
        {filteredBlocks.length > 0 ? (
          filteredBlocks.map((block) => (
            <ComponentCard
              key={block.name}
              name={block.name}
              baseUrl={
                process.env.VERCEL_BRANCH_URL ?? "gt-registry.vercel.app"
              }
              title={block.title}
              description={block.description}
              promptTitle={`${block.title} Block`}
              previewUrl={block.previewUrl}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">No blocks found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or clearing the filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 