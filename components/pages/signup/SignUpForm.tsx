"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";

import FacebookButton from "@/components/ui/FacebookButton";
import GoogleButton from "@/components/ui/GoogleButton";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, "Too short").required("Required"),
      mobile: Yup.string().min(10, "Too short").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Too short").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Sign up successful");
        } else {
          alert(data.message || "Sign up failed");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-8 h-fit xmobile:min-w-[370px] pt-20 sm:min-w-[500px] xl:min-w-[670px] gap-5 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">
        Sign Up
      </h2>
      <div>
        <label className="block mb-1 text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="input-login-style"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <p className="text-xs text-red-600 mt-1">{formik.errors.fullName}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Mobile</label>
        <input
          type="text"
          name="mobile"
          className="input-login-style"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <p className="text-xs text-red-600 mt-1">{formik.errors.mobile}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="input-login-style"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-xs text-red-600 mt-1">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="input-login-style"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-xs text-red-600 mt-1">{formik.errors.password}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="input-login-style"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-xs text-red-600 mt-1">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-6 md:flex-row justify-between items-center mt-8">
        <button
          type="submit"
          disabled={loading}
          className={`text-white font-medium text-sm px-8 py-3 transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black-100 hover:bg-secondary"
          }`}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <Link href="/login" className=" underline text-sm hover:text-secondary">
          Already have an account ?
        </Link>
      </div>
      <div className="flex 2md:flex-row flex-col gap-5 mt-10">
        <GoogleButton />
        <FacebookButton />
      </div>
    </form>
  );
};

export default SignUpForm;
