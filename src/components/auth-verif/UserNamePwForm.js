import React, { useState } from 'react';
import { BackArrow, Error, Tick } from '../../icons-svgs/Svgs';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function UserNamePwForm({setTokenState}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
const navigate = useNavigate()
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
// const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!usernameRegex.test(username)) {
      setUsernameError(true);
    } else if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setUsernameError(false);
      navigate("/hubmain")
      setTokenState(true)
    }
  };
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col lg:w-[25.5em] sm:w-[25.5em] w-[80%] gap-3'>
        <form onSubmit={handleSubmit} className='gap-3 flex flex-col'>
          <div className='flex flex-col'>
            <label className='text-[#FF993C] ps-4 pb-1'>Enter your username:</label>
            <input
              className={`bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-4 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
              type='text'
              
              value={username}
              onChange={handleUsernameChange}
            />
            {submitted && usernameError && (
              <p className='text-red-500 flex items-center gap-2'>
                <Error /> Invalid Username
              </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='text-[#FF993C] ps-4 pb-1'>Enter your password:</label>
            <input
              className={`bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-4 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
              type='password'
              
              value={password}
              onChange={handlePasswordChange}
            />
            {submitted && passwordError && (
           
              <p className='text-red-500 flex items-center gap-2'>
                <Error /> Password must be at least 8 characters long
              </p>
            )}
          </div>
          <div className='flex items-center gap-3'>
          <Tick/>
          <p className='text-[#ff9a3c96] '>I have read and accept the <span className='text-[#FF993C]'>Terms of Service</span>, the <span className='text-[#FF993C]'> Terms of Creator</span> and confirm that I am at least 18 years old</p>
          </div>
          <button
        
            className={`bg-[#FF993C] rounded-full text-black px-4 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C] font-bold border-[#FF993C] w-full`}
          >
            Finish sign-up
          </button>
          <button
            onClick={()=>{goBack()}}
            className={`bg-[#ff9a3c49] text-[#FF993C] rounded-full  px-4 lg:py-2 sm:py-2  py-2  focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C] font-bold border-[#FF993C] w-full flex justify-center items-center gap-2`}
          >
          <BackArrow/>  Back
          </button>
        </form>
       
      </div>
    </div>
  );
}
