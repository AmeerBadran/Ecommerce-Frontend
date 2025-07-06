"use client";

import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/images/noUser.png";
import { TfiMenu } from "react-icons/tfi";

interface AdminNavbarProps {
  sidebarSize: "small" | "big";
  setSidebarSize: (size: "small" | "big") => void;
  isHalfScreen: boolean;
  isSmallScreen: boolean;
  onSidebarToggle: () => void;
}

export default function AdminNavbar({
  sidebarSize,
  setSidebarSize,
  isHalfScreen,
  isSmallScreen,
  onSidebarToggle,
}: AdminNavbarProps) {
  const changeSize = () => {
    setSidebarSize(sidebarSize === "big" ? "small" : "big");
  };

  return (
    <nav
      className={`bg-white z-[120] h-[70px] w-full flex items-center justify-self-end justify-between fixed px-4 pr-4 ${
        !isHalfScreen && !isSmallScreen
          ? sidebarSize === "big"
            ? "clc-width-244"
            : "clc-width-70"
          : isHalfScreen && !isSmallScreen
          ? sidebarSize === "big"
            ? "clc-width-244"
            : "clc-width-70"
          : !isHalfScreen && isSmallScreen
          ? sidebarSize === "big"
            ? "clc-width-244"
            : ""
          : ""
      }`}
    >
      <div className="flex items-center gap-6">
        {isSmallScreen && (
          <h1 className="text-black-400 font-bold px-1 py-1 tracking-wide text-xl md:text-2xl">
            DB
          </h1>
        )}
        {isSmallScreen ? (
          <button
            type="button"
            className="text-black-400 text-2xl hover:text-secondary transition-colors duration-200"
            onClick={onSidebarToggle}
          >
            <TfiMenu />
          </button>
        ) : (
          <button
            type="button"
            className="text-black-400 text-2xl hover:text-secondary transition-colors duration-200"
            onClick={changeSize}
          >
            <TfiMenu />
          </button>
        )}
      </div>

      <div className="flex justify-center items-center gap-7">
        <div className="relative group mt-6 mb-4 px-4">
          {/* Trigger Area */}
          <div className="flex items-center gap-4 cursor-pointer">
            <p className="text-black-400 text-lg font-semibold">John Doe</p>
            <Image
              src={profileImage}
              alt="Profile"
              width={38}
              height={38}
              className="rounded-full shadow-md object-cover"
            />
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border border-gray-200 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
            <Link
              href="/"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Go to Home
            </Link>
            <button
              onClick={() => console.log("Logout clicked")}
              className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
