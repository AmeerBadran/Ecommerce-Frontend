import ProductCartSection from "@/components/features/ProductCartSection";
import UpperPageTitle from "@/components/ui/UpperPageTitle";
import React from "react";
import upperImage from "@/public/images/cartBackground.jpg";

const ShoppingCart= () => {
  

  return (
    <div>
      <UpperPageTitle
        image={upperImage}
        title="Shopping Cart"
        subtitle=""
        link="Cart"
        textColor="text-white"
      />
      <ProductCartSection />
    </div>
  );
};

export default ShoppingCart;
