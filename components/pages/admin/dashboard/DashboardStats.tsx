"use client";

import { motion } from "framer-motion";
import { FaBoxOpen, FaUsers, FaDollarSign, FaBell } from "react-icons/fa";

const stats = [
  {
    title: "Today's Orders",
    value: "42",
    icon: <FaBoxOpen className="text-3xl text-blue-500" />,
  },
  {
    title: "Today's Revenue",
    value: "$1,750",
    icon: <FaDollarSign className="text-3xl text-green-500" />,
  },
  {
    title: "New Customers",
    value: "15",
    icon: <FaUsers className="text-3xl text-purple-500" />,
  },
  {
    title: "Low Stock Alerts",
    value: "3",
    icon: <FaBell className="text-3xl text-red-500" />,
  },
];

const DashboardStats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <motion.div
          key={i}
          className="bg-white p-5 rounded-2xl shadow-lg flex items-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          {item.icon}
          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default DashboardStats;
