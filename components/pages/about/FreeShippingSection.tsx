"use client";
import { FaShippingFast } from "react-icons/fa";

const FreeShippingSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat h-[600px] "
      style={{
        backgroundImage: "url('/images/productsbackground.jpg')",
      }}
    >
      <div className="bg-black/70 w-full h-full ">
        <div className="max-w-3xl mx-auto text-center text-white py-24 px-4 h-full flex flex-col items-center justify-center">
          <div className="flex justify-center mb-6">
            <FaShippingFast size={80} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            All Orders Are Free Shipping
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Donec vehicula cursus vestibulum lectus, sit eros integer varius cum
            turpis et quam congue accumsan ac bibendum ac in erat. Donec posuere
            consectetur volutpat rutrum ac sollicitudin quam quisque at interdum
            dignissim fringilla elit risus lorem condimentum eros mollis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeShippingSection;