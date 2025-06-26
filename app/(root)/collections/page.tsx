import React from "react";
import collectionImage from "../../../public/images/collection.jpg"
import UpperPageTitle from "@/components/ui/UpperPageTitle";
import CollectionsGrid from "@/components/pages/collections/CollectionsGrid";
const collections = () => {
  return (
    <div>
      <UpperPageTitle
        image={collectionImage}
        title="Collections"
        subtitle=""
        link="Collections"
        textColor="text-white"
      />
      <CollectionsGrid/>
    </div>
  );
};

export default collections;
