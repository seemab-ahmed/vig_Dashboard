import React, { useState } from "react";
import { DolarIcon } from "../../icons-svgs/Svgs";
import Footer from "../utils/Footer";
import { Navbar } from "../utils/Navbar";

const options = [
  { value: "120", label: "120 USD" },
  { value: "121", label: "120 USD" },
  { value: "122", label: "120 USD" },
  { value: "123", label: "120 USD" },
  { value: "124", label: "120 USD" },

];
export default function OddsCal() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const removeSelectedOption = (value) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  };
  return (
    <div className="bg-[#100a04]">
      <Navbar />
      <div className="lg:px-32 px-5 ">
        <div className="my-10">
        <h1 className="text-[#FF993C] lg:text-[62px] text-3xl py-5 lg:my-5 lg:leading-[1em] leading-7">
          H<span className="fontfamily">O</span>W{" "}
          <span className="fontfamily">T</span>O C
          <span className="fontfamily">A</span>LCULATE ODD
          <span className="fontfamily">S</span>
        </h1>
        <p className="text-[#ff9a3c4d] text-sm w-[29em]">
          The bet calculator allows you to input your stake & odds in American
          formats to quickly calculate the payout for your bets.
        </p>
        </div>
        <div className="relative  rounded-t-3xl w-full max-h-full mt-5 bg-[#150D04] ">
          <div className="relative bg-[#1F1307] rounded-t-3xl shadow px-4 lg:py-0 pt-4 ">
          <div className="flex flex-col justify-between items-center lg:flex-row md:flex-row gap-3 py-3">
              <div className="flex flex-col lg:w-[25%] w-full">
                <label className="text-[#FF993C] text-sm ps-4 pb-1 ">
                  Bet Amount:
                </label>
                <label className="text-[#ff9a3c50] ps-4 pb-1 text-sm ">
                  Choose the amount of money <br /> you want to bet
                </label>
                <div className="relative">
                  <input
                    className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full px-5 text-[#FF993C]  lg:py-2 sm:py-2  py-2 focus:outline-[#FF993C] focus:ring-2 focus:ring-[#FF993C] focus:border-[#FF993C] placeholder:text-[#FF993C]`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:w-[25%] w-full">
                <label className="text-[#FF993C] text-sm ps-4 pb-1 ">
                  Odds:
                </label>
                <label className="text-[#ff9a3c50] ps-4 pb-1 text-sm ">
                  Choose the odds you have been <br /> given or would like to
                  test
                </label>
                <div className="relative">
                  <input
                    className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full px-5 text-[#FF993C]  lg:py-2 sm:py-2  py-2 focus:outline-[#FF993C] focus:ring-2 focus:ring-[#FF993C] focus:border-[#FF993C] placeholder:text-[#FF993C]`}
                    type="text"
                  />
                  <span className="absolute top-[10px] right-3">
                    {" "}
                    <DolarIcon />
                  </span>
                </div>
              </div>
              <div className="lg:ps-4 py-2 lg:w-[50%] w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#FF993C]">Leverage slider</p>
                    <p className="text-[#ff9a3c50]  text-sm ">
                      Choose the odds you have been <br /> given or would like
                      to
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input
                    id="small-range"
                    type="range"
                    className="w-full h-[1px] mb-6 bg-[#FF993C] rounded-lg  cursor-pointer range-sm invert"
                  />
                  <div className="-mt-[29px]">
                    <div className=" flex justify-between items-center">
                      <div className="flex flex-col justify-start items-start">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">1x</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">2x</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">3x</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">4x</p>
                      </div>
                      <div className="flex flex-col justify-center items-end">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">5x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between px-4 py-5">
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#FF993C]">Leverage slider</p>
                <p className="text-[#ff9a3c50]  text-sm ">
                  Choose the odds you have been <br /> given or would like to
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 440.00</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Profit:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 876</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Decimal:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 1.909</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Fractional / UK:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 10/11</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Implied Probability:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> 52.38%</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-32 px-5 pt-5 pb-10 ">
      <div className="my-10">
        <h1 className="text-[#FF993C] lg:text-[62px] text-3xl py-5 leading-7 lg:my-5">
          H<span className="fontfamily ">O</span>W{" "}
          <span className="fontfamily ">T</span>O C
          <span className="fontfamily ">A</span>LCULATE PARLAY BET ODD
          <span className="fontfamily ">S</span>
        </h1>
        <p className="text-[#ff9a3c4d] text-sm w-[29em]">
          The bet calculator allows you to input your stake & odds in American
          formats to quickly calculate the payout for your bets.
        </p>
        </div>
        <div className="relative  rounded-t-3xl w-full max-h-full mt-5 bg-[#150D04] ">
        <div className="relative bg-[#1F1307] rounded-t-3xl shadow px-4 lg:py-0 pt-4 ">
          <div className="flex flex-col justify-between items-center lg:flex-row md:flex-row gap-3 py-3  ">
              <div className="flex flex-col lg:w-[25%] w-full">
                <div className="flex flex-col gap-2 mb-5">
                <label className="text-[#FF993C] text-sm ps-4 pb-2 ">
                  Bet Amount:
                </label>
                <label className="text-[#ff9a3c50] ps-4 pb-1 text-sm ">
                  Choose the amount of money <br /> you want to bet
                </label>
                </div>
                <div className="relative">
                
                  <div className="relative w-full">
                  <div
                    className="w-full items-center bg-transparent border border-[#ff9a3c62] rounded-full ps-2 text-[#FF993C]  py-2 focus:ring-2 focus:ring-[#FF993C] focus:border-[#FF993C] placeholder:text-[#FF993C] cursor-pointer flex flex-wrap"
                    onClick={toggleDropdown}
                  >
                    {selectedOptions.length === 0 ? 'Select Options' : null}
                    {selectedOptions.map((option) => (
                      <div
                        key={option}
                        className="bg-[#FF993C] text-black rounded-full px-3 m-1 flex items-center text-xs font-semibold"
                      >
                        {option}
                        <button
                          className="ml-2 p-1 rounded-full bg-transparent  text-[#000] hover:bg-red-500 hover:text-white"
                          onClick={() => removeSelectedOption(option)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-full mt-2 w-full bg-[#FF993C] border border-[#ff9a3c62] rounded-lg shadow-md z-10">
                      <ul className="py-2">
                        {options.map((option) => (
                          <li
                            key={option.value}
                            className={`py-2 px-4 cursor-pointer text-black border-b border-black hover:text-white ${
                              selectedOptions.includes(option.value)
                                ? 'bg-[#FF993C] '
                                : ''
                            }`}
                            onClick={() => handleOptionClick(option.value)}
                          >
                            {option.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                </div>
              </div>
              <div className="flex flex-col lg:w-[25%] w-full">
                <div className="ps-4 flex flex-col gap-2 mb-5">
                <div className="flex justify-between">
                <label className="text-[#FF993C] text-sm  pb-1 ">
                  Odds:
                </label>
                <button className="text-[#FF993C] flex gap-1 rounded-full px-2 "> <span className="text-xl">+</span><span>Add bet</span></button>
                </div>
                <label className="text-[#ff9a3c50] pb-1 text-sm ">
                  Choose the odds you have been <br /> given or would like to
                  test
                </label>
                </div>
                <div className="relative">
                  <input
                     className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full px-5 text-[#FF993C]  lg:py-2 sm:py-2  py-2 focus:outline-[#FF993C] focus:ring-2 focus:ring-[#FF993C] focus:border-[#FF993C] placeholder:text-[#FF993C]`}
                     type="text"
                  />
                  <span className="absolute top-[10px] right-3">
                    {" "}
                    <DolarIcon />
                  </span>
                </div>
              </div>
              <div className="lg:ps-4 py-2 lg:w-[50%] w-full">
                <div className="flex justify-between">
                <div className="flex flex-col gap-2 mb-5">
                    <p className="text-[#FF993C]">Leverage slider</p>
                    <p className="text-[#ff9a3c50]  text-sm ">
                      Choose the odds you have been <br /> given or would like
                      to
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input
                    id="small-range"
                    type="range"
                    className="w-full h-[1px] mb-6 bg-[#FF993C] rounded-lg  cursor-pointer range-sm invert"
                  />
                  <div className="-mt-[29px]">
                    <div className=" flex justify-between items-center">
                      <div className="flex flex-col justify-start items-start">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">1x</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">2x</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">3x</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">4x</p>
                      </div>
                      <div className="flex flex-col justify-center items-end">
                        <span className="bg-[#FF993C] h-[10px] w-[1px]  px-[1px] "></span>
                        <p className="text-[#FF993C]">5x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between px-4 py-5">
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#FF993C]">Leverage slider</p>
                <p className="text-[#ff9a3c50]  text-sm ">
                  Choose the odds you have been <br /> given or would like to
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 440.00</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Profit:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 876</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Decimal:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 1.909</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Fractional / UK:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> $ 10/11</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Implied Probability:</p>
              </div>
              <div>
                <h3 className="text-xl text-[#FF993C] font-semibold">
                  <span className="fontfamily "> 52.38%</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
