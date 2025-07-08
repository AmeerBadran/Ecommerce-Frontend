"use client";
import React, { useState } from "react";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import OrderCard from "@/components/pages/admin/orders/OrderCard";
import OrderFilters from "@/components/pages/admin/orders/OrderFilters";

const mockOrders = [
  {
    id: "ORD001",
    customerName: "John Doe",
    date: "2025-07-01",
    status: "pending",
    total: 250,
    products: [
      { id: "p1", name: "Smartphone", image: "/phone.jpg", price: 100, qty: 1 },
      {
        id: "p2",
        name: "Bluetooth Headphones",
        image: "/headphones.jpg",
        price: 75,
        qty: 2,
      },
      { id: "p3", name: "Smartphone", image: "/phone.jpg", price: 100, qty: 1 },
      {
        id: "p4",
        name: "Bluetooth Headphones",
        image: "/headphones.jpg",
        price: 75,
        qty: 2,
      },
    ],
  },
  {
    id: "ORD002",
    customerName: "Sarah Smith",
    date: "2025-07-02",
    status: "delivered",
    total: 400,
    products: [
      { id: "p3", name: "Laptop", image: "/laptop.jpg", price: 400, qty: 1 },
    ],
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [searchId, setSearchId] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleCancelOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "canceled" } : order
      )
    );
  };

  const handleDeleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  const filteredOrders = orders.filter((order) => {
    const matchesId = order.id.toLowerCase().includes(searchId.toLowerCase());
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    const matchesFrom = dateFrom
      ? new Date(order.date) >= new Date(dateFrom)
      : true;
    const matchesTo = dateTo ? new Date(order.date) <= new Date(dateTo) : true;
    return matchesId && matchesStatus && matchesFrom && matchesTo;
  });

  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <DashboardHeader title="Orders Management" />

      <OrderFilters
        searchId={searchId}
        statusFilter={statusFilter}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onSearchChange={setSearchId}
        onStatusChange={setStatusFilter}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
      />

      {filteredOrders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onStatusChange={handleStatusChange}
          onCancelOrder={handleCancelOrder}
          onDeleteOrder={handleDeleteOrder}
        />
      ))}

      {filteredOrders.length === 0 && (
        <div className="text-center mt-16 text-gray-500 text-lg">
          No orders found.
        </div>
      )}
    </div>
  );
};

export default Orders;
