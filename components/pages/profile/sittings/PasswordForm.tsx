// components/settings/PasswordForm.tsx
import React from "react";

const PasswordForm = () => {
  return (
    <form className="space-y-5 max-w-md">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="current-password"
          className="text-sm font-medium text-gray-700"
        >
          Current Password
        </label>
        <input
          id="current-password"
          type="password"
          className="input-login-style"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="new-password"
          className="text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          id="new-password"
          type="password"
          className="input-login-style"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="confirm-password"
          className="text-sm font-medium text-gray-700"
        >
          Confirm New Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="input-login-style"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-secondary text-white hover:opacity-90"
      >
        Update Password
      </button>
    </form>
  );
};

export default PasswordForm;
