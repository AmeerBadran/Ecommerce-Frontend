"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const textContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.3 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const images = [
  {
    src: "/images/slide21.jpg",
    title: "Drop Chair",
    subtitle: "The Black Leather Edition",
    description:
      "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
    buttonText: "DISCOVER NOW",
    darkBackground: false,
  },
  {
    src: "/images/slide22.jpg",
    title: "Lighting",
    subtitle: "Creative Furniture",
    description:
      "From luxury watches and chronographs to wall clocks and weather stations, Henning Koppel’s.",
    buttonText: "DISCOVER NOW",
    darkBackground: true,
  },
  {
    src: "/images/slide23.jpg",
    title: "Clock",
    subtitle: "Creative Furniture",
    description:
      "From luxury watches and chronographs to wall clocks and weather stations, Henning Koppel’s.",
    buttonText: "DISCOVER NOW",
    darkBackground: false,
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative lg:h-[600px] 2xl:h-[770px] h-[500px] w-full group px-4"
      id="default-carousel"
    >
      {/* Carousel wrapper */}
      {images.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "absolute inset-0 h-full transition-opacity duration-700 ease-in-out mx-4",
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          )}
        >
          <Image
            src={image.src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="block w-full"
          />

          <AnimatePresence mode="wait">
            {index === current && (
              <motion.div
                key={index}
                variants={textContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={clsx(
                  "absolute left-10 lg:left-1/7 top-1/4 md:top-1/3 z-30 max-w-md space-y-4",
                  image.darkBackground ? "text-white" : "text-black"
                )}
              >
                <div>
                  <motion.h2
                    variants={textItem}
                    className="text-3xl 2md:text-4xl font-semibold "
                  >
                    {image.title}
                  </motion.h2>
                  <motion.h3
                    variants={textItem}
                    className="text-2xl 2md:text-4xl font-semibold"
                  >
                    {image.subtitle}
                  </motion.h3>
                </div>
                <motion.p
                  variants={textItem}
                  className="text-sm text-opacity-80"
                >
                  {image.description}
                </motion.p>
                <motion.button
                  className={clsx(
                    "md:border-2 border md:px-8 px-4 md:py-4 py-2 mt-4 md:text-base text-[12px] transition-all duration-300 md:font-semibold font-base hover:bg-[#BD8448] hover:border-[#BD8448] ",
                    image.darkBackground
                      ? "border-white text-white hover:text-black"
                      : "border-black text-black hover:text-white"
                  )}
                >
                  {image.buttonText}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute transform origin-center z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={clsx(
              "w-3 h-3 rounded-full",
              index === current
                ? "bg-white ring-2 ring-[#BD8448]"
                : "bg-gray-400"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center group-hover:bg-black/30 hover:bg-black/70 transition-all duration-300 p-4">
          <svg
            className="w-4 h-4 text-white/0 group-hover:text-white/60 hover:text-white  transition-all duration-300 rtl:rotate-180 transform origin-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center group-focus:ring-white group-hover:bg-black/30 hover:bg-black/70 transition-all duration-300 p-4">
          <svg
            className="rtl:rotate-180 w-4 h-4 text-white/0 group-hover:text-white/60 hover:text-white  transition-all duration-300 transform origin-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
