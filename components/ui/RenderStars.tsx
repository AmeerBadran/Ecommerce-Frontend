import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

interface RenderStarsProps {
  ratingNumber: number;
  size?: "small" | "big" | "medium";
}
const RenderStars = ({ ratingNumber, size = "small" }: RenderStarsProps) => {
  if (isNaN(ratingNumber) || ratingNumber < 0 || ratingNumber > 5) {
    return null;
  }

  const fullStars: number = Math.floor(ratingNumber);
  const hasHalfStar: boolean = ratingNumber % 1 !== 0;
  const emptyStars: number = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const iconSizeClass: string =
    size === "big" ? "text-2xl" : size === "medium" ? "text-xl" : "";

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar
          key={`full-${i}`}
          className={`text-amber-500 ${iconSizeClass}`}
        />
      ))}
      {hasHalfStar && (
        <FaRegStarHalfStroke className={`text-amber-500 ${iconSizeClass}`} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          className={`text-amber-500 ${iconSizeClass}`}
        />
      ))}
    </div>
  );
};

export default RenderStars;
