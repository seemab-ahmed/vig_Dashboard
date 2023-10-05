import React from "react";
import Footer from "../../utils/Footer";
import rackbiplayer from "../../../assets/rackbiplayer.png";
import Popular from "../../newsoftheday/Popular";
import { NavbarNews } from "../../utils/Navbar";
export default function SpecificPost() {
  return (
    <>
      <NavbarNews />
      <div>
        <div className="bg-[#100a04] pb-8">
           <div className="relative">
            <div className="bg-custom-radial-gradientnd w-[50em] h-[50em] absolute -left-[32em] -top-20"></div>
          </div>
          <div className=" lg:w-[38%] md:w-[50%] w-[80%] m-auto pt-5 flex flex-col gap-3">
            <p className="text-[#ff9a3c51]">AUGUST 21, 2023 | 12:24 PM</p>
            <h3 className="text-[#FF993C] text-[26px] leading-8">
              Dolphins, DT Christian Wilkins unable to come to terms on new
              deal; Miami signs DL Zach Sieler to extension
            </h3>
            <img src={rackbiplayer} className="w-full" alt="err" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[#FF993C] text-[20px] leading-8">
                Nike Leans Into In-Person Fitness As Lululemon Cuts Back
              </h4>
              <p className="text-[#ff9a3c51]">
                Lorem ipsum dolor sit amet consectetur. Vel lorem felis euismod
                nunc cursus maecenas sed. Diam interdum mus odio proin porttitor
                pretium ornare faucibus. Amet magna interdum diam lorem. Blandit
                et cursus ultricies sollicitudin sagittis eu sed rhoncus. Elit
                eget faucibus quis viverra sit quam quis. Adipiscing gravida
                integer egestas sit pretium pulvinar. Nunc varius et pharetra
                eros sed. Libero sed aliquam amet neque. Ac adipiscing tempus
                vitae vel.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#FF993C] text-[20px] leading-8">
                Nike Leans Into In-Person Fitness As Lululemon Cuts Back
              </h4>
              <p className="text-[#ff9a3c51]">
                Lorem ipsum dolor sit amet consectetur. Vel lorem felis euismod
                nunc cursus maecenas sed. Diam interdum mus odio proin porttitor
                pretium ornare faucibus. Amet magna interdum diam lorem. Blandit
                et cursus ultricies sollicitudin sagittis eu sed rhoncus. Elit
                eget faucibus quis viverra sit quam quis. Adipiscing gravida
                integer egestas sit pretium pulvinar. Nunc varius et pharetra
                eros sed. Libero sed aliquam amet neque. Ac adipiscing tempus
                vitae vel.
              </p>
              <p className="text-[#ff9a3c51]">
                Lorem ipsum dolor sit amet consectetur. Vel lorem felis euismod
                nunc cursus maecenas sed. Diam interdum mus odio proin porttitor
                pretium ornare faucibus. Amet magna interdum diam lorem. Blandit
                et cursus ultricies sollicitudin sagittis eu sed rhoncus. Elit
                eget faucibus quis viverra sit quam quis. Adipiscing gravida
                integer egestas sit pretium pulvinar. Nunc varius et pharetra
                eros sed. Libero sed aliquam amet neque. Ac adipiscing tempus
                vitae vel.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden">
        <div className="bg-custom-radial-gradientnd w-[50em] h-[50em] absolute -right-[32em] -top-[15em]">

        </div>
          <Popular />
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
