import React from "react";

interface OrderFiltersProps {
  searchId: string;
  setSearchId: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  dateFilter: string;
  setDateFilter: (val: string) => void;
}

const OrderFilters: React.FC<OrderFiltersProps> = ({
  searchId,
  setSearchId,
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
}) => {
  return (
    <div className="flex flex-col 2md:flex-row 2md:items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by Order ID"
        className="w-full sm:w-auto flex-1 max-w-64 2md:max-w-full px-4 py-2 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />

      <select
        className="w-full sm:w-auto flex-1 max-w-64 2md:max-w-full px-4 py-2 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Statuses</option>
        <option value="Delivered">Delivered</option>
        <option value="Processing">Processing</option>
      </select>

      <input
        type="date"
        className="w-full sm:w-auto flex-1 max-w-64 2md:max-w-full px-4 py-2 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      />
    </div>
  );
};

export default OrderFilters;
