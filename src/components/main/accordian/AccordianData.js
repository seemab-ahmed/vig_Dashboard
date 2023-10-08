import React,{useState} from "react";
import Graph from "../../../assets/Graph.png";
import { ButtonRightArrow, StarSvg } from "../../../icons-svgs/Svgs";
import MainModalBettting from "../MainModalBettting";

function AccordianData({ hiddenflag ,img,img2 ,name ,name2}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWalletSelection = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className=" mb-14">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-2 pb-3">
        <p className="text-[#FF993C]">Aug 11, 2023</p>
        <div>
        {hiddenflag ? (
          <div className="flex items-center gap-5">
         <p className="text-[#FF993C] lg:text-2xl text-center">
         <span className="fontfamily">  Today  14:00</span>
            </p>
       
        </div>
        ) : (
          <div className="flex items-center gap-5 ">

            <h2 className="text-[#FF993C] bg-[#1F1307]  flex justify-center rounded-3xl px-3 gap-1 ">
              {" "}
              2ND QTR
            </h2>
            <p className="text-[#FF993C] text-2xl text-center">
            <span className="fontfamily">  1{"  "}:{"  "}2</span>
            </p>
            <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center items-center rounded-3xl px-3 gap-1 v">
              {" "}
              <span className="w-[12px] h-[12px] rounded-full blinkdot"></span> 08<span className="blink">:</span>45
            </h2>
          </div>
        )}
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            href="#"
            className=" p-2  rounded-full bg-[#29190B]"
            aria-current="page"
          >
            <StarSvg />
          </button>
          <button
           
            className=" px-3 py-2  rounded-full bg-[#29190B] text-[#FF993C] flex items-center gap-2"
            aria-current="page"
            onClick={handleWalletSelection} 
          >
            More info <ButtonRightArrow />
          </button>
        </div>
      </div>
      <div className="flex lg:justify-between md:justify-between justify-center lg:gap-5 gap-2 lg:w-auto md:w-[32em] pb-3 m-auto">
        <div>
          <div className="flex items-center justify-center lg:gap-9 gap-2 mb-4">
            <img src={img} alt="err" className="w-20 " />
            <h2 className="text-2xl text-[#FF993C]"><span className="fontfamily">{name}</span></h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 flex-wrap">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] text-[14px]  ">MoneyLine</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-[5px] lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C] text-[14px] " >Bet</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl text-[14px] ">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] text-[14px]  ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-[5px] lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C] text-[14px] ">Bet</span>
                <span className="text-[#CB233E] text-[14px] ">-199</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl text-[14px] ">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] text-[14px] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-[5px] lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C] text-[14px] " >Bet</span>
                <span className="text-[#CB233E] text-[14px] ">-199</span>
                <span className="text-white bg-[#CB233E] px-3 py-1 rounded-2xl text-[14px] ">
                  -199
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={`${hiddenflag ?"":"border border-[#ff9a3c22]" } ps-5 pe-12 py-3  flex-col justify-between rounded-3xl lg:flex hidden w-[15em]`}>
          <div>
            <p className="text-[#ff9a3c6f]">Total better:</p>
            <p className="text-[#ff9a3c] text-lg">124</p>
          </div>
          <div>
            <p className="text-[#ff9a3c6f]">Total Volume Pool:</p>
            <p className="text-[#ff9a3c]  text-lg">$ 43,532</p>
          </div>
        </div>
        <div className="lg:flex hidden flex-col justify-between pt-3 w-[15em]">
          <div className="flex gap-1">
            <p className="text-[#ff9a3c6f]">TVP :</p>
            <p className="w-[8em] overflow-auto flex ">
              <span className="text-[#084261]"> 5X</span>
              <span className="text-[#ff9a3c6f]"> (30%)</span>
              <span className="text-white"> 2X</span>
              <span className="text-[#ff9a3c6f]">(25%)</span>
              <span className="text-[#084261]">3X</span>
              <span className="text-[#ff9a3c6f]">(25%)</span>
              <span className="text-white">4X</span>
              (20%)
            </p>
          </div>
          <div>
            <img src={Graph} alt="err" />
          </div>
          <div className="flex lg:flex-row flex-col gap-3 w-[15em]">
            <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full  text-left text-[14px]">
              Advance info
            </button>
            <button className="flex items-center gap-1 bg-[#FF993C] text-black py-2 ps-4 px-5 rounded-full font-bold text-left text-[14px]">
              10m$
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center lg:gap-9 gap-2 mb-4">
            <img src={img2} alt="err" className="w-20 " />
            <h2 className="text-2xl text-[#FF993C]"> <span className="fontfamily">{name2}</span></h2>
          </div>
          <div className="flex gap-1 flex-col lg:flex-row flex-wrap">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] text-[14px]  ">MoneyLine</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-[5px] lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C] text-[14px] ">Bet</span>
                <span className="text-white bg-[#61AD00] px-3 py-1 rounded-2xl text-[14px] ">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] text-[14px] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-[5px] lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C] text-[14px] ">Bet</span>
                <span className="text-[#61AD00] text-[14px] ">-199</span>
                <span className="text-white bg-[#61AD00] px-3 py-1 rounded-2xl text-[14px] ">
                  -199
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#ff9a3c76] text-[14px] ">Spread</p>
              <p className="bg-[#1F1307] rounded-3xl ps-3 pe-1 py-1 flex gap-[5px] lg:justify-center justify-between items-center lg:w-auto w-[100%]">
                <span className="text-[#FF993C] text-[14px] ">Bet</span>
                <span className="text-[#61AD00] text-[14px] ">-199</span>
                <span className="text-white bg-[#61AD00] px-3 py-1 rounded-2xl text-[14px] ">
                  -199
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <MainModalBettting isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AccordianData;
