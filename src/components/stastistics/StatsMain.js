import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import {
  ArrowDown,
} from "../../icons-svgs/Svgs";
import taxans from "../../assets/taxans.png";
import StatsTop from "./StatsTop";
export default function StatsMain() {
  return (
    <div className="bg-[#100a04]">
      {" "}
      <Navbar />
      <div>
        <div className="lg:px-32 px-10">
          <h1 className="text-[#FF993C] lg:text-5xl text-3xl font-semibold my-5">
            Statistics
          </h1>
          <StatsTop />
        </div>
        <div className="bg-[#150d04]">
          <div className="lg:px-32 px-10">
            <h1 className="text-[#FF993C] lg:text-5xl text-3xl py-8 font-semibold my-4">
              Betting history
            </h1>

            <div>
              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-3 pb-3">
                <p className="text-[#FF993C]">Aug 11, 2023</p>
                <div>
                  <div className="flex items-center gap-5">
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      2ND QTR
                    </h2>
                    <p className="text-[#FF993C] text-2xl text-center">
                      1{"  "}:{"  "}2
                    </p>
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      <span>&#128308;</span> 08:45
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" py-2 px-4 font-semibold  rounded-full bg-[#FF993C] text-black flex items-center gap-2"
                    aria-current="page"
                  >
                    Game in Play
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center lg:gap-28 gap-10 mt-10 mb-8 ">
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col justify-center items-center gap-3">
                  <div className="flex items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
                  </div>
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                </div>
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col-reverse justify-center items-center gap-3">
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <div>
                      <p className="text-[#ff9a3c5f] text-sm font-semibold">
                        {" "}
                        Result:
                      </p>
                      <p className="text-white px-2 py-1 text-sm bg-[#CB233E] rounded-full flex items-center justify-center gap-1">
                        -4.01$ <ArrowDown />
                      </p>
                    </div>
                  </div>

                  <div className="flex :items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-3 pb-3">
                <p className="text-[#FF993C]">Aug 11, 2023</p>
                <div>
                  <div className="flex items-center gap-5">
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      2ND QTR
                    </h2>
                    <p className="text-[#FF993C] text-2xl text-center">
                      1{"  "}:{"  "}2
                    </p>
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      <span>&#128308;</span> 08:45
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" py-2 px-4 font-semibold  rounded-full bg-[#1E1E1E] text-white flex items-center gap-2"
                    aria-current="page"
                  >
                    Event Ended
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center lg:gap-28 gap-10 mt-10 mb-8 ">
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col justify-center items-center gap-3">
                  <div className="flex items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
                  </div>
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                </div>
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col-reverse justify-center items-center gap-3">
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <div>
                      <p className="text-[#ff9a3c5f] text-sm font-semibold">
                        {" "}
                        Result:
                      </p>
                      <p className="text-white px-2 py-1 text-sm bg-[#CB233E] rounded-full flex items-center justify-center gap-1">
                        -4.01$ <ArrowDown />
                      </p>
                    </div>
                  </div>

                  <div className="flex :items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-3 pb-3">
                <p className="text-[#FF993C]">Aug 11, 2023</p>
                <div>
                  <div className="flex items-center gap-5">
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      2ND QTR
                    </h2>
                    <p className="text-[#FF993C] text-2xl text-center">
                      1{"  "}:{"  "}2
                    </p>
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      <span>&#128308;</span> 08:45
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" py-2 px-4 font-semibold  rounded-full bg-[#CB233E] text-white flex items-center gap-2"
                    aria-current="page"
                  >
                    Bet Closed
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center lg:gap-28 gap-10 mt-10 mb-8 ">
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col justify-center items-center gap-3">
                  <div className="flex items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
                  </div>
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                </div>
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col-reverse justify-center items-center gap-3">
                  <div>
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <div>
                      <p className="text-[#ff9a3c5f] text-sm font-semibold">
                        {" "}
                        Result:
                      </p>
                      <p className="text-white px-2 py-1 text-sm bg-[#CB233E] rounded-full flex items-center justify-center gap-1">
                        -4.01$ <ArrowDown />
                      </p>
                    </div>
                  </div>

                  <div className="flex :items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}