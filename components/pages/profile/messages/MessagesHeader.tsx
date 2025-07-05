import React from "react";

interface Props {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

const MessagesHeader = ({ statusFilter, setStatusFilter }: Props) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 className="text-xl font-semibold text-secondary mb-5">
        User Messages
      </h2>
      <select
        className="w-full sm:w-auto px-4 py-2 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All Messages</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </div>
  );
};

export default MessagesHeader;
