"use client";

import { motion } from "framer-motion";

const recentOrders = [
  {
    id: "#1001",
    customer: "Ahmed Salem",
    total: "ILS 178",
    status: "Pending",
    date: "2025-06-29",
  },
  {
    id: "#1002",
    customer: "Lina Hariri",
    total: "ILS 142",
    status: "Shipped",
    date: "2025-06-28",
  },
  {
    id: "#1003",
    customer: "Mohammad Khattab",
    total: "ILS 320",
    status: "Delivered",
    date: "2025-06-27",
  },
  {
    id: "#1004",
    customer: "Sara Odeh",
    total: "ILS 92",
    status: "Cancelled",
    date: "2025-06-26",
  },
  {
    id: "#1005",
    customer: "Ahmed Salem",
    total: "ILS 178",
    status: "Pending",
    date: "2025-06-29",
  },
  {
    id: "#1006",
    customer: "Lina Hariri",
    total: "ILS 142",
    status: "Shipped",
    date: "2025-06-28",
  },
  {
    id: "#1007",
    customer: "Mohammad Khattab",
    total: "ILS 320",
    status: "Delivered",
    date: "2025-06-27",
  },
  {
    id: "#1008",
    customer: "Sara Odeh",
    total: "ILS 92",
    status: "Cancelled",
    date: "2025-06-26",
  },
  {
    id: "#1009",
    customer: "Ahmed Salem",
    total: "ILS 178",
    status: "Pending",
    date: "2025-06-29",
  },
  {
    id: "#1010",
    customer: "Lina Hariri",
    total: "ILS 142",
    status: "Shipped",
    date: "2025-06-28",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const RecentOrdersTable = () => {
  return (
    <motion.section
      className="bg-white rounded-xl p-6 shadow-md lg:col-span-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <button className="text-gray-400 hover:text-gray-600 text-2xl">
          ⋮
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="text-left py-3 px-2">Order ID</th>
              <th className="text-left py-3 px-2">Customer</th>
              <th className="text-left py-3 px-2">Total</th>
              <th className="text-left py-3 px-2">Status</th>
              <th className="text-left py-3 px-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, i) => (
              <tr key={i} className=" hover:bg-gray-100">
                <td className="py-3 px-2 font-medium text-gray-800">
                  {order.id}
                </td>
                <td className="py-3 px-2">
                  <p className="font-medium text-gray-700">
                    {order.customer}
                  </p>
                </td>
                <td className="py-3 px-2">{order.total}</td>
                <td className="py-3 px-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-2 text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default RecentOrdersTable;
