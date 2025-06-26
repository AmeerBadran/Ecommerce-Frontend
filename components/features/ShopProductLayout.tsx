import { productsData } from "@/constants/products";
import React from "react";
import ProductCard from "../ui/ProductCard";

const ShopProductLayout = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 gap-x-5 md:gap-y-14 px-4 py-2 mx-auto">
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ShopProductLayout;
