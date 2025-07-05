"use client";

import React, { useState } from "react";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import catImage from "@/public/images/categories.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Pagination from "@/components/features/Pagination";

const dummyCategories = [
  {
    id: "1",
    name: "Shoes",
    description: "All kinds of footwear",
    image: "/images/categories.jpg",
  },
  {
    id: "2",
    name: "Watches",
    description: "Luxury and sports watches",
    image: "/images/categories.jpg",
  },
  {
    id: "3",
    name: "Shoes",
    description: "All kinds of footwear",
    image: "/images/categories.jpg",
  },
  {
    id: "4",
    name: "Watches",
    description: "Luxury and sports watches",
    image: "/images/categories.jpg",
  },
  {
    id: "5",
    name: "Shoes",
    description: "All kinds of footwear",
    image: "/images/categories.jpg",
  },
  {
    id: "6",
    name: "Watches",
    description: "Luxury and sports watches",
    image: "/images/categories.jpg",
  },
  {
    id: "7",
    name: "Shoes",
    description: "All kinds of footwear",
    image: "/images/categories.jpg",
  },
  {
    id: "8",
    name: "Watches",
    description: "Luxury and sports watches",
    image: "/images/categories.jpg",
  },
];

type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const Categories = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [limit, setLimit] = useState<number>(12);
  const [page, setPage] = useState<number>(4);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, setTotal] = useState<number>(39);
  const [categories, setCategories] = useState<Category[]>(dummyCategories);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const handleDelete = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const handleSave = (category: Category) => {
    if (editingCategory) {
      setCategories(
        categories.map((cat) => (cat.id === category.id ? category : cat))
      );
    } else {
      setCategories([
        ...categories,
        { ...category, id: Date.now().toString() },
      ]);
    }
    setShowModal(false);
    setEditingCategory(null);
  };

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <DashboardHeader title="Categories" />

      <div className="flex flex-col bg-white p-5 shadow-lg rounded-2xl md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search category name..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setEditingCategory(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-5 py-3 bg-amber-600 text-white rounded-xl hover:bg-secondary transition shadow-lg"
        >
          <IoMdAdd size={20} /> Add Category
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg flex flex-col items-center bg-white p-4">
        <table className="min-w-full text-left border-b border-gray-400 pb-100 mb-7">
          <thead className="bg-white border-b border-gray-400 ">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.map((cat) => (
              <tr key={cat.id}>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Image
                    src={catImage}
                    alt={cat.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  {cat.id}
                </td>
                <td className="px-6 py-4 font-semibold">{cat.name}</td>
                <td className="px-6 py-4 text-gray-600">{cat.description}</td>
                <td className="px-6 py-4 text-center space-x-3">
                  <button
                    onClick={() => {
                      setEditingCategory(cat);
                      setShowModal(true);
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={page}
          total={total}
          limit={limit}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
              <h2 className="text-xl font-bold mb-4">
                {editingCategory ? "Edit Category" : "Add Category"}
              </h2>
              <CategoryForm
                initialData={editingCategory}
                onSave={handleSave}
                onCancel={() => {
                  setShowModal(false);
                  setEditingCategory(null);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type CategoryFormProps = {
  initialData?: Category | null;
  onSave: (category: Category) => void;
  onCancel: () => void;
};

const CategoryForm: React.FC<CategoryFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [mainImagePreview, setMainImagePreview] = useState(
    initialData?.image || ""
  );

  const formik = useFormik({
    initialValues: {
      id: initialData?.id || "",
      name: initialData?.name || "",
      description: initialData?.description || "",
      mainImage: initialData?.image || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      onSave({
        id: values.id,
        name: values.name,
        description: values.description,
        image: mainImagePreview || values.mainImage,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Category Name</label>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="w-full p-2 border rounded-lg"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          rows={3}
          className="w-full p-2 border rounded-lg"
        ></textarea>
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.description}
          </div>
        )}
      </div>
      <div>
        <label className="block text-black mb-2">Featured Image</label>
        <div
          className="relative min-w-[120px] max-w-[200px] border-2 aspect-square border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition"
          onClick={() => document.getElementById("mainImage")?.click()}
        >
          {!mainImagePreview ? (
            <div className="text-center text-gray-500 px-4 ">
              <FaPlus className="mx-auto mb-2 w-10 h-10 text-gray-600" />
              <p className="text-sm font-medium">
                Click to upload featured image
              </p>
            </div>
          ) : (
            <Image
              src={mainImagePreview}
              alt="Main Preview"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
          <input
            type="file"
            id="mainImage"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setMainImagePreview(url);
                formik.setFieldValue("mainImagePreview", url);
                formik.setFieldValue("mainImage", file);
              }
            }}
            className="hidden"
          />
        </div>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md border text-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md hover:bg-opacity-90"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Categories;
