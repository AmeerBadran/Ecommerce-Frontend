// components/ProductListItem.tsx
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  offer: number;
}

interface ProductListItemProps {
  product: Product;
  size: "small" | "big";
}

const ProductListItem: FC<ProductListItemProps> = ({ product, size }) => {
  return (
    <Link
      href={`/shop/${product.id}`}
      className={`flex items-center space-x-2 ${
        size === "big" ? "p-0" : "p-2"
      }`}
    >
      <div className={`relative ${size === "big" ? "h-24 w-20" : "h-12 w-12"}`}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div>
        <p className="text-sm text-gray-800">{product.title}</p>
        <div className="flex text-sm items-center gap-2">
          <span>ILS {(product.price * (1 - product.offer)).toFixed(2)}</span>
          {product.offer > 0 && size === "big" && (
            <del className="text-gray-400">ILS {product.price}</del>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
