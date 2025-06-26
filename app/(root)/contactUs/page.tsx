import UpperPageTitle from "@/components/ui/UpperPageTitle";
import contactBg from "../../../public/images/contactbg.png";
import React from "react";
import InfoAndForm from "@/components/pages/contact/InfoAndForm";
import MapSection from "@/components/pages/contact/MapSection";
import PostsSection from "@/components/pages/home/PostsSection";

const ContactUs = () => {
  return (
    <div>
      <UpperPageTitle
        image={contactBg}
        title="Contact Us"
        subtitle=""
        link="Contact Us"
        textColor="text-white"
      />
      <InfoAndForm />
      <MapSection />
      <PostsSection />
    </div>
  );
};

export default ContactUs;
