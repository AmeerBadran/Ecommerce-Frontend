import React from 'react'
import upperImage from "@/public/images/productsbackground.jpg";
import UpperPageTitle from '@/components/ui/UpperPageTitle';
import ProfileSidebar from '@/components/pages/profile/ProfileSidebar';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="bg-gray-50 min-h-screen">
        <UpperPageTitle
          image={upperImage}
          title="Profile"
          subtitle=""
          link="Profile"
          textColor="text-white"
          size="small"
        />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-y-6 lg:gap-6 py-20 px-5">
          <ProfileSidebar />
          <div className="lg:col-span-3 w-full">{children}</div>
        </div>
      </div>
    );
};

export default layout
