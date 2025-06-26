import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface UpperPageTitleProps {
  image: string | StaticImageData;
  title: string;
  subtitle?: string;
  link?: string;
  textColor?: string;
}

const UpperPageTitle = ({
  image,
  title,
  subtitle,
  link,
  textColor = "text-white",
}: UpperPageTitleProps) => {
  return (
    <div className="relative w-full h-[520px]  bg-black bg-cover bg-center flex items-center justify-center">
      {image && (
        <Image
          src={image}
          alt={title || "Page Background"}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-40 object-cover object-center"
          quality={100}
        />
      )}
      <div className={`relative z-10 text-center ${textColor}`}>
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className=" mt-4">{subtitle}</p>}

        <div className="flex items-center justify-center mt-4 gap-2 text-sm font-light">
          <Link href="/" className="opacity-70 hover:opacity-100 transition duration-300">
            Home
          </Link>
          <p>/ {link}</p>
        </div>
      </div>
    </div>
  );
};

export default UpperPageTitle;
