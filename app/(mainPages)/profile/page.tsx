"use client";
import React from "react";

const userData={
  name: "Ameer Badran",
  email: "ameerbadran@gmail.com",
  phone: "059 731 9421"
}

const MyProfile: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white shadow-sm border border-secondary/10 p-6">
          <p className="text-sm text-gray-500">Orders</p>
          <p className="text-2xl font-semibold text-secondary">12</p>
        </div>
        <div className="bg-white shadow-sm border border-secondary/10 p-6">
          <p className="text-sm text-gray-500">Active Courses</p>
          <p className="text-2xl font-semibold text-secondary">03</p>
        </div>
        <div className="bg-white shadow-sm border border-secondary/10 p-6">
          <p className="text-sm text-gray-500">Completed Courses</p>
          <p className="text-2xl font-semibold text-secondary">13</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white shadow-sm border border-secondary/10 p-6">
        <h2 className="text-lg font-medium text-secondary mb-5">My Profile</h2>
        <hr className="mb-8 text-black/30" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-gray-700">User Name</p>
            <p className="text-gray-700">{userData.name}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-gray-700">{userData.email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Phone Number</p>
            <p className="text-gray-700">{userData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
