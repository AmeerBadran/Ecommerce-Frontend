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
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1746701836/profilePictures/1746701833810-998345.jpg",
          galleryImages: [
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1746701836/profilePictures/1746701833810-998345.jpg",
            "https://res.cloudinary.com/df1oiiaat/image/upload/v1746701836/profilePictures/1746701833810-998345.jpg",
          ],
        }}
      />
    </div>
  );
};

export default EditProduct;
