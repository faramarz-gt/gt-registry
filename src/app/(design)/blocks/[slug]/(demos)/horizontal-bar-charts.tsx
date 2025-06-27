import {
  BusinessUnitRevenueChart,
  CostCenterAnalysisChart,
  DepartmentCashFlowChart,
  ForecastingConsolidationChart,
  RegionalProfitabilityChart,
} from "@/components/horizontal-bar-charts";

export const horizontalBarCharts = {
  name: "horizontal-bar-charts",
  components: {
    "BU Revenue Performance": <BusinessUnitRevenueChart />,
    "Department Cash Flow": <DepartmentCashFlowChart />,
    "Regional Profitability": <RegionalProfitabilityChart />,
    "Cost Center Analysis": <CostCenterAnalysisChart />,
    "Forecasting Consolidation": <ForecastingConsolidationChart />,
  },
};
