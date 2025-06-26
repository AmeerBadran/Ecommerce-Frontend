"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSliderProps {
  children: React.ReactNode;
}

const PostsSlider = ({ children }: ProductSliderProps) => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      slides: {
        perView: 3,
        spacing: 10,
      },
      breakpoints: {
        "(max-width: 1140px)": {
          slides: { perView: 2,spacing:20 },
        },
        "(max-width: 624px)": {
          slides: { perView: 1 },
        },
      },
    });

  return (
    <div className="slider-container relative lg:px-6">
      <div ref={sliderRef} className="keen-slider w-full mx-auto">
        {React.Children.map(children, (child) => (
          <div className="keen-slider__slide">{child}</div>
        ))}
      </div>

      <div className="slider-buttons pointer-events-none absolute inset-0 z-10">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="slider-button left-button left-0"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="slider-button right-button right-0"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default PostsSlider;
