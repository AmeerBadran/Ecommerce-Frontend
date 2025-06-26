import React from "react";
import { collectionsData } from "@/constants/collectionsData";
import CollectionCard from "../ui/CollectionCard";

const CollectionsLayout = () => {
  const { collections } = collectionsData;

  return (
    <section className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-3 md:gap-y-16 gap-y-6 gap-x-6">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          id={collection.id}
          title={collection.title}
          image={collection.image}
          products={collection.products}
          price={collection.price}
        />
      ))}
    </section>
  );
};

export default CollectionsLayout;
