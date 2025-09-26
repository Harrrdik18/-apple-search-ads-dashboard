"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useAppSelector } from "@/lib/hooks";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  index: number;
}

function MetricCard({
  title,
  value,
  change,
  changeType,
  index,
}: MetricCardProps) {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-muted-foreground",
  }[changeType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="bg-white border border-border">
        <CardContent className="p-4">
          <div className="text-xs text-muted-foreground mb-1">{title}</div>
          <div className="text-xl font-bold text-foreground mb-1">{value}</div>
          <div className={`text-xs ${changeColor}`}>{change}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function MetricsSummary() {
  const metrics = useAppSelector((state) => state.analytics.metrics);

  const metricsData = [
    {
      title: "Impressions",
      value: metrics.totalImpressions.toLocaleString(),
      change: "+12.5%", // Placeholder change - would need real calculation
      changeType: "positive" as const,
    },
    {
      title: "Clicks",
      value: metrics.totalClicks.toLocaleString(),
      change: "+8.3%",
      changeType: "positive" as const,
    },
    {
      title: "CTR",
      value: `${metrics.averageCtr}%`,
      change: "+2.1%",
      changeType: "positive" as const,
    },
    {
      title: "Spend",
      value: `$${metrics.totalSpend.toLocaleString()}`,
      change: "+15.7%",
      changeType: "positive" as const,
    },
    {
      title: "CPA",
      value: `$${metrics.averageCpa}`,
      change: "-5.2%",
      changeType: "positive" as const,
    },
    {
      title: "Conversions",
      value: metrics.totalConversions.toLocaleString(),
      change: "+22.4%",
      changeType: "positive" as const,
    },
    {
      title: "ROAS",
      value: `${((metrics.totalConversions * 50) / metrics.totalSpend).toFixed(
        2
      )}`, // Placeholder ROAS calculation
      change: "+18.9%",
      changeType: "positive" as const,
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Total Summary
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {metricsData.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
