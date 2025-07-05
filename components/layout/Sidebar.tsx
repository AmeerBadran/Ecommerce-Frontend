"use client";

import Image from "next/image";
import profileImage from "../../public/images/noUser.png";
import sidebarItems from "../../constants/sidebarItems";
import SidebarItem from "../ui/SidebarLink";
import { useEffect } from "react";

interface SidebarProps {
  sidebarSize: "small" | "big";
  isHalfScreen: boolean;
  isSmallScreen: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setSidebarSize: (size: "small" | "big") => void;
}

export default function Sidebar({
  sidebarSize,
  setSidebarSize,
  isHalfScreen,
  isSmallScreen,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  useEffect(() => {
    if (isSmallScreen) {
      setSidebarSize("small");
    }
  }, [isSmallScreen]);

  const isOverlay = isSmallScreen;

  return (
    <div
      className={`fixed top-0 left-0 z-[200] h-full text-white bg-black-400 shadow-xl
        transition-transform duration-300 ease-in-out
        ${
          isOverlay
            ? "w-[280px]"
            : sidebarSize === "big"
            ? "w-sidebar"
            : "w-sidebar-small"
        }
        ${
          isOverlay
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        }
        flex flex-col
      `}
    >
      {isOverlay && (
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl z-[101]"
        >
          ✕
        </button>
      )}

      <h1 className="text-white font-semibold text-2xl tracking-wide px-5 mt-6">
        {sidebarSize === "big" || isSmallScreen ? "Dashboard" : "DB"}
      </h1>

      <div
        className={`flex flex-col overflow-y-auto overflow-x-hidden pb-20 hide-scrollbar ${
          isHalfScreen ? "mt-sidebar-small" : ""
        }`}
      >
        <div
          className={`mt-6 mb-4 flex items-center gap-3 px-4 ${
            sidebarSize === "big" || isSmallScreen ? "" : "mx-auto"
          }`}
        >
          <Image
            src={profileImage}
            alt="Profile"
            width={38}
            height={38}
            className="rounded-full shadow-md object-cover"
          />
          {sidebarSize === "big" || isSmallScreen ? (
            <p className="text-white text-sm font-medium">John Doe</p>
          ) : null}
        </div>

        {sidebarSize === "big" && (
          <h2 className="text-gray-400 uppercase text-sm font-semibold tracking-widest px-5 mt-4 mb-3">
            Mobility
          </h2>
        )}

        <ul
          className={`flex flex-col gap-2 ${
            sidebarSize === "small" ? "mt-5" : ""
          }`}
        >
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              type={item.type as "link" | "dropdown"}
              data={item.data}
              Icon={item.Icon}
              label={item.label}
              sidebarSize={isSmallScreen ? "big" : sidebarSize}
            />
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black-400 to-transparent pointer-events-none" />
    </div>
  );
}
