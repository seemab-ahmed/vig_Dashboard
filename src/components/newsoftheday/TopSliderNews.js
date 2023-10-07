import React, { useState } from "react";
import Sliderbigimage from "../../assets/Sliderbigimage.png";
import sliderracbi from "../../assets/sliderracbi.png";
import {
  BackArrow,
  ButtonRightArrow,
  ForwardArrow,
} from "../../icons-svgs/Svgs";

const images = [
  Sliderbigimage,
  sliderracbi,
  Sliderbigimage,
  sliderracbi,
  Sliderbigimage,
  sliderracbi,
  Sliderbigimage,
  sliderracbi,
];

const TopSliderNews = () => {
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
    <div className="relative lg:ps-32 px-5">
      <div className="flex lg:flex-row flex-col justify-between  lg:pe-32 pe-10">
        <h1 className="lg:text-[62px] text-3xl text-[#FF993C] mb-10">
       NE<span className="fontfamily">W</span>S O<span className="fontfamily">F</span> TH<span className="fontfamily">E</span> D<span className="fontfamily">A</span>Y
        </h1>
        <div className="flex  items-center justify-between mb-4">
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
                    : "bg-[#563618] "
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
        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform w-full duration-500 ease-in-out transform"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / images.length)
              }%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                className="flex lg:flex-row flex-col gap-5 justify-between w-full"
                key={index}
              >
                <div className="w-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full max-h-[25em] object-cover"
                  />
                </div>
                <div className="text-center mt-4 w-full flex flex-col justify-center pe-4">
                  <div className="flex justify-between">
                    <p className="text-[#E74A20]">Dating</p>
                    <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
                      Exclusive
                    </button>
                  </div>
                  <div>
                    <h2 className="text-[#FF993C] underline underline-offset-2 py-3 lg:text-4xl text-2xl text-start">
                      Dolphins, DT Christian Wilkins unable to come to terms on
                      new deal; Miami signs DL Zach Sieler to extension
                    </h2>
                    <p className="text-[#FF993C] text-start">
                      As the regular season is almost here, teams are looking to
                      lock down players on deals. However, after months of
                      negotiations, the Miami Dolphins and defensive tackle
                      Christian Wilkins were unable to come to terms on a new
                      deal, NFL Network Insider Ian Rapoport reported Sunday.
                    </p>
                  </div>
                  <div>
                    <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left mt-5">
                      Read Now <ButtonRightArrow />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex  py-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`flex flex-row gap-5 items-center justify-center rounded-2xl p-4 me-5 `}
            >
              <div className=" h-[5em] w-[8em] rounded-3xl">
                <img
                  className="w-full h-full rounded-3xl"
                  src={Sliderbigimage}
                  alt=""
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-[#E74A20]">Dating</p>
                  <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
                    Exclusive
                  </button>
                </div>
                <div>
                <h2 className="text-[#FF993C] leading-5 lg:text-[20px] py-3  ">
                    Nike Leans Into In-Person Fitn...
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSliderNews;
