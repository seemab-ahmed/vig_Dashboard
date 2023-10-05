import React from "react";
import Graphe from "../../assets/Graphe.png";
import BarGraph from "../../assets/BarGraph.png";

export default function BettingGraph() {
  return (
    <div>
  <div className="w-full">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#FF993C] text-xl">
            <span className="fontfamily">Play by Play (Odd Shifts)</span>
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
        <div className="flex flex-col items-end w-full">
          <p className="text-[#FF993C] text-sm mb-3">Odds Rating</p>
          <img src={Graphe} alt="err" className="h-auto w-full lg:h-[100%]" />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#FF993C] text-xl">
            <span className="fontfamily">EVENT</span>
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-3 justify-between w-full">
              <p className="text-[#FF993C] flex items-center gap-1">
                <span className="p-2 rounded-full h-1 bg-[#FF043F]"></span> HOU
              </p>
              <p className="text-[#FF993C] flex items-center gap-1">
                <span className="p-2 rounded-full h-1 bg-[#61AD00]"></span> HOU
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 lg:mt-0">
          <div className="flex justify-between overflow-auto">
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Amount of <br /> Total <br /> Bettors
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Amount of <br /> leverage{" "}
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Point of <br /> entry
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Total <br /> Volume
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Total <br /> Volume
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Point of <br /> entry
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Amount of <br /> leverage{" "}
            </span>
            <span className="text-[#FF993C] text-center leading-4 text-[14px]">
              Amount of <br /> Total <br /> Bettors
            </span>
          </div>
          <img src={BarGraph} alt="err" className="h-auto w-full lg:h-[70%]" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
