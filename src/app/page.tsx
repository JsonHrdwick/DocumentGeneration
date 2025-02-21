"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Edit, Share, Maximize2, Trash2, RefreshCw, MessageCircle, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, BarChart } from "@/components/ui/charts"

const lineData = Array.from({ length: 50 }, (_, i) => ({
  date: `2023-${Math.floor(i / 30) + 7}-${(i % 30) + 1}`,
  count: Math.floor(Math.random() * 15000) + 5000,
}))

const barData = [
  { segment: "Channel Partners", "2013": 1000, "2014": 2000 },
  { segment: "Enterprise", "2013": 2000, "2014": 8000 },
  { segment: "Government", "2013": 6000, "2014": 1000 },
  { segment: "Midmarket", "2013": 1500, "2014": 3500 },
  { segment: "Small Business", "2013": 1000, "2014": 4000 },
]

const tableData = [
  {
    segment: "Government",
    country: "Canada",
    product: "Carretera",
    discountBand: "Medium",
    unitsSold: "1618.5",
    manufacturingPrice: "3",
    salePrice: "20",
    grossSales: "32370.0",
  },
  // Add more rows as needed
]

export default function DashboardPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false)

  const getChartColors = (index: number) => {
    if (isBlackAndWhite) {
      const shade = 255 - index * 50
      return `rgb(${shade}, ${shade}, ${shade})`
    }
    return index === 0 ? "#f15a24" : "#bcdee9"
  }

  return (
    <div className="min-h-screen bg-[#ebecee] relative">
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <div className="w-10 h-10 bg-[#f15a24] rounded-lg" />
          <h1 className="text-2xl font-semibold text-[#2c2626]">Hi, Claire!</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-[#f15a24]">
            <Edit className="w-5 h-5 mr-2" />
            Edit
          </Button>
          <Button variant="ghost" className="text-[#f15a24]">
            <Share className="w-5 h-5 mr-2" />
            Share
          </Button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="flex-1 space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Draw-Step-Count-Graph</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <LineChart data={lineData} isBlackAndWhite={isBlackAndWhite} getChartColors={getChartColors} />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Interactive Profit by Segment and Year Chart</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <BarChart data={barData} isBlackAndWhite={isBlackAndWhite} getChartColors={getChartColors} />
            </div>
          </Card>

          <Card className="p-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Segment</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Discount Band</TableHead>
                    <TableHead>Units Sold</TableHead>
                    <TableHead>Manufacturing Price</TableHead>
                    <TableHead>Sale Price</TableHead>
                    <TableHead>Gross Sales</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.segment}</TableCell>
                      <TableCell>{row.country}</TableCell>
                      <TableCell>{row.product}</TableCell>
                      <TableCell>{row.discountBand}</TableCell>
                      <TableCell>{row.unitsSold}</TableCell>
                      <TableCell>{row.manufacturingPrice}</TableCell>
                      <TableCell>{row.salePrice}</TableCell>
                      <TableCell>{row.grossSales}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        <Card className="md:w-64 md:sticky md:top-4 md:self-start">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Print Toolbox</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Orientation</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Portrait</option>
                  <option>Landscape</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Size</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Letter (8.5" x 11")</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Color</label>
                <select
                  className="w-full p-2 border rounded-md"
                  onChange={(e) => setIsBlackAndWhite(e.target.value === "Black & White")}
                >
                  <option>Color</option>
                  <option>Black & White</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Margins</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Default</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pages per Sheet</label>
                <select className="w-full p-2 border rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>4</option>
                </select>
              </div>
              <Button className="w-full bg-[#f8931d] hover:bg-[#f15a24]">Finished</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Querri Chat Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full p-3 bg-[#f15a24] hover:bg-[#f8931d] text-white"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Querri Chat Box */}
      <div
        className={`fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isChatOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Let Querri help you</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-[#f8931d] rounded-full" />
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 bg-transparent border-none focus:outline-none"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}


