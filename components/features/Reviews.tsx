import Image, { StaticImageData } from "next/image";
import { FcCheckmark } from "react-icons/fc";
import RenderStars from "../ui/RenderStars";
import noUserImage from "../../public/images/noUser.png";
import ReviewModal from "../ui/ReviewModal";
import { useState } from "react";
type Review = {
  id: number;
  name: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  image: StaticImageData;
};

type ReviewProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: ReviewProps) {
  const [showModal, setShowModal] = useState(false);

  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const ratingCounts = [5, 4, 3, 2, 1].map(
    (star) => reviews.filter((r) => r.rating === star).length
  );

  return (
    <div className="space-y-8 py-10">
      <div className="flex justify-center items-center mb-10">
        <h2 className="text-xl font-semibold">Customer Reviews</h2>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-6 border-b pb-14">
        <div className="text-center">
          <div className="flex items-center justify-center mt-2 space-x-2">
            <RenderStars ratingNumber={averageRating} size="medium" />
            <p className="text-gray-700 text-sm">
              {averageRating.toFixed(2)} out of 5
            </p>
          </div>
          <p className="text-gray-500 flex justify-center items-center gap-2 text-sm">
            Based on {reviews.length} reviews <FcCheckmark />
          </p>
        </div>

        <div className="w-full mx-auto">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star, idx) => {
              const count = ratingCounts[idx];
              return (
                <div key={star} className="flex items-center space-x-2">
                  <RenderStars ratingNumber={star} />
                  <div className="flex-1 bg-gray-100 h-[13px] overflow-hidden ">
                    {count > 0 && (
                      <div
                        className="bg-black h-full"
                        style={{
                          width: `${(count / reviews.length) * 100}%`,
                        }}
                      />
                    )}
                  </div>
                  <span className="text-sm text-gray-600">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center w-full mt-4 md:mt-0">
          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white w-2/3 px-6 py-3 hover:bg-secondary-100 transition duration-300"
          >
            Write a review
          </button>
        </div>
      </div>

      {/* قائمة المراجعات */}
      <div className=" pt-6 mt-3 space-y-8 max-w-[1200px] mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center justify-between text-secondary text-sm">
              <RenderStars ratingNumber={review.rating} size="small" />
              <p className="text-xs text-gray-400 mt-1">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt={`${review.name} Image`}
                src={review?.image ? review.image : noUserImage}
                width={50}
                height={50}
              />
              <p className="font-medium">{review.name}</p>
            </div>
            <p className="font-semibold">{review.title}</p>
            <p className="text-sm text-gray-600 max-w-[600px]">
              {review.comment}
            </p>
          </div>
        ))}
        <div className="text-center w-full mt-16">
          <button className="bg-black text-white px-19 py-3 text-lg font-medium hover:bg-secondary-100 transition duration-300">
            Load More
          </button>
        </div>
      </div>
      <ReviewModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
