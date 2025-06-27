import VarianceBarChart, { VarianceBarChartWithTooltip, VarianceBarChartCompact } from "@/components/variance-bar-chart";

export const varianceBarChart = {
  name: "variance-bar-chart",
  components: {
    "Standard Tooltip": <VarianceBarChart />,
    "Always-Visible Tooltip": <VarianceBarChartWithTooltip />,
    "Compact View": <VarianceBarChartCompact />,
  },
}; 