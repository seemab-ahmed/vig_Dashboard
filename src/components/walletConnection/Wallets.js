import React, { useState } from 'react';
import { CoinBase, Portis, WlletConnet, Torus } from '../../icons-svgs/Svgs';
import Spinner from '../utils/Spinner';
import WalletModal from './modals/WalletModal';
import LoadingModal from './modals/LoadingModal';

export default function Wallets() {
  const [hiddeMore, setHiddeMore] = useState(false);
  const [buttonLoading, setButtonLoading] = useState({
    WalletConnect: false,
    CoinBase: false,
    Torus: false,
    Portis: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingModalOpen, setLoadingIsModalOpen] = useState(false);

  const handleWalletSelection = (buttonName) => {
    setButtonLoading((prevLoading) => ({
      ...prevLoading,
      [buttonName]: true,
    }));

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLoadingIsModalOpen(true);
    setButtonLoading({
      WalletConnect: false,
      CoinBase: false,
      Torus: false,
      Portis: false,
    });
  };

  const closeLoadingModal = () => {
    setLoadingIsModalOpen(false);
  };


  return (
    <div className=' lg:w-[20.5m] sm:w-[20.5em] w-[80%] gap-4 mt-5 flex flex-col'>
      <h3 className='text-[#ff9a3c8a] text-center text-lg'>Popular</h3>
      <button
        onClick={() => handleWalletSelection('WalletConnect')}
        className='bg-[#ff9a3c2d]  rounded-full text-[#ff9a3cd7] flex items-center gap-5 hover:text-[#FF993C] focus:bg-[#FF993C] focus:text-white'
      >
        {buttonLoading.WalletConnect ? <span><Spinner /></span> : <WlletConnet />} <span>WalletConnect</span>
      </button>
      <button
        onClick={() => handleWalletSelection('CoinBase')}
        className='bg-[#ff9a3c2d]  rounded-full text-[#ff9a3cd7] flex items-center gap-5 hover:text-[#FF993C] focus:bg-[#FF993C] focus:text-white'
      >
        {buttonLoading.CoinBase ? <span><Spinner /></span> : <CoinBase />} <span>CoinBase Wallet</span>
      </button>
      <button onClick={() => setHiddeMore(true)} className='text-[#ff9a3c8a] text-center text-lg hover:text-[#FF993C]'>More</button>

      {hiddeMore ? <>
        <button
          onClick={() => handleWalletSelection('Torus')}
          className='bg-[#ff9a3c2d]  rounded-full text-[#ff9a3cd7] flex items-center gap-5 hover:text-[#FF993C] focus:bg-[#FF993C] focus:text-white'
        >
          {buttonLoading.Torus ? <span><Spinner /></span> : <Torus />} <span>Torus</span>
        </button>
        <button
          onClick={() => handleWalletSelection('Portis')}
          className='bg-[#ff9a3c2d]  rounded-full text-[#ff9a3cd7] flex items-center gap-5 hover:text-[#FF993C] focus:bg-[#FF993C] focus:text-white'
        >
          {buttonLoading.Portis ? <span><Spinner /></span> : <Portis />} <span>Portis</span>
        </button>
        <button onClick={() => setHiddeMore(false)} className='text-[#ff9a3c8a] text-center text-lg hover:text-[#FF993C] underline underline-offset-2'>Show less</button>
      </> : ""}

      <WalletModal isOpen={isModalOpen} onClose={closeModal} />
      <LoadingModal isOpen={isLoadingModalOpen} onClose={closeLoadingModal} />
    </div>
  );
}
