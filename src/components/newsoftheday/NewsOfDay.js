import React from "react";
import BettingMech from "./BettingMech";
import {  NavbarNews }from "../utils/Navbar";
import Footer from "../utils/Footer";
import Strategies from "./Strategies";
import TopSliderNews from "./TopSliderNews";
import Popular from "./Popular";


export default function NewsOfDay() {
  return (
    <>
      <NavbarNews />
      <div className=" pt-8 pb-10 bg-[#100a04]">
        {" "}
        <TopSliderNews /> <BettingMech /> <Strategies />
        <Popular />
      </div>
      <Footer/>
    </>
  );
}
