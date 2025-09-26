"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, BarChart3, Maximize2, MoreHorizontal } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";

export function StorefrontsSection() {
  const metrics = useAppSelector((state) => state.analytics.metrics);
  const totalSpend = `$${metrics.totalSpend.toLocaleString()}`;

  return (
    <Card className="bg-white border border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Storefronts</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Globe className="w-4 h-4 text-blue-500" />
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
        <div className="relative">
          {/* World Map SVG */}
          <div className="w-full h-64 bg-gradient-to-b from-blue-50 to-orange-50 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Simplified world map representation */}
            <svg viewBox="0 0 800 400" className="w-full h-full">
              {/* Continents in light beige */}
              <path
                d="M150 100 L250 80 L300 120 L280 180 L200 200 L120 160 Z"
                fill="#F5E6D3"
              />
              <path
                d="M320 90 L450 85 L480 140 L420 190 L350 180 L310 130 Z"
                fill="#F5E6D3"
              />
              <path
                d="M500 110 L580 100 L600 150 L550 180 L480 170 Z"
                fill="#F5E6D3"
              />
              <path
                d="M200 220 L280 210 L320 260 L290 300 L220 290 L180 250 Z"
                fill="#F5E6D3"
              />
              <path
                d="M100 250 L180 240 L200 290 L150 320 L80 310 Z"
                fill="#F5E6D3"
              />
              <path
                d="M600 200 L680 190 L720 240 L680 280 L620 270 Z"
                fill="#F5E6D3"
              />

              {/* India highlighted in orange */}
              <circle cx="520" cy="160" r="8" fill="#FF6B35" />
              <text
                x="520"
                y="180"
                textAnchor="middle"
                className="text-xs font-medium"
                fill="#333"
              >
                India
              </text>
            </svg>

            {/* Add button */}
            <button className="absolute top-4 left-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200">
              +
            </button>
          </div>

          {/* Bottom gradient bar */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">$0</span>
            <div className="flex-1 mx-4 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            <span className="text-sm text-muted-foreground">{totalSpend}</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm font-medium">Spend</span>
        </div>
      </CardContent>
    </Card>
  );
}
