import { ComponentCard } from "@/components/design/component-card";
import { chartItems } from "@/components/design/registry-sidebar";

export default function ChartsPage() {
  // Group charts by type
  const chartTypes = [
    {
      title: "Area Charts",
      description: "Perfect for showing trends over time with filled areas",
      charts: chartItems.filter(item => item.name.includes("Area Chart"))
    },
    {
      title: "Bar Charts", 
      description: "Ideal for comparing categories of data",
      charts: chartItems.filter(item => item.name.includes("Bar Chart"))
    },
    {
      title: "Line Charts",
      description: "Great for displaying data trends and changes over time", 
      charts: chartItems.filter(item => item.name.includes("Line Chart"))
    },
    {
      title: "Pie Charts",
      description: "Perfect for showing parts of a whole",
      charts: chartItems.filter(item => item.name.includes("Pie Chart"))
    },
    {
      title: "Radar Charts", 
      description: "Excellent for multivariate data visualization",
      charts: chartItems.filter(item => item.name.includes("Radar Chart"))
    },
    {
      title: "Radial Charts",
      description: "Beautiful circular progress and data representations",
      charts: chartItems.filter(item => item.name.includes("Radial Chart"))
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Charts</h1>
        <p className="text-muted-foreground mt-2">
          Beautiful and interactive charts built with Recharts. Copy and paste into your apps.
        </p>
      </div>

      {chartTypes.map((type) => (
        <div key={type.title} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">{type.title}</h2>
            <p className="text-muted-foreground">{type.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {type.charts.map((chart) => (
              <ComponentCard
                key={chart.path}
                name={chart.name}
                href={chart.path}
                description={`Interactive ${chart.name.toLowerCase()} component`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 