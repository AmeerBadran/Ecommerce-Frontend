// components/OrderCard.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrderProductItem from "./OrderProductItem";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: number;
  date: string;
  total: number;
  status: string;
  products: Product[];
}

interface Props {
  order: Order;
  isOpen: boolean;
  toggleOrder: (id: number) => void;
}

const OrderCard = ({ order, isOpen, toggleOrder }: Props) => {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      whileHover={{ scale: 1.01 }}
      className="border border-gray-200 p-5 cursor-pointer bg-white"
    >
      <div
        onClick={() => toggleOrder(order.id)}
        className="flex justify-between items-center"
      >
        <div>
          <p className="font-medium text-gray-700 text-lg">Order #{order.id}</p>
          <p className="text-sm text-gray-500">Date: {order.date}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-800">Total: ${order.total}</p>
          <p
            className={`text-sm font-medium ${
              order.status === "Delivered"
                ? "text-green-600"
                : "text-yellow-600"
            }`}
          >
            {order.status}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 border-t border-gray-400 pt-5"
          >
            <h4 className="text-base font-semibold text-gray-600 mb-4">
              Products in this order:
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              {order.products.map((product, index) => (
                <motion.div
                  key={`${product.id}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <OrderProductItem product={product} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OrderCard;
