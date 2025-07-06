"use client";
import ProductItem from "@/components/ui/ProductItem";
import React from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface Order {
  id: string;
  customerName: string;
  date: string;
  status: string;
  total: number;
  products: Product[];
}

interface Props {
  order: Order;
  onStatusChange: (orderId: string, newStatus: string) => void;
  onCancelOrder: (orderId: string) => void;
  onDeleteOrder: (orderId: string) => void;
}

const OrderCard = ({
  order,
  onStatusChange,
  onCancelOrder,
  onDeleteOrder,
}: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition">
      <div className="flex justify-between items-center flex-wrap gap-2 mb-5">
        <div>
          <h2 className="text-xl font-bold tracking-wide">Order #{order.id}</h2>
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
            onChange={(e) => onStatusChange(order.id, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
          <button
            onClick={() => onCancelOrder(order.id)}
            className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-lg border hover:bg-red-200"
          >
            Cancel
          </button>
          <button
            onClick={() => onDeleteOrder(order.id)}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg border hover:bg-gray-200"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="space-y-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {order.products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            qty={product.qty}
          />
        ))}
      </div>

      <div className="text-end mt-4 font-bold text-lg">
        Total: ${order.total}
      </div>
    </div>
  );
};

export default OrderCard;
