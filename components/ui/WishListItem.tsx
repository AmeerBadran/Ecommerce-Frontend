import React from "react";
import Image from "next/image";
import Link from "next/link";
import productImage from "@/public/images/willDelete/product-14-13_788x1013(5).png";
import { FiTrash2 } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const WishListItem = ({
  product,
  onRemove,
}: {
  product: Product;
  onRemove: (id: number) => void;
}) => {
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove(product.id);
  };

  return (
    <div className="flex items-center justify-between gap-5 border border-secondary/30 p-2 bg-white transition">
      {/* الصورة + الاسم */}
      <div className="flex items-center gap-4">
        <Link
          href={`/shop/product/${product.id}`}
          className="relative w-24 h-24 flex-shrink-0 bg-gray-50 rounded overflow-hidden border border-gray-200 transition duration-300"
        >
          <Image
            src={productImage}
            alt={product.name}
            fill
            className="object-cover p-2 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <div className="flex flex-col justify-center">
          <Link
            href={`/shop/product/${product.id}`}
            className="text-base font-semibold text-gray-800 hover:text-secondary transition-colors duration-300"
          >
            {product.name}
          </Link>
          <p className="text-sm text-gray-600 mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* زر الحذف */}
      <button
        onClick={handleRemove}
        className="text-gray-400 hover:text-red-600 transition text-xl"
        title="Remove from Wishlist"
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default WishListItem;
