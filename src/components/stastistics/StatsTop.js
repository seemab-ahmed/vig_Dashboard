import React from 'react'
import { ShowMore, WhiteDolarIcon } from '../../icons-svgs/Svgs'

export default function StatsTop() {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row flex-wrap gap-3 py-2">
    <div className="flex flex-col lg:w-[25%] justify-between">
      <label className="text-[#FF993C] ps-4 pb-1 text-sm font-semibold">
        Total bets
      </label>
      <label className="text-[#ff9a3c6e] ps-4 pb-1 text-xs font-semibold w-[10rem]">
        completed across all sports
      </label>
      <div className="relative">
        <input
          className={`w-full bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-5 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C]`}
          type="text"
        />
        <span className="absolute top-[10px] right-3">
          {" "}
          <ShowMore />
        </span>
      </div>
    </div>
    <div className="flex flex-col lg:w-[20%] justify-between ">
      <div className="flex flex-col">
        <label className="text-[#FF993C] ps-4 pb-1 text-sm font-semibold">
          Total bets
        </label>
        <label className="text-[#ff9a3c6e] ps-4 pb-1 text-xs font-semibold ">
          completed across all sports
        </label>
        <div className=" overflow-auto flex mt-2 bg-gradient-light">
          <div className="flex space-x-2  py-3 w-[10em] ">
            <button className="tab-button-wallet font-semibold text-[#FF993C] px-3 rounded-3xl bg-[#ff9a3c30] ">
              MLS<span className="fontfamily">(1)</span>
            </button>
            <button className="tab-button-wallet font-semibold text-[#FF993C] px-3 rounded-3xl bg-[#ff9a3c30] ">
              MLS<span className="fontfamily">(2)</span>
            </button>
            <button className="tab-button-wallet font-semibold text-[#FF993C] px-3 rounded-3xl bg-[#ff9a3c30] ">
              MLS<span className="fontfamily">(3)</span>
            </button>
            <button className="tab-button-wallet font-semibold text-[#FF993C] px-3 rounded-3xl bg-[#ff9a3c30] ">
              MLS<span className="fontfamily">(4)</span>
            </button>
            <button className="tab-button-wallet font-semibold text-[#FF993C] px-3 rounded-3xl bg-[#ff9a3c30] ">
              MLS<span className="fontfamily">(5)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:w-[25%] justify-between">
      <div className="flex flex-col">
        <label className="text-[#FF993C] ps-4 pb-1 font-semibold">
          P&L for today
        </label>
        <label className="text-[#ff9a3c6e] ps-4 pb-1 text-xs font-semibold w-[10rem]">
          +15.00%
        </label>
      </div>
      <div className="relative">
        <input
          className={`w-full bg-[#61AD00] border border-[#ff9a3c62] rounded-full text-white  py-2   px-5 placeholder:text-white font-bold text-lg focus:border-[#FF993C] outline-[#FF993C] `}
          type="text"
          placeholder="+ $54"
        />
        <span className="absolute top-[10px] right-3">
          {" "}
          <WhiteDolarIcon color="white" />
        </span>
      </div>
    </div>
    <div className="flex flex-col lg:w-[25%] justify-between">
      <div className="flex flex-col">
        <label className="text-[#FF993C] ps-4 pb-1 font-semibold">
          Total winnings
        </label>
        <label className="text-[#ff9a3c6e] ps-4 pb-1 text-xs font-semibold w-[10rem]">
          +245$ per month
        </label>
      </div>
      <div className="relative">
        <input
          className={`w-full bg-[#61AD00] border border-[#ff9a3c62] rounded-full text-white  py-2   px-5 placeholder:text-white font-bold text-lg focus:border-[#FF993C] outline-[#FF993C] `}
          type="text"
          placeholder="+ $245"
        />
        <span className="absolute top-[10px] right-3">
          {" "}
          <WhiteDolarIcon color="white" />
        </span>
      </div>
    </div>
  </div>
  )
}
