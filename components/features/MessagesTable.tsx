"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MessageModal from "./MessageModal";

const messages = [
  {
    id: "msg1",
    title: "Request for refund",
    content:
      "Hello, I would like to request a refund for my recent purchase...",
    createdAt: "2025-07-02T12:15:00Z",
    isRead: false,
  },
  {
    id: "msg2",
    title: "Issue with login",
    content: "I’m unable to log into my account after resetting the password.",
    createdAt: "2025-07-01T09:30:00Z",
    isRead: true,
  },
  {
    id: "msg3",
    title: "Suggestion",
    content: "I think you should add dark mode to your dashboard.",
    createdAt: "2025-07-02T08:10:00Z",
    isRead: false,
  },
  {
    id: "msg4",
    title: "Request for refund",
    content:
      "Hello, I would like to request a refund for my recent purchase...",
    createdAt: "2025-07-02T12:15:00Z",
    isRead: false,
  },
  {
    id: "msg5",
    title: "Issue with login",
    content: "I’m unable to log into my account after resetting the password.",
    createdAt: "2025-07-01T09:30:00Z",
    isRead: true,
  },
  {
    id: "msg6",
    title: "Suggestion",
    content: "I think you should add dark mode to your dashboard.",
    createdAt: "2025-07-02T08:10:00Z",
    isRead: false,
  },
];



type Message = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isRead: boolean;
};

const MessagesTable = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredMessages = messages.filter((msg) => {
    const matchDate = dateFilter
      ? msg.createdAt.slice(0, 10) === dateFilter
      : true;

    const matchStatus =
      statusFilter === ""
        ? true
        : statusFilter === "read"
        ? msg.isRead
        : !msg.isRead;

    return matchDate && matchStatus;
  });

  return (
    <>
      <motion.section
        className="bg-white rounded-xl p-6 shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">User Messages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="p-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sec-color-100"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sec-color-100"
            >
              <option value="">All</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="text-left py-3 px-2">Title</th>
                <th className="text-left py-3 px-2">Message</th>
                <th className="text-left py-3 px-2">Date</th>
                <th className="text-left py-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((msg) => (
                <tr
                  key={msg.id}
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedMessage(msg)}
                >
                  <td className="py-3 px-2 font-medium text-gray-800">
                    {msg.title}
                  </td>
                  <td className="py-3 px-2 text-gray-700">
                    {msg.content.length > 50
                      ? msg.content.slice(0, 50) + "..."
                      : msg.content}
                  </td>
                  <td className="py-3 px-2 text-gray-500">
                    {new Date(msg.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>
                  <td className="py-3 px-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        msg.isRead
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {msg.isRead ? "Read" : "Unread"}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredMessages.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-400">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.section>

      {selectedMessage && (
        <MessageModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </>
  );
};

export default MessagesTable;
