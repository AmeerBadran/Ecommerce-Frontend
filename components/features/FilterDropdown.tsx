"use client";
import React, { useState } from "react";
import PriceSlider from "@/components/ui/PriceSlider";
import { categoriesData } from "@/constants/categoriesData";
import colors from "@/constants/colors";
import { AnimatePresence, motion } from "framer-motion";
import { TbAdjustments } from "react-icons/tb";

interface FilterDropdownProps {
  price: number[];
  onPriceChange: (value: number[]) => void;
}

const FilterDropdown = ({ price, onPriceChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:hidden  z-100">
      <button
        className="flex items-center gap-2 rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <TbAdjustments className="rotate-90" />
        Filter
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden grid md:grid-cols-2 border border-secondary absolute left-0 2md:grid-cols-3 bg-white rounded mt-4 py-4 px-8 gap-6"
          >
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categoriesData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => console.log(category.title)}
                    className="py-1 hover:text-secondary text-sm text-left w-full flex items-center gap-2"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="max-w-[370px]">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2 items-center">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className="relative group w-6 h-6 rounded-full border border-gray-400 cursor-pointer"
                    style={{ backgroundColor: color.color }}
                    onClick={() => console.log(color.color)}
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs px-2 py-1 bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {color.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-semibold mb-8">Price</h3>
              <PriceSlider
                value={price}
                onChange={(e, newVal) => onPriceChange(newVal as number[])}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
