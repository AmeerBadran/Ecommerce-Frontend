import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBirthdayCake, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
const profileImage = "/images/noUser.png";


interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture?: string;
  CustomerMobiles?: string;
  city?: string;
  birthdate?: string;
}

const UserInfo = ({ user }: { user: User }) => {
  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-lg mb-10">
      <div className="flex items-center">
        <Image
          src={profileImage}
          alt="Profile"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-sm"
        />
        <div className="ml-6 space-y-1 text-black-400">
          <h1 className="text-2xl font-bold">
            {user.first_name} {user.last_name}
          </h1>
          <p className="flex items-center gap-2">
            <MdAlternateEmail /> {user.email}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> {user.CustomerMobiles || "غير متوفر"}
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot />
            {user.city || "غير محددة"}
          </p>
          <p className="flex items-center gap-2">
            <FaBirthdayCake />
            {user.birthdate ? new Date(user.birthdate).toLocaleDateString() : "غير متوفر"}
          </p>
        </div>
      </div>
      {/* زر عرض الفواتير */}
      <Link
        href={`/admin/payment/${user.id}`} // تأكد من أن هذا المسار يتماشى مع إعدادات Route لديك
        className="bg-white shadow-md  text-secondary border border-secondary px-6 py-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserInfo;
