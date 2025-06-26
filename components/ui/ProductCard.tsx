"use client";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  colors: Array<string>;
  offer: number;
  quantity: number;
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  colors,
  offer,
  quantity,
}: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`${title} added to cart`);
  };

  const handleAddToWishlist = () => {
    console.log(`${title} added to wishlist`);
  };

  return (
    <div className="group relative  max-w-[350px] justify-self-center w-full mt-5 p-1">
      {offer > 0 && (
        <div className="absolute text-sm top-4 right-2 z-10 rotate-90 offer-style bg-secondary min-w-16 text-white backdrop-blur-md px-2 py-1 flex items-center gap-1">
          <span>{Math.round(offer * 100)} %</span>
        </div>
      )}
      {quantity <= 0 && (
        <div className="absolute top-7 -right-3 z-10 rotate-90 offer-style bg-[#FFC107] w-[105px] text-black backdrop-blur-md px-2 py-2 flex items-center gap-1">
          <span className="text-sm font-[200]">Out of Stock</span>
        </div>
      )}
      <div className="relative flex aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 aspect-video transition-all duration-900"
        />
        <Link
          href={`/shop/product/${id}`}
          className=" absolute w-full h-full top-0 left-0"
        ></Link>
        <div className="absolute bottom-2 flex items-center justify-center gap-2 w-full">
          {colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center"
            >
              <span
                style={{ backgroundColor: color }}
                className="block w-4 h-4 rounded-full"
              ></span>
            </div>
          ))}

          {colors.length > 4 && (
            <div className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-xs text-gray-700">
              +{colors.length - 4}
            </div>
          )}
        </div>
        <div className="absolute group-hover:right-2 bottom-0 -right-20 py-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={handleAddToCart}
            className="btn-rotate"
            title="Add to Cart"
          >
            <CiShoppingCart />
          </button>
          <button
            onClick={handleAddToWishlist}
            className="btn-rotate"
            title="Add to Wishlist"
          >
            <CiHeart />
          </button>
          <Link
            href={`/shop/product/${id}`}
            className="btn-rotate"
            title="Quick View"
          >
            <CiSearch />
          </Link>
        </div>
      </div>

      <div className="p-2">
        <Link
          href={`/shop/product/${id}`}
          className="text-gray-500 text-sm hover:text-secondary transition-all duration-500"
        >
          {title}
        </Link>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex text-sm items-center gap-2">
            <span>NIS {(price * (1 - offer)).toFixed(2)}</span>
            {offer > 0 && quantity > 1 && (
              <del className="text-gray-400">NIS {price}</del>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
