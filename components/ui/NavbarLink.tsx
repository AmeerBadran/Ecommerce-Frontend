"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavbarLinkProps {
  path: string;
  label: string;
}

const NavbarLink = ({ path, label }: NavbarLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={clsx(
        "link-style",
        isActive && " text-black! font-semibold! border-b-2 border-black"
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
