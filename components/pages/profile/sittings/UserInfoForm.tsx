"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import userImage from "@/public/images/noUser.png";
import { FaUpload } from "react-icons/fa";

const UserInfoForm = () => {
  const [image, setImage] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "Ahmed Khaled",
      phoneNumber: "0599000000",
      city: "Gaza",
      address: "Al-Rimal St.",
    },
    onSubmit: (values) => {
      console.log("Updated user info:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
      {/* صورة الحساب */}
      <div className="flex items-center gap-5">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-secondary">
          <Image
            src={image || userImage}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Change Profile Picture"
            className="px-4 py-2 text-sm border text-secondary border-secondary hover:bg-secondary hover:text-white transition"
          >
            <FaUpload />
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            hidden
          />
        </div>
      </div>

      {/* بيانات المستخدم */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="input-login-style"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            className="input-login-style"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-sm font-medium text-gray-700">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="input-login-style"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="input-login-style"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      {/* زر الحفظ */}
      <button
        type="submit"
        className="px-6 py-2 bg-secondary text-white hover:opacity-90"
      >
        Save Changes
      </button>
    </form>
  );
};

export default UserInfoForm;
