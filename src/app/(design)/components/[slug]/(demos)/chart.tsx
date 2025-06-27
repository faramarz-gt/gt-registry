import AreaChartDemo from "@/app/(design)/components/[slug]/(demos)/area-chart";
import BarChartDemo from "@/app/(design)/components/[slug]/(demos)/bar-chart";
import PieChartDemo from "@/app/(design)/components/[slug]/(demos)/pie-chart";

export const chart = {
  name: "chart",
  components: {
    BarChart: <BarChartDemo />,
    AreaChart: <AreaChartDemo />,
          PieChart: <PieChartDemo />,
  },
};
