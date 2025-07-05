"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import OrderCard from "@/components/ui/OrderCard";
import OrderFilters from "@/components/pages/profile/orders/OrderFiltersProps";

const ordersData = [
  {
    id: 1,
    date: "2025-06-25",
    total: 150,
    status: "Delivered",
    products: [...Array(8)].map((_, i) => ({
      id: i,
      name: "T-shirt",
      quantity: 2,
      price: 25,
      image: "/images/products/tshirt.png",
    })),
  },
  {
    id: 2,
    date: "2025-06-20",
    total: 85,
    status: "Processing",
    products: [
      {
        id: 3,
        name: "Hat",
        quantity: 1,
        price: 20,
        image: "/images/products/hat.png",
      },
      {
        id: 4,
        name: "Shorts",
        quantity: 2,
        price: 32.5,
        image: "/images/products/shorts.png",
      },
    ],
  },
];

const Orders = () => {
  const [openOrderId, setOpenOrderId] = useState<number | null>(null);
  const [searchId, setSearchId] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  const toggleOrder = (id: number) => {
    setOpenOrderId((prev) => (prev === id ? null : id));
  };

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const matchesId =
        searchId === "" || order.id.toString().includes(searchId);
      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;
      const matchesDate = dateFilter === "" || order.date === dateFilter;
      return matchesId && matchesStatus && matchesDate;
    });
  }, [searchId, statusFilter, dateFilter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-sm border border-secondary/30 p-6"
    >
      <h2 className="text-2xl font-semibold text-secondary mb-5">Orders</h2>

      <OrderFilters
        searchId={searchId}
        setSearchId={setSearchId}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />
      <hr className="mb-6 text-black/30" />

      <div className="space-y-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              isOpen={openOrderId === order.id}
              toggleOrder={toggleOrder}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">No orders found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Orders;
