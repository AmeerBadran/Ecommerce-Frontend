"use client";
import Link from "next/link";
import Image from "next/image";
import NavbarLink from "../ui/NavbarLink";
import { navLinks } from "@/constants/navLinks";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";
import { secNavbarLinks } from "@/constants/secNavbarLinks";

interface NavbarProps {
  onCartOpen: () => void;
}

const Navbar = ({ onCartOpen }: NavbarProps) => {
  const [isHalfScreen, setIsHalfScreen] = useState<boolean>(true);
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHalfScreen(window.innerWidth > 950);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavButton = () => setOpenNav(!openNav);

  return (
    <header className="2xl:h-[100px] h-20 flex items-center px-8 bg-white relative ">
      {isHalfScreen ? (
        <nav className="flex w-1/3">
          <ul className="flex gap-8 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavbarLink path={link.path} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className="">
          <button
            type="button"
            onClick={handleNavButton}
            className="flex justify-center items-center w-10 h-10 min-w-10 text-gray-600 hover:text-yellow-600"
            aria-controls="drawer-navigation"
          >
            {!openNav ? (
              <FaBars className="text-2xl" />
            ) : (
              <IoMdClose className="text-3xl" />
            )}
          </button>

          <nav
            id="drawer-navigation"
            className={`fixed top-0 left-0 z-40 w-64 h-screen border-r border-black p-4  overflow-y-auto transition-transform bg-white ${
              openNav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h5 className="text-base font-semibold text-gray-500 uppercase">
              Menu
            </h5>
            <button
              type="button"
              onClick={() => setOpenNav(false)}
              className=" bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center "
            >
              <IoMdClose className="w-5 h-5" />
              <span className="sr-only">Close menu</span>
            </button>
            <div className="flex flex-col justify-between h-11/12 ">
              <ul className="py-4 space-y-2 font-medium">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-gray-600 rounded-xs hover:text-black hover:bg-gray-200 transition duration-300"
                  >
                    <Link
                      href={link.path}
                      className="flex items-center py-3 px-2"
                    >
                      <link.icon className="w-5 h-5 " />
                      <span className="ms-3">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="py-10 space-y-2 font-medium ">
                {secNavbarLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-gray-600 rounded-xs hover:text-black hover:bg-gray-200 transition duration-300"
                  >
                    <Link
                      href={link.path}
                      className="flex items-center py-3 px-2"
                    >
                      <link.icon className="w-5 h-5 " />

                      <span className="ms-3">
                        {link.label}
                        {link.label === "Cart" && ` (${0})`}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
      <div
        className={`flex  ${
          isHalfScreen ? "justify-center w-1/3" : "justify-center w-full"
        }`}
      >
        <Link href="/">
          <Image
            src="/logo_dark.svg"
            alt="logo"
            width={160}
            height={50}
            priority
          />
        </Link>
      </div>
      {isHalfScreen && (
        <div
          className={`flex ${
            isHalfScreen
              ? "justify-end w-1/3 gap-4 items-center"
              : "justify-end w-full"
          }`}
        >
          {secNavbarLinks.map((link, index) =>
            link.label === "Cart" ? (
              <button
                key={index}
                onClick={onCartOpen}
                className={`flex items-center gap-1 text-gray-600 hover:text-black transition duration-300 ${link.color}`}
              >
                <link.icon className="w-5 h-5 " title={link.label} />
                <span>
                  {link.label}
                  {link.label === "Cart" && ` (${0})`}
                </span>
              </button>
            ) : (
              <Link
                key={index}
                href={link.path}
                className={`flex items-center gap-1 text-gray-600 hover:text-black transition duration-300 ${link.color}`}
              >
                <link.icon className="w-5 h-5 " title={link.label} />
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
