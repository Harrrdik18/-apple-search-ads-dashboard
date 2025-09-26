"use client"

import { cn } from "@/lib/utils"
import { BarChart3, Target, TrendingUp, Users, DollarSign, Globe, Settings, HelpCircle, Zap, Clock } from "lucide-react"

const navigation = [
  { name: "Overview", icon: BarChart3, current: true },
  { name: "Campaigns", icon: Target, current: false },
  { name: "Keywords", icon: TrendingUp, current: false },
  { name: "Audiences", icon: Users, current: false },
  { name: "Spend", icon: DollarSign, current: false },
  { name: "Geographic", icon: Globe, current: false },
  { name: "Performance", icon: Zap, current: false },
  { name: "Schedule", icon: Clock, current: false },
  { name: "Settings", icon: Settings, current: false },
  { name: "Help", icon: HelpCircle, current: false },
]

export function DashboardSidebar() {
  return (
    <div className="w-12 bg-primary flex flex-col items-center py-4 space-y-4">
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </div>

      {navigation.map((item, index) => (
        <button
          key={item.name}
          className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
            item.current ? "bg-white text-primary" : "text-white/70 hover:text-white hover:bg-white/10",
          )}
        >
          <item.icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  )
}
