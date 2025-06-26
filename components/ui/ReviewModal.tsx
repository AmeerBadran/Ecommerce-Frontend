"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const handleSubmit = () => {
    console.log({ rating, title, comment });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full  max-w-md bg-white/20 backdrop-blur-xl rounded shadow-2xl border border-white/30 p-6 pt-16 text-white overflow-hidden">
        {/* دائرة أيقونة النجمة */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
          <FaStar size={30} />
        </div>

        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:text-red-300 transition"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          Rate This Product
        </h2>

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              <FaStar
                size={28}
                className={`transition-colors ${
                  star <= (hover || rating) ? "text-secondary" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Review title"
            className="w-full bg-white/30 placeholder-white text-white px-4 py-2 rounded-md outline-none border border-white/40 focus:border-yellow-300 transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write your comment..."
            rows={4}
            className="w-full bg-white/30 placeholder-white text-white px-4 py-2 rounded-md outline-none border border-white/40 focus:border-yellow-300 transition resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full mt-2 bg-secondary text-white py-2 rounded-md font-semibold text-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-200"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
