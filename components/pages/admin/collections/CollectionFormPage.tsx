"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import DashboardHeader from "../dashboard/DashboardHeader";
import { productsData } from "@/constants/products";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

const allProducts: Product[] = productsData.map((product) => ({
  id: product.id,
  title: product.title,
  image: product.image,
  price: product.price,
}));

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  totalPrice: Yup.number().required("Total price is required"),
  image: Yup.mixed().test("image", "Image is required", function (value) {
    return !!value || !!this.parent.previewImage;
  }),
  products: Yup.array().min(1, "Select at least one product"),
});

interface CollectionFormPageProps {
  mode: "add" | "edit";
}

const CollectionFormPage = ({ mode }: CollectionFormPageProps) => {
  const params = useParams();
  const router = useRouter();
  const collectionId = typeof params.id === "string" ? params.id : "";

  const isEdit = mode === "edit";

  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    totalPrice: 0,
    image: null as File | null,
    products: [] as string[],
    previewImage: "", // للعرض فقط وليس لإرساله
  });

  const [productQuery, setProductQuery] = useState("");

  useEffect(() => {
    if (isEdit && collectionId) {
      // محاكاة جلب البيانات من API
      setInitialValues({
        title: "Summer Combo",
        description: "Perfect for summer adventures.",
        totalPrice: 199,
        image: null,
        products: ["1", "2"],
        previewImage:
          "https://res.cloudinary.com/df1oiiaat/image/upload/v1751751988/product-14-13_788x101366_ef2dvd.webp",
      });
    }
  }, [isEdit, collectionId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        ...values,
        image: values.image ? values.image : initialValues.previewImage,
      };
      console.log("Submitting collection:", payload);

      // TODO: أرسل البيانات إلى API هنا
      router.push("/admin/collections");
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      formik.setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("previewImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleProduct = (id: string) => {
    const isSelected = formik.values.products.includes(id);
    if (isSelected) {
      formik.setFieldValue(
        "products",
        formik.values.products.filter((p) => p !== id)
      );
    } else {
      formik.setFieldValue("products", [...formik.values.products, id]);
    }
  };

  const filteredProducts = allProducts.filter((p) =>
    p.title.toLowerCase().includes(productQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 bg-white rounded-2xl shadow-md mt-4 max-w-4xl mx-auto"
    >
      <DashboardHeader title={isEdit ? "Edit Collection" : "New Collection"} />

      <form onSubmit={formik.handleSubmit} className="space-y-6 mt-6">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-secondary"
          />
          {formik.errors.title && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-secondary"
          />
          {formik.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Total Price</label>
          <input
            type="number"
            name="totalPrice"
            value={formik.values.totalPrice}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-secondary"
          />
          {formik.errors.totalPrice && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.totalPrice}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Image</label>

          <div>
            <label
              htmlFor="imageUpload"
              className="w-full max-w-64 aspect-square cursor-pointer border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center hover:border-secondary transition"
            >
              {formik.values.previewImage ? (
                <Image
                  src={formik.values.previewImage}
                  alt="Preview"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center text-gray-500">
                  <div className="text-3xl mb-2">📁</div>
                  <p className="text-sm">Press to select an image</p>
                </div>
              )}
            </label>

            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Select Products</label>
          <input
            type="text"
            placeholder="Search products..."
            value={productQuery}
            onChange={(e) => setProductQuery(e.target.value)}
            className="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring focus:ring-secondary"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`border rounded-lg p-3 cursor-pointer transition hover:shadow ${
                  formik.values.products.includes(product.id)
                    ? "border-secondary bg-secondary/10"
                    : "border-gray-300"
                }`}
                onClick={() => toggleProduct(product.id)}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full aspect-[6/7] object-cover rounded mb-2"
                />
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">ILS {product.price}</p>
              </div>
            ))}
          </div>

          {formik.errors.products && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.products}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-secondary hover:bg-[#1a252f] text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            {isEdit ? "Update Collection" : "Create Collection"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default CollectionFormPage;
