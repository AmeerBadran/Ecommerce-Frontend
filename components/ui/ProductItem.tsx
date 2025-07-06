"use client";
import Image from "next/image";
import React from "react";
import productImage from "@/public/images/willDelete/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_700x900.png";

interface Props {
  name: string;
  price: number;
  qty: number;
}

const ProductItem = ({ name, price, qty }: Props) => {
  return (
    <div className="flex items-center h-full gap-4 border border-amber-600 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
      <Image
        src={productImage}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-lg object-cover border border-gray-300 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-base">{name}</h3>
        <p className="text-sm text-gray-600">
          ILS {price} × {qty} = <span className="font-bold">ILS {price * qty}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
