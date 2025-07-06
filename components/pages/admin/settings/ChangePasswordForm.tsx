"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ChangePasswordForm = () => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(6, "Min 6 characters")
      .required("New password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Password Change Submitted:", values);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Change Password</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1">Current Password</label>
            <Field
              name="currentPassword"
              type="password"
              className="form-input"
            />
            <ErrorMessage
              name="currentPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">New Password</label>
            <Field name="newPassword" type="password" className="form-input" />
            <ErrorMessage
              name="newPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">Confirm New Password</label>
            <Field
              name="confirmNewPassword"
              type="password"
              className="form-input"
            />
            <ErrorMessage
              name="confirmNewPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition-all duration-300"
          >
            Update Password
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;
