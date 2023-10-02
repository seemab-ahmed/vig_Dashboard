import React from 'react'
import Footer from '../utils/Footer'
import Navbar from '../utils/Navbar'
import AccordianData from '../main/accordian/AccordianData'
import Blog from '../main/Blog'
import BettingGraph from './BettingGraph'
export default function GameInfo() {
  return (
    <div className='bg-[#100a04]'>
        <Navbar />
        <div className="lg:px-32 px-10 ">
          <h1 className="text-[#FF993C] lg:text-5xl text-3xl font-semibold my-5">
          Game Information
          </h1>
          <AccordianData/>
          <BettingGraph/>
          <Blog/>
          </div>
        <Footer/>
    </div>
  )
}
