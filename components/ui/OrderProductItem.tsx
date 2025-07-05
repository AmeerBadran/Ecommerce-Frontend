import React from "react";
import Image from "next/image";
import Link from "next/link";
import productImage from "@/public/images/willDelete/product-14-13_788x1013 (5).png";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const OrderProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="flex items-center gap-4 border border-gray-300 p-3 bg-gray-50 hover:bg-gray-100 transition">
      <Link
        href={`/shop/product/${product.id}`}
        className="relative w-16 h-16 flex-shrink-0"
      >
        <Image
          src={productImage}
          alt={product.name}
          fill
          className="object-contain rounded"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <Link
          href={`/shop/product/${product.id}`}
          className="hover:text-secondary transition-all duration-300"
        >
          {product.name}
        </Link>
        <p className="text-sm text-gray-500">
          Qty: {product.quantity} × ${product.price}
        </p>
        <p className="text-sm font-semibold text-black">
          Total: ${(product.quantity * product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderProductItem;
