"use client";
import { FaTrophy, FaUserAlt, FaThumbsUp, FaDrawPolygon } from "react-icons/fa";

const features = [
  {
    icon: <FaTrophy size={60} className="text-[#9AA17B]" />,
    title: "25+ Years of Experience",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    boxClass: " border-r-0 border-b-1 md:border-r",
  },
  {
    icon: <FaUserAlt size={60} className="text-[#9AA17B]" />,
    title: "60,000+ Happy Customer",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    boxClass: "border-b",
  },
  {
    icon: <FaThumbsUp size={60} className="text-[#9AA17B]" />,
    title: "Awesome Performance",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    boxClass: "border-r-0 md:border-r border-b-1 md:border-b-0",
  },
  {
    icon: <FaDrawPolygon size={60} className="text-[#9AA17B]" />,
    title: "Impressive Design",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    boxClass: "",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-300">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col p-10 items-center text-center border-gray-200 ${feature.boxClass}`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
