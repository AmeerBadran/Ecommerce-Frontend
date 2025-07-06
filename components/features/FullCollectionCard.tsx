"use client";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import ProductCard from "../ui/ProductCard";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Collection {
  id: string;
  title: string;
  description?: string;
  image: string;
  price?: number;
  products: {
    id: string;
    title: string;
    image: string;
    price: number;
    colors: Array<string>;
    offer: number;
    quantity: number;
  }[];
}

const FullCollectionCard = ({ collection }: { collection: Collection }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(max-width: 624px)": {
        slides: { perView: 2 },
      },
    },
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between pb-2 border-b gap-2 border-gray-200">
        <h1 className="text-lg 2md:text-2xl font-medium">{collection.title}</h1>
        <div className="flex items-center gap-2">
          {collection.price && (
            <span className="text-gray-900">
              ILS {collection.price.toFixed(2)}
            </span>
          )}
        </div>
        <button className="bg-black w-fit hover:bg-black-100 text-white py-3 px-5 text-sm flex gap-2 items-center">
          <FaCartPlus />
          Add to Cart
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="aspect-square relative overflow-hidden lg:px-0 px-10">
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300 "
          />
        </div>
        <div className="lg:col-span-2">
          <p className="text-base text-gray-600">{collection.description}</p>
          <div className="mt-4 flex slider-container relative">
            <div
              className={`slider-buttons pointer-events-none absolute inset-0 z-10 ${
                collection.products.length <= 4 ? "lg:!hidden " : ""
              }`}
            >
              <button
                onClick={() => instanceRef.current?.prev()}
                className="slider-button left-button left-0"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="slider-button right-button right-[10px]"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            <div ref={sliderRef} className="keen-slider">
              {collection.products.map((product) => (
                <div className="keen-slider__slide" key={product.id}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCollectionCard;
