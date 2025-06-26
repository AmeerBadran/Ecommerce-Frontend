"use client";

import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={scrollToTop}
          aria-label="Go to top"
          className="fixed bottom-10 right-7 z-50 size-16 flex items-center justify-center bg-secondary text-white rounded-full shadow-lg hover:bg-secondary-100 transition-colors duration-300 cursor-pointer"
        >
          <MdKeyboardDoubleArrowUp className="text-3xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoTopButton;
