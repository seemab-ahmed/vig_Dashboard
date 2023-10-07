import React from 'react';
import  { CopyIcon } from '../../../icons-svgs/Svgs';
import qrcode from "../../../assets/qrcode.png"
import Zerion from "../../../assets/Zerion.png"
import Ledge from "../../../assets/ledge.png"
import Fireblock from "../../../assets/Fireblock.png"
import All from "../../../assets/ALL.png"
export default function WalletModal({ isOpen, onClose }) {
  return (
   

<div id="popup-modal" tabIndex="-1" className={`${isOpen?"flex":"hidden"} bg-[#100a04e8] justify-center items-center fixed top-0 left-0 right-0 z-50  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full`}>
    <div className="relative w-full max-w-xs max-h-full">
        <div className="relative bg-[#000] rounded-lg shadow">
            <div className=' flex items-center px-6  py-2'>
                <p className=' text-[#FF993C]'>WalletConnect</p>
               <button onClick={()=>onClose()} type="button" className=" bg-[#1F1307] focus:border-transparent text-sm w-10 h-10 ml-auto inline-flex justify-center items-center rounded-full text-[#FF993C]" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only" >Close modal</span>
            </button>
            </div>
            <div className='flex flex-col gap-1'>
            <div className="px-4 py-2 rounded-xl bg-[#1F1307]  text-center flex items-center justify-between">
           <h3 className='text-[#FF993C] text-2xl  text-left capitalize'>  <span className="fontfamily">Connect Your wallet</span></h3>
            <button>
            <CopyIcon/>
            </button>
            </div>
            <div className='px-3 py-2 rounded-xl bg-[#1F1307]  text-center flex flex-col items-center justify-center'>
            <h3 className='text-[#FF993C] text-center pb-1'>Mobile</h3>
            <div className='w-[100%]'>
                <img className='rounded-3xl w-[100%] ' src={qrcode} alt=''/>
            </div>
            </div>
            <div className='px-3 py-2 rounded-xl bg-[#1F1307]  text-center flex flex-col items-center justify-center'>
            <div className=' border-b-[2px] border-[#ffffff1a] w-[100%] mb-2'>
            <h3 className='text-[#FF993C] text-center boder-b border-[#fff] '>Desktop</h3>
            </div>
            <div className='w-[100%] flex justify-between'>
              <div className='flex flex-col gap-2 justify-center items-center w-[3.5em]'>
              <img className='rounded-3xl ' src={Zerion} alt=''/>
              <h5 className='text-[#FF993C] '>Zerion</h5>
              </div>
              <div className='flex flex-col gap-2 justify-center items-center w-[3.5em]'>
              <img className='rounded-3xl ' src={Ledge} alt=''/>
              <h5 className='text-[#FF993C] '>Ledge...</h5>
              </div>
              <div className='flex flex-col gap-2 justify-center items-center w-[3.5em]'>
              <img className='rounded-3xl ' src={Fireblock} alt=''/>
              <h5 className='text-[#FF993C] '>Firebl...</h5>
              </div>
              <div className='flex flex-col gap-2 justify-center items-center w-[3.5em]'>
              <img className='rounded-3xl ' src={All} alt=''/>
              <h5 className='text-[#FF993C] '>All</h5>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>

  );
}
