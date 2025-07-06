"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RenderStars from "@/components/ui/RenderStars";
import productImage from "@/public/images/willDelete/product-14-13_788x1013(6).png";
import Link from "next/link";
const topProducts = [
  {
    id: 1,
    name: "NIKE Shoes Black Pattern",
    price: 87,
    image: "/products/nike.png",
  },
  { id: 2, name: "iPhone 12", price: 987, image: "/products/iphone.png" },
];

const TopSellingProducts = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Top selling Products</h2>
        <button className="text-gray-400 hover:text-gray-600">•••</button>
      </div>
      <ul className="space-y-6">
        {topProducts.map((product, i) => (
          <li key={i} className="flex items-center space-x-4">
            <Image
              src={productImage}
              alt={product.name}
              width={75}
              height={75}
              className="rounded-xl object-center object-cover aspect-square"
            />
            <div>
              <Link
                href={`/admin/product/${product.id}`}
                className="text-sm text-gray-800 hover:text-secondary *:hover:underline transition-colors duration-200 font-medium"
              >
                {product.name}
              </Link>
              <RenderStars ratingNumber={4.5} size="small" />
              <p className="text-sm font-medium mt-1">ILS {product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TopSellingProducts;
