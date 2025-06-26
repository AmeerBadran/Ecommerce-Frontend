"use client";
import ProductImage from "@/components/pages/product/ProductImage";
import ProductInfo from "@/components/pages/product/ProductInfo";
import SomeProduct from "@/components/pages/product/SomeProduct";
import ProductDetailsTabs from "@/components/pages/shop/ProductDetailsTabs";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const product = {
  id: "1",
  name: "Sample Product",
  price: 29.99,
  description:
    "This is a sample product description. It provides details about the product features and specifications. It is designed to give customers a clear understanding of what they can expect from this product.",
  rating: 4.5,
  reviews: 120,
  colors: [
    { value: "#FF0000", name: "Red" },
    { value: "#0000FF", name: "Blue" },
    { value: "#00FF00", name: "Green" },
  ],
  features: [
    "High quality material",
    "Durable and long-lasting",
    "Available in multiple colors",
    "Lightweight and easy to carry",
    "Perfect for everyday use",
  ],
  inStock: 230,
};

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="bg-white-100 py-10">
        <div className="flex items-center gap-2 mb-5 text-sm text-gray-400 max-w-[1400px] mx-auto px-5">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          /
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          /<p className="text-gray-800">Product ID: {id}</p>
        </div>
        <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-5 gap-5">
          <ProductImage />
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="mt-24">
        <ProductDetailsTabs />
      </div>
      <div className="mb-15">
        <SomeProduct />
      </div>
    </div>
  );
};

export default Product;
