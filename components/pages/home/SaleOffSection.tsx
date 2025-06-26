import ProductSlider from "@/components/features/ProductSlider";
import ProductCard from "@/components/ui/ProductCard";
import TitleWithDescription from "@/components/ui/TitleWithDescription";
import { productsData } from "@/constants/products";
import React from "react";
const SaleOffSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto mb-20 mt-32">
      <TitleWithDescription
        title="Sale Off"
        description="Mirum est notare quam littera gothica quam nunc putamus parum claram!"
      />
      <ProductSlider>
        {productsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductSlider>
    </section>
  );
};

export default SaleOffSection;
