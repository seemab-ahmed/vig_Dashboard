import React from "react";
import player4 from "../../assets/player4.png";
import player1 from "../../assets/player1.png";
import rackbiplayer from "../../assets/rackbiplayer.png";
import { ButtonRightArrow } from "../../icons-svgs/Svgs";
import { useNavigate } from "react-router-dom";
export default function BettingMech() {
  const navigate = useNavigate();
  return (
    <div className=" pt-16 pb-10 bg-[#150d04] lg:px-32 px-10">
      <div className="flex md:flex-row lg:flex-row flex-col justify-between pb-10 gap-5">
        <h2 className="text-[#FF993C] lg:text-3xl text-3xl font-semibold">
          Betting Mechanics
        </h2>
        <div>
          <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left">
            Show all <ButtonRightArrow />
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
        {/* Blog Card 1 */}
        <div
          className="flex flex-col gap-3 items-center  lg:w-[25%]"
          onClick={() => {
            navigate("/bettingmechspecific");
          }}
        >
          <div className="w-full">
            <img src={player1} className="w-[90%] h-[11em]" alt="err" />
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
                brand jumpstarts its in-person fitness presence with a new group
                training concept.
              </p>
            </div>
          </div>
        </div>
        {/* Blog Card 2 */}
        <div
          className="flex flex-col gap-3 items-center  lg:w-[25%]"
          onClick={() => {
            navigate("/bettingmechspecific");
          }}
        >
          <div className="w-full">
            <img src={rackbiplayer} className="w-[90%] h-[11em]" alt="" />
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
                brand jumpstarts its in-person fitness presence with a new group
                training concept.
              </p>
            </div>
          </div>
        </div>
        {/* Blog Card 2 */}
        <div
          className="flex flex-col gap-3 items-center  lg:w-[25%]"
          onClick={() => {
            navigate("/bettingmechspecific");
          }}
        >
          <div className="w-full">
            <img src={rackbiplayer} className="w-[90%] h-[11em]" alt="" />
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
                brand jumpstarts its in-person fitness presence with a new group
                training concept.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div
          className="flex flex-col gap-3 items-center lg:w-[25%]"
          onClick={() => {
            navigate("/bettingmechspecific");
          }}
        >
          <div className="w-full">
            <img src={player4} className="w-[90%] h-[11em]" alt="" />
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
                brand jumpstarts its in-person fitness presence with a new group
                training concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
