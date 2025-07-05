"use client";
import React, { useState } from "react";
import productImage from "@/public/images/willDelete/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_700x900.png"
import Image from "next/image";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";

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
        image: "/public/images/willDelete/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_700x900.png",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800 font-sans">
      <DashboardHeader title="Orders Management" />

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 mt-6 gap-4 mb-10 bg-white p-5 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search by Order ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
          <option value="canceled">Canceled</option>
        </select>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Orders */}
      {filteredOrders.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition"
        >
          {/* Header */}
          <div className="flex justify-between items-center flex-wrap gap-2 mb-5">
            <div>
              <h2 className="text-xl font-bold tracking-wide">
                Order #{order.id}
              </h2>
              <p className="text-sm text-gray-500">
                Customer: {order.customerName}
              </p>
              <p className="text-sm text-gray-500">Date: {order.date}</p>
              <p className="mt-1 text-sm font-semibold">
                Status:{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <select
                className="p-2 border rounded-lg text-sm"
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="canceled">Canceled</option>
              </select>
              <button
                onClick={() => handleCancelOrder(order.id)}
                className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-lg border hover:bg-red-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteOrder(order.id)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg border hover:bg-gray-200"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3 grid grid-cols-3 gap-4">
            {order.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center h-full gap-4 border border-amber-600 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <Image
                  src={productImage}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-300 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-base">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    ${product.price} × {product.qty} ={" "}
                    <span className="font-bold">
                      ${product.price * product.qty}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="text-end mt-4 font-bold text-lg">
            Total: ${order.total}
          </div>
        </div>
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
