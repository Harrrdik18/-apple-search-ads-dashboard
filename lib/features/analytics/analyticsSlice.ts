import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface CampaignData {
  id: string
  name: string
  impressions: number
  clicks: number
  ctr: number
  cpa: number
  spend: number
  conversions: number
  status: "active" | "paused" | "ended"
}

export interface MetricsSummary {
  totalImpressions: number
  totalClicks: number
  averageCtr: number
  totalSpend: number
  averageCpa: number
  totalConversions: number
}

export interface ChartDataPoint {
  date: string
  impressions: number
  clicks: number
  spend: number
  conversions: number
}

export interface AnalyticsState {
  metrics: MetricsSummary
  campaigns: CampaignData[]
  chartData: ChartDataPoint[]
  loading: boolean
  error: string | null
  timeRange: "7d" | "30d" | "90d"
}

const initialState: AnalyticsState = {
  metrics: {
    totalImpressions: 2840000,
    totalClicks: 142000,
    averageCtr: 5.0,
    totalSpend: 85600,
    averageCpa: 2.35,
    totalConversions: 36400,
  },
  campaigns: [
    {
      id: "1",
      name: "iOS App - Premium",
      impressions: 1200000,
      clicks: 60000,
      ctr: 5.0,
      cpa: 2.1,
      spend: 35000,
      conversions: 16667,
      status: "active",
    },
    {
      id: "2",
      name: "iOS App - Standard",
      impressions: 980000,
      clicks: 49000,
      ctr: 5.0,
      cpa: 2.45,
      spend: 28000,
      conversions: 11429,
      status: "active",
    },
    {
      id: "3",
      name: "Brand Keywords",
      impressions: 450000,
      clicks: 22500,
      ctr: 5.0,
      cpa: 2.8,
      spend: 15000,
      conversions: 5357,
      status: "active",
    },
    {
      id: "4",
      name: "Competitor Terms",
      impressions: 210000,
      clicks: 10500,
      ctr: 5.0,
      cpa: 2.2,
      spend: 7600,
      conversions: 3455,
      status: "paused",
    },
  ],
  chartData: [
    { date: "2024-01-01", impressions: 95000, clicks: 4750, spend: 2850, conversions: 1217 },
    { date: "2024-01-02", impressions: 102000, clicks: 5100, spend: 3100, conversions: 1327 },
    { date: "2024-01-03", impressions: 88000, clicks: 4400, spend: 2650, conversions: 1133 },
    { date: "2024-01-04", impressions: 115000, clicks: 5750, spend: 3450, conversions: 1475 },
    { date: "2024-01-05", impressions: 98000, clicks: 4900, spend: 2940, conversions: 1258 },
    { date: "2024-01-06", impressions: 125000, clicks: 6250, spend: 3750, conversions: 1604 },
    { date: "2024-01-07", impressions: 110000, clicks: 5500, spend: 3300, conversions: 1412 },
  ],
  loading: false,
  error: null,
  timeRange: "7d",
}

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setTimeRange: (state, action: PayloadAction<"7d" | "30d" | "90d">) => {
      state.timeRange = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    updateCampaignStatus: (state, action: PayloadAction<{ id: string; status: "active" | "paused" | "ended" }>) => {
      const campaign = state.campaigns.find((c) => c.id === action.payload.id)
      if (campaign) {
        campaign.status = action.payload.status
      }
    },
  },
})

export const { setTimeRange, setLoading, setError, updateCampaignStatus } = analyticsSlice.actions
export default analyticsSlice.reducer
