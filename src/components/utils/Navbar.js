/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "./CustomDropDown";
import { ButtonRightArrow, MainLogo, NavbarMetaIcon, Notification, ShowMore, StarSvg } from "../../icons-svgs/Svgs";

export default function Navbar() {
  const navigate = useNavigate();
  const[isOpen , setIsOpen]=useState(false)
  return (
    <nav className="bg-[#1F1307] border-gray-200 dark:bg-gray-900 px-16 h-[5em] ">
      <div className="flex justify-between items-center flex-wrap mx-auto py-4  h-[5em]">
        <div className="flex gap-6 ">
          <button
            href="https://flowbite.com/"
            className="flex items-center"
            onClick={() => {
              navigate("/hubmain");
            }}
          >
            <MainLogo />
          </button>
          <div className="lg:flex gap-2 hidden ">
            <CustomDropDown />
            <button className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full  text-left">
              HUB <ButtonRightArrow />
            </button>
          </div>
        </div>
        <div
          className={`items-center justify-between ${isOpen?"block absolute top-16 right-0 bg-black":"hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <ul className="flex flex-col gap-2 items-center p-4 md:p-0 mt-4 font-medium  md:flex-row  md:mt-0">
            <li className={`${isOpen && "w-[80%] "}`}>
              <button
                href="#"
                className={`p-3 flex justify-center items-center rounded-full bg-[#29190B] ${isOpen &&"py-4 w-[100%] ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"}`}
                aria-current="page"
              >
               <ShowMore/> {isOpen &&<p>BET</p>} 
              </button>
            </li>
            <li className={`${isOpen && "w-[80%] "}`}>
              <button
                href="#"
                className={`p-3 flex justify-center items-center rounded-full bg-[#29190B] ${isOpen &&"py-4 w-[100%] ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"}`}
                aria-current="page"
              >
             <StarSvg/>{isOpen &&<p>Favourites</p>} 
              </button>
            </li>
            <li className={`${isOpen && "w-[80%] "} lg:flex hidden`}>
              <button
                href="#"
                className={`p-3 lg:flex hidden justify-center items-center rounded-full bg-[#29190B] `}
                aria-current="page"
              >
               <Notification/>
              </button>
            </li>
            <li className={`${isOpen && "w-[80%] "}`}>
            <button    className={`p-3 lg:hidden flex justify-center items-center rounded-full bg-[#29190B] ${isOpen &&"py-4 w-[100%] ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"}`}
            >
              HUB <ButtonRightArrow />
            </button>
            </li>
            <li className={`${isOpen && "w-[80%] "}`}>
              <button
                href="#"
                className={`py-2 ps-2 pe-4 flex justify-center items-center rounded-full bg-[#29190B] ${isOpen &&"py-4 w-[100%] ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"}`}
                aria-current="page"
              >
               <NavbarMetaIcon/>
               <p className="text-[#FF993C]">TE5Vv....ZcJ</p>
              </button>
            </li>
          
          </ul>
        </div>
          <button
                href="#"
                className={`py-2 ps-2 pe-4 lg:hidden flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B] ${isOpen?"hidden":"flex "}`}
                aria-current="page"
              >
               <NavbarMetaIcon/>
               <p>TE5Vv....ZcJ</p>
              </button>
        <div className={`flex ${isOpen && "lg:static absolute top-5 right-16"}`}>
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-[#FF993C] bg-[#29190B] rounded-full text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <div className="relative hidden md:block ">
            <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#FF993C] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full py-2 ps-4  text-sm text-gray-900 border border-[#ff9a3c52] bg-[#29190B] placeholder:text-[#FF993C] rounded-3xl focus:border-[#FF993C] outline-none"
              placeholder="Search"
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-full md:hidden text-[#FF993C] bg-[#29190B]"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={()=>{setIsOpen(!isOpen)}}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
