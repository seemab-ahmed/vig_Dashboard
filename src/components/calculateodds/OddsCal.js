import React from "react";
import { DolarIcon } from "../../icons-svgs/Svgs";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
export default function OddsCal() {
  return (
    <div className="bg-[#100a04]">
      <Navbar />
      <div className="lg:px-32 px-10 ">
        <h1 className="text-[#FF993C] lg:text-5xl text-3xl font-semibold my-5">
          How to Calculate Odds
        </h1>
        <p className="text-[#ff9a3c4d] text-sm w-[19em]">
          The bet calculator allows you to input your stake & odds in American
          formats to quickly calculate the payout for your bets.
        </p>
        <div className="relative  rounded-t-3xl w-full max-h-full mt-5 bg-[#150D04] ">
          <div className="relative bg-[#1F1307] rounded-t-3xl shadow px-4">
            <div className="flex flex-col justify-between items-center lg:flex-row md:flex-row gap-3 py-2">
              <div className="flex flex-col lg:w-[25%] w-full">
                <label className="text-[#FF993C] text-sm ps-4 pb-1 ">
                  Bet Amount:
                </label>
                <label className="text-[#ff9a3c50] ps-4 pb-1 text-sm ">
                  Choose the amount of money <br /> you want to bet
                </label>
                <div className="relative">
                  <input
                    className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C]  lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
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
                    className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C]  lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
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
                    className="w-full h-[1px] mb-6 bg-[#FF993C] rounded-lg  cursor-pointer range-sm"
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
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 440.00
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Profit:</p>
               
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 876
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Decimal:</p>
               
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 1.909
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Fractional / UK:</p>
              
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 10/11
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Implied Probability:</p>
                
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                52.38%
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-32 px-10 pt-5 pb-10 ">
        <h1 className="text-[#FF993C] lg:text-5xl text-3xl font-semibold my-5">
        How to Calculate Parlay bet Odds
        </h1>
        <p className="text-[#ff9a3c4d] text-sm w-[19em]">
          The bet calculator allows you to input your stake & odds in American
          formats to quickly calculate the payout for your bets.
        </p>
        <div className="relative  rounded-t-3xl w-full max-h-full mt-5 bg-[#150D04] ">
          <div className="relative bg-[#1F1307] rounded-t-3xl shadow px-4">
            <div className="flex flex-col justify-between items-center lg:flex-row md:flex-row gap-3 py-2">
              <div className="flex flex-col lg:w-[25%] w-full">
                <label className="text-[#FF993C] text-sm ps-4 pb-1 ">
                  Bet Amount:
                </label>
                <label className="text-[#ff9a3c50] ps-4 pb-1 text-sm ">
                  Choose the amount of money <br /> you want to bet
                </label>
                <div className="relative">
                  <input
                    className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C]  lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
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
                    className={`w-full bg-transparent focus:bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C]  lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
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
                    className="w-full h-[1px] mb-6 bg-[#FF993C] rounded-lg  cursor-pointer range-sm"
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
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 440.00
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Profit:</p>
               
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 876
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Decimal:</p>
               
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 1.909
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Fractional / UK:</p>
              
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                  $ 10/11
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[8em] h-auto lg:gap-0 gap-3">
              <div>
                <p className="text-[#ff9a3c60]">Implied Probability:</p>
                
              </div>
              <div>
                <h3 className="text-2xl text-[#FF993C] font-semibold">
                52.38%
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
