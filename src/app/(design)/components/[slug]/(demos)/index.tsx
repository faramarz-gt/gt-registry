import type { ReactElement, ReactNode } from "react";

import { accordion } from "@/app/(design)/components/[slug]/(demos)/accordion";
import { alert } from "@/app/(design)/components/[slug]/(demos)/alert";
import { AreaChartComponent } from "@/app/(design)/components/[slug]/(demos)/area-chart";
import { avatar } from "@/app/(design)/components/[slug]/(demos)/avatar";
import { badge } from "@/app/(design)/components/[slug]/(demos)/badge";
import { BarChartComponent } from "@/app/(design)/components/[slug]/(demos)/bar-chart";
import { breadcrumb } from "@/app/(design)/components/[slug]/(demos)/breadcrumb";
import { button } from "@/app/(design)/components/[slug]/(demos)/button";
import { calendar } from "@/app/(design)/components/[slug]/(demos)/calendar";
import { card } from "@/app/(design)/components/[slug]/(demos)/card";
import { chart } from "@/app/(design)/components/[slug]/(demos)/chart";
import { checkbox } from "@/app/(design)/components/[slug]/(demos)/checkbox";
import { dataTable } from "@/app/(design)/components/[slug]/(demos)/data-table";
import { datePicker } from "@/app/(design)/components/[slug]/(demos)/date-picker";
import { dialog } from "@/app/(design)/components/[slug]/(demos)/dialog";
import { dropdownMenu } from "@/app/(design)/components/[slug]/(demos)/dropdown-menu";
import { input } from "@/app/(design)/components/[slug]/(demos)/input";
import { LineChartComponent } from "@/app/(design)/components/[slug]/(demos)/line-chart";
import { menuBar } from "@/app/(design)/components/[slug]/(demos)/menu-bar";
import { PieChartComponent } from "@/app/(design)/components/[slug]/(demos)/pie-chart";
import { RadarChartComponent } from "@/app/(design)/components/[slug]/(demos)/radar-chart";
import { RadialChartComponent } from "@/app/(design)/components/[slug]/(demos)/radial-chart";
import { select } from "@/app/(design)/components/[slug]/(demos)/select";
import { separator } from "@/app/(design)/components/[slug]/(demos)/separator";
import { skeleton } from "@/app/(design)/components/[slug]/(demos)/skeleton";
import { slider } from "@/app/(design)/components/[slug]/(demos)/slider";
import { sonner } from "@/app/(design)/components/[slug]/(demos)/sonner";
import { switchComponent } from "@/app/(design)/components/[slug]/(demos)/switch";
import { table } from "@/app/(design)/components/[slug]/(demos)/table";
import { tabs } from "@/app/(design)/components/[slug]/(demos)/tabs";
import { toggleGroup } from "@/app/(design)/components/[slug]/(demos)/toggle-group";
import { tooltip } from "@/app/(design)/components/[slug]/(demos)/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

// Individual chart demo objects
const areaChart: Demo = {
  name: "area-chart",
  components: {
    AreaChart: <AreaChartComponent />,
  },
};

const barChart: Demo = {
  name: "bar-chart",
  components: {
    BarChart: <BarChartComponent />,
  },
};

const lineChart: Demo = {
  name: "line-chart",
  components: {
    LineChart: <LineChartComponent />,
  },
};

const pieChart: Demo = {
  name: "pie-chart",
  components: {
    PieChart: <PieChartComponent />,
  },
};

const radarChart: Demo = {
  name: "radar-chart",
  components: {
    RadarChart: <RadarChartComponent />,
  },
};

const radialChart: Demo = {
  name: "radial-chart",
  components: {
    RadialChart: <RadialChartComponent />,
  },
};

export const demos: { [name: string]: Demo } = {
  accordion,
  alert,
  "area-chart": areaChart,
  avatar,
  badge,
  "bar-chart": barChart,
  breadcrumb,
  button,
  calendar,
  card,
  chart,
  checkbox,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "line-chart": lineChart,
  "menu-bar": menuBar,
  "pie-chart": pieChart,
  "radar-chart": radarChart,
  "radial-chart": radialChart,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,
};
