import React from "react";
import Player from "../../assets/player.png";
import rackbiplayer from "../../assets/rackbiplayer.png";
import SecondRckbi from "../../assets/SecondRckbi.png";
import { ButtonRightArrow } from "../../icons-svgs/Svgs";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate =useNavigate()
  return (
    <div className="lg:px-32 px-5 lg:pt-16 pb-10">
  <div className="flex items-center lg:flex-row justify-between pb-5 pt-3">
    <h2 className="text-[#FF993C] lg:text-[64px] text-[42px] ">
      BLO<span className="fontfamily">G</span>
    </h2>
    <div>
      <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left">
        Show all <ButtonRightArrow />
      </button>
    </div>
  </div>
  <div className="flex lg:flex-nowrap flex-wrap gap-5 lg:justify-between justify-center items-center lg:w-full w-[100%] mx-auto">
    {/* Blog Card 1 */}
    <div className="flex lg:flex-row flex-row  gap-3 items-center lg:w-[50%]  w-full" onClick={()=>{navigate("/newsofday")}}>
      <div className="w-full h-full ">
        <img className="min-w-[10em] min-h-[20em] max-w-[20em]  h-full w-full object-cover rounded-2xl" src={Player} alt="" />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-[#E74A20] lg:w-[10em] text-[12px]">Dating</p>
          <button className="bg-[#E74A20] text-white px-2 text-[12px] rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
          <h2 className="text-[#FF993C]  lg:leading-8 leading-6 underline underline-offset-2 lg:text-[24px] py-3 lg:pe-6 ">
          Nike Leans Into In-Person Fitness As Lululemon Cuts Back
          </h2>
          <p className="text-[#ff9a3c52] lg:flex hidden text-[14px] leading-5  ">
            Sports apparel giant Nike has launched “Nike Studios” as the
            brand jumpstarts its in...
          </p>
          <p className="text-[#ff9a3c52] lg:hidden flex text-[14px] leading-5  ">
            Sports apparel giant Nik...
          </p>
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
          <p className="text-[#E74A20] lg:w-[10em] text-[12px]">Dating</p>
          <button className="bg-[#E74A20] text-white px-2 text-[12px] rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
        <h2 className="text-[#FF993C]  w-auto lg:leading-8 leading-6 lg:text-[24px] py-3 lg:pe-6 ">
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
          <p className="text-[#E74A20] lg:w-[10em] text-[12px]">Dating</p>
          <button className="bg-[#E74A20] text-white px-2 text-[12px] rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
        <h2 className="text-[#FF993C]  lg:leading-8 leading-6 lg:text-[24px] py-3 lg:pe-6 ">
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
