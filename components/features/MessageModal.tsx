"use client";

import React, { useState } from "react";
import { format } from "date-fns";

const MessageModal = ({
  message,
  onClose,
}: {
  message: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    isRead: boolean;
  };
  onClose: () => void;
}) => {
  const [isRead, setIsRead] = useState(message.isRead);

  const handleMarkAsRead = () => {
    setIsRead(true);
    // يمكن استدعاء API هنا لتحديث الحالة على السيرفر
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-3">{message.title}</h2>
        <p className="text-gray-600 mb-4 whitespace-pre-wrap">
          {message.content}
        </p>
        <p className="text-sm text-gray-400 mb-4">
          Sent at: {format(new Date(message.createdAt), "yyyy-MM-dd HH:mm")}
        </p>
        {!isRead && (
          <button
            onClick={handleMarkAsRead}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Mark as Read
          </button>
        )}
        {isRead && (
          <span className="text-green-600 font-semibold">Marked as read ✔</span>
        )}
      </div>
    </div>
  );
};

export default MessageModal;
