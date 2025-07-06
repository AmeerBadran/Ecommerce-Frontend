"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddUserForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{8,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Min 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    role: Yup.string().required("Role is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Add User Form Submitted:", values);
    // 🔜 Ready for API integration
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4 max-w-xl">
          {/* Full Name */}
          <div>
            <label className="block mb-1">Full Name</label>
            <Field
              name="fullName"
              className="form-input"
              placeholder="Enter full name"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="form-input"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1">Phone Number</label>
            <Field
              name="phone"
              type="text"
              className="form-input"
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <Field
              name="password"
              type="password"
              className="form-input"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className="form-input"
              placeholder="Confirm password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1">Role</label>
            <Field as="select" name="role" className="form-input">
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="student">Student</option>
              <option value="visitor">Visitor</option>
              <option value="staff">Staff</option>
            </Field>
            <ErrorMessage
              name="role"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition-all duration-300"
          >
            Add User
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUserForm;
