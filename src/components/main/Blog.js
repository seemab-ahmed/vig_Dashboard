import React from "react";
import Player from "../../assets/player.png";
import rackbiplayer from "../../assets/rackbiplayer.png";
import SecondRckbi from "../../assets/SecondRckbi.png";
import { ButtonRightArrow } from "../../icons-svgs/Svgs";

export default function Blog() {
  return (
    <div className="lg:px-32 px-10 pt-16 pb-10">
  <div className="flex flex-col lg:flex-row justify-between pb-10">
    <h2 className="text-[#FF993C] lg:text-5xl text-3xl font-semibold">
      BLOG
    </h2>
    <div>
      <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left">
        Show all <ButtonRightArrow />
      </button>
    </div>
  </div>
  <div className="flex flex-wrap gap-5 justify-center items-center">
    {/* Blog Card 1 */}
    <div className="flex lg:flex-row md:flex-row flex-col gap-3 items-center lg:w-3/6 ">
      <div className="lg:w-full h-full">
        <img className="min-w-[8em] h-full" src={Player} alt="" />
      </div>
      <div>
        <div className="flex">
          <p className="text-[#E74A20] lg:w-[10em]">Dating</p>
          <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
          <h2 className="text-[#FF993C] underline underline-offset-2 text-xl py-3 lg:pe-28 ">
            Nike Leans Into In-Person Fitness As Lululemon Cuts Back
          </h2>
         
          <div className="text-[#FF993C] w-[15em]">

          Sports apparel giant Nike has launched “Nike Studios” as<p className="truncate">the
         brand jumpstarts its in-person fitness presence with a new
            group training concept.
          </p></div> 
        </div>
        <div>
          <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left mt-5">
            Read Now <ButtonRightArrow />
          </button>
        </div>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="flex flex-col gap-3 items-center lg:w-1-6">
      <div>
        <img src={rackbiplayer} alt="" />
      </div>
      <div className="w-full">
        <div className="flex">
          <p className="text-[#E74A20] w-[10em]">Dating</p>
          <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
          <h2 className="text-[#FF993C] underline underline-offset-2 text-xl w-[10em] py-3">
            Nike Leans Into In-Person Fitness As Lululemon Cuts Back
          </h2>
          <p className="text-[#FF993C] w-[15em] truncate">
            Sports apparel giant Nike has launched “Nike Studios” as the
            brand jumpstarts its in-person fitness presence with a new
            group training concept.
          </p>
        </div>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="flex flex-col gap-3 items-center lg:w-1/6">
      <div>
        <img src={SecondRckbi} alt="" />
      </div>
      <div className="w-full">
        <div className="flex">
          <p className="text-[#E74A20] w-[10em]">Dating</p>
          <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
            Exclusive
          </button>
        </div>
        <div>
          <h2 className="text-[#FF993C] underline underline-offset-2 text-xl w-[10em] py-3">
            Nike Leans Into In-Person Fitness As Lululemon Cuts Back
          </h2>
          <p className="text-[#FF993C] w-[15em] truncate">
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
