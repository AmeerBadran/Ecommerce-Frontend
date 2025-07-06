"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddAdminForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Min 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Add Admin Form Submitted:", values);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Admin / Staff</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <Field
              name="fullName"
              className="form-input"
              placeholder="Full name"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="form-input"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <Field
              name="password"
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition-all duration-300"
          >
            Add Admin
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAdminForm;
