import Image from "next/image";
import React from "react";
import image1 from "@/public/images/willDelete/13-1_788x1000.png";
import image2 from "@/public/images/willDelete/13_1c04d432-a1ba-4e9b-88a1-b9c3aecbab9d_700x900.png";
import image3 from "@/public/images/willDelete/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_700x900.png";
import image4 from "@/public/images/willDelete/5_700x900.png";
import image5 from "@/public/images/willDelete/11_700x900.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const productImages = [image1, image2, image3, image4, image5];

const ProductImage = () => {
  const [zoomPos, setZoomPos] = React.useState<{ x: number; y: number } | null>(
    null
  );
  const imageContainerRef = React.useRef<HTMLDivElement>(null);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setSelectedIndex(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = imageContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleMouseLeave = () => setZoomPos(null);

  return (
    <div className="col-span-1 md:col-span-3 w-full flex lg:flex-row flex-col-reverse my-5 gap-3">
      <div className="lg:w-2/12 w-full flex lg:flex-col lg:mt-0 mt-20 gap-3">
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`relative w-full aspect-[10/12] border cursor-pointer ${
              selectedIndex === index
                ? "border-2 border-secondary"
                : "border-gray-300"
            }`}
            onClick={() => {
              setSelectedIndex(index);
              instanceRef.current?.moveToIdx(index);
            }}
          >
            <Image
              src={image}
              alt={`Product Image ${index + 1}`}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 1024px) 100px, 100%"
            />
          </div>
        ))}
      </div>

      <div className="lg:w-10/12 w-full relative slider-container max-h-[600px] lg:max-h-max max-w-[700px] mx-auto">
        <div className="slider-buttons pointer-events-none absolute inset-0 z-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="slider-button left-button left-0"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="slider-button right-button right-[10px]"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* السلايدر نفسه */}
        <div ref={sliderRef} className="keen-slider ">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="keen-slider__slide relative aspect-[1/1] max-h-[600px] lg:max-h-max lg:max-w-[700px]"
              ref={index === selectedIndex ? imageContainerRef : null}
              onMouseMove={
                index === selectedIndex ? handleMouseMove : undefined
              }
              onMouseLeave={
                index === selectedIndex ? handleMouseLeave : undefined
              }
              style={{ cursor: zoomPos ? "crosshair" : "pointer" }}
            >
              <Image
                src={image}
                alt={`Product Image ${index + 1}`}
                fill
                className="object-cover aspect-[1/1] max-h-[600px] lg:max-h-max max-w-max lg:max-w-[700px]"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* نافذة التكبير */}
        {zoomPos && (
          <div
            className="hidden md:block absolute border border-gray-300 top-0 right-0 lg:top-0 lg:right-[-22rem] 2md:w-80 w-28 2md:h-80 h-28 overflow-hidden z-10 bg-white"
            style={{
              backgroundImage: `url(${productImages[selectedIndex].src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "400% 450%",
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductImage;
