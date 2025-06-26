"use client";
import Image from "next/image";

const images = [
  "/images/aboutImage/image1.jpg",
  "/images/aboutImage/image2.jpg",
  "/images/aboutImage/image3.jpg",
  "/images/aboutImage/image4.jpg",
  "/images/aboutImage/image5.jpg",
];

const ImageGallery = () => {
  return (
    <div className="max-w-[1300px] px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] mb-25 gap-4">
      {/* الصورة الكبيرة */}
      <div className="sm:col-span-2 sm:row-span-2">
        <Image
          src={images[0]}
          alt="Main image"
          className="w-full h-full object-cover rounded-lg"
          width={800}
          height={600}
        />
      </div>

      {/* الصور الثانوية */}
      <div className="">
        <Image
          src={images[1]}
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg"
          width={400}
          height={300}
        />
      </div>
      <div className="sm:row-span-2">
        <Image
          src={images[4]}
          alt="Image 3"
          className="w-full h-full object-cover rounded-lg"
          width={400}
          height={600}
        />
      </div>
      <div className="">
        <Image
          src={images[3]}
          alt="Image 4"
          className="w-full h-full object-cover rounded-lg"
          width={400}
          height={300}
        />
      </div>
      <div className="">
        <Image
          src={images[2]}
          alt="Image 5"
          className="w-full h-full object-cover rounded-lg"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
