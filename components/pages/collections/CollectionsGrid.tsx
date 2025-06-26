import React from "react";
import FullCollectionCard from "@/components/features/FullCollectionCard";
import { collectionsData } from "@/constants/collectionsData";

interface ProductType {
  id: string;
  title: string;
  image: string;
  price: number;
  colors: Array<string>;
  offer: number;
  quantity: number;
}

interface CollectionType {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  products: ProductType[];
}

const CollectionsGrid = () => {
  return (
    <div className="grid grid-cols-1 max-w-[1400px] mx-auto px-5 my-20 gap-10">
      {collectionsData.collections.map((collection: CollectionType) => (
        <FullCollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionsGrid;
