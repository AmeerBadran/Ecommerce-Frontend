"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SlCalender, SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";

const InfoAndForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1400px] mx-auto px-5 py-20 mt-10">
      {/* Left Info Section */}
      <div className="space-y-6 h-full">
        <h2 className="text-2xl font-medium">We Love to Hear From You</h2>
        <p className="text-gray-600 text-sm">
          Outstock is a premium Templates theme with advanced admin module. It’s
          extremely customizable, easy to use and fully responsive and retina
          ready. Vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
          delenit augue duis dolore te feugait nulla facilisi.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="font-medium">The Office</h3>
            <div className="flex items-start mt-2 gap-2 text-gray-600">
              <SlLocationPin className="w-8 h-8 mt-1 text-gray-400" />
              <div className="text-sm">
                <p>Fifth Avenue 5501,</p>
                <p>Broadway, New York</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium">The Office</h3>
            <div className="flex items-start mt-2 gap-2 text-gray-600">
              <SlLocationPin className="w-8 h-8 mt-1 text-gray-400" />
              <div className="text-sm">
                <p>Fifth Avenue 5501,</p>
                <p>Broadway, New York</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Contact Information</h3>
            <div className="flex items-start mt-2 gap-2 text-gray-600">
              <IoMailOpenOutline className="w-8 h-8 mt-1 text-gray-400" />
              <div className="text-sm">
                <p>info@example.com</p>
                <p>Normamn@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Our Business Hours</h3>
            <div className="flex items-start mt-2 gap-2 text-gray-600">
              <SlCalender className="w-8 h-8 mt-1 text-gray-400" />
              <div className="text-sm">
                <p>Monday - Friday: 8am – 4pm</p>
                <p>Saturday, Sunday: 9am – 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div>
        <h2 className="text-xl font-medium mb-4">Leave A Message</h2>
        <p className="text-gray-600 text-sm mb-6">
          Use the form below to get in touch with the sales team
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full border-b border-black outline-0 placeholder:text-black placeholder:text-sm py-2"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full border-b border-black outline-0 placeholder:text-black placeholder:text-sm py-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone number*"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="w-full border-b border-black outline-0 placeholder:text-black placeholder:text-sm py-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="subject*"
                onChange={formik.handleChange}
                value={formik.values.subject}
                className="w-full border-b border-black outline-0 placeholder:text-black placeholder:text-sm py-2"
              />
            </div>
          </div>
          <div className="mt-7">
            <label htmlFor="message" className="text-sm ">
              Message*
            </label>
            <textarea
              name="message"
              rows={6}
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full border border-black p-2 mt-2 text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-sm text-white py-[14px] px-10 hover:bg-secondary transition-colors duration-300 "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoAndForm;
