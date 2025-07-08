import CollectionFormPage from "@/components/pages/admin/collections/CollectionFormPage";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import React from "react";

const AddCollection = () => {
  return (
    <div>
      <DashboardHeader title="Add Collection" />
      <CollectionFormPage mode="add" />
    </div>
  );
};

export default AddCollection;
