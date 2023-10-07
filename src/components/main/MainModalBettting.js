import React, { useState } from "react";
import taxans from "../../assets/taxans.png";
import { DolarIcon } from "../../icons-svgs/Svgs";
import { useNavigate } from "react-router-dom";
export default function MainModalBettting({ isOpen, onClose }) {
  const [toggle, settoggle] = useState(false);
  const navigate =useNavigate()
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-[#000000e8] justify-center items-center fixed top-0 left-0 right-0 z-50  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-[#100A04] rounded-3xl shadow">
          <div className="rounded-t-3xl bg-[#1F1307]  px-6  py-2 ">
            <div className=" flex items-center">
              <p className=" text-[#FF993C]">WNBA</p>
              <button
                onClick={() => onClose()}
                type="button"
                className=" bg-[#1F1307] focus:border-transparent text-sm w-10 h-10 ml-auto inline-flex justify-center items-center rounded-full text-[#FF993C]"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center lg:gap-4 gap-2 mb-2">
                <img src={taxans} alt="err" className="w-14 " />
                <h2 className="text-2xl text-[#FF993C]">  <span className="fontfamily"> HOU</span></h2>
              </div>
              <div>
                <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                  <span className="text-[#FF993C]">MoneyLine</span>

                  <span className="text-white bg-[#299E00] px-3 py-1 rounded-2xl">
                    -199
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row px-6 gap-3 py-2">
            <div className="flex flex-col lg:w-[33%]">
              <label className="text-[#FF993C] ps-4 pb-1 font-semibold">
                Odds:
              </label>
              <div className="relative">
                <input
                  className={`w-full bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-5 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col lg:w-[33%]">
              <label className="text-[#FF993C] ps-4 pb-1 font-semibold">
                Risk:
              </label>
              <div className="relative">
                <input
                  className={`w-full bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-5 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
                  type="text"
                />
                <span className="absolute top-[10px] right-3">
                  {" "}
                  <DolarIcon />
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:w-[33%]">
              <label className="text-[#FF993C] ps-4 pb-1 font-semibold">
                Final bet amount:
              </label>
              <div className="relative">
                <input
                  className={`w-full bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-5 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
                  type="text"
                />
                <span className="absolute top-[10px] right-3">
                  {" "}
                  <DolarIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 py-2">
            <div className="flex justify-between">
              <p className="text-[#FF993C]">Leverage slider</p>
              <div className="flex items-center gap-2">
                <label className="text-[#ff9a3c51]">
                  {toggle ? "ON" : "Off"}
                </label>
                <label className="relative inline-flex items-center mr-5 cursor-pointer ">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => {
                      settoggle(!toggle);
                    }}
                  />
                  <div className="w-11 h-6 bg-[#5e3a18] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#100A04]  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#FF993C]"></div>
                </label>
              </div>
            </div>
            <div className="relative">
              <input
                id="small-range"
                type="range"
                className="w-full h-[1px] mb-6 bg-[#FF993C] rounded-lg appearance-none cursor-pointer range-sm"
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
            <div className="bg-[#5e3a1823] p-4 rounded-3xl mt-5 mb-2" >
              <div className="flex justify-between">
              <h2 className="text-[#FF993C]">Leverage</h2>
              <span className="text-black bg-[#FF993C] px-4 py-1 rounded-2xl font-semibold ">
                    5x
               </span>
               </div>
               <div className="w-[100%] bg-[#FF993C] h-[1px] my-4"></div>
              <div className="flex justify-between">
              <h2 className="text-[#FF993C]">Point of Liquidation</h2>
              <span className="text-black bg-[#FF993C] px-4 py-1 rounded-2xl font-semibold ">
                    +238
               </span>
               </div>
            </div>
          </div>
            <div className="bg-[#1F1307] pt-4 px-4 rounded-b-3xl mt-5 mb-2" >
              <p className="ms-4 font-semibold mb-1 text-[#FF993C]">To Win:</p>
              <div className="flex justify-between bg-[#5e3a1823] items-center py-[10px] px-3 rounded-full">
              <h2 className="text-[#FF993C]">$1990</h2>
             <DolarIcon/>
               </div>
              <button onClick={()=>{navigate("/statsmain")}} className="bg-[#FF993C] py-2 rounded-full w-[100%] mt-4 mb-2 text-black font-semibold text-lg">Place bet</button>
              
            </div>
        </div>
      </div>
    </div>
  );
}
