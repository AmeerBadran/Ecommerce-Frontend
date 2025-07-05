import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import AddProductForm from "@/components/pages/admin/products/AddProductForm";
import React from "react";

const AddProduct = () => {
  return (
    <div>
      <DashboardHeader title="Add Product" />
      <AddProductForm mode="add" />
    </div>
  );
};

export default AddProduct;
