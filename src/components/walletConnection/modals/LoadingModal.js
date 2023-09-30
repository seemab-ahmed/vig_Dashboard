import React, { useEffect } from 'react';
import Spinner from '../../utils/Spinner';
import { useNavigate } from 'react-router-dom';
export default function LoadingModal({ isOpen, onClose }) {
    const navigate =useNavigate()
    useEffect(() => {
        if (isOpen) {
          const timeoutId = setTimeout(() => {
            onClose(); 
            navigate("/password")
          }, 3000); 
          return () => {
            clearTimeout(timeoutId);
          };
        }
      }, [isOpen, onClose , navigate]);
    
  return (
   

<div id="popup-modal" tabindex="-1" className={`${isOpen?"flex":"hidden"} bg-[#100a04e8] justify-center items-center fixed top-0 left-0 right-0 z-50  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full`}>
    <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-[#1F1307] rounded-[2.6rem] shadow ">
            <div className=' flex flex-col items-center px-6  pb-8 pt-6 gap-4'>
                <div>
             <Spinner/>
               </div>
             <h3 className='text-[#FF993C] text-2xl text-center'> Loading...</h3>
             <p className='text-[#FF993C] text-center px-5'>Sign the message in your wallet WalletConnect to sign in safely</p>  
             <button onClick={()=>onClose()} type="button" className="w-[100%] bg-[#29190B] rounded-full text-[#FF993C] px-4 lg:py-3 sm:py-3 py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]" data-modal-hide="popup-modal">
             Cancel
            </button>
            </div>
            
        </div>
    </div>
</div>

  );
}
