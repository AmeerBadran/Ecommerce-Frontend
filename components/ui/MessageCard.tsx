import React from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  title: string;
  content: string;
  status: "read" | "unread";
}

const MessageCard = ({ message }: { message: Message }) => {
  return (
    <div className="border border-gray-200 p-5 shadow-sm bg-white hover:shadow-md transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{message.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            message.status === "read"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {message.status === "read" ? "Read" : "Unread"}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-2">{message.content}</p>

      <div className="mt-4 border-t pt-3 text-sm text-gray-500 space-y-1">
        <p>
          <strong>Name:</strong> {message.name}
        </p>
        <p>
          <strong>Email:</strong> {message.email}
        </p>
        <p>
          <strong>Phone:</strong> {message.phone}
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
