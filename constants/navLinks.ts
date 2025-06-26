import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaAddressCard } from "react-icons/fa";
import { BiSolidCollection } from "react-icons/bi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";



export const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/shop", label: "Shop", icon: FaShop },
  {
    path: "/collections",
    label: "Collections",
    icon: MdOutlineCollectionsBookmark,
  },
  { path: "/blog", label: "Blog", icon: BiSolidCollection },
  { path: "/contactUs", label: "Contact", icon: TbMessageChatbotFilled },
  { path: "/about", label: "About", icon: FaAddressCard },
];
