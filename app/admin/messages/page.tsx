"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { MdMarkEmailRead, MdMarkEmailUnread } from "react-icons/md";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";

const dummyMessages = [
  {
    id: 1,
    name: "Sarah Ali",
    email: "sarah@example.com",
    phone: "0599999999",
    title: "Problem with order",
    message: "I didn’t receive my order yet. Please help.",
    isRead: false,
  },
  {
    id: 2,
    name: "Mohammed Nasser",
    email: "mo.nasser@example.com",
    phone: "0566666666",
    title: "Website feedback",
    message: "Your website is amazing, keep it up!",
    isRead: true,
  },
  {
    id: 3,
    name: "Lina Younis",
    email: "lina.y@example.com",
    phone: "0588888888",
    title: "Account issue",
    message: "I can’t reset my password.",
    isRead: false,
  },
];

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const toggleReadStatus = (id: number) => {
    const index = dummyMessages.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      dummyMessages[index].isRead = !dummyMessages[index].isRead;
    }
  };

  const filteredMessages = dummyMessages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === ""
        ? true
        : filterStatus === "read"
        ? msg.isRead
        : !msg.isRead;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Title */}
      <DashboardHeader title="Customers Messages" />

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-4 justify-between bg-white p-4 rounded-xl shadow-md"
      >
        {/* Search Input */}
        <div className="flex items-center w-full md:w-1/2 relative">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sec-color-100"
          />
        </div>

        {/* Read/Unread Filter */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sec-color-100"
        >
          <option value="">All Messages</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
      </motion.div>

      {/* Messages Section */}
      <div className="grid grid-cols-1 2md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredMessages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl p-5 space-y-3 transition relative ${
              msg.isRead ? "opacity-70" : "opacity-100"
            }`}
          >
            <div
              className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-medium text-white ${
                msg.isRead ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {msg.isRead ? "Read" : "Unread"}
            </div>

            <h2 className="text-lg font-semibold text-gray-800">{msg.name}</h2>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> {msg.email}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Phone:</strong> {msg.phone}
            </p>
            <p className="text-md font-semibold text-gray-700">{msg.title}</p>
            <p className="text-sm text-gray-600">{msg.message}</p>

            {/* Admin Controls */}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => toggleReadStatus(msg.id)}
                className={`text-xs px-3 py-1 rounded transition flex items-center gap-1 ${
                  msg.isRead
                    ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {msg.isRead ? (
                  <>
                    <MdMarkEmailUnread />
                    Mark as Unread
                  </>
                ) : (
                  <>
                    <MdMarkEmailRead />
                    Mark as Read
                  </>
                )}
              </button>
              <button className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition">
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
