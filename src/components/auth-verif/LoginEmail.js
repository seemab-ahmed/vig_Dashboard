/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Svgs } from '../../icons-svgs/Svgs';
import EmailForm from './EmailFrom';
import WalletOptions from '../walletConnection/WalletOptions';

export default function LoginEmail() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'connectwallet') {
        setActiveTab('tab2');
      } else {
        setActiveTab('tab1');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'tab2') {
      window.location.hash = 'connectwallet';
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div>
      <div className='font-mono min-h-screen flex'>
        <div className={`${
          activeTab === 'tab1' ? 'bg-login' : 'bg-wallet'
        } lg:w-[30%] sm:w-[25%] hidden lg:block sm:block`}></div>

        <div
          className={`${
            activeTab === 'tab1' ? 'justify-between' : 'justify-start'
          } lg:w-[70%] sm:w-[75%] w-full border bg-black flex flex-col pb-6 pt-10 lg:pe-20 sm:pe-10 pe-0 `}
        >
          <div>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='lg:text-5xl sm:text-4xl text-4xl font-bold text-[#FF993C] pb-4 capitalize text-center'>
                {activeTab === 'tab1' ? 'Create your VIG account' : 'Connect wallet'}
              </h2>
              <p className='text-[#ff9a3c96] text-center'>Select the necessary authorization option.</p>
            </div>
            <div className='p-4'>
              <div className='flex space-x-4 items-center justify-center'>
                <button
                  className={`tab-button rounded-full font-semibold ${
                    activeTab === 'tab1' ? 'active text-black' : 'text-[#FF993C] bg-[#492e17]'
                  }`}
                  onClick={() => handleTabClick('tab1')}
                >
                  With e-mail
                </button>
                <button
                  className={`tab-button rounded-full font-semibold ${
                    activeTab === 'tab2' ? 'active text-black' : 'text-[#FF993C] bg-[#492e17]'
                  }`}
                  onClick={() => handleTabClick('tab2')}
                >
                  Connect wallet
                </button>
              </div>
            </div>
          </div>
          <div>
            <div id='tab1' className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'}`}>
              <EmailForm />
            </div>
            <div id='tab2' className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
              <WalletOptions />
            </div>
          </div>
          {activeTab === 'tab1' && (
            <div className='w-full flex items-center justify-center flex-col gap-4 lg:w-[100%] sm:w-[80%] text-center'>
              <button className='text-[#FF993C] bg-[#ff9a3c49] px-4 py-2 rounded-full flex gap-2'>
                Or log in with <Svgs />
              </button>
              <p className='text-[#ff9a3c96] '>
                By registering, you accept our{' '}
                <a href="#" className='underline underline-offset-2 text-[#FF993C]'>Terms of use</a> and{' '}
                <a href="#" className='underline underline-offset-2 text-[#FF993C]'>Privacy Policy</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
