"use client";

import { motion } from "framer-motion";

interface DashboardProps {
  title: string;
}

const DashboardHeader = ({ title }: DashboardProps) => {
  return (
    <motion.h1
      className="text-2xl font-semibold text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h1>
  );
};

export default DashboardHeader;
