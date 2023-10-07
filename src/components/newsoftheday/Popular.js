import { useState } from "react";
import SliderPlayer from "../../assets/SliderPlayer.png";
import sliderracbi from "../../assets/sliderracbi.png";
import { BackArrow, ForwardArrow } from "../../icons-svgs/Svgs";

export default function Popular() {
  const images = [
    sliderracbi,
    SliderPlayer,
    sliderracbi,
    SliderPlayer,
    sliderracbi,
    SliderPlayer,
    sliderracbi,
  ];
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
    <>
      <div className="relative lg:ps-32 ps-10 mt-4">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:pe-32 pe-10">
          <div className="flex justify-start items-start text-left w-full">
          <h1 className="lg:text-[42px] text-3xl text-[#FF993C]  mb-3 lg:py-5 md:py-5">
            PO<span className="fontfamily">P</span>ULAR
          </h1>
          </div>
          <div className="flex items-center justify-between pb-4 lg:w-auto md:w-auto gap-3 w-full">
            <button
              className={`tab-button-wallet font-semibold flex gap-2 h-[40px] w-[40px] rounded-full bg-[#29190B] justify-center items-center`}
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
            className="flex gap-4 transition-transform w-full duration-500 ease-in-out transform"
            style={{
              transform: `translateX(-${
                (currentIndex / images.length) * 100
              }%)`,
              width: `${images.length * 23}%`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex flex-col gap-3 items-center">
                <div className="w-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <div className="flex">
                    <p className="text-[#E74A20] w-[10em]">Dating</p>
                    <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
                      Exclusive
                    </button>
                  </div>
                  <div>
                    <h2 className="text-[#FF993C] leading-6 lg:text-[20px] py-3 lg:pe-24 ">
                      Nike Leans Into In-Person Fitness As Lululemon Cuts Back
                    </h2>
                    <p className="text-[#FF993C50] w-[15em] truncate">
                      Sports apparel giant Nike has launched “Nike Studios” as
                      the brand jumpstarts its in-person fitness presence with a
                      new group training concept.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
