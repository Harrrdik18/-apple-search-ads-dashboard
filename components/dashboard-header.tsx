"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Menu } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setTimeRange } from "@/lib/features/analytics/analyticsSlice"

export function DashboardHeader() {
  const dispatch = useAppDispatch()
  const { timeRange } = useAppSelector((state) => state.analytics)

  const handleTimeRangeChange = (value: "7d" | "30d" | "90d") => {
    dispatch(setTimeRange(value))
  }

  return (
    <header className="bg-white border-b border-border px-6 py-4">
      <div className="flex items-center justify-end gap-4">
        <Select defaultValue="pdf-name">
          <SelectTrigger className="w-40 bg-white border border-border">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">Pdf</span>
              </div>
              <SelectValue placeholder="Pdf Name" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pdf-name">Pdf Name</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-white">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Last 7 Days</span>
          <span className="text-sm text-muted-foreground">Jul 5 - Jul 11, 2025</span>
        </div>

        <Button variant="ghost" size="sm">
          <Menu className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
