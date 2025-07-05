"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { name: "Sun", sales: 1200 },
  { name: "Mon", sales: 2410 },
  { name: "Tue", sales: 1690 },
  { name: "Wed", sales: 800 },
  { name: "Thu", sales: 3181 },
  { name: "Fri", sales: 2500 },
  { name: "Sat", sales: 1100 },
];

const monthlyData = [
  { name: "Week 1", sales: 8300 },
  { name: "Week 2", sales: 9200 },
  { name: "Week 3", sales: 2600 },
  { name: "Week 4", sales: 9700 },
];

const WeeklySalesChart = () => {
  const [view, setView] = useState<"weekly" | "monthly">("weekly");
  const data = view === "weekly" ? weeklyData : monthlyData;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Sales Overview</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setView("weekly")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
              view === "weekly"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView("monthly")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
              view === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #eee",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default WeeklySalesChart;
