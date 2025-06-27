import { InsightsPanel } from "@/components/insights-panel";

export const insightsPanel = {
  name: "insights-panel",
  components: {
    Default: (
      <div className="flex justify-end min-h-screen bg-gray-50/50">
        <InsightsPanel className="h-screen" />
      </div>
    ),
  },
}; 