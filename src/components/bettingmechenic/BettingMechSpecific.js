import React, { useEffect, useState } from "react";
import { ButtonRightArrow } from "../../icons-svgs/Svgs";
import SecondRckbi from "../../assets/SecondRckbi.png";
import player4 from "../../assets/player4.png";
import player1 from "../../assets/player1.png";
import { useNavigate } from "react-router-dom";
import Footer from "../utils/Footer";
import Sliderbigimage from "../../assets/Sliderbigimage.png";
import sliderracbi from "../../assets/sliderracbi.png";
import { NavbarNews } from "../utils/Navbar";
const cardData = [
  {
    img:SecondRckbi,
    title: "Nike Leans Into In-Person Fitness As Lululemon Cuts Back",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    img:player4,
    title: "Nike Leans Into In-Person Fitness As Lululemon Cuts Back",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

];
const cardDataa = [
  {
    img:player1,
    title: "Rays brush off 'a last-place team,' top Yanks after benches clear",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    img:SecondRckbi,
    title: "Rays brush off 'a last-place team,' top Yanks after benches clear",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },

  {
    img:player4,
    title: "Rays brush off 'a last-place team,' top Yanks after benches clear",
    category: "Dating",
    description:
      "Sports apparel giant Nike has launched “Nike Studios” as the brand jumpstarts its in-person fitness presence with a new group training concept.",
  },
];

export default function BettingMechSpecific() {
  const navigate = useNavigate();
  const images = [Sliderbigimage, sliderracbi, Sliderbigimage, sliderracbi];
  const [truncateDescription, setTruncateDescription] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTruncateDescription(true);
      } else {
        setTruncateDescription(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <NavbarNews />
      <div className="pt-16 bg-[#100a04] lg:px-32 px-5">
        <div>
          <h2 className="text-[#FF993C] lg:text-[62px] text-3xl font-[400]">
            BETTI<span className="fontfamily">N</span>G MEC
            <span className="fontfamily">H</span>ENICS
          </h2>
        </div>
        <div className="flex  my-10 bg-[#150d04] lg:-mx-32 -mx-5 lg:px-32  overflow-scroll">
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
                  <p className="text-[#E74A20] text-[12px]">Dating</p>
                  <button className="bg-[#E74A20] text-white px-2 text-[12px] rounded-2xl">
                    Exclusive
                  </button>
                </div>
                <div>
                  <h2 className="text-[#FF993C] underline underline-offset-2 lg:text-xl py-3 ">
                    Nike Leans Into In-Person Fitn...
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col gap-5 pt-10 pb-10">
          {cardData.map((data, index) => (
            <div
              className="flex gap-5 items-center"
              key={index}
              onClick={() => {
                navigate("/specificPost");
              }}
            >
              <div className=" min-h-[100%]">
                <img
                  className="min-w-[8em] w-[22em] min-h-[14em] object-cover rounded-xl"
                  src={data.img}
                  alt=""
                />
              </div>
              <div className="w-auto">
                <div className="flex justify-between">
                  <p className="text-[#E74A20] text-[12px]">{data.category}</p>
                  <button className="bg-[#E74A20] text-white px-2 text-[12px] rounded-2xl">
                    Exclusive
                  </button>
                </div>
                <div className="lg:w-[28em]">
                  <h2 className="text-[#FF993C] leading-6 underline underline-offset-2 lg:text-xl py-3 ">
                    {data.title}
                  </h2>

                  <div className="text-[#FF993C] ">
                    {truncateDescription ? (
                      <div className="text-[#FF993C75] text-[14px] leading-5">
                        {data.description.split(" ").slice(0, 8).join(" ")}...
                      </div>
                    ) : (
                      <div className="text-[#FF993C75] text-[16px]">{data.description}</div>
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
           
         
          <div className="bg-[#1f1307] lg:-mx-32 -mx-5 lg:px-32 px-5  flex flex-col gap-5 pt-10 pb-10">

              {cardDataa.map((data, index) => (
                 <div
                 className="flex gap-5 items-center"
                 key={index}
                 onClick={() => {
                   navigate("/specificPost");
                 }}
               >
               <div className=" min-h-[100%]">
                <img
                  className="min-w-[8em] w-[22em] lg:h-[10em] h-[11em] object-cover rounded-lg "
                  src={data.img}
                  alt=""
                />
              </div>
                 <div className="w-auto">
                   <div className="flex justify-between">
                     <p className="text-[#E74A20] text-[12px]">{data.category}</p>
                     <button className="bg-[#E74A20] text-white px-2  text-[12px] rounded-2xl">
                       Exclusive
                     </button>
                   </div>
                   <div className="lg:w-[28em]">
                   <div className="text-[#FF993C50] text-[16px]">
                   <h2 className="text-[#FF993C] leading-6 lg:text-xl py-3 ">
                    {data.title}
                  </h2>
                    </div>
                    </div>
                  
                  </div>
                </div>
              ))}
              <button className="text-[#FF993C] bg-[#29190b] py-2 rounded-full lg:w-[58%]">
                {" "}
                load more
              </button>
            </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
}