"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";

export function BottomTables() {
  const campaigns = useAppSelector((state) => state.analytics.campaigns);

  const campaignData = campaigns.map((campaign) => ({
    name: campaign.name,
    location: "India", // Placeholder location
    spend: `$${campaign.spend.toLocaleString()}`,
    change: "+15.2%", // Placeholder change - would need real calculation
    installs: campaign.conversions.toLocaleString(), // Using conversions as installs for now
    installChange: "+12.8%",
    conversions: campaign.conversions.toLocaleString(),
    conversionChange: "+18.5%",
  }));

  const biggestChangesData = campaigns.map((campaign, index) => ({
    name: campaign.name,
    location: "India",
    spend: `$${campaign.spend.toLocaleString()}`,
    change: "+15.2%",
    bar:
      index === 0
        ? "bg-orange-500"
        : index === 1
        ? "bg-orange-400"
        : index === 2
        ? "bg-yellow-400"
        : "bg-yellow-300",
    barWidth:
      index === 0
        ? "w-full"
        : index === 1
        ? "w-3/4"
        : index === 2
        ? "w-1/2"
        : "w-1/4",
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Top List Table */}
      <Card className="bg-white border border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Top List</CardTitle>
          <div className="flex gap-6 mt-4">
            <button className="text-sm font-medium text-foreground border-b-2 border-orange-500 pb-2">
              Campaigns
            </button>
            <button className="text-sm text-muted-foreground pb-2">
              Ad Groups
            </button>
            <button className="text-sm text-muted-foreground pb-2">
              Keywords
            </button>
            <button className="text-sm text-muted-foreground pb-2">Ads</button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {/* Table Headers */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-2">
              <div className="flex items-center gap-2">
                <ChevronDown className="w-4 h-4" />
                <span>Spend</span>
              </div>
              <div className="flex gap-8">
                <span>Installs</span>
                <span>Conver...</span>
              </div>
            </div>

            {/* Table Rows */}
            {campaignData.map((campaign, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">{campaign.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {campaign.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 text-sm">
                  <div className="text-right">
                    <div className="bg-orange-100 px-2 py-1 rounded text-orange-800 font-medium">
                      {campaign.spend}
                    </div>
                    <div className="text-xs text-green-600">
                      {campaign.change}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{campaign.installs}</div>
                    <div className="text-xs text-green-600">
                      {campaign.installChange}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{campaign.conversions}</div>
                    <div className="text-xs text-muted-foreground">
                      {campaign.conversionChange}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Biggest Changes Table */}
      <Card className="bg-white border border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">
            Biggest Changes
          </CardTitle>
          <div className="flex gap-6 mt-4">
            <button className="text-sm font-medium text-foreground border-b-2 border-orange-500 pb-2">
              Campaigns
            </button>
            <button className="text-sm text-muted-foreground pb-2">
              Ad Groups
            </button>
            <button className="text-sm text-muted-foreground pb-2">
              Keywords
            </button>
            <button className="text-sm text-muted-foreground pb-2">Ads</button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {/* Table Headers */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-2">
              <div className="flex items-center gap-2">
                <ChevronDown className="w-4 h-4" />
                <span>Spend</span>
              </div>
            </div>

            {/* Table Rows */}
            {biggestChangesData.map((campaign, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">{campaign.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {campaign.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${campaign.bar} ${campaign.barWidth}`}
                    ></div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{campaign.spend}</div>
                    <div className="text-xs text-green-600">
                      {campaign.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
