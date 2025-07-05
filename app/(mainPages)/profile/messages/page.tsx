"use client";
import MessagesHeader from "@/components/pages/profile/messages/MessagesHeader";
import MessageCard from "@/components/ui/MessageCard";
import React, { useState, useMemo } from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  title: string;
  content: string;
  status: "read" | "unread";
}

const sampleMessages: Message[] = [
  {
    id: 1,
    name: "Ahmed Khaled",
    email: "ahmed@gmail.com",
    phone: "0599000000",
    title: "طلب استفسار",
    content: "أرغب في معرفة حالة الطلب الأخير الذي قمت به.",
    status: "unread",
  },
  {
    id: 2,
    name: "Mona Salem",
    email: "mona@gmail.com",
    phone: "0599111111",
    title: "اقتراح تطوير",
    content: "أقترح إضافة ميزة لتتبع الطلبات بشكل مباشر من الصفحة.",
    status: "read",
  },
  {
    id: 3,
    name: "Tariq Hasan",
    email: "tariq@gmail.com",
    phone: "0599222222",
    title: "مشكلة تسجيل الدخول",
    content: "لا أستطيع الدخول إلى حسابي منذ يومين، هل من مساعدة؟",
    status: "unread",
  },
];

const Messages = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMessages = useMemo(() => {
    if (statusFilter === "all") return sampleMessages;
    return sampleMessages.filter((msg) => msg.status === statusFilter);
  }, [statusFilter]);

  return (
    <div className="bg-white p-6 border border-secondary/30 shadow-md">
      <MessagesHeader
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {filteredMessages.length > 0 ? (
        <div className="grid gap-5">
          {filteredMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No messages found.</p>
      )}
    </div>
  );
};

export default Messages;
