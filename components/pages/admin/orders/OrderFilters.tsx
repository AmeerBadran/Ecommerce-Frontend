"use client";
import React from "react";

interface Props {
  searchId: string;
  statusFilter: string;
  dateFrom: string;
  dateTo: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onDateFromChange: (value: string) => void;
  onDateToChange: (value: string) => void;
}

const OrderFilters = ({
  searchId,
  statusFilter,
  dateFrom,
  dateTo,
  onSearchChange,
  onStatusChange,
  onDateFromChange,
  onDateToChange,
}: Props) => {
  return (
    <div className="grid 2md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 mb-10 bg-white p-5 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search by Order ID..."
        value={searchId}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="delivered">Delivered</option>
        <option value="canceled">Canceled</option>
      </select>
      <input
        type="date"
        value={dateFrom}
        onChange={(e) => onDateFromChange(e.target.value)}
        className="p-3 border w-full border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      <input
        type="date"
        value={dateTo}
        onChange={(e) => onDateToChange(e.target.value)}
        className="p-3 border w-full border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      />
    </div>
  );
};

export default OrderFilters;
