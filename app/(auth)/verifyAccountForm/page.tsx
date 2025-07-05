"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";

interface FormValues {
  email: string;
  code: string[];
}

const VerifyAccountForm = () => {
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const codeInputs = useRef<Array<HTMLInputElement | null>>([]);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      code: Array(6).fill(""),
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      code: Yup.array()
        .of(
          Yup.string()
            .matches(/^[0-9]$/, "Invalid")
            .required("Required")
        )
        .length(6, "Code must be 6 digits"),
    }),
    onSubmit: async (values: FormValues) => {
      const fullCode = values.code.join("");
      setLoading(true);
      try {
        const res = await fetch("/api/auth/verify-account", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email, code: fullCode }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Account verified successfully.");
        } else {
          alert(data.message || "Verification failed.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...formik.values.code];
      newCode[index] = value;
      formik.setFieldValue("code", newCode);
      if (value && index < 5) {
        codeInputs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (paste.length === 6) {
      const newCode = paste.split("");
      formik.setFieldValue("code", newCode);
      newCode.forEach((digit, i) => {
        if (codeInputs.current[i]) {
          codeInputs.current[i]!.value = digit;
        }
      });
      codeInputs.current[5]?.focus();
    }
    e.preventDefault();
  };

  const handleResendCode = async () => {
    setResending(true);
    try {
      const res = await fetch("/api/auth/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formik.values.email }),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Verification code resent.");
      } else {
        alert(data.message || "Failed to resend code.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while resending.");
    } finally {
      setResending(false);
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-8 h-fit pt-20 xmobile:min-w-[370px] xl:max-w-[420px] gap-6 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center text-gray-700">
        Verify Account
      </h2>

      {/* Email */}
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

      {/* Alert */}
      <div className="text-sm text-gray-600 flex w-full items-center text-center mt-2">
        <p>
          Please enter the 6-digit code sent to your email. The code is valid
          for 
          <strong> 10 minutes</strong>.
        </p>
      </div>

      {/* Code Input */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Verification Code
        </label>
        <div className="flex gap-2 justify-center">
          {formik.values.code.map((_, i) => (
            <input
              key={i}
              ref={(el) => {
                codeInputs.current[i] = el;
              }}
              type="text"
              maxLength={1}
              className="w-12 h-12 border border-gray-300 text-center text-xl rounded-md focus:ring-2 focus:ring-black-100 outline-none transition-all"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !formik.values.code[i] && i > 0) {
                  codeInputs.current[i - 1]?.focus();
                }
              }}
              onPaste={handlePaste}
            />
          ))}
        </div>
        {formik.errors.code && typeof formik.errors.code === "string" && (
          <p className="text-xs text-red-600 mt-1 text-center">
            {formik.errors.code}
          </p>
        )}
      </div>

      {/* Resend Code */}
      <div className="text-center mt-2">
        <button
          type="button"
          onClick={handleResendCode}
          disabled={resending || !formik.values.email}
          className={`text-sm underline hover:text-secondary transition-colors ${
            resending || !formik.values.email
              ? "cursor-not-allowed text-gray-400"
              : "text-black-100"
          }`}
        >
          {resending ? "Resending..." : "Resend Code"}
        </button>
      </div>

      {/* Submit */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          disabled={loading}
          className={`text-white font-medium text-sm px-8 py-3 transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black-100 hover:bg-secondary"
          }`}
        >
          {loading ? "Verifying..." : "Verify Account"}
        </button>
      </div>
    </form>
  );
};

export default VerifyAccountForm;
