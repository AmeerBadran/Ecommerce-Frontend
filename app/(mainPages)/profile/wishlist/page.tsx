"use client";
import React, { useState } from "react";
import WishListItem from "@/components/ui/WishListItem";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
const wishlistData: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/images/products/tshirt.png",
  },
  {
    id: 2,
    name: "Running Sneakers",
    price: 79.99,
    image: "/images/products/sneakers.png",
  },
  {
    id: 3,
    name: "Summer Hat",
    price: 19.99,
    image: "/images/products/hat.png",
  },
];
const WishList = () => {
  const [wishlist, setWishlist] = useState<Product[]>(wishlistData);

  const handleRemoveFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="bg-white shadow-sm border border-secondary/30 sm:p-4">
      <h2 className="text-xl font-semibold text-secondary mb-5">
        My Wish List
      </h2>
      <hr className="mb-6 text-black/30" />
      {wishlist.length > 0 ? (
        <>
          <div className="grid gap-3 xmobile:grid-cols-2 md:grid-cols-2 2md:grid-cols-2">
            {wishlist.map((product) => (
              <WishListItem
                key={product.id}
                product={product}
                onRemove={handleRemoveFromWishlist}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishList;
