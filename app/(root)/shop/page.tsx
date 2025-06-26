import React from "react";
import UpperPageTitle from "@/components/ui/UpperPageTitle";
import upperImage from "@/public/images/productsbackground.jpg";
import ShopBody from "@/components/pages/shop/ShopBody";

const Shop = () => {
  return (
    <div>
      <UpperPageTitle
        image={upperImage}
        title="Shop"
        subtitle=""
        link="Shop"
        textColor="text-white"
      />
      <ShopBody />
    </div>
  );
};

export default Shop;
