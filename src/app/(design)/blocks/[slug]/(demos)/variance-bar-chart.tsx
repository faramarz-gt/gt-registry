import {
  BusinessUnitRevenueChart,
  ClosingBalanceVariancesChart,
  CostCenterAnalysisChart,
  DepartmentCashFlowChart,
  ForecastingConsolidationChart,
  RegionalProfitabilityChart,
} from "@/components/horizontal-bar-charts";
import VarianceBarChart, {
  VarianceBarChartWithTooltip,
  VarianceBarChartCompact,
  ForecastAccuracyChart,
  BusinessUnitPerformanceMixed,
  Top5ClosingBalanceVariancesChart,
} from "@/components/variance-bar-chart";

export const varianceBarChart = {
  name: "variance-bar-chart",
  components: {
    // ===============================
    // FEATURED CHART (MATCHING PROVIDED IMAGE)
    // ===============================
    "Top 5 Closing Balance Variances": <Top5ClosingBalanceVariancesChart />,

    // ===============================
    // VARIANCE ANALYSIS CHARTS
    // ===============================
    "Standard Tooltip": <VarianceBarChart />,
    "Always-Visible Tooltip": <VarianceBarChartWithTooltip />,
    "Compact View": <VarianceBarChartCompact />,
    "Forecast Accuracy": <ForecastAccuracyChart />,

    // ===============================
    // BUSINESS & PERFORMANCE CHARTS
    // ===============================
    "Business Unit Performance Mixed": <BusinessUnitPerformanceMixed />,
    "BU Revenue Performance": <BusinessUnitRevenueChart />,
    "Department Cash Flow": <DepartmentCashFlowChart />,
    "Regional Profitability": <RegionalProfitabilityChart />,
    "Cost Center Analysis": <CostCenterAnalysisChart />,

    // ===============================
    // HORIZONTAL & CUSTOM CHARTS
    // ===============================
    "Forecasting Consolidation": <ForecastingConsolidationChart />,
    "Closing Balance Variances": <ClosingBalanceVariancesChart />,
  },
};
