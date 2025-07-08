"use client";
import DeleteAccount from "@/components/pages/profile/sittings/DeleteAccount";
import PasswordForm from "@/components/pages/profile/sittings/PasswordForm";
import SettingsTabs from "@/components/pages/profile/sittings/SettingsTabs";
import UserInfoForm from "@/components/pages/profile/sittings/UserInfoForm";
import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="bg-white shadow-sm border border-secondary/30 p-4">
      <h2 className="text-xl font-semibold text-secondary mb-5">
        Account Settings
      </h2>

      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-8">
        {activeTab === "account" && <UserInfoForm />}
        {activeTab === "password" && <PasswordForm />}
        {activeTab === "delete" && <DeleteAccount />}
      </div>
    </div>
  );
};

export default Settings;
