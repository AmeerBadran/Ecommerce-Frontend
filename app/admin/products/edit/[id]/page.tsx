import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import AddProductForm from "@/components/pages/admin/products/AddProductForm";
import React from "react";

const EditProduct = () => {
  return (
    <div>
      <DashboardHeader title="Edit Product" />
      <AddProductForm
        mode="edit"
        initialData={{
          name: "Test Product",
          description: "Some description",
          price: 100,
          discount: 10,
          availableQty: 5,
          weight: "1kg",
          material: "Cotton",
          brand: "BrandX",
          categories: ["cat1", "cat2"],
          colors: [{ name: "Red", value: "#FF0000" }],
          mainImage:
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751986/product-14-13_788x101355_ibtjk6.webp",
          galleryImages: [
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751988/product-14-13_788x101366_ef2dvd.webp",
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751985/product-14-13_788x101322_mhqdv7.webp",
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751984/product-14-13_788x101311_tp4j0p.webp",
          ],
        }}
      />
    </div>
  );
};

export default EditProduct;
