
"use client";
import React from "react";
import PriceSlider from "@/components/ui/PriceSlider";
import ProductListItem from "@/components/ui/ProductListItem";
import { categoriesData } from "@/constants/categoriesData";
import colors from "@/constants/colors";
import { productsData } from "@/constants/products";

interface SidebarFiltersProps {
  price: number[];
  onPriceChange: (value: number[]) => void;
}

const SidebarFilters = ({ price, onPriceChange }: SidebarFiltersProps) => {
  return (
    <div className="w-full flex flex-col gap-8 mb-5 px-4 divide-dashed divide-y divide-gray-300 xl:col-span-1">
      {/* Categories */}
      <div className="w-full pb-8">
        <h2 className="text-lg text-gray-800 font-semibold mb-5">Categories</h2>
        <div className="grid gap-2">
          {categoriesData.map((category) => (
            <button
              onClick={() => console.log(category.title)}
              key={category.id}
              className="py-1 hover:text-secondary text-sm text-left w-full flex items-center gap-2"
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="w-full pb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Filter by Color
        </h2>
        <div className="grid grid-cols-8 gap-2">
          {colors.map((color) => (
            <div key={color.id} className="relative group w-full aspect-square">
              <button
                className="w-full h-full rounded-full border border-gray-700 hover:border-secondary transition-colors duration-300"
                style={{ backgroundColor: color.color }}
                onClick={() => console.log(color.color)}
              />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded shadow-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap">
                {color.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="w-full pb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-10">
          Filter by Price
        </h2>
        <PriceSlider
          value={price}
          onChange={(e, newVal) => onPriceChange(newVal as number[])}
        />
      </div>

      {/* Best Sellers */}
      <div className="w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-10">
          Best Sellers
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {productsData.slice(0, 4).map((product) => (
            <ProductListItem key={product.id} product={product} size="big" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
