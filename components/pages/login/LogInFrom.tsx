"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";

import FacebookButton from "@/components/ui/FacebookButton";
import GoogleButton from "@/components/ui/GoogleButton";
const LogInFrom = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Too short").required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Login successful");
        } else {
          alert(data.message || "Login failed");
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
      className="bg-white p-8 h-fit pt-20 xmobile:min-w-[370px] sm:min-w-[500px] xl:min-w-[670px] gap-5 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">
        Login
      </h2>
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
        <div className="flex justify-between items-center">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <Link
            href="/forgetpassowrd"
            className=" underline text-sm mb-1 hover:text-secondary"
          >
            Forgot your password?
          </Link>
        </div>
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

      <div className="flex justify-between items-center mt-8">
        <button
          type="submit"
          disabled={loading}
          className={`text-white font-medium text-sm px-8 py-3 transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black-100 hover:bg-secondary"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link
          href="/signup"
          className=" underline text-sm hover:text-secondary"
        >
          Create account
        </Link>
      </div>
      <div className="flex 2md:flex-row flex-col gap-5 mt-10">
        <GoogleButton />
        <FacebookButton />
      </div>
    </form>
  );
};

export default LogInFrom;
