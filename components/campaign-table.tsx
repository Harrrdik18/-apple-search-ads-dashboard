"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { updateCampaignStatus } from "@/lib/features/analytics/analyticsSlice"
import { Play, Pause, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CampaignTable() {
  const dispatch = useAppDispatch()
  const { campaigns } = useAppSelector((state) => state.analytics)

  const handleStatusChange = (id: string, status: "active" | "paused" | "ended") => {
    dispatch(updateCampaignStatus({ id, status }))
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-green-500/10 text-green-400 border-green-500/20",
      paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      ended: "bg-red-500/10 text-red-400 border-red-500/20",
    }
    return variants[status as keyof typeof variants] || variants.ended
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">Campaign Performance</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Export Data
            </Button>
            <Button size="sm">Create Campaign</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-muted/50">
                  <TableHead className="text-muted-foreground">Campaign</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground text-right">Impressions</TableHead>
                  <TableHead className="text-muted-foreground text-right">Clicks</TableHead>
                  <TableHead className="text-muted-foreground text-right">CTR</TableHead>
                  <TableHead className="text-muted-foreground text-right">Spend</TableHead>
                  <TableHead className="text-muted-foreground text-right">CPA</TableHead>
                  <TableHead className="text-muted-foreground text-right">Conversions</TableHead>
                  <TableHead className="text-muted-foreground text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign, index) => (
                  <motion.tr
                    key={campaign.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-border hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        {campaign.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusBadge(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-foreground">
                      <div className="flex items-center justify-end gap-1">
                        {formatNumber(campaign.impressions)}
                        <TrendingUp className="h-3 w-3 text-green-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-foreground">
                      <div className="flex items-center justify-end gap-1">
                        {formatNumber(campaign.clicks)}
                        <TrendingUp className="h-3 w-3 text-green-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-foreground">
                      <div className="flex items-center justify-end gap-1">
                        {campaign.ctr.toFixed(1)}%
                        <TrendingUp className="h-3 w-3 text-green-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-foreground">
                      <div className="flex items-center justify-end gap-1">
                        {formatCurrency(campaign.spend)}
                        <TrendingDown className="h-3 w-3 text-red-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-foreground">
                      <div className="flex items-center justify-end gap-1">
                        ${campaign.cpa.toFixed(2)}
                        <TrendingUp className="h-3 w-3 text-green-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-foreground">
                      <div className="flex items-center justify-end gap-1">
                        {formatNumber(campaign.conversions)}
                        <TrendingUp className="h-3 w-3 text-green-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(campaign.id, campaign.status === "active" ? "paused" : "active")
                          }
                        >
                          {campaign.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-card border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              Edit Campaign
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">Duplicate</DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-400 hover:bg-red-500/10"
                              onClick={() => handleStatusChange(campaign.id, "ended")}
                            >
                              End Campaign
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
