"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import RenderStars from "../ui/RenderStars";

const productReviews = [
  {
    id: "rev1",
    productId: "prod1",
    productName: "Wireless Headphones",
    reviewTitle: "Amazing Sound Quality!",
    reviewContent:
      "The sound quality of these headphones is outstanding, and they are very comfortable to wear for long periods.",
    rating: 5,
    date: "2025-07-02T10:30:00Z",
  },
  {
    id: "rev2",
    productId: "prod2",
    productName: "Smart Watch",
    reviewTitle: "Very Useful for Fitness Tracking",
    reviewContent:
      "The smart watch is great for tracking fitness activities, but the battery life could be better.The smart watch is great for tracking fitness activities, but the battery life could be better.",
    rating: 2,
    date: "2025-07-01T14:15:00Z",
  },
  {
    id: "rev3",
    productId: "prod3",
    productName: "Laptop Bag",
    reviewTitle: "Good but a bit small",
    reviewContent:
      "The laptop bag is decent but it could use more compartments for better organization.",
    rating: 3,
    date: "2025-06-30T09:00:00Z",
  },
  {
    id: "rev4",
    productId: "prod1",
    productName: "Wireless Headphones",
    reviewTitle: "Amazing Sound Quality!",
    reviewContent:
      "The sound quality of these headphones is outstanding, and they are very comfortable to wear for long periods.",
    rating: 5,
    date: "2025-07-02T10:30:00Z",
  },
  {
    id: "rev5",
    productId: "prod2",
    productName: "Smart Watch",
    reviewTitle: "Very Useful for Fitness Tracking",
    reviewContent:
      "The smart watch is great for tracking fitness activities, but the battery life could be better.",
    rating: 4,
    date: "2025-07-01T14:15:00Z",
  },
  {
    id: "rev6",
    productId: "prod3",
    productName: "Laptop Bag",
    reviewTitle: "Good but a bit small",
    reviewContent:
      "The laptop bag is decent but it could use more compartments for better organization.",
    rating: 3,
    date: "2025-06-30T09:00:00Z",
  },
];

const ProductReviewsTable = () => {
  return (
    <motion.section
      className="bg-white rounded-xl p-6 shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">User Product Reviews</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="text-left py-3 px-2">Product</th>
              <th className="text-left py-3 px-2">Review Title</th>
              <th className="text-left py-3 px-2">Review Content</th>
              <th className="text-left py-3 px-2">Rating</th>
              <th className="text-left py-3 px-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {productReviews.map((review) => (
              <tr key={review.id} className="hover:bg-gray-100">
                <td className="py-3 px-2 font-medium text-sec-color-100 underline">
                  <Link href={`/admin/products/${review.productId}`}>
                    {review.productName}
                  </Link>
                </td>
                <td className="py-3 px-2 text-gray-700">
                  {review.reviewTitle}
                </td>
                <td className="py-3 px-2 text-gray-600">
                  {review.reviewContent}
                </td>
                <td className="py-3 px-2 text-yellow-500">
                  <RenderStars ratingNumber={review.rating} size="medium" />
                </td>
                <td className="py-3 px-2 text-gray-500">
                  {format(new Date(review.date), "yyyy-MM-dd HH:mm")}
                </td>
              </tr>
            ))}
            {productReviews.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-400">
                  No reviews available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default ProductReviewsTable;
