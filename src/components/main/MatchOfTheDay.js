import React from "react";
import taxans from "../../assets/taxans.png";
import eagle from "../../assets/eagle.png";
import vs from "../../assets/vs.gif";

export default function MatchOfTheDay() {
  return (
    <div className="flex justify-between lg:flex-row flex-col items-center lg:px-32 px-5  py-[4em]">
      <div className="lg:w-[12em] flex flex-col justify-between pb-5 gap-[1em]">
        <div>
          <h2 className="text-[#FF993C] lg:text-[62px] text-[62px] leading-[1em] text-3xl">
            MA<span className="fontfamily">T</span>CH O
            <span className="fontfamily">F</span> TH
            <span className="fontfamily">E</span> D
            <span className="fontfamily">A</span>Y
          </h2>
        </div>
        <div className="flex lg:flex-col flex-row gap-[1em] justify-between">
          <div>
            <p className="text-[#ff9a3c76] ">Total better:</p>
            <p className="text-[#FF993C]"> 124</p>
          </div>
          <div>
            <p className="text-[#ff9a3c76] ">Total Volume Pool:</p>
            <p className="text-[#FF993C]">$ 43,532</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={taxans} alt="err" />
        </div>
        <div>
        <p className="text-[#FF993C]  my-3">
            <span className="fontfamily text-[24px] font-[400]">Houston Texans</span>
          </p>
        </div>
        <div>
          <p className="text-[#ff9a3c76] text-center text-[14px] pb-1">MoneyLine</p>
          <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-1 justify-center items-center">
            <span className="text-[#FF993C]">Bet</span>
            <span className="text-[#299E00]">+199</span>
            <span className="text-white bg-[#299E00] px-3 py-1 rounded-2xl">
              Bet
            </span>
          </p>
        </div>
      </div>
      <div className="lg:w-[10em] flex lg:flex-col justify-between items-center ">
        <div>
          <h2 className="text-[#FF993C] text-2xl text-center mb-2">
            N<span className="fontfamily">F</span>L
          </h2>

          <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
            {" "}
            <span>&#128308;</span> 08:45
          </h2>
        </div>
        <div className=" bg2 bg-custom-radial-gradient rounded-full lg:w-[21em] w-[10em] lg:h-[15em] h-[10em] flex justify-center items-center">
          <img className=" w-20 h-20" src={vs} alt="err" />
        </div>
        <div>
          <p className="text-[#ff9a3c76] text-center text-[14px]">Score:</p>
          <p className="text-[#FF993C] lg:text-2xl text-center">
          <span className="fontfamily"> 1{"  "}:{"  "}2</span> 
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={eagle} alt="err" />
        </div>
        <div>
          <p className="text-[#FF993C] my-3">
            <span className="fontfamily text-[24px] font-[400] ">Baltimore Ravens</span>
          </p>
        </div>
        <div>
          <p className="text-[#ff9a3c76] text-center  text-[14px] pb-1">MoneyLine</p>
          <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-1 justify-center items-center">
            <span className="text-[#FF993C]">Bet</span>
            <span className="text-[#299E00]">+199</span>
            <span className="text-white bg-[#299E00] px-3 py-1 rounded-2xl">
              Bet
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
