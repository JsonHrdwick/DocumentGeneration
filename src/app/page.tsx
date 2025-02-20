"use client"

import { useState } from "react"
import { Edit2, Share2, HelpCircle, Maximize2, RefreshCw } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from "recharts"

const timeSeriesData = Array.from({ length: 50 }, (_, i) => ({
  date: `${i + 1}`,
  value: Math.floor(Math.random() * 15000) + 5000,
}))

const profitData = [
  { segment: "Channel Partners", year2013: 1000, year2014: 2000 },
  { segment: "Enterprise", year2013: 2000, year2014: 8000 },
  { segment: "Government", year2013: 3000, year2014: 1000 },
  { segment: "Midmarket", year2013: 4000, year2014: 3000 },
  { segment: "Small Business", year2013: 1500, year2014: 4000 },
]

const tableData = [
  {
    segment: "Government",
    country: "Canada",
    product: "Carretera",
    discount: "Medium",
    units: "1618.5",
    manufacturing: "3",
    sale: "20",
    gross: "32370.0",
  },
  {
    segment: "Government",
    country: "Germany",
    product: "Carretera",
    discount: "Medium",
    units: "1321.9",
    manufacturing: "3",
    sale: "20",
    gross: "26420.0",
  },
  {
    segment: "Midmarket",
    country: "France",
    product: "Carretera",
    discount: "Medium",
    units: "2178.0",
    manufacturing: "3",
    sale: "15",
    gross: "32670.0",
  },
]

export default function Page() {
  const [selectedOrientation, setSelectedOrientation] = useState("portrait")
  const [selectedSize, setSelectedSize] = useState("letter")
  const [selectedColor, setSelectedColor] = useState("color")
  const [selectedMargins, setSelectedMargins] = useState("default")
  const [selectedPages, setSelectedPages] = useState("1")

  return (
    <div className="min-h-screen bg-[#ebecee]">
      {/* Header */}
      <header className="bg-white border-b border-[#d9d9d9] p-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#f15a24] rounded-lg" />
            <h1 className="text-2xl font-semibold text-[#2c2626]">Hi, Claire!</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-[#f15a24]">
              <Edit2 className="w-5 h-5 mr-2" />
              Edit
            </Button>
            <Button variant="ghost" className="text-[#f15a24]">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-[300px_1fr_300px] gap-6 p-6">
        {/* Left Sidebar */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Let Querri help you refine your visualizations</h2>
          <div className="flex items-center gap-2 p-4 border rounded-lg bg-gray-50">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 bg-transparent border-none outline-none"
            />
            <HelpCircle className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="space-y-6">
          {/* Time Series Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Draw-Step-Count-Graph</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Line type="monotone" dataKey="value" stroke="#f15a24" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Interactive Profit by Segment and Year Chart</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="segment" />
                  <YAxis />
                  <Bar dataKey="year2013" fill="#f15a24" />
                  <Bar dataKey="year2014" fill="#bcdee9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Segment</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Country</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Product</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Discount</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Units</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Manufacturing</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Sale</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Gross</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2 text-sm">{row.segment}</td>
                    <td className="px-4 py-2 text-sm">{row.country}</td>
                    <td className="px-4 py-2 text-sm">{row.product}</td>
                    <td className="px-4 py-2 text-sm">{row.discount}</td>
                    <td className="px-4 py-2 text-sm">{row.units}</td>
                    <td className="px-4 py-2 text-sm">{row.manufacturing}</td>
                    <td className="px-4 py-2 text-sm">{row.sale}</td>
                    <td className="px-4 py-2 text-sm">{row.gross}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Print Toolbox</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Orientation</label>
              <Select value={selectedOrientation} onValueChange={setSelectedOrientation}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="landscape">Landscape</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="letter">Letter (8.5&#34; x 11&#34;)</SelectItem>
                  <SelectItem value="a4">A4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="color">Color</SelectItem>
                  <SelectItem value="bw">Black & White</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Margins</label>
              <Select value={selectedMargins} onValueChange={setSelectedMargins}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="narrow">Narrow</SelectItem>
                  <SelectItem value="wide">Wide</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pages per Sheet</label>
              <Select value={selectedPages} onValueChange={setSelectedPages}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

