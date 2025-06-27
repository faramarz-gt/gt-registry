"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, TrendingUp, TrendingDown, BarChart3, PieChart, LineChart } from "lucide-react";

interface InsightsPanelProps {
  className?: string;
}

export function InsightsPanel({ className }: InsightsPanelProps) {
  const [showVisualization, setShowVisualization] = useState(false);

  const executiveSummaryData = {
    comparisonDate: "01-Dec-20",
    expectedClosingBalance: "€302.4m",
    previousBalance: "€268.6m",
    variance: "12.6%",
    openingBalance: "€60.0m",
    receipts: {
      actual: "€309.5m",
      forecast: "€275.0m",
      variance: "€34.5m",
      variancePercent: "12.6%"
    },
    payments: {
      actual: "€67.1m",
      forecast: "€66.4m",
      variance: "€0.8m",
      variancePercent: "1.1%"
    },
    netCash: {
      actual: "€242.4m",
      forecast: "€208.6m",
      variance: "€33.8m",
      variancePercent: "16.2%"
    }
  };

  const topVariances = [
    { lineItem: "AR Collections", businessUnit: "Ireland", period: "Oct 20", variance: "€10,213,030.00" },
    { lineItem: "Other Inflows", businessUnit: "Ireland", period: "Sep 20", variance: "€2,100,000.00" },
    { lineItem: "Other Inflows", businessUnit: "Ireland", period: "Oct 21", variance: "€2,100,000.00" },
    { lineItem: "Other Inflows", businessUnit: "Ireland", period: "Nov 21", variance: "€2,100,000.00" },
    { lineItem: "AR Collections", businessUnit: "Netherlands", period: "Sep 20", variance: "€2,000,000.00" }
  ];

  const actionItems = [
    {
      title: "AR Collections – Ireland",
      description: "Investigate recurring large variances, especially the €10.2m variance in Oct 20, which is linked to client delays in quarter-end signing."
    },
    {
      title: "AR Collections – Netherlands and USA", 
      description: "Review the basis for recurring unexplained variances (€6.0m in Netherlands, €8.4m in USA) to identify potential forecast process improvements."
    },
    {
      title: "Other Inflows – Ireland",
      description: "Assess the source of consistent €2.1m variances in Sep 20, Oct 21, and Nov 21, as these are unexplained and may indicate missing or mis-timed forecast items."
    },
    {
      title: "Suppliers – Ireland",
      description: "Address the recurring €0.8m unfavorable variance in payments to suppliers."
    }
  ];

  const visualizationOptions = [
    { icon: BarChart3, title: "Cash Flow Variance Analysis", description: "Show detailed breakdown of receipts vs payments" },
    { icon: PieChart, title: "Business Unit Performance", description: "Compare performance across regions" },
    { icon: LineChart, title: "Trend Analysis", description: "Historical variance patterns over time" }
  ];

  return (
    <div className={`w-full max-w-md bg-background border-l ${className}`}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold tracking-tight">Insights Panel</h2>
          <p className="text-sm text-muted-foreground mt-1">Financial Analysis Dashboard</p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Executive Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm leading-relaxed">
                <p>Based on the selected comparison submission <strong>{executiveSummaryData.comparisonDate}</strong>, the expected closing balance for Nov 21 is <strong>{executiveSummaryData.expectedClosingBalance}</strong>.</p>
                <p className="mt-2">This is more optimistic than 01-Nov-20 ({executiveSummaryData.expectedClosingBalance} vs. {executiveSummaryData.previousBalance}, <Badge variant="default" className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">+{executiveSummaryData.variance}</Badge>).</p>
              </div>

              <Separator />

              {/* Key Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Opening Balance:</span>
                  <span className="text-sm font-mono">{executiveSummaryData.openingBalance}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Receipts:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono">{executiveSummaryData.receipts.actual}</span>
                      <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +{executiveSummaryData.receipts.variancePercent}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">vs. forecast ({executiveSummaryData.receipts.actual} vs. {executiveSummaryData.receipts.forecast})</p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Payments:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono">{executiveSummaryData.payments.actual}</span>
                      <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        +{executiveSummaryData.payments.variancePercent}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">vs. forecast ({executiveSummaryData.payments.actual} vs. {executiveSummaryData.payments.forecast})</p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Net Cash:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono">{executiveSummaryData.netCash.actual}</span>
                      <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +{executiveSummaryData.netCash.variancePercent}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center font-medium">
                  <span>Closing Balance:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{executiveSummaryData.expectedClosingBalance}</span>
                    <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
                      +{executiveSummaryData.variance}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top 5 Variances */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Top 5 Variances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topVariances.map((variance, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{variance.lineItem}</div>
                      <div className="text-xs text-muted-foreground">
                        {variance.businessUnit} • {variance.period}
                      </div>
                    </div>
                    <div className="text-sm font-mono font-medium text-green-600">
                      {variance.variance}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Areas to Investigate */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Areas to Investigate and Act</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actionItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm text-blue-600">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    {index < actionItems.length - 1 && <Separator className="mt-3" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Visualization Options */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Would you like me to show more details in visualizations?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {visualizationOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={() => setShowVisualization(true)}
                  >
                    <option.icon className="w-5 h-5 mr-3 text-blue-600" />
                    <div className="text-left">
                      <div className="font-medium text-sm">{option.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.description}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {showVisualization && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm font-medium text-blue-800">Visualization Loading...</p>
                  <p className="text-xs text-blue-600 mt-1">Your selected chart will appear here</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
} 