"use client";
import React, { useState } from "react";

const DeleteAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(false);
    console.log("Account deleted"); // يمكن استبداله بـ API call
  };

  return (
    <div className="max-w-lg">
      <h3 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h3>
      <p className="text-gray-600 mb-6">
        Deleting your account is irreversible. All your data will be lost.
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 bg-red-600 text-white hover:bg-red-700"
      >
        Delete My Account
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h4 className="text-lg font-semibold text-red-600 mb-3">
              Are you sure?
            </h4>
            <p className="text-sm text-gray-600 mb-5">
              This action cannot be undone. Do you really want to delete your
              account?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
