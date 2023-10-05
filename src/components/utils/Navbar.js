/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "./CustomDropDown";
import {
  ButtonRightArrow,
  MainLogo,
  NavbarMetaIcon,
  Notification,
  ShowMore,
  StarSvg,
} from "../../icons-svgs/Svgs";

export function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [displayddown, setdisplayddown] = useState(false);
  return (
    <>
      <nav className="bg-[#1F1307] border-gray-200 dark:bg-gray-900 lg:px-16 px-4 h-[5em]">
        <div className="flex justify-between items-center mx-auto py-4 h-[5em]">
          <div className="flex gap-6">
            <button
              href="https://flowbite.com/"
              className="flex items-center"
              onClick={() => {
                navigate("/hubmain");
              }}
            >
              <MainLogo />
            </button>
            <div className="lg:flex gap-2 hidden">
              <CustomDropDown />
              <button
                className="flex items-center gap-1 bg-[#29190B] text-[#FF993C] py-2 ps-4 px-5 rounded-full text-left"
                onClick={() => {
                  navigate("/oddscal");
                }}
              >
                HUB <ButtonRightArrow />
              </button>
            </div>
          </div>
          <div
            className={`items-center justify-between z-40 ${
              isOpen ? "block absolute top-16 right-0 bg-black" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <ul
              className={`flex flex-col gap-2 items-center p-4 md:p-0  font-medium md:flex-row ${
                isOpen ? "md:mt-0 sm:h-[90vh]" : ""
              } `}
            >
              <li className={`${isOpen ? "w-full" : ""}`}>
                <button
                  className={`p-3 flex justify-center items-center rounded-full bg-[#29190B] ${
                    isOpen
                      ? "py-4 w-full ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"
                      : ""
                  }`}
                  aria-current="page"
                  onClick={() => {
                    navigate("/gameInfo");
                  }}
                >
                  <ShowMore /> {isOpen && <p>BET</p>}
                </button>
              </li>
              <li className={`${isOpen ? "w-full" : ""}`}>
                <button
                  onClick={() => {
                    navigate("/favourite");
                  }}
                  className={`p-3 flex justify-center items-center rounded-full bg-[#29190B] ${
                    isOpen
                      ? "py-4 w-full ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"
                      : ""
                  }`}
                  aria-current="page"
                >
                  <StarSvg /> {isOpen && <p>Favourites</p>}
                </button>
              </li>
              <li
                className={`${isOpen ? "w-full lg:flex hidden" : "lg:hidden"}`}
              >
                <button
                  className={`p-3 lg:flex hidden justify-center items-center rounded-full bg-[#29190B]`}
                  aria-current="page"
                >
                  <Notification />
                </button>
              </li>
              <li className={`${isOpen ? "w-full" : ""}`}>
                <button
                  href="#"
                  className={`py-2 ps-2 pe-4 flex justify-center items-center rounded-full bg-[#29190B] ${
                    isOpen
                      ? "py-4 w-full ps-2 pe-4 flex items-center gap-3 text-[#FF993C] rounded-full bg-[#29190B]"
                      : ""
                  }`}
                  aria-current="page"
                >
                  <NavbarMetaIcon />
                  <p className="text-[#FF993C]">TE5Vv....ZcJ</p>
                </button>
              </li>
            </ul>
          </div>
          <button
            href="#"
            className={`py-2 ps-2 pe-4 lg:hidden flex items-center  gap-3 text-[#FF993C] rounded-full bg-[#29190B] ${
              isOpen ? "hidden" : "flex"
            }`}
            aria-current="page"
          >
            <NavbarMetaIcon />
            <p>TE5Vv....ZcJ</p>
          </button>
          <div
            className={`flex lg:w-full md:w-[50%] w-auto justify-end  ${
              isOpen ? "lg:static absolute top-5 right-16" : ""
            }`}
          >
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-[#FF993C] bg-[#29190B] rounded-full text-sm p-2.5 mr-1"
              onClick={() => {
                setdisplayddown(!displayddown);
              }}
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
            <div className="relative hidden md:block w-[50%]  m-auto">
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
              <div className="relative">
                <input
                  type="text"
                  id="search-navbar"
                  onClick={() => {
                    setdisplayddown(!displayddown);
                  }}
                  className=" block w-full py-2 ps-4 text-sm text-gray-900 border border-[#ff9a3c52] bg-[#29190B] placeholder:text-[#FF993C] rounded-3xl focus:border-[#FF993C] outline-none"
                  placeholder="Search"
                />
           
               
              </div>
            
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-full md:hidden text-[#FF993C] bg-[#29190B]"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
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

        {displayddown && (
          <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 mt-20 left-0 right-0 z-50  w-full p-4 overflow-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#0000007a] flex justify-center "
          >
            <div class="relative w-full max-w-lg max-h-full">
              <div class="relative flex flex-col gap-1 bg-black rounded-lg shadow">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-4 rounded-[32px] bg-[#1f1307]">
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]/50">
                      Aug 11, 2023
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          2ND QTR
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="none"
                        >
                          <circle cx={4} cy={4} r={4} fill="#CB233E" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          08:45
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 lg:w-[100px] text-2xl text-center uppercase text-[#ff993c]">
                      1 : 2
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                      More info
                    </p>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                        stroke="#FF993C"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-4 rounded-[32px] bg-[#1f1307]">
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]/50">
                      Aug 11, 2023
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          2ND QTR
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="none"
                        >
                          <circle cx={4} cy={4} r={4} fill="#CB233E" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          08:45
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 lg:w-[100px] text-2xl text-center uppercase text-[#ff993c]">
                      1 : 2
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                      More info
                    </p>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                        stroke="#FF993C"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-4 rounded-[32px] bg-[#1f1307]">
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]/50">
                      Aug 11, 2023
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          2ND QTR
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="none"
                        >
                          <circle cx={4} cy={4} r={4} fill="#CB233E" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          08:45
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 lg:w-[100px] text-2xl text-center uppercase text-[#ff993c]">
                      1 : 2
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                      More info
                    </p>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                        stroke="#FF993C"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
                 )}
      </nav>
    </>
  );
}

export function NavbarNews() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const [displayddown, setdisplayddown] = useState(false);
  return (
    <nav className="bg-[#1F1307] border-gray-200 dark:bg-gray-900 lg:px-16 px-4 h-[5em]">
      <div className="flex justify-between items-center mx-auto py-4 h-[5em]">
        <div className="flex gap-6">
          <button
            href="https://flowbite.com/"
            className="flex items-center"
            onClick={() => {
              navigate("/hubmain");
            }}
          >
            <MainLogo />
          </button>
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#ff993c]"
            onClick={closeMenu}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M16.6667 10L3.33341 10M3.33341 10L8.33341 15M3.33341 10L8.33341 5"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
            <p className="lg:flex hidden sm:flex flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
              Back to betting
            </p>
          </div>
        </div>
        <div
          className={`items-center justify-between z-40 ${
            isOpen ? "block absolute top-16 right-0 bg-black" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <ul
            className={`flex flex-col gap-2 items-center p-4 md:p-0 font-medium md:flex-row ${
              isOpen ? "md:mt-0 sm:h-[90vh]" : ""
            } `}
          >
            <li className={`${isOpen ? "w-full" : ""} text-center`}>
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]"
                onClick={closeMenu}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                  Betting Mechanics
                </p>
              </div>
            </li>
            <li className={`${isOpen ? "w-full" : ""}`}>
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]"
                onClick={closeMenu}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                  Strategies
                </p>
              </div>
            </li>
            <li className={`${isOpen ? "w-full" : ""}`}>
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]"
                onClick={closeMenu}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                  Risk-Management
                </p>
              </div>
            </li>
            <li className={`${isOpen ? "w-full" : ""}`}>
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]"
                onClick={closeMenu}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                  Insights & Analysis
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={`flex lg:w-[30%] ${
            isOpen ? "lg:static absolute top-5 right-16" : ""
          }`}
        >
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
          <div className="relative hidden md:block w-full">
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
              className="block w-full py-2 ps-4 text-sm text-gray-900 border border-[#ff9a3c52] bg-[#29190B] placeholder:text-[#FF993C] rounded-3xl focus:border-[#FF993C] outline-none"
              placeholder="Search"
              onClick={()=>{setdisplayddown(!displayddown)}}
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-full md:hidden text-[#FF993C] bg-[#29190B]"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
      {displayddown && (
          <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 mt-20 left-0 right-0 z-50  w-full p-4 overflow-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#0000007a] flex justify-center "
          >
            <div class="relative w-full max-w-lg max-h-full">
              <div class="relative flex flex-col gap-1 bg-black rounded-lg shadow">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-4 rounded-[32px] bg-[#1f1307]">
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]/50">
                      Aug 11, 2023
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          2ND QTR
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="none"
                        >
                          <circle cx={4} cy={4} r={4} fill="#CB233E" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          08:45
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 lg:w-[100px] text-2xl text-center uppercase text-[#ff993c]">
                      1 : 2
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                      More info
                    </p>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                        stroke="#FF993C"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-4 rounded-[32px] bg-[#1f1307]">
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]/50">
                      Aug 11, 2023
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          2ND QTR
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="none"
                        >
                          <circle cx={4} cy={4} r={4} fill="#CB233E" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          08:45
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 lg:w-[100px] text-2xl text-center uppercase text-[#ff993c]">
                      1 : 2
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                      More info
                    </p>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                        stroke="#FF993C"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-4 rounded-[32px] bg-[#1f1307]">
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]/50">
                      Aug 11, 2023
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          2ND QTR
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-1 rounded-[100px] bg-[#1f1307]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="none"
                        >
                          <circle cx={4} cy={4} r={4} fill="#CB233E" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                          08:45
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 lg:w-[100px] text-2xl text-center uppercase text-[#ff993c]">
                      1 : 2
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative overflow-hidden rounded-[1000px] bg-[#cb233e]" />
                      <p className="flex-grow-0 flex-shrink-0 lg:w-[60px] lg:text-2xl text-left uppercase text-[#ff993c]">
                        HOU
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c]">
                      More info
                    </p>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                        stroke="#FF993C"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
                 )}
    </nav>
  );
}
