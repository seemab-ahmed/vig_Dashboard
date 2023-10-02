import React, { useState } from "react";
import SliderPlayer from "../../assets/SliderPlayer.png";
import sliderracbi from "../../assets/sliderracbi.png";
import { BackArrow, ForwardArrow } from "../../icons-svgs/Svgs";
const images = [
    sliderracbi,
    SliderPlayer,
    sliderracbi,
  ];

const TopMainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative lg:ps-32 ps-10 mt-4">
      <div className="flex justify-between items-center lg:pe-32 pe-10">
        <h1 className="lg:text-5xl text-3xl text-[#FF993C] mb-3">RECOMMENDED</h1>
        <div className="lg:flex hidden w-[10rem] items-center justify-between">
          <button
            className={`tab-button-wallet font-semibold flex gap-2  h-[40px] w-[40px] rounded-full bg-[#29190B] justify-center items-center`}
            onClick={prevSlide}
          >
            <BackArrow />
          </button>
          <div className=" flex justify-center gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`p-[6px] rounded-full ${
              index === currentIndex
                ? "bg-[#FF993C]"
                : "bg-[#563618] hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
          <button
            className={`tab-button-wallet font-semibold flex gap-2  h-[40px] w-[40px] rounded-full bg-[#29190B] justify-center items-center`}
            onClick={nextSlide}
          >
            <ForwardArrow />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out transform"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-[31.5em]">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
              <div className="flex justify-between px-8">
                <h3 className="text-2xl text-[#FF993C]">NFL</h3>
                <button className="text-[#FF993C] flex items-center border-b border-[#ff9a3c10]">
                  All matches <ForwardArrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default TopMainSlider;
