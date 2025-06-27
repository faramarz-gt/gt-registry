import type { ReactElement, ReactNode } from "react";

import { financialComparison } from "@/app/(design)/blocks/[slug]/(demos)/financial-comparison";
import { financialConsolidation } from "@/app/(design)/blocks/[slug]/(demos)/financial-consolidation";
import { hero } from "@/app/(design)/blocks/[slug]/(demos)/hero";
import { horizontalBarCharts } from "@/app/(design)/blocks/[slug]/(demos)/horizontal-bar-charts";
import { insightsPanel } from "@/app/(design)/blocks/[slug]/(demos)/insights-panel";
import { login } from "@/app/(design)/blocks/[slug]/(demos)/login";
import { logos } from "@/app/(design)/blocks/[slug]/(demos)/logos";
import { varianceBarChart } from "@/app/(design)/blocks/[slug]/(demos)/variance-bar-chart";

interface Block {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Block } = {
  hero,
  "insights-panel": insightsPanel,
  login,
  logos,
  "variance-bar-chart": varianceBarChart,
  "financial-comparison": financialComparison,
  "financial-consolidation": financialConsolidation,
  "horizontal-bar-charts": horizontalBarCharts,
};
