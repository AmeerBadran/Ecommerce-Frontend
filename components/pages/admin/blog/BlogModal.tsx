"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

interface BlogModalProps {
  open: boolean;
  mode: "add" | "edit";
  onClose: () => void;
  onSubmit: (values: BlogFormValues) => void;
  initialData?: BlogFormValues;
}

export interface BlogFormValues {
  title: string;
  content: string;
  image: File | null;
  previewImage: string;
  createdAt: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  image: Yup.mixed().test("image", "Image is required", function (value) {
    return !!value || !!this.parent.previewImage;
  }),
});

const BlogModal: React.FC<BlogModalProps> = ({
  open,
  mode,
  onClose,
  onSubmit,
  initialData,
}) => {
  const isEdit = mode === "edit";

  const [initialValues, setInitialValues] = useState<BlogFormValues>({
    title: "",
    content: "",
    image: null,
    previewImage: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setInitialValues(initialData);
    }
  }, [isEdit, initialData]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const payload: BlogFormValues = {
        ...values,
        image: values.image,
        previewImage: values.previewImage,
      };
      onSubmit(payload);
      onClose();
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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle className="text-xl font-bold text-gray-800">
        {isEdit ? "Edit Blog Post" : "New Blog Post"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} className="space-y-6 p-2">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {formik.errors.title && (
              <p className="text-red-500 text-sm">{formik.errors.title}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block font-semibold mb-1">Content</label>
            <textarea
              name="content"
              rows={5}
              value={formik.values.content}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {formik.errors.content && (
              <p className="text-red-500 text-sm">{formik.errors.content}</p>
            )}
          </div>


          {/* Image Upload */}
          <div>
            <label className="block font-semibold mb-1">Image</label>
            <label
              htmlFor="imageUpload"
              className="w-full max-w-xs cursor-pointer border-2 border-dashed border-gray-400 rounded-lg aspect-[4/3] flex items-center justify-center"
            >
              {formik.values.previewImage ? (
                <Image
                  src={formik.values.previewImage}
                  alt="Preview"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-gray-500 text-sm text-center">
                  <p>Click to select an image</p>
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

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-secondary hover:bg-[#1a252f] text-white px-6 py-2 rounded-lg"
            >
              {isEdit ? "Update Post" : "Create Post"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
