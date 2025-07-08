"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import BlogModal from "@/components/pages/admin/blog/BlogModal";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "Understanding React Performance",
    content:
      "React performance can be improved using memoization, lazy loading, and optimizing component rendering...",
    author: "John Doe",
    createdAt: "2025-07-06",
    image:
      "https://res.cloudinary.com/df1oiiaat/image/upload/v1751924536/1_540x_pknxdf.webp",
  },
  {
    id: "2",
    title: "JavaScript ES2025 Features",
    content:
      "The ES2025 version introduces several new features including pattern matching...",
    author: "Jane Smith",
    createdAt: "2025-07-05",
    image:
      "https://res.cloudinary.com/df1oiiaat/image/upload/v1751924536/3_540x_pz0jdi.webp",
  },
];

// Define the BlogFormValues type for form data
type BlogFormValues = {
  id?: string;
  title: string;
  content: string;
  previewImage: string;
  image: File | string | null;
  createdAt: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogPosts);
  const [selected, setSelected] = useState<typeof blogPosts[0] | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuId, setMenuId] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingPost, setEditingPost] = useState<BlogFormValues | undefined>();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const deletePost = (id: string) => {
    setBlogs((prev) => prev.filter((post) => post.id !== id));
  };

  const openAddModal = () => {
    setModalMode("add");
    setEditingPost(undefined);
    setIsModalOpen(true);
  };

  const openEditModal = (post: (typeof blogPosts)[0]) => {
    setModalMode("edit");
    setEditingPost({
      id: post.id,
      title: post.title,
      content: post.content,
      previewImage: post.image,
      image: null,
      createdAt: post.createdAt,
    });
    setIsModalOpen(true);
  };

  const handleModalSubmit = (data: BlogFormValues) => {
    if (modalMode === "add") {
      const newPost = {
        id: Date.now().toString(),
        title: data.title,
        content: data.content,
        author: "Admin",
        createdAt: data.createdAt,
        image: data.previewImage,
      };
      setBlogs((prev) => [newPost, ...prev]);
    } else if (modalMode === "edit" && editingPost) {
      setBlogs((prev) =>
        prev.map((post) =>
          post.id === editingPost?.id
            ? { ...post, ...data, image: data.previewImage }
            : post
        )
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <DashboardHeader title="Blog Posts" />
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-[#1a252f] transition-all duration-300"
        >
          + Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <motion.div
            key={post.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col relative"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={160}
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-all duration-300"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {post.content}
              </p>
              <div className="text-xs text-gray-500 mt-auto">
                <p>Author: {post.author}</p>
                <p>Date: {post.createdAt}</p>
              </div>
            </div>

            <button
              onClick={(e) => handleMenuOpen(e, post.id)}
              className="absolute bottom-3 right-3 z-20 bg-secondary/90 rounded-md p-1 hover:bg-gray-700 transition-colors"
            >
              <FiMoreVertical className="text-white w-5 h-5" />
            </button>

            <Menu
              anchorEl={anchorEl}
              open={menuId === post.id}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  setSelected(post);
                  handleMenuClose();
                }}
              >
                <FaInfoCircle className="mr-2 text-secondary" /> View Details
              </MenuItem>

              <MenuItem
                onClick={() => {
                  openEditModal(post);
                  handleMenuClose();
                }}
              >
                <FaEdit className="mr-2 text-blue-600" /> Edit
              </MenuItem>

              <MenuItem
                onClick={() => {
                  deletePost(post.id);
                  handleMenuClose();
                }}
                className="text-red-600"
              >
                <FaTrash className="mr-2 text-red-600" /> Delete
              </MenuItem>
            </Menu>
          </motion.div>
        ))}
      </div>

      {/* View Details Dialog */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
      >
        {selected && (
          <>
            <DialogTitle
              fontSize={24}
              fontWeight={700}
              style={{ color: "#2c3e50" }}
            >
              {selected.title}
            </DialogTitle>
            <DialogContent>
              <Image
                src={selected.image}
                alt={selected.title}
                width={800}
                height={400}
                className="w-full object-cover rounded-xl mb-4"
              />
              <p className="text-gray-700 mb-4">{selected.content}</p>
              <p className="text-sm text-gray-500">
                Author: {selected.author} | Date: {selected.createdAt}
              </p>
            </DialogContent>
          </>
        )}
      </Dialog>

      <BlogModal
        open={isModalOpen}
        mode={modalMode}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={editingPost ? { ...editingPost, image: editingPost.image instanceof File ? editingPost.image : null } : undefined}
      />
    </motion.div>
  );
};

export default Blogs;
