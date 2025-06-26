import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductListItem from "./ProductListItem";

interface Product {
  id: string;
  title: string;
  price: number;
  offer: number;
  image: string;
}

interface CollectionCardProps {
  id: string;
  title: string;
  image: string;
  products: Product[];
  price: number;
}

const CollectionCard = ({
  id,
  title,
  image,
  products,
  price,
}: CollectionCardProps) => {
  return (
    <div className="flex flex-col w-fit overflow-hidden rounded-md bg-white transition-transform border mx-auto border-secondary p-2">
      <div className="relative min-w-[250px] aspect-[5/4] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>

      <div className="p-3 flex flex-col justify-between flex-1">
        <div className="">
          <h3 className="mb-2 text-xl font-medium text-gray-700">{title}</h3>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">
              Featured Products:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {products.slice(0, 4).map((product) => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  size="small"
                />
              ))}
            </div>
          </div>
        </div>
        <Link
          href={`/collections/${id}`}
          className=" relative flex border mt-2 justify-self-end border-black w-fit px-3 py-3 text-sm group"
        >
          <div className="w-0 absolute -top-1 -left-1 group-hover:w-full transition-all duration-500 h-full bg-secondary">
            <div className="w-full group-hover:border-t group-hover:border-l border-white border-0 absolute top-[3px] z-10 left-[3px] h-full "></div>
          </div>
          <p className="z-10">
            By now /{" "}
            <span className="text-secondary-100 group-hover:text-white transition-all delay-200 ease-out duration-300">
              NIS {price.toFixed(2)}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
