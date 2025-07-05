"use client";
import CustomerCard from "@/components/ui/CustomerCard";
import { customers } from "@/constants/customersData";
import React, { useState } from "react";
import userImage from "@/public/images/noUser.png";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import { motion } from "framer-motion";

const Customers = () => {
  const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    search: "",
    is_verified: "",
    country: "",
    city: "",
    page: 1,
    limit: 9,
  });

  const toggleDropdown = (id: string) => {
    setDropdownOpenId((prev) => (prev === id ? null : id));
  };

  const banUserOrUnban = (id: string) => {
    console.log("Ban/Unban user with ID:", id);
  };

  const deleteUserById = (id: string) => {
    console.log("Delete user with ID:", id);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, page: 1 }));
    console.log(filters)
  };


  return (
    <div className="space-y-8">
      <DashboardHeader title="Customers" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-2xl shadow-lg"
      >
        <input
          name="search"
          placeholder="Search by name or email"
          className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          onChange={handleFilterChange}
        />
        <input
          name="country"
          placeholder="Country"
          className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          onChange={handleFilterChange}
        />
        <input
          name="city"
          placeholder="City"
          className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          onChange={handleFilterChange}
        />
        <select
          name="is_verified"
          className="p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          onChange={handleFilterChange}
        >
          <option value="">Verification</option>
          <option value="true">Authenticated</option>
          <option value="false">UnAuthenticated</option>
        </select>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {customers.map((cust) => (
          <CustomerCard
            key={cust.id}
            cust={cust}
            userImage={userImage}
            dropdownOpenId={dropdownOpenId}
            toggleDropdown={toggleDropdown}
            banUserOrUnban={banUserOrUnban}
            deleteUserById={deleteUserById}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
