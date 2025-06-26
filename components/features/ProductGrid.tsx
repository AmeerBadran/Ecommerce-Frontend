import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { productsData } from "@/constants/products";


const ProductGrid = () => {
  return (
    <div className="grid gird-cols-1 xmobile:grid-cols-2 md:grid-cols-3 gap-6">
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
