import React, { useState } from "react";
import SliderPlayer from "../../assets/SliderPlayer.png";
import sliderracbi from "../../assets/sliderracbi.png";
import { BackArrow, ForwardArrow } from "../../icons-svgs/Svgs";

const images = [sliderracbi, SliderPlayer, sliderracbi];

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
    <div className="relative lg:px-32 px-10 mt-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="lg:text-5xl text-3xl text-[#FF993C] mb-3">
          RECOMMENDED
        </h1>
        <div className="flex items-center justify-center mt-4 lg:mt-0">
          <button
            className="tab-button-wallet font-semibold flex gap-2 h-10 w-10 rounded-full bg-[#29190B] justify-center items-center"
            onClick={prevSlide}
          >
            <BackArrow />
          </button>
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`p-2 rounded-full ${
                  index === currentIndex
                    ? "bg-[#FF993C]"
                    : "bg-[#563618] hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            className="tab-button-wallet font-semibold flex gap-2 h-10 w-10 rounded-full bg-[#29190B] justify-center items-center"
            onClick={nextSlide}
          >
            <ForwardArrow />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{
            transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flexBasis: `${100 / images.length}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full"
              />
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
