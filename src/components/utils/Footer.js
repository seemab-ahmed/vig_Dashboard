import React from 'react'
import { ButtonRightArrow } from '../../icons-svgs/Svgs'

export default function Footer() {
  return (
    
    <div className='flex lg:flex-row flex-col justify-between items-center lg:px-32 px-10 py-2 border-t border-[#ffffff2a] bg-[#100a04] '>
        <div><p className='text-[#FF993C]'>© VIG, Inc.</p></div>
        <div className='flex'>
            <button className='text-[#FF993C]'>Terms</button>
            <button className='text-[#FF993C]'> Privacy policy</button>
        </div>
        <div className='flex gap-2 lg:flex-row md:flex-row flex-col '>
        <button className="flex items-center gap-1 bg-[#ffffff05] text-[#FF993C] py-2 ps-4 px-5 rounded-full  text-left">
        Twitter <ButtonRightArrow />
            </button>
            <button className="flex items-center gap-1 bg-[#ffffff05] text-[#FF993C] py-2 ps-4 px-5 rounded-full  text-left">
            Linked in <ButtonRightArrow />
            </button>
            <button className="flex items-center gap-1 bg-[#ffffff05] text-[#FF993C] py-2 ps-4 px-5 rounded-full  text-left">
            Facebook <ButtonRightArrow/>
            </button>
        </div>
    </div>
  
  )
}
 