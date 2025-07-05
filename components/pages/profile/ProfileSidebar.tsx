"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineFavorite } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import userImage from "@/public/images/noUser.png";
import { usePathname } from "next/navigation";
import { FaBoxes } from "react-icons/fa";

const ProfileSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
      <div className="w-full border h-full pb-4 border-secondary/40 bg-white max-h-[300px]">
        <div className="h-28 bg-secondary/70 flex justify-center items-end"></div>
        <div className="flex flex-col items-center -mt-16 gap-1">
          <Image
            src={userImage}
            alt={"User"}
            width={128}
            height={128}
            className="rounded-full border-4 object-cover border-secondary bg-white shadow-md"
          />
          <h1 className="font-medium text-xl mt-3 text-gray-700">
            Ameer Badran
          </h1>
          <p className="text-gray-500">Customer</p>
        </div>
      </div>

      <div className="w-full border border-secondary/40 p-4 divide-y divide-gray-300 bg-white">
        <div className="pb-4">
          <h1 className="text-lg font-semibold text-gray-700">Profile</h1>
          <div className="flex flex-col mt-3 space-y-3 pl-1">
            <Link
              href="/profile"
              className={`flex items-center gap-2 ${
                pathname === "/profile"
                  ? "hover:text-gray-500 text-secondary"
                  : "text-gray-500 hover:text-secondary"
              }`}
            >
              <GoPersonFill />
              Profile
            </Link>
            <Link
              href="/profile/messages"
              className={`flex items-center gap-2 ${
                pathname === "/profile/messages"
                  ? "hover:text-gray-500 text-secondary"
                  : "text-gray-500 hover:text-secondary"
              }`}
            >
              <BiSolidMessageSquareDetail />
              Messages
            </Link>
            <Link
              href="/profile/orders"
              className={`flex items-center gap-2 ${
                pathname === "/profile/orders"
                  ? "hover:text-gray-500 text-secondary"
                  : "text-gray-500 hover:text-secondary"
              }`}
            >
              <FaBoxes />
              Orders
            </Link>
            <Link
              href="/profile/wishlist"
              className={`flex items-center gap-2 ${
                pathname === "/profile/wishlist"
                  ? "hover:text-gray-500 text-secondary"
                  : "text-gray-500 hover:text-secondary"
              }`}
            >
              <MdOutlineFavorite />
              Wishlist
            </Link>
            <Link
              href="/profile/settings"
              className={`flex items-center gap-2 ${
                pathname === "/profile/settings"
                  ? "hover:text-gray-500 text-secondary"
                  : "text-gray-500 hover:text-secondary"
              }`}
            >
              <IoSettingsSharp />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
