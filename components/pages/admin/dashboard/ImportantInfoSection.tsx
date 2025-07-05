"use client";

import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaInfoCircle,
  FaClock,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaExclamationTriangle className="text-red-500 text-lg" />,
    title: "3 products out of stock",
    description: "Restock them to avoid losing sales.",
  },
  {
    icon: <FaClock className="text-yellow-500 text-lg" />,
    title: "5 orders pending shipment",
    description: "Make sure to process them today.",
  },
  {
    icon: <FaInfoCircle className="text-blue-500 text-lg" />,
    title: "New feedback received",
    description: "2 customers left reviews this week.",
  },
  {
    icon: <FaChartLine className="text-green-500 text-lg" />,
    title: "Sales down 12% this week",
    description: "Consider launching a promotion.",
  },
  {
    icon: <FaUserShield className="text-purple-500 text-lg" />,
    title: "Security update available",
    description: "Update your system to the latest version.",
  },
];

const ImportantInfoSection = () => {
  return (
    <motion.section
      className="bg-white p-6 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
      <ul className="space-y-4">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start space-x-3">
            <div className="mt-1">{item.icon}</div>
            <div>
              <p className="font-medium text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ImportantInfoSection;
