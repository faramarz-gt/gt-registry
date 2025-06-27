import {
  CashPositionForecastChart,
  ForecastAccuracyChart,
  Top5VariancesChart,
} from "@/components/financial-charts";

export const financialComparison = {
  name: "financial-comparison",
  components: {
    "Top 5 Variances": <Top5VariancesChart />,
    "Cash Position Forecast": <CashPositionForecastChart />,
    "Forecast Accuracy": <ForecastAccuracyChart />,
  },
};
