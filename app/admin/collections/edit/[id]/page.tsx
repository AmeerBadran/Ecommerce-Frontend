import CollectionFormPage from '@/components/pages/admin/collections/CollectionFormPage';
import DashboardHeader from '@/components/pages/admin/dashboard/DashboardHeader';
import React from 'react'

const EditCollection = () => {
  return (
    <div>
      <DashboardHeader title="Edit Collection" />
      <CollectionFormPage mode="edit" />
    </div>
  );
}

export default EditCollection;
