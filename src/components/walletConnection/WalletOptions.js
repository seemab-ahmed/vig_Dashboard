import React, { useState } from 'react';
import Wallets from './Wallets';

export default function WalletOptions() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='text-white'>
      <div className='p-4'>
        <div className='flex space-x-4 items-center justify-center'>
          <button
            className={`tab-button-wallet font-semibold ${
              activeTab === 'tab1' ? 'text-[#FF993C]  border-b border-[#FF993C]' : 'text-[#ff9a3c62]'
            }`}
            onClick={() => handleTabClick('tab1')}
          >
            Ethereum
          </button>
          <button
            className={`tab-button-wallet font-semibold ${
              activeTab === 'tab2' ? 'text-[#FF993C]  border-b border-[#FF993C]' : 'text-[#ff9a3c69]'
            }`}
            onClick={() => handleTabClick('tab2')}
          >
            Polygon
          </button>
          <button
            className={`tab-button-wallet font-semibold ${
              activeTab === 'tab3' ? 'text-[#FF993C]  border-b border-[#FF993C]' : 'text-[#ff9a3c69]'
            }`}
            onClick={() => handleTabClick('tab3')}
          >
           Tezos
          </button>
          <button
            className={`tab-button-wallet font-semibold ${
              activeTab === 'tab4' ? 'text-[#FF993C]  border-b border-[#FF993C]' : 'text-[#ff9a3c69]'
            }`}
            onClick={() => handleTabClick('tab4')}
          >
            Immutable X
          </button>
        </div>
        <div>
            <div id='tab1' className={`tab-content flex justify-center items-center ${activeTab === 'tab1' ? '' : 'hidden'}`}>
             <Wallets/>
            </div>
            <div id='tab2' className={`tab-content flex justify-center items-center ${activeTab === 'tab2' ? '' : 'hidden'}`}>
            <Wallets/>
            </div>
            <div id='tab3' className={`tab-content flex justify-center items-center ${activeTab === 'tab3' ? '' : 'hidden'}`}>
            <Wallets/>
            </div>
            <div id='tab4' className={`tab-content flex justify-center items-center ${activeTab === 'tab4' ? '' : 'hidden'}`}>
            <Wallets/>
            </div>
            </div>  
      </div>
    </div>
  );
}
