"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaUserShield,
  FaEdit,
  FaKey,
} from "react-icons/fa";
import AddUserForm from "@/components/pages/admin/settings/AddUserForm";
import AddAdminForm from "@/components/pages/admin/settings/AddAdminForm";
import EditProfileForm from "@/components/pages/admin/settings/EditProfileForm";
import ChangePasswordForm from "@/components/pages/admin/settings/ChangePasswordForm";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";

const tabs = [
  { id: "addUser", label: "Add User", icon: FaUserPlus },
  { id: "addAdmin", label: "Add Admin/Staff", icon: FaUserShield },
  { id: "editProfile", label: "Edit Profile", icon: FaEdit },
  { id: "changePassword", label: "Change Password", icon: FaKey },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("addUser");

  const renderTabContent = () => {
    switch (activeTab) {
      case "addUser":
        return <AddUserForm />;
      case "addAdmin":
        return <AddAdminForm />;
      case "editProfile":
        return <EditProfileForm />;
      case "changePassword":
        return <ChangePasswordForm />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
        <DashboardHeader title="Settings" />
      <div className="flex gap-4 mb-6 flex-wrap">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              activeTab === id
                ? "bg-secondary text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } transition duration-300 shadow`}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-md"
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
};

export default Settings;
