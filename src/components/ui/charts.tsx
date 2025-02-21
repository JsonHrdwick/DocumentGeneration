import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

interface ChartProps {
  data: any[]
  isBlackAndWhite: boolean
  getChartColors: (index: number) => string
}

export function LineChart({ data, isBlackAndWhite, getChartColors }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={isBlackAndWhite ? "#666" : "#ccc"} />
        <XAxis dataKey="date" stroke={isBlackAndWhite ? "#666" : "#888888"} />
        <YAxis stroke={isBlackAndWhite ? "#666" : "#888888"} />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke={getChartColors(0)} dot={false} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export function BarChart({ data, isBlackAndWhite, getChartColors }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={isBlackAndWhite ? "#666" : "#ccc"} />
        <XAxis dataKey="segment" stroke={isBlackAndWhite ? "#666" : "#888888"} />
        <YAxis stroke={isBlackAndWhite ? "#666" : "#888888"} />
        <Tooltip />
        <Bar dataKey="2013" fill={getChartColors(0)} />
        <Bar dataKey="2014" fill={getChartColors(1)} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

