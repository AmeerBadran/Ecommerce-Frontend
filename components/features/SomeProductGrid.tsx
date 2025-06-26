import { productsData } from "@/constants/products";
import React from "react";
import ProductCard from "../ui/ProductCard";

const SomeProductGrid = () => {
  return (
    <div className="grid gird-cols-1 xmobile:grid-cols-2 md:grid-cols-3 slg:grid-cols-4 lg:grid-cols-5 gap-6">
      {productsData.slice(0, 5).map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default SomeProductGrid;
