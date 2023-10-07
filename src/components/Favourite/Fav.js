import React from 'react'
import Footer from '../utils/Footer'

import AccordianData from '../main/accordian/AccordianData'
import { Navbar } from '../utils/Navbar'

export default function Fav() {
  return (
    <div className='bg-[#100a04]'>
         <Navbar />
    
    <div className="lg:px-32 px-10 ">
          <h1 className="text-[#FF993C] lg:text-[62px] text-3xl py-5 my-5">
          FA<span className="fontfamily">V</span>OU<span className="fontfamily">R</span>ITES
          </h1>
          <AccordianData/>
          <AccordianData/>
          <AccordianData/>
          <AccordianData/>

          </div>
        <Footer/>
          </div>
  )
}
