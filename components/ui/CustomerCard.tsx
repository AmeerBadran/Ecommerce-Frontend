"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMoreVert } from "react-icons/md";
import {
  FaEye,
  FaFileInvoiceDollar,
  FaUnlock,
  FaBan,
  FaTrashAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  auth_provider?: string;
  profile_picture?: string;
  country: string;
  city: string;
  postal_code?: string;
  CustomerMobiles?: string;
  is_verified: boolean;
  banned: boolean;
}

interface CustomerCardProps {
  cust: Customer;
  userImage: string | StaticImageData;
  dropdownOpenId: string | null;
  toggleDropdown: (id: string) => void;
  banUserOrUnban: (id: string) => void;
  deleteUserById: (id: string) => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  cust,
  userImage,
  dropdownOpenId,
  toggleDropdown,
  banUserOrUnban,
  deleteUserById,
}) => {
  return (
    <div className="relative">
      <motion.div
        key={cust.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
      >
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={cust.profile_picture || userImage}
            alt="profile"
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-full border-2 border-secondary"
          />
          <div>
            <h3 className="text-xl font-semibold">
              {cust.first_name} {cust.last_name}
            </h3>
            <p className="text-sm text-gray-600">
              {cust.email || cust.auth_provider}
            </p>
          </div>
        </div>
        <p className="text-sm mb-1">
          <strong>Country:</strong> {cust.country}
        </p>
        <p className="text-sm mb-1">
          <strong>City:</strong> {cust.city}
        </p>
        <p className="text-sm mb-1">
          <strong>Zip code:</strong> {cust.postal_code || "nothing"}
        </p>
        <p className="text-sm mb-1">
          <strong>Mobile number:</strong>{" "}
          {cust?.CustomerMobiles || "unavailable"}
        </p>
        <p className="text-sm">
          <strong>Verification:</strong>{" "}
          <span
            className={cust.is_verified ? "text-green-400" : "text-red-400"}
          >
            {cust.is_verified ? "Authenticated" : "UnAuthenticated"}
          </span>
        </p>
        {cust.banned && (
          <p className="text-sm">
            <strong>Account status:</strong>{" "}
            <span className="text-red-400">Forbidden</span>
          </p>
        )}

      </motion.div>
      <div className="absolute top-4 right-4 z-[999]">
        <button
          onClick={() => toggleDropdown(cust.id)}
          className="text-amber-500 hover:text-secondary-100"
        >
          <MdOutlineMoreVert className="text-3xl" />
        </button>
        {dropdownOpenId === cust.id && (
          <div className="absolute right-0 mt-2 w-48 border border-secondary text-black rounded-xl shadow-lg z-[999] bg-white">
            <div className="text-sm text-black">
              <Link
                href={`/admin/customers/${cust.id}`}
                className="flex items-center gap-2 px-4 py-2 hover:bg-secondary hover:text-white transition duration-150 rounded-t-xl"
              >
                <FaEye />
                View details
              </Link>
              <Link
                href={`/admin/payment/${cust.id}`}
                className="flex items-center gap-2 px-4 py-2 hover:bg-secondary hover:text-white transition duration-150"
              >
                <FaFileInvoiceDollar />
                View Invoice
              </Link>
              <button
                onClick={() => banUserOrUnban(cust.id)}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-secondary hover:text-white transition duration-150"
              >
                {cust.banned ? (
                  <>
                    <FaUnlock />
                    Unblock
                  </>
                ) : (
                  <>
                    <FaBan />
                    Block the user
                  </>
                )}
              </button>
              <button
                onClick={() => deleteUserById(cust.id)}
                className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-400 hover:bg-red-500 hover:text-black transition duration-150 rounded-b-xl"
              >
                <FaTrashAlt />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerCard;
