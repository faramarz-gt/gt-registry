"use client";

import { ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

import { ComponentCard } from "@/components/design/component-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const starters = [
  {
    title: "Blank",
    name: "blank",
    description:
      "A minimal starter template with basic setup and clean foundation to build upon.",
    previewUrl: "/starters/blank",
    tags: ["minimal", "template", "basic"],
  },
  {
    title: "Dashboard",
    name: "dashboard",
    description:
      "Complete dashboard layout with navigation, sidebar, and responsive design patterns.",
    previewUrl: "/starters/dashboard",
    tags: ["dashboard", "admin", "analytics"],
  },
  {
    title: "GT Navigation Header",
    name: "gt-navigation-header",
    description:
      "GTreasury-branded navigation header with treasury-focused navigation items and user management.",
    previewUrl: "/starters/gt-navigation-header",
    tags: ["navigation", "header", "treasury", "navbar", "gtreasury"],
  },
];

export default function StartersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = Array.from(
    new Set(starters.flatMap((starter) => starter.tags || [])),
  );

  // Filter starters based on search term and selected tags
  const filteredStarters = starters.filter((starter) => {
    const matchesSearch =
      starter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (starter.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => (starter.tags || []).includes(tag));

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
        <h1 className="font-bold text-3xl tracking-tight">Starter Templates</h1>
        <p className="mt-2 text-muted-foreground">
          Complete starter templates to jumpstart your GTreasury applications
          with pre-built layouts and components.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search starters or tags..."
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
          Showing {filteredStarters.length} of {starters.length} starters
        </div>
      </div>

      {/* Starters Grid */}
      <div className="space-y-8">
        {filteredStarters.length > 0 ? (
          filteredStarters.map((starter) => (
            <ComponentCard
              key={starter.name}
              name={starter.name}
              baseUrl={
                process.env.VERCEL_BRANCH_URL ?? "gt-registry.vercel.app"
              }
              title={starter.title}
              description={starter.description}
              promptTitle={`${starter.title} Starter Kit`}
              previewUrl={starter.previewUrl}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">No starters found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or clearing the filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
