import { RiDashboard2Fill } from "react-icons/ri";
import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { MdCategory, MdLocalOffer, MdOutlineReviews } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";

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
    Icon: FaClipboardList,
    label: "Orders",
    iconColor: "text-orange-600",
    data: [
      {
        href: "/admin/orders",
        icon: FaClipboardList,
        label: "All Orders",
        iconColor: "text-orange-500",
      },
      {
        href: "/admin/orders/pending",
        icon: FaClipboardList,
        label: "Pending Orders",
        iconColor: "text-yellow-500",
      },
      {
        href: "/admin/orders/shipped",
        icon: FaClipboardList,
        label: "Shipped Orders",
        iconColor: "text-blue-500",
      },
      {
        href: "/admin/orders/returned",
        icon: FaClipboardList,
        label: "Returned Orders",
        iconColor: "text-red-500",
      },
    ],
  },
  {
    type: "dropdown",
    Icon: MdOutlineReviews,
    label: "Reviews",
    iconColor: "text-yellow-600",
    data: [
      {
        href: "/admin/reviews",
        icon: MdOutlineReviews,
        label: "Product Reviews",
        iconColor: "text-yellow-500",
      },
      {
        href: "/admin/reviews/reports",
        icon: HiOutlineDocumentReport,
        label: "Reported Reviews",
        iconColor: "text-red-500",
      },
    ],
  },
  {
    type: "dropdown",
    Icon: MdLocalOffer,
    label: "Marketing",
    iconColor: "text-green-700",
    data: [
      {
        href: "/admin/coupons",
        icon: BiSolidCoupon,
        label: "Coupons",
        iconColor: "text-green-500",
      },
      {
        href: "/admin/banners",
        icon: MdLocalOffer,
        label: "Banners",
        iconColor: "text-blue-500",
      },
      {
        href: "/admin/campaigns",
        icon: MdLocalOffer,
        label: "Campaigns",
        iconColor: "text-pink-600",
      },
    ],
  },
  {
    type: "link",
    Icon: IoMdAnalytics,
    data: {
      href: "/admin/analytics",
      icon: IoMdAnalytics,
      label: "Analytics",
      iconColor: "text-purple-700",
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
