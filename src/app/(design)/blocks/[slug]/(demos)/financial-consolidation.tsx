import {
  BusinessUnitCashChart,
  CashRunwayChart,
  ForecastChangesChart,
} from "@/components/financial-charts";

export const financialConsolidation = {
  name: "financial-consolidation",
  components: {
    "BU Cash Positions": <BusinessUnitCashChart />,
    "Cash Runway": <CashRunwayChart />,
    "Forecast Changes": <ForecastChangesChart />,
  },
};
