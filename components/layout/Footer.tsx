import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-200 text-black-300 px-6 md:px-20 pt-16 pb-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-[#222] pb-12 gap-12">
          {/* Left Section */}
          <div className="max-w-lg">
            <h2 className="text-[#f29c52] text-3xl font-bold mb-4">Outstock</h2>
            <p className="mb-4 leading-relaxed">
              Outstock is a premium Templates theme with advanced admin module.
              It’s extremely customizable, easy to use and fully responsive and
              retina ready.
            </p>
            <div className="space-y-2 mt-4 text-sm">
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-[#f29c52] mr-2" />
                Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
              </p>
              <p className="flex items-center">
                <FaPhone className="text-[#f29c52] mr-2" />
                Phone Number: (800) 123 456 789
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-[#f29c52] mr-2" />
                Mail: outstock@support.com
              </p>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              INFORMATION
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Search</li>
              <li className="cursor-pointer">Delivery Information</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms & Condition</li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer">Shipping Policy</li>
              <li className="cursor-pointer">Help & Contact Us</li>
              <li className="cursor-pointer">Returns & Refunds</li>
              <li className="cursor-pointer">Online Stores</li>
              <li className="cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center flex md:flex-row flex-col items-center md:items-end justify-between text-sm pt-8 px-2">
          <p>
            Copyright © <span className="text-[#f29c52]">Twwir</span>. All
            rights reserved.
          </p>
          <div className="flex justify-center items-center gap-6 mt-4 text-lg">
            <a href="#" target="_blank">
              <FaFacebookF className="hover:text-[#f29c52] cursor-pointer" />
            </a>
            <a href="#" target="_blank">
              <FaTwitter className="hover:text-[#f29c52] cursor-pointer" />
            </a>
            <a href="#" target="_blank">
              <FaPinterestP className="hover:text-[#f29c52] cursor-pointer" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram className="hover:text-[#f29c52] cursor-pointer" />
            </a>
            <a href="#" target="_blank">
              <FaTiktok className="hover:text-[#f29c52] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
