"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const Forgetpassword = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Password reset link sent to your email.");
        } else {
          alert(data.message || "Failed to send reset link.");
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
        Forgot Password
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

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          disabled={loading}
          className={`text-white font-medium text-sm px-8 py-3 transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black-100 hover:bg-secondary"
          }`}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </form>
  );
};

export default Forgetpassword;
