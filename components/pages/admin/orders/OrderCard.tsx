"use client";
import React from "react";
import { FaTrash, FaTimes, FaClipboardCheck } from "react-icons/fa";
import ProductItem from "@/components/ui/ProductItem";
import { MdPerson } from "react-icons/md";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { FaMoneyBills } from "react-icons/fa6";

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

const getStatusStyle = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "delivered":
      return "bg-green-100 text-green-700";
    case "canceled":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const OrderCard = ({
  order,
  onStatusChange,
  onCancelOrder,
  onDeleteOrder,
}: Props) => {
  return (
    <div className="bg-gradient-to-br from-white via-neutral-50 to-white border border-gray-200 rounded-xl shadow-xl p-6 mb-10 hover:shadow-2xl transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            <FaClipboardCheck className="inline-block mr-1 -mt-2 text-secondary" />
            Order #{order.id}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            <MdPerson className="inline-block mr-1 -mt-2 text-secondary" />
            {order.customerName}
          </p>
          <p className="text-sm text-gray-400">
            <HiMiniCalendarDateRange className="inline-block mr-1 -mt-2 text-secondary" />
            {order.date}
          </p>
        </div>

        <div
          className={`text-sm px-3 py-1 rounded-full font-semibold shadow-sm mt-1 whitespace-nowrap h-fit min-w-[100px] text-center tracking-wide transition-all duration-300 ease-in-out ring-1 ring-inset ring-gray-200 select-none cursor-default bg-opacity-80 capitalize ${getStatusStyle(
            order.status
          )}`}
        >
          {order.status}
        </div>
      </div>

      {/* Products */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
        {order.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-100 transition"
          >
            <ProductItem
              name={product.name}
              price={product.price}
              qty={product.qty}
            />
          </div>
        ))}
      </div>

      {/* Footer actions */}
      <div className="flex justify-between items-center flex-wrap mt-6 border-t border-gray-400 pt-4">
        <div className="space-x-2 flex items-center flex-wrap gap-2">
          <select
            className="text-sm rounded-lg border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-my-color bg-white"
            value={order.status}
            onChange={(e) => onStatusChange(order.id, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>

          <button
            onClick={() => onCancelOrder(order.id)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
          >
            <FaTimes className="text-xs" /> Cancel
          </button>

          <button
            onClick={() => onDeleteOrder(order.id)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            <FaTrash className="text-xs text-red-600" /> Delete
          </button>
        </div>

        <div className="text-lg font-bold text-gray-800 mt-4 sm:mt-0">
          <FaMoneyBills className="inline-block mr-1 w-6 h-6 -mt-1 text-green-700" />
          Total: <span className="text-green-700">ILS {order.total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
