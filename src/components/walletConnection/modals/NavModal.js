import React from 'react'

export default function NavModal({setdisplayddown}) {
  return (
    <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    className="fixed top-0 mt-20 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#0000007a] flex justify-center "
    onClick={() => {
        setdisplayddown(false);
      }}
  >
    <div className="relative w-full max-w-[28rem]  max-h-full">
      <div className="relative flex flex-col gap-1 bg-black rounded-lg shadow h-[30em] overflow-scroll ">
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}
