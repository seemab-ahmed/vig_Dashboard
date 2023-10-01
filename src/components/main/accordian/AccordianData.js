import React from "react";
import taxans from "../../../assets/taxans.png";
import Graph from "../../../assets/Graph.png";
import { ButtonRightArrow, StarSvg } from "../../../icons-svgs/Svgs";

function AccordianData({ hiddenflag }) {
  return (
    <div className=" mb-16">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-0 pb-3">
        <p className="text-[#FF993C]">Aug 11, 2023</p>
        <div>
        {hiddenflag ? (
          <div className="flex items-center gap-5">
         <p className="text-[#FF993C] lg:text-2xl text-center">
         Today 14:00
            </p>
       
        </div>
        ) : (
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
        )}
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            href="#"
            className=" p-3  rounded-full bg-[#29190B]"
            aria-current="page"
          >
            <StarSvg />
          </button>
          <button
            href="#"
            className=" p-3  rounded-full bg-[#29190B] text-[#FF993C] flex items-center gap-2"
            aria-current="page"
          >
            More info <ButtonRightArrow />
          </button>
        </div>
      </div>
      <div className="flex lg:justify-between justify-center lg:gap-5 gap-10">
        <div>
          <div className="flex items-center lg:gap-9 gap-2 mb-2">
            <img src={taxans} alt="err" className="w-20 " />
            <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 flex-wrap">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] ">MoneyLine</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C]">Bet</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C]">Bet</span>
                <span className="text-[#CB233E]">-199</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C]">Bet</span>
                <span className="text-[#CB233E]">-199</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl">
                  -199
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={`${hiddenflag ?"":"border border-[#ff9a3c22]" } ps-5 pe-12 py-3  flex-col justify-between rounded-3xl lg:flex hidden w-[15em]`}>
          <div>
            <p className="text-[#ff9a3c6f]">Total better:</p>
            <p className="text-[#ff9a3c] text-lg">124</p>
          </div>
          <div>
            <p className="text-[#ff9a3c6f]">Total Volume Pool:</p>
            <p className="text-[#ff9a3c]  text-lg">$ 43,532</p>
          </div>
        </div>
        <div className="lg:flex hidden flex-col justify-between pt-3 w-[15em]">
          <div className="flex gap-1">
            <p className="text-[#ff9a3c6f]">TVP :</p>
            <p className="w-[8em] overflow-auto flex ">
              <span className="text-[#084261]"> 5X</span>
              <span className="text-[#ff9a3c6f]"> (30%)</span>
              <span className="text-white"> 2X</span>
              <span className="text-[#ff9a3c6f]">(25%)</span>
              <span className="text-[#084261]">3X</span>
              <span className="text-[#ff9a3c6f]">(25%)</span>
              <span className="text-white">4X</span>
              (20%)
            </p>
          </div>
          <div>
            <img src={Graph} alt="err" />
          </div>
          <div className="flex lg:flex-row flex-col gap-3">
            <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full  text-left">
              Advance info
            </button>
            <button className="flex items-center gap-1 bg-[#FF993C] text-black py-2 ps-4 px-5 rounded-full  text-left">
              10m$
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center lg:gap-9 gap-2 mb-2">
            <img src={taxans} alt="err" className="w-20 " />
            <h2 className="text-2xl text-[#FF993C]"> HOU</h2>
          </div>
          <div className="flex gap-1 flex-col lg:flex-row flex-wrap">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] ">MoneyLine</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C]">Bet</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C]">Bet</span>
                <span className="text-[#CB233E]">-199</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-3 lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C]">Bet</span>
                <span className="text-[#CB233E]">-199</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl">
                  -199
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordianData;
