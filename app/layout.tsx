import type { Metadata } from "next";
import "./globals.css";
import GoTopButton from "@/components/ui/GoTopButton";
import "keen-slider/keen-slider.min.css";

export const metadata: Metadata = {
  title: "Ameer Ecommerce",
  description: "This is the first project using next js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoTopButton />
      </body>
    </html>
  );
}
