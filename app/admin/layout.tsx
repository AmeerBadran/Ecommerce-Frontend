"use client";

import AdminNavbar from "@/components/layout/AdminNavbar";
import Sidebar from "@/components/layout/Sidebar";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarSize, setSidebarSize] = useState<"small" | "big">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sidebarSize");
      if (stored === "small" || stored === "big") {
        return stored;
      }
    }
    return "big";
  });

  const [windowSize, setWindowSize] = useState({
    isSmallScreen: false,
    isHalfScreen: false,
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(windowSize.isSmallScreen, windowSize.isHalfScreen);
  useEffect(() => {
    const storedSize = localStorage.getItem("sidebarSize");
    if (storedSize === "small" || storedSize === "big") {
      setSidebarSize(storedSize);
    }

    const updateSize = () => {
      const width = window.innerWidth;
      const isSmall = width < 820;
      const isHalf = width < 1280;

      setWindowSize({
        isSmallScreen: isSmall,
        isHalfScreen: isHalf,
      });

      if (isSmall) setIsSidebarOpen(false);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarSize", sidebarSize);
  }, [sidebarSize]);

  const getContentMargin = () => {
    if (windowSize.isSmallScreen) return "";
    return sidebarSize === "big"
      ? "2md:ml-[280px]"
      : "2md:ml-[85px]";
  };

  return (
    <div className="flex overflow-y-auto min-h-screen">
      <Sidebar
        sidebarSize={sidebarSize}
        setSidebarSize={setSidebarSize}
        isHalfScreen={windowSize.isHalfScreen}
        isSmallScreen={windowSize.isSmallScreen}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      {windowSize.isSmallScreen && isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
      <div
        className={`w-full ${getContentMargin()} transition-all flex flex-col items-end duration-200 `}
      >
        <AdminNavbar
          sidebarSize={sidebarSize}
          setSidebarSize={setSidebarSize}
          isHalfScreen={windowSize.isHalfScreen}
          isSmallScreen={windowSize.isSmallScreen}
          onSidebarToggle={() => setIsSidebarOpen((prev) => !prev)}
        />

        <main
          className={`bg-white-200 w-full min-h-[calc(100vh-70px)] mt-[70px] py-6 px-7 transition-all duration-300 ${getContentMargin()}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
