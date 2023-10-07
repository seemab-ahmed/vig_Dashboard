import React from "react";
import Footer from "../utils/Footer";
import taxans from "../../assets/taxans.png";
import bal from "../../assets/bal.png";
import SF from "../../assets/SF.png";
import pit from "../../assets/pit.png";
import det from "../../assets/det.png";
import kc from "../../assets/kc.png";
import baf from "../../assets/baf.png";
import nco from "../../assets/nco.png";
import AccordianData from "../main/accordian/AccordianData";
import { Navbar } from "../utils/Navbar";

export default function Fav() {
  return (
    <div className="bg-[#100a04]">
      <Navbar />

      <div className="lg:px-32 px-5 ">
        <h1 className="text-[#FF993C] lg:text-[62px] text-3xl py-5 my-5">
          FA<span className="fontfamily">V</span>OU
          <span className="fontfamily">R</span>ITES
        </h1>
        <AccordianData img={taxans} img2={bal} name={"HOU"} name2={"BAL"} />,
        <AccordianData
          hiddenflag={true}
          img={SF}
          img2={pit}
          name={"SF"}
          name2={"PIT"}
        />
        ,
        <AccordianData
          hiddenflag={true}
          img={det}
          img2={kc}
          name={"DET"}
          name2={"KC"}
        />
        ,
        <AccordianData
          hiddenflag={true}
          img={baf}
          img2={nco}
          name={"BUF"}
          name2={"NYJ"}
        />
        ,
      </div>
      <Footer />
    </div>
  );
}
