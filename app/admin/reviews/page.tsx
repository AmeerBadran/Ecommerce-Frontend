"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import RenderStars from "@/components/ui/RenderStars";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";

const dummyReviews = [
  {
    id: 1,
    username: "Ahmed Saleh",
    product: "Wireless Headphones",
    rating: 4,
    title: "Amazing quality!",
    message: "The sound is very clear and the battery lasts long.",
  },
  {
    id: 2,
    username: "Fatima Ali",
    product: "Smart Watch",
    rating: 5,
    title: "Perfect companion",
    message: "Tracks my fitness well and looks stylish.",
  },
  {
    id: 3,
    username: "Omar Youssef",
    product: "Laptop Stand",
    rating: 3,
    title: "Decent but shaky",
    message: "Good design but a bit unstable on uneven surfaces.",
  },
];

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const filteredReviews = dummyReviews.filter((review) => {
    const matchesProduct = review.product
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRating = selectedRating
      ? review.rating === parseInt(selectedRating)
      : true;
    return matchesProduct && matchesRating;
  });

  return (
    <div className="space-y-8">
      {/* Title */}
      <DashboardHeader title="Product Reviews" />

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-4 justify-between bg-white p-4 rounded-xl shadow-md"
      >
        {/* Search Input */}
        <div className="flex items-center w-full md:w-1/2 relative">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Rating Filter */}
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="">All Ratings</option>
          {[5, 4, 3, 2, 1].map((rate) => (
            <option key={rate} value={rate}>
              {rate} Stars
            </option>
          ))}
        </select>
      </motion.div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 2md:grid-cols-2 llg:grid-cols-3 gap-6">
        {filteredReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-5 space-y-3 hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {review.username}
            </h2>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Product:</span> {review.product}
            </p>
            <div className="flex items-center gap-1 text-yellow-500">
              <RenderStars ratingNumber={review.rating} size="medium" />
            </div>
            <p className="text-md font-semibold text-gray-700">
              {review.title}
            </p>
            <p className="text-sm text-gray-600">{review.message}</p>

            {/* Admin Controls */}
            <div className="pt-2 flex gap-2">
              <button className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition">
                Delete
              </button>
              <button className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200 transition">
                Hide
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
