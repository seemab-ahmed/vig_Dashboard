import React from "react";
import { ButtonRightArrow } from "../../icons-svgs/Svgs";
import SecondRckbi from "../../assets/SecondRckbi.png";
import { useNavigate } from "react-router-dom";
import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";
import Sliderbigimage from "../../assets/Sliderbigimage.png";
import sliderracbi from "../../assets/sliderracbi.png";
const cardData = [
  {
    title: "Nike Leans Into In-Person Fitness As Lululemon Cuts Back",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    title: "Nike Leans Into In-Person Fitness As Lululemon Cuts Back",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    title: "Nike Leans Into In-Person Fitness As Lululemon Cuts Back",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },
];
const cardDataa = [
  {
    title: "Rays brush off 'a last-place team,' top Yanks after benches clear",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    title: "Rays brush off 'a last-place team,' top Yanks after benches clear",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    title: "Rays brush off 'a last-place team,' top Yanks after benches clear",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },
];

export default function BettingMechSpecific() {
  const navigate = useNavigate();
  const images = [
    Sliderbigimage,
    sliderracbi,
    Sliderbigimage,
    sliderracbi,
  ];
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-[#100a04] lg:px-32 px-10">
        <div>
          <h2 className="text-[#FF993C] lg:text-5xl text-3xl font-semibold">
            Betting Mechanics
          </h2>
        </div>
        <div className="flex  my-10 bg-[#1f1307] lg:-mr-32 -mr-10 lg:-ml-32 -ml-10 lg:px-32 px-10 ">
          {images.map((_, index) => (
            <div
              key={index}
              className={`flex flex-row gap-3 items-center justify-center rounded-2xl p-4 `}
            >
              <div className=" h-[5em] w-[7em] rounded-3xl">
                <img
                  className="w-full h-full rounded-3xl"
                  src={Sliderbigimage}
                  alt=""
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-[#E74A20]">Dating</p>
                  <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
                    Exclusive
                  </button>
                </div>
                <div>
                  <h2 className="text-[#FF993C] underline underline-offset-2 text-xl py-3 ">
                    Nike Leans Into In-Person Fitn...
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 ">
          {cardData.map((data, index) => (
            <div
              className="flex lg:flex-row md:flex-row flex-col gap-5 items-center "
              key={index}
              onClick={() => {
                navigate("/newsofday");
              }}
            >
              <div className="lg:h-[15em]">
                <img
                  className="min-w-[8em] w-[22em] h-full"
                  src={SecondRckbi}
                  alt=""
                />
              </div>
              <div className="w-auto">
                <div className="flex justify-between">
                  <p className="text-[#E74A20] ">{data.category}</p>
                  <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
                    Exclusive
                  </button>
                </div>
                <div className="lg:w-[28em]">
                  <h2 className="text-[#FF993C] underline underline-offset-2 text-xl py-3 ">
                    {data.title}
                  </h2>

                  <div className="text-[#FF993C]">
                    {data.description.length > 100 ? (
                      <p>{data.description}</p>
                    ) : (
                      <p>{data.description}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left mt-5">
                    Read Now <ButtonRightArrow />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-[#1f1307] lg:-mr-32 -mr-10 lg:-ml-32 -ml-10">
            <div className=" lg:px-32 px-32 flex flex-col gap-5 pt-20 pb-10">
              {cardDataa.map((data, index) => (
                <div
                  className="flex lg:flex-row md:flex-row flex-col gap-5 items-center  "
                  key={index}
                  onClick={() => {
                    navigate("/newsofday");
                  }}
                >
                  <div className="lg:h-[12em]">
                    <img
                      className="min-w-[8em] w-[22em] h-full"
                      src={SecondRckbi}
                      alt=""
                    />
                  </div>
                  <div className="w-auto">
                    <div className="flex justify-between">
                      <p className="text-[#E74A20] ">{data.category}</p>
                      <button className="bg-[#E74A20] text-white px-4 rounded-2xl">
                        Exclusive
                      </button>
                    </div>
                    <div className="lg:w-[28em]">
                      <h2 className="text-[#FF993C] underline underline-offset-2 text-xl py-3 ">
                        {data.title}
                      </h2>
                    </div>
                    <div>
                      <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left mt-5">
                        Read Now <ButtonRightArrow />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="text-[#FF993C] bg-[#29190b] py-2 rounded-full w-[58%]">
                {" "}
                load more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
