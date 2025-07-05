"use client";

import Link from "next/link";
import { TfiMenu } from "react-icons/tfi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

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
        sidebarSize === "big"
          ? isHalfScreen
            ? "clc-width-244"
            : "clc-width-244"
          : sidebarSize === "small"
          ? isHalfScreen && !isSmallScreen
            ? "clc-width-70"
            : "clc-width-70"
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
        <Link
          href="/"
          className="text-xl flex items-center gap-3 font-bold text-black-400 hover:text-secondary transition-colors duration-200"
        >
          <FaArrowRightArrowLeft />
          <span>Home</span>
        </Link>
      </div>
    </nav>
  );
}
