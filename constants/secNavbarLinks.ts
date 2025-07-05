import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";


export const secNavbarLinks = [
  {
    path: "/cart",
    label: "Cart",
    icon: HiOutlineShoppingBag,
    color: "text-gray-600 hover:text-black",
  },
  {
    path: "/admin",
    label: "Admin",
    icon: MdAdminPanelSettings,
    color: "text-gray-600 hover:text-black",
  },
  {
    path: "/profile",
    label: "Profile",
    icon: CiUser,
    color: "text-gray-600 hover:text-black",
  },
  {
    path: "/login",
    label: "Login",
    icon: CiLogin,
    color: "text-green-600 hover:text-green-800",
  },
  {
    path: "/signup",
    label: "Signup",
    icon: CiUser,
    color: "text-blue-600 hover:text-blue-800",
  },
  {
    path: "/logout",
    label: "Logout",
    icon: CiLogout,
    color: "text-red-600 hover:text-red-800",
  },
];
