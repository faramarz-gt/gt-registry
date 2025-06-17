import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { MCPTabs } from "@/components/design/mcp-tabs";
import { Button } from "@/components/ui/button";

export default function MCPPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="font-bold text-3xl tracking-tight">Model Context Protocol (MCP)</h1>
        <p className="mt-2 text-muted-foreground">
          Integrate this registry with AI IDEs using Model Context Protocol
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Integrate this registry with AI IDEs using Model Context Protocol
            (MCP) using the follow code. This utilizes this Registry's style
            tokens and the Shadcn CLI. To ensure this works, double check that
            the{" "}
            <Link href="/r/registry.json">
              <code className="inline text-sm tabular-nums underline">
                style:registry
              </code>
            </Link>{" "}
            contains the same colors as your{" "}
            <code className="inline text-sm tabular-nums">tokens.css</code>
          </p>

          <MCPTabs rootUrl={process.env.VERCEL_BRANCH_URL ?? ""} />
        </div>
      </div>
    </div>
  );
} 