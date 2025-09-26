"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MetricsSummary } from "@/components/metrics-summary"
import { StorefrontsSection } from "@/components/storefronts-section"
import { TrendsSection } from "@/components/trends-section"
import { BottomTables } from "@/components/bottom-tables"

export default function DashboardPage() {
  return (
    <div className="h-screen flex bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Overview dashboard</h1>
              <p className="text-muted-foreground">
                A consolidated view of your app efficiency by storefronts and key metrics.
              </p>
            </div>

            <MetricsSummary />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StorefrontsSection />
              <TrendsSection />
            </div>

            <BottomTables />
          </div>
        </main>
      </div>
    </div>
  )
}
