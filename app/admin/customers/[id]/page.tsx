"use client";

import React from "react";

import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import UserInfo from "@/components/pages/admin/customerDetails/UserInfo";
import UserOrders from "@/components/pages/admin/customerDetails/UserOrders";
import MessagesTable from "@/components/features/MessagesTable";
import ProductReviewsTable from "@/components/features/ProductReviewsTable";

const user = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  profile_picture: "",
  CustomerMobiles: "123456789",
  city: "Cairo",
  birthdate: "1990-01-01",
};

const CustomerById = () => {
  return (
    <div className="space-y-8">
      <DashboardHeader title="Customer Details" />
      <UserInfo user={user} />
      <UserOrders />
      <MessagesTable/>
      <ProductReviewsTable/>
    </div>
  );
};

export default CustomerById;
