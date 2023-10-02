import React from "react";

export default function BettingGraph() {
  return (
    <div>
      <div className="w-1/2">
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
          <div>
            <p className="text-[#FF993C] text-sm">Odds Rating</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
