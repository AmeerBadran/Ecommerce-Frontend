import RenderStars from "@/components/ui/RenderStars";
import React, { useState } from "react";
import { FaCartPlus, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  colors: { value: string; name: string }[];
  features: string[];
  inStock: number;
}

const ProductInfo = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const addOneQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusOneQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="col-span-1 md:col-span-2 mt-5 ">
      <div className="divide-y space-y-5 divide-gray-300">
        <div className="flex flex-col gap-3 pb-5 ">
          <h1 className="text-2xl font-medium ">{product.name}</h1>
          <div className="flex items-center gap-2 my-2 space-x-1 text-xs">
            <RenderStars ratingNumber={product.rating} size="medium" />
            <span className="text-gray-500">|</span>

            <span className="text-gray-500">{product.reviews} reviews</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-500">Add your review</span>
          </div>
          <div className="flex gap-5">
            <p className="text-2xl">NIS {product.price}</p>
            <del className="text-xl font-light text-gray-400">NIS {product.price}</del>
          </div>
        </div>
        <div className="pb-5">
          <p className="text-sm leading-relaxed text-gray-500">
            {product.description}
          </p>
          <ul className="mt-4 space-y-0.5">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className='text-sm text-gray-500 relative ps-4 before:content-["-"] before:absolute before:left-0 before:text-gray-400'
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-2">
          <h2>Colors</h2>
          <div className="flex gap-2 mt-3">
            {product.colors.map((color, index) => (
              <div
                key={index}
                title={color.name}
                className="w-8 h-8 rounded-full border border-gray-500"
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-end mr-3 mb-3">
          <button
            type="button"
            className="hover:text-secondary-100 text-sm flex justify-center items-center gap-1"
          >
            <FaRegHeart className="w-4 h-4" />
            Add To Wishlist
          </button>
        </div>
        <div className=" flex gap-2">
          <div className="border-2 border-gray-300 w-fit flex justify-between items-center h-12">
            <button
              type="button"
              className="flex justify-center items-center px-4 h-full hover:text-secondary"
              onClick={minusOneQuantity}
            >
              <FaMinus />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                const val = Math.max(1, Number(e.target.value));
                setQuantity(val);
              }}
              min={1}
              className="m-0 h-full w-[70px] px-2 text-center text-xl rounded-none appearance-none focus:outline-none focus:ring-0 focus:border-0
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              type="button"
              className="flex justify-center items-center h-full px-4 hover:text-secondary"
              onClick={addOneQuantity}
            >
              <FaPlus />
            </button>
          </div>
          <div className="w-full">
            <button className="w-full flex justify-center items-center gap-3 h-full bg-black text-[15px] hover:bg-secondary-100 text-white transition duration-300">
              <FaCartPlus className="w-5 h-5" />
              Add To Cart
            </button>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-700 space-y-2 pb-7">
          <p>
            In Stock :{" "}
            <span className="text-black font-medium">{product.inStock}</span>
          </p>
          <p>
            Brand : <span className="text-black font-medium">Burrow</span>
          </p>
          <p>
            Category : <span className="text-black font-medium">lighting</span>
          </p>
          <p>
            Added At :{" "}
            <span className="text-black font-medium">29 June,2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
