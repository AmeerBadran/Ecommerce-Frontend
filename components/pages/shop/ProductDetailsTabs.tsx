"use client";
import { AnimatePresence, motion } from "framer-motion";
import Additional from "@/components/features/Additional";
import Description from "@/components/ui/Description";
import Reviews from "@/components/features/Reviews";
import ShippingReturn from "@/components/features/ShippingReturn";
import { useState } from "react";
import userImage from "../../../public/images/willDelete/user.png";
import noUserImage from "../../../public/images/noUser.png";
import { StaticImageData } from "next/image";

const descriptionContent = {
  paragraphs: [
    "Sapien luctus id justo suscipit nonummy eget hymenaeos phasellus felis enim, dolor tortor cras nonummy sit amet nam wisi suspendisse mattis mi vel leo.",
    "Don’t ever play yourself. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! The other day the grass was brown, now it’s green because I ain’t give up. Never surrender",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
  ],
  bulletPoints: [
    "Claritas est etiam processus dynamicus.",
    "Qui sequitur mutationem consuetudium lectorum.",
    "Claritas est etiam processus dynamicus.",
    "Qui sequitur mutationem consuetudium lectorum.",
    "Claritas est etiam processus dynamicus.",
    "Qui sequitur mutationem consuetudium lectorum.",
  ],
};

const tabs = ["Description", "Additional", "Shipping & Return", "Reviews"];

type Review = {
  id: number;
  name: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  image: StaticImageData;
};

const shippingReturnData = {
  returns: {
    title: "Returns Policy",
    paragraphs: [
      "You may return most new, unopened items within 30 days of delivery for a full refund. We’ll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).",
      "You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).",
      "If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We’ll notify you via e-mail of your refund once we’ve received and processed the returned item.",
    ],
  },
  shipping: {
    title: "Shipping",
    paragraphs: [
      "We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.",
      "When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.",
      "Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.",
    ],
  },
};

const reviews: Review[] = [
  {
    id: 1,
    name: "k.f.",
    rating: 5,
    title: "Very good",
    comment:
      "Great product, fast shipping, and very good quality. Would buy again!",
    date: "2024-05-14",
    image: userImage,
  },
  {
    id: 2,
    name: "Amal S.",
    rating: 3,
    title: "Good overall",
    comment: "Item as described, but the packaging could be improved.",
    date: "2024-05-10",
    image: noUserImage,
  },
  {
    id: 3,
    name: "Ali T.",
    rating: 4,
    title: "Perfect",
    comment: "Exceeded my expectations. Highly recommended!",
    date: "2024-05-01",
    image: noUserImage,
  },
  {
    id: 5,
    name: "Ameer B.",
    rating: 5,
    title: "Perfect",
    comment: "Exceeded my expectations. Highly recommended!",
    date: "2024-05-01",
    image: noUserImage,
  },
];

const additionalInfo = [
  { label: "Color", value: "Black" },
  { label: "Material", value: "100% Cotton" },
  { label: "Size", value: "Medium" },
  { label: "Weight", value: "300g" },
  { label: "Manufacturer", value: "BrandName Co." },
];

export default function ProductDetailsTabs() {
  const [activeTab, setActiveTab] = useState("Reviews");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return <Description content={descriptionContent} />;
      case "Additional":
        return <Additional data={additionalInfo} />;
      case "Shipping & Return":
        return <ShippingReturn content={shippingReturnData} />;
      case "Reviews":
        return <Reviews reviews={reviews} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto mt-8 px-4">
      <div className="flex justify-center gap-x-20 gap-y-6 border-b flex-wrap border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
