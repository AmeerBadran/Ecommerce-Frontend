// components/settings/SettingsTabs.tsx
import React from "react";

const tabs = [
  { id: "account", label: "Account Info" },
  { id: "password", label: "Change Password" },
  { id: "delete", label: "Delete Account" },
];

const SettingsTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (id: string) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start border-b pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab.id
              ? "bg-secondary text-white hover:bg-secondary-100"
              : "text-gray-600 hover:text-secondary"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;
