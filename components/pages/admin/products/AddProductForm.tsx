"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

// بيانات الفئات التجريبية
const categoriesData = [
  { id: "cat1", name: "Electronics" },
  { id: "cat2", name: "Clothing" },
  { id: "cat3", name: "Accessories" },
  { id: "cat4", name: "Home" },
];

interface Product {
  name: string;
  description: string;
  price: number;
  discount: number;
  availableQty: number;
  weight: string;
  material: string;
  brand: string;
  colors: { name: string; value: string }[];
  categories: string[];
  mainImage?: string;
  galleryImages?: string[]; 
}

interface AddProductFormProps {
  mode: "add" | "edit";
  initialData?: Product;
}

const AddProductForm = ({ mode, initialData }: AddProductFormProps) => {
  const isEdit = mode === "edit";
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(
    initialData?.mainImage ?? null
  );

  const [galleryPreviews, setGalleryPreviews] = useState<
    { file?: File; url: string }[]
  >(initialData?.galleryImages?.map((url) => ({ url })) ?? []);

  const formik = useFormik({
    initialValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      price: initialData?.price || "",
      discount: initialData?.discount || "",
      availableQty: initialData?.availableQty || "",
      weight: initialData?.weight || "",
      material: initialData?.material || "",
      brand: initialData?.brand || "",
      colors: initialData?.colors || [{ name: "", value: "#000000" }],
      categories: initialData?.categories || [],
      mainImage: null,
      galleryImages: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().positive().required("Required"),
      discount: Yup.number().min(0).max(100).required("Required"),
      availableQty: Yup.number().min(0).required("Required"),
      weight: Yup.string().required("Required"),
      material: Yup.string().required("Required"),
      brand: Yup.string().required("Required"),
      colors: Yup.array().of(
        Yup.object({
          name: Yup.string().required("Color name required"),
          value: Yup.string().required("Color value required"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log({
        ...values,
        mainImage: mainImagePreview,
        galleryImages: galleryPreviews,
      });
      if (isEdit) {
        alert("Product Updated Successfully!");
      } else {
        alert("Product Added Successfully!");
      }
    },
  });

  const addColor = () => {
    formik.setFieldValue("colors", [
      ...formik.values.colors,
      { name: "", value: "#000000" },
    ]);
  };

  const handleCategoryChange = (id: string) => {
    const categories = formik.values.categories;
    if (categories.includes(id)) {
      formik.setFieldValue(
        "categories",
        categories.filter((cat) => cat !== id)
      );
    } else {
      formik.setFieldValue("categories", [...categories, id]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-12 bg-white shadow-lg rounded-2xl p-10 border border-gray-200"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="space-y-10  lg:col-span-2">
          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label">Product Name</label>
              <input
                name="name"
                type="text"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>

            <div>
              <label className="label">Price</label>
              <input
                name="price"
                type="number"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </div>

            <div>
              <label className="label">Discount (%)</label>
              <div className="relative">
                <input
                  name="discount"
                  type="number"
                  min={0}
                  max={100}
                  className="input pr-10"
                  onChange={formik.handleChange}
                  value={formik.values.discount}
                />
                <span className="absolute top-2 right-3 text-gray-400">%</span>
              </div>
            </div>

            <div>
              <label className="label">Available Quantity</label>
              <input
                name="availableQty"
                type="number"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.availableQty}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="label">Product Description</label>
            <textarea
              name="description"
              rows={4}
              className="input"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>

          {/* Colors */}
          <div>
            <label className="label">Product Colors</label>
            {formik.values.colors.map((color, index) => (
              <div key={index} className="flex items-center gap-4 mb-3">
                <input
                  type="text"
                  placeholder="Color Name"
                  className="input flex-1"
                  value={color.name}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `colors[${index}].name`,
                      e.target.value
                    )
                  }
                />
                <input
                  type="color"
                  className="w-12 h-10 rounded border border-gray-300"
                  value={color.value}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `colors[${index}].value`,
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addColor}
              className="text-my-color text-sm mt-1 hover:underline"
            >
              + Add Another Color
            </button>
          </div>

          {/* Categories */}
          <div>
            <label className="label">Select Categories</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categoriesData.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formik.values.categories.includes(cat.id)}
                    onChange={() => handleCategoryChange(cat.id)}
                  />
                  <span>{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="label">Weight</label>
              <input
                name="weight"
                type="text"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.weight}
              />
            </div>
            <div>
              <label className="label">Material</label>
              <input
                name="material"
                type="text"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.material}
              />
            </div>
            <div>
              <label className="label">Brand</label>
              <input
                name="brand"
                type="text"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.brand}
              />
            </div>
          </div>
        </div>
        {/* Image Upload Section */}
        <div className="space-y-6 lg:col-span-1">
          <h3 className="text-xl font-semibold text-black">Product Images</h3>

          {/* Main Image */}
          <div>
            <label className="block text-black mb-2">Featured Image</label>
            <div
              className="relative min-w-[250px] max-w-[400px] lg:max-w-full lg:w-full border-2 !aspect-[5/6] border-dashed border-secondary rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-white-100 transition"
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
                  className="w-full h-full  object-cover rounded-lg"
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
                    formik.setFieldValue("mainImage", file);
                  }
                }}
                className="hidden"
              />
            </div>
          </div>

          {/* Gallery Images */}
          <div>
            <label className="block text-black mb-2">Additional Images</label>
            <div
              className="relative w-full lg:max-w-full lg:w-full border-2 border-dashed border-secondary rounded-lg flex flex-col items-center justify-center cursor-pointer hover:brightness-110 transition"
              onClick={() => document.getElementById("galleryImages")?.click()}
            >
              {galleryPreviews.length === 0 ? (
                <div className="text-center text-gray-500 px-4">
                  <FaPlus className="mx-auto mb-2 w-10 h-10 text-gray-600" />
                  <p className="text-sm font-medium">
                    Click to upload additional images
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Max 10 images</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2 p-2 w-full h-full overflow-y-auto">
                  {galleryPreviews.map((img, index) => (
                    <Image
                      key={index}
                      src={img.url}
                      alt={`Gallery ${index + 1}`}
                      width={200}
                      height={96}
                      className="w-full h-full min-h-[180px] aspect-[5/6] object-cover rounded-lg border border-gray-700"
                    />
                  ))}
                </div>
              )}
              <input
                type="file"
                id="galleryImages"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length <= 10) {
                    const fileArray = Array.from(files);
                    const previews = fileArray.map((file) => ({
                      file,
                      url: URL.createObjectURL(file),
                    }));
                    setGalleryPreviews(previews);
                    formik.setFieldValue("galleryImages", fileArray);
                  } else {
                    alert("You can upload up to 10 images.");
                  }
                }}
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div className="text-center pt-6 lg:col-span-3">
          <button
            type="submit"
            className="bg-amber-600 hover:bg-secondary text-white px-10 py-3 rounded-xl text-lg font-bold shadow-md transition-all duration-300"
          >
            {isEdit ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddProductForm;
