"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMoreVertical } from "react-icons/fi";
import { motion } from "framer-motion";

import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";

const categoriesData = [
  { id: "cat1", name: "Shoes" },
  { id: "cat2", name: "Clothing" },
  { id: "cat3", name: "Accessories" },
  { id: "cat4", name: "Electronics" },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const productsData = [
    {
      id: "1",
      name: "Stylish Running Shoes",
      description:
        "Breathable, lightweight and stylish running shoes designed for all-day comfort.",
      price: 120,
      discount: 20,
      stock: 50,
      categoryId: "cat1", // Shoes
      colors: [
        { name: "Red", value: "#ff4d4d" },
        { name: "Black", value: "#000000" },
      ],
      mainImage:
        "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751985/product-14-13_788x101333_dqcq9p.webp",
    },
    {
      id: "2",
      name: "Elegant Luxury Watch",
      description:
        "High-end stainless steel watch with automatic movement and water resistance.",
      price: 350,
      discount: 50,
      stock: 15,
      categoryId: "cat3", // Accessories
      colors: [
        { name: "Silver", value: "#C0C0C0" },
        { name: "Black", value: "#000000" },
      ],
      mainImage:
        "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751981/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_700x900_qkoyxk.webp",
    },
    {
      id: "3",
      name: "Classic White T-shirt",
      description:
        "Soft cotton T-shirt that fits any casual outfit. Available in all sizes.",
      price: 45,
      discount: 10,
      stock: 100,
      categoryId: "cat2",
      colors: [
        { name: "White", value: "#ffffff" },
        { name: "Gray", value: "#d1d5db" },
      ],
      mainImage:
        "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751982/product-14-13_788x1013_fzgju8.webp",
    },
    {
      id: "4",
      name: "Wireless Bluetooth Headphones",
      description:
        "Noise-cancelling over-ear headphones with long battery life and immersive sound.",
      price: 220,
      discount: 30,
      stock: 35,
      categoryId: "cat4", // Electronics
      colors: [
        { name: "Blue", value: "#3b82f6" },
        { name: "Black", value: "#111827" },
      ],
      mainImage:
        "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751985/product-14-13_788x101344_dsuhyj.webp",
    },
  ];

  const filteredProducts = productsData.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (!selectedCategoryId || p.categoryId === selectedCategoryId)
  );

  return (
    <div className="space-y-8">
      <DashboardHeader title="Products" />

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4 justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-color transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-color transition bg-white"
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoriesData.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl group transition-all border border-gray-100"
          >
            {/* Dropdown Options */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() =>
                  setDropdownOpen((prev) =>
                    prev === product.id ? null : product.id
                  )
                }
                className="text-gray-600 hover:text-black p-1 rounded-full hover:bg-gray-100 transition"
              >
                <FiMoreVertical size={20} />
              </button>

              {dropdownOpen === product.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-8 right-0 bg-white border border-secondary rounded-lg shadow-md w-40 z-20"
                >
                  <Link
                    href={`/admin/products/edit/${product.id}`}
                    className="block px-4 py-2 text-sm rounded-t-lg hover:bg-gray-100 text-gray-800"
                  >
                    Edit Product
                  </Link>
                  <button
                    onClick={() => alert(`Deleting product ${product.id}`)}
                    className="w-full text-left px-4 py-2 text-sm rounded-b-lg hover:bg-red-50 text-red-600"
                  >
                    Delete
                  </button>
                </motion.div>
              )}
            </div>

            {/* Image with badge */}
            <div className="relative overflow-hidden rounded-xl mb-4 w-full aspect-[5/6] border border-gray-100 shadow-sm">
              <Image
                src={product.mainImage}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              {product.discount > 0 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  -{product.discount} ILS
                </span>
              )}
            </div>

            <h2 className="text-lg font-bold text-gray-800 truncate">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">
              {product.description}
            </p>

            {/* Category + Stock */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded-md">
                Category:{" "}
                {categoriesData.find((c) => c.id === product.categoryId)
                  ?.name || "N/A"}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
                Stock: {product.stock ?? 20}
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-base font-semibold text-secondary">
                ILS {product.price}
              </span>
              {product.discount > 0 && (
                <span className="line-through text-gray-400 text-sm">
                  ILS {product.price + product.discount}
                </span>
              )}
            </div>

            {/* Colors */}
            <div className="flex space-x-2 mt-3">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                ></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
