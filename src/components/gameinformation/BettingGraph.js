import React from "react";
import Graphe from "../../assets/Graphe.png";
import BarGraph from "../../assets/BarGraph.png";

export default function BettingGraph() {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-col gap-3 justify-center lg:items-start items-center">
          <h2 className="text-[#FF993C] font-semibold text-xl">
            Play by Play (Odd Shifts)
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <p className="text-[#FF993C] flex items-center gap-1">
                <span className="p-2 rounded-full h-1 bg-[#FF043F]"></span> HOU
              </p>
              <p className="text-[#FF993C] flex items-center gap-1">
                <span className="p-2 rounded-full h-1 bg-[#61AD00]"></span> HOU
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:flex-row flex-col items-center justify-between gap-16">
          <div className="flex flex-col items-end lg:w-1/2  ">
            <p className="text-[#FF993C] text-sm mb-3">Odds Rating</p>
            <img src={Graphe} alt="err" className="h-[100%] w-full" />
          </div>
          <div className="lg:w-1/2  w-[100vw]">
            <div className="flex justify-between mb-4 overflow-auto">
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Amount of <br />
                Total
                <br /> Bettors
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Amount of <br />
                leverage{" "}
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Point of <br />
                entry
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Total <br />
                Volume
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Total <br />
                Volume
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Point of <br />
                entry
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Amount of
                <br /> leverage{" "}
              </span>
              <span className="text-[#FF993C] text-center font-semibold leading-4 lg:text-base text-xs">
                Amount of <br />
                Total
                <br /> Bettors
              </span>
            </div>
            <img src={BarGraph} alt="err" className="h-[70%] w-full" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
