import { RiDashboard2Fill } from "react-icons/ri";
import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { MdCategory, MdOutlineReviews } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillCollectionFill } from "react-icons/bs";
import { BsClipboard2Fill } from "react-icons/bs";

const sidebarItems = [
  {
    type: "link",
    Icon: RiDashboard2Fill,
    data: {
      href: "/admin",
      icon: RiDashboard2Fill,
      label: "Dashboard",
      iconColor: "text-blue-600",
    },
  },
  {
    type: "link",
    Icon: FaUsers,
    data: {
      href: "/admin/customers",
      icon: FaUsers,
      label: "Customers",
      iconColor: "text-teal-600",
    },
  },
  {
    type: "dropdown",
    Icon: FaBoxOpen,
    label: "Products",
    iconColor: "text-indigo-600",
    data: [
      {
        href: "/admin/products",
        icon: FaBoxOpen,
        label: "All Products",
        iconColor: "text-indigo-500",
      },
      {
        href: "/admin/products/add",
        icon: FaBoxOpen,
        label: "Add Product",
        iconColor: "text-green-600",
      },
      {
        href: "/admin/products/categories",
        icon: MdCategory,
        label: "Categories",
        iconColor: "text-amber-600",
      },
    ],
  },
  {
    type: "dropdown",
    Icon: BsFillCollectionFill,
    label: "Collections",
    iconColor: "text-amber-600",
    data: [
      {
        href: "/admin/collections",
        icon: BsFillCollectionFill,
        label: "All Collections",
        iconColor: "text-amber-500",
      },
      {
        href: "/admin/collections/add",
        icon: BsFillCollectionFill,
        label: "Add Collection",
        iconColor: "text-green-600",
      },
    ],
  },
  {
    type: "link",
    Icon: FaClipboardList,
    data: {
      href: "/admin/orders",
      icon: FaClipboardList,
      label: "Orders",
      iconColor: "text-orange-500",
    },
  },
  {
    type: "link",
    Icon: BsClipboard2Fill,
    data: {
      href: "/admin/blogs",
      icon: BsClipboard2Fill,
      label: "Blogs",
      iconColor: "text-amber-600",
    },
  },
  {
    type: "link",
    Icon: MdOutlineReviews,
    data: {
      href: "/admin/reviews",
      icon: MdOutlineReviews,
      label: "Product Reviews",
      iconColor: "text-yellow-500",
    },
  },
  {
    type: "link",
    Icon: RiMessage2Fill,
    data: {
      href: "/admin/messages",
      icon: RiMessage2Fill,
      label: "Messages",
      iconColor: "text-teal-600",
    },
  },
  {
    type: "link",
    Icon: FiSettings,
    data: {
      href: "/admin/settings",
      icon: FiSettings,
      label: "Settings",
      iconColor: "text-gray-500",
    },
  },
];

export default sidebarItems;
