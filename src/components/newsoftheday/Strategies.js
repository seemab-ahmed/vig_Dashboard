import React from "react";
import Player from "../../assets/player.png";
import rackbiplayer from "../../assets/rackbiplayer.png";
import SecondRckbi from "../../assets/SecondRckbi.png";
import { ButtonRightArrow } from "../../icons-svgs/Svgs";
export default function Strategies() {
  return (
    <div className="lg:px-32 px-5 pt-16 pb-10 bg-[#1f1307]">
 <div className="flex md:flex-row lg:flex-row flex-col justify-between pb-10 gap-5">
    <h2 className="text-[#FF993C] lg:text-[42px] text-3xl">
    STRATEGIES
    </h2>
    <div>
      <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left">
        Show all <ButtonRightArrow />
      </button>
    </div>
  </div>
  <div className="flex lg:flex-nowrap flex-wrap gap-5 lg:justify-between justify-center items-center lg:w-full w-[80%] mx-auto">
    {/* Blog Card 1 */}
    <div className="flex lg:flex-row md:flex-row flex-col gap-3 items-center lg:w-[50%]  w-full" >
      <div className="w-full lg:h-full h-[10%]">
        <img className="min-w-[10em] h-full w-full" src={Player} alt="" />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-[#E74A20] lg:w-[10em]">Dating</p>
          <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
          <h2 className="text-[#FF993C] leading-6 lg:text-[20px] py-3 lg:pe-6 ">
          Rays brush off 'a last-place team,' top Yanks after benches clear
          </h2>
        </div>
        <div>
          <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left mt-5">
            Read Now <ButtonRightArrow />
          </button>
        </div>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="flex flex-col gap-3 items-center lg:w-[25%] w-full">
      <div className="w-full">
        <img className="w-full"  src={rackbiplayer} alt="" />
      </div>
      <div className="w-full">
      <div className="flex justify-between">
          <p className="text-[#E74A20] w-[10em]">Dating</p>
          <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
        <h2 className="text-[#FF993C] leading-6 lg:text-[20px] py-3 lg:pe-6 ">
            Nike Leans Into In-Person Fitness As Lululemon Cuts Back
          </h2>
          <p className="text-[#ff9a3c52] w-[15em] truncate">
            Sports apparel giant Nike has launched “Nike Studios” as the
            brand jumpstarts its in-person fitness presence with a new
            group training concept.
          </p>
        </div>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="flex flex-col gap-3 items-center lg:w-[25%]  w-full">
    <div className="w-full">
        <img className="w-full" src={SecondRckbi} alt="" />
      </div>
      <div className="w-full">
      <div className="flex justify-between">
          <p className="text-[#E74A20] w-[10em]">Dating</p>
          <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
        <h2 className="text-[#FF993C] leading-6 lg:text-[20px] py-3 lg:pe-6 ">
            Nike Leans Into In-Person Fitness As Lululemon Cuts Back
          </h2>
          <p className="text-[#ff9a3c52] w-[15em] truncate">
            Sports apparel giant Nike has launched “Nike Studios” as the
            brand jumpstarts its in-person fitness presence with a new
            group training concept.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
