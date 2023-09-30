import React from 'react'
import { Svgs } from '../../icons-svgs/Svgs'
import UserNamePwForm from './UserNamePwForm'


export default function UserNamePw() {
  return (
    <div>
      <div className='font-mono min-h-screen border border-blue-900 flex'>
        <div className=' lg:w-[30%] sm:w-[25%] bg-loginpsw hidden lg:block sm:block'></div>
        <div className='lg:w-[70%] sm:w-[75%] w-full border bg-black flex flex-col justify-between  pb-6 pt-10 lg:pe-20 sm:pe-10 pe-0'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='lg:text-5xl sm:text-4xl text-3xl font-bold text-[#FF993C] pb-4 capitalize text-center'>
                Create your VIG account
              </h2>
            </div>
            <div>
            <div id='tab1' className={`tab-content `}>
              <UserNamePwForm />
            </div>
            </div>
          <div className='w-full flex items-center justify-center flex-col gap-4 lg:w-[100%] sm:w-[80%] text-center'>
            <button className='text-[#FF993C] bg-[#ff9a3c49] px-4 py-2 rounded-full flex gap-2'>
              Or log in with <Svgs />
            </button>
            <p className='text-[#ff9a3c96] '>
              By registering, you accept our{" "}
              <a className='underline underline-offset-2 text-[#FF993C]'>Terms of use</a>{" "}
              and{" "}
              <a className='underline underline-offset-2 text-[#FF993C]'>Privacy Policy</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
