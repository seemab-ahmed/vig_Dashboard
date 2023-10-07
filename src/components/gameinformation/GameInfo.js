import React from 'react'
import Footer from '../utils/Footer'
import taxans from "../../assets/taxans.png";
import bal from "../../assets/bal.png";
import AccordianData from '../main/accordian/AccordianData'
import Blog from '../main/Blog'
import BettingGraph from './BettingGraph'
import { Navbar } from '../utils/Navbar'
export default function GameInfo() {
  return (
    <div className='bg-[#100a04]'>
        <Navbar />
        <div className="lg:px-32 px-5">
          <h1 className="text-[#FF993C] lg:text-[62px] text-3xl py-5 my-5">
          G<span className="fontfamily ">A</span>ME INFOR<span className="fontfamily ">M</span>ATION
          </h1>
          <AccordianData img={taxans} img2={bal}/>,
          <BettingGraph/>
          </div>
          <Blog/>
        <Footer/>
    </div>
  )
}
