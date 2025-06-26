import CollectionsLayout from "@/components/features/CollectionsLayout";
import TitleWithDescription from "@/components/ui/TitleWithDescription";
import React from "react";

const CollectionsSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto mb-20">
      <TitleWithDescription
        title="Our Collections"
        description="Choose one of the collections and get the best value for the price."
      />
      <CollectionsLayout />
    </section>
  );
};

export default CollectionsSection;
