"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Plus,
  TrendingUp,
  BarChart3,
  Maximize2,
  MoreHorizontal,
} from "lucide-react";
import { useAppSelector } from "@/lib/hooks";

export function TrendsSection() {
  const chartData = useAppSelector((state) => state.analytics.chartData);

  // Format chart data for display
  const formattedChartData = chartData.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    spend: item.spend,
    conversions: item.conversions,
  }));

  // Calculate max values for Y-axis labels
  const maxSpend = Math.max(...chartData.map((d) => d.spend));
  const maxConversions = Math.max(...chartData.map((d) => d.conversions));

  return (
    <Card className="bg-white border border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Trends</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <TrendingUp className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <BarChart3 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Maximize2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-orange-600 bg-orange-50"
          >
            <Plus className="w-4 h-4 mr-1" />
            Spend
          </Button>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedChartData}>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="spend"
                stroke="#FF6B35"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="conversions"
                stroke="#60A5FA"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium">Spend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">Conversions</span>
          </div>
        </div>

        {/* Y-axis labels - positioned correctly */}
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>$0</span>
          <span>${(maxSpend / 2).toFixed(0)}</span>
          <span>${maxSpend.toFixed(0)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
