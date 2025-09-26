"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Plus, TrendingUp, BarChart3, Maximize2, MoreHorizontal } from "lucide-react"

const trendData = [
  { date: "5 July", spend: 27.42, conversions: 45 },
  { date: "5 July", spend: 27.42, conversions: 48 },
  { date: "5 July", spend: 27.42, conversions: 52 },
  { date: "5 July", spend: 27.42, conversions: 58 },
  { date: "5 July", spend: 27.42, conversions: 65 },
  { date: "5 July", spend: 27.42, conversions: 72 },
  { date: "5 July", spend: 27.42, conversions: 68 },
]

export function TrendsSection() {
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
          <Button variant="ghost" size="sm" className="text-orange-600 bg-orange-50">
            <Plus className="w-4 h-4 mr-1" />
            Spend
          </Button>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
              <YAxis hide />
              <Line type="monotone" dataKey="spend" stroke="#FF6B35" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="conversions" stroke="#60A5FA" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium">India</span>
          </div>
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-4 top-20 flex flex-col justify-between h-32 text-xs text-muted-foreground">
          <span>$27.42%</span>
          <span>$27.42%</span>
          <span>$27.42%</span>
          <span>$27.42%</span>
          <span>$27.42%</span>
          <span>$27.42%</span>
        </div>
      </CardContent>
    </Card>
  )
}
