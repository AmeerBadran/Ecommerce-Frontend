"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditProfileForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Edit Profile Submitted:", values);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <Field name="fullName" className="form-input" />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <Field name="email" type="email" className="form-input" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition-all duration-300"
          >
            Save Changes
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfileForm;
