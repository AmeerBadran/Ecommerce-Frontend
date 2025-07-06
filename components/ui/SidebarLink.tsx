"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IconType } from "react-icons";
import { usePathname, useSearchParams } from "next/navigation";

interface LinkData {
  href: string;
  icon: IconType;
  label: string;
  iconColor?: string;
}

interface SidebarItemProps {
  type: "link" | "dropdown";
  data: LinkData | LinkData[];
  Icon: IconType;
  label?: string;
  sidebarSize: string;
  iconColor?: string;
  setSidebarSize?: (size: string) => void;
}

export default function SidebarItem({
  type,
  data,
  Icon,
  label,
  sidebarSize,
  iconColor = "text-gray-400",
}: SidebarItemProps) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullPath =
    pathname + (searchParams.toString() ? "?" + searchParams.toString() : "");

  const isDropdownLinkActive = (links: LinkData[]) => {
    return links.some((link) => fullPath.startsWith(link.href));
  };
  const isCurrentLink = (href: string) => {
    return fullPath === href;
  };

  const isActive = (href: string) => pathname === href;

  if (type === "link" && !Array.isArray(data)) {
    const { href, icon: ItemIcon, label: itemLabel } = data;

    return (
      <li className="group transition-all duration-500 px-2">
        <Link
          href={href}
          className={`
            flex items-center  gap-1 px-5  rounded-lg w-[90%] mx-auto transition-all duration-300
            ${
              sidebarSize === "small"
                ? "flex-col justify-center py-3"
                : "flex-row gap-3 py-4"
            }
            ${
              isActive(href)
                ? "bg-secondary/90 hover:bg-secondary text-white"
                : "text-gray-300 hover:bg-[#2b2f3c] hover:text-white"
            }
          `}
        >
          <ItemIcon className="text-xl" />
          <span
            className={`text-xs font-medium text-center ${
              sidebarSize === "small" ? "block text-[10px]" : "hidden"
            }`}
          >
            {itemLabel}
          </span>
          {sidebarSize === "big" && (
            <span className="text-sm font-medium">{itemLabel}</span>
          )}
        </Link>
      </li>
    );
  }

  // Dropdown case
  return (
    <li className="group transition-all duration-500 px-2">
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`
          flex items-center justify-center gap-1 px-5 w-[90%] mx-auto rounded-lg
          transition-all duration-300
          ${sidebarSize === "small" ? "flex-col py-3" : "flex-row gap-3 py-4"}
          ${
            openDropdown || (Array.isArray(data) && isDropdownLinkActive(data))
              ? "bg-[#2b2f3c]"
              : "hover:bg-[#2b2f3c]"
          }
        `}
      >
        <Icon className={`text-xl ${iconColor}`} />
        <span
          className={`${
            sidebarSize === "small"
              ? "text-[10px] font-medium text-center mt-1 "
              : "text-sm font-medium text-gray-300"
          }`}
        >
          {label}
        </span>
        {sidebarSize === "big" && (
          <MdOutlineArrowForwardIos
            className={`ml-auto text-sm text-gray-400 transition-transform duration-300 ${
              openDropdown ? "rotate-90" : ""
            }`}
          />
        )}
      </button>

      <div
        className={`
    transition-all duration-500 ease-in-out overflow-hidden
    ${
      openDropdown
        ? "max-h-96 opacity-100"
        : "max-h-0 opacity-0 pointer-events-none"
    }
  `}
      >
        <ul
          className={`mt-1 space-y-1 ${sidebarSize === "small" ? "" : "pl-6"}`}
        >
          {Array.isArray(data) &&
            data.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
  flex items-center gap-1 px-3 py-3 rounded-md transition-all duration-300
  ${
    sidebarSize === "small"
      ? "flex-col justify-center items-center text-center"
      : "flex-row justify-start"
  }
  ${
    isCurrentLink(link.href)
      ? "bg-secondary text-white"
      : "text-gray-400 hover:bg-[#2b2f3c] hover:text-white"
  }
`}
                >
                  <div className="relative flex flex-col items-center">
                    {sidebarSize === "small" && (
                      <span className="w-1 h-1 bg-gray-400 rounded-full mb-1" />
                    )}
                    <link.icon className="text-base" />
                  </div>

                  <span
                    className={`${
                      sidebarSize === "small"
                        ? "text-[10px] font-medium mt-1"
                        : "text-sm font-medium"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}
