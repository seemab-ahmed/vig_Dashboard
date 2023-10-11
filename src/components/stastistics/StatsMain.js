import React, { useState } from "react";
import { Navbar } from "../utils/Navbar";
import Footer from "../utils/Footer";
import { ArrowDown } from "../../icons-svgs/Svgs";
import taxans from "../../assets/taxans.png";
import DatePicker from 'react-datepicker';
import StatsTop from "./StatsTop";
import 'react-datepicker/dist/react-datepicker.css';


export default function StatsMain() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-[#100a04] min-h-[100vh]">
      {" "}
      <Navbar />
      <div className="pb-7">
        <div className="lg:px-32 px-5">
          <h1 className="text-[#FF993C] lg:text-[60px] text-3xl pt-7 my-5 pb-5">
            ST<span className="fontfamily">A</span>TISTI
            <span className="fontfamily">C</span>S
          </h1>
          <StatsTop />
        </div>
        <div className="bg-[#150d04]">
          <div className="lg:px-32 px-5">
            <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between py-8  my-4">
              <h1 className="text-[#FF993C] lg:text-[60px] text-3xl lg:leading-[1em] left-7 lg:pb-0 pb-8 ">
                B<span className="fontfamily">E</span>TTING HI
                <span className="fontfamily">S</span>TORY
              </h1>
              <div className="flex lg:flex-row md:flex-row flex-col flex-wrap gap-3 lg:w-auto  md:w-[15em]  w-[15em] ">
                <select className="rounded-full bg-[#29190b] text-[#ff993c] px-3 lg:w-[5em] md:w-[5em] outline-none h-[2.5em] w-[100%]">
                  <option> All</option>
                  <option> only time </option>
                  <option> only date </option>
                </select>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2 rounded-tl-[100px] rounded-bl-[100px] bg-[#ff993c]">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 rounded-tr-[100px] rounded-br-[100px] bg-[#29190b]">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd-MM-yyyy"
                      className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c] bg-transparent placeholder:text-[#ff993c] w-[100%] outline-none"
                      type="date"
                      placeholderText=" 28.07.2023"
                    />
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 ">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-2 rounded-tl-[100px] rounded-bl-[100px] bg-[#ff993c]">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 rounded-tr-[100px] rounded-br-[100px] bg-[#29190b]">
                  <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd-MM-yyyy"
                      className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#ff993c] bg-transparent placeholder:text-[#ff993c] w-[100%] outline-none"
                      type="date"
                      placeholderText="28.07.2023"
                    />
                  </div>
                </div>
                <button className="h-[3em] text-sm font-medium text-left text-[#ff993c] flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 px-4 py-3 rounded-[100px] bg-[#29190b]">
                  Reset
                </button>
              </div>
            </div>

            <div>
              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-3 pb-3">
                <p className="text-[#FF993C]">
                  {" "}
                  <span className="fontfamily">Aug 11, 2023</span>
                </p>
                <div>
                  <div className="flex items-center gap-5">
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      2ND QTR
                    </h2>
                    <p className="text-[#FF993C] text-2xl text-center">
                      <span className="fontfamily">
                        {" "}
                        1{"  "}:{"  "}2
                      </span>
                    </p>
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      <span>&#128308;</span> 08:45
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" py-2 px-4 font-semibold  rounded-full bg-[#FF993C] text-black flex items-center gap-2"
                    aria-current="page"
                  >
                    Game in Play
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center lg:gap-28 gap-10 mt-10 mb-8 ">
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col justify-center items-center gap-3">
                  <div className="flex items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]">
                      {" "}
                      <span className="fontfamily">HOU</span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                </div>
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col-reverse justify-center items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#ff9a3c5f] text-sm font-semibold">
                        {" "}
                        Result:
                      </p>
                      <p className="text-white px-2 py-1 text-sm bg-[#CB233E] rounded-full flex items-center justify-center gap-1">
                        -4.01$ <ArrowDown />
                      </p>
                    </div>
                  </div>

                  <div className="flex lg:items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]">
                      {" "}
                      <span className="fontfamily"> HOU</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-3 pb-3">
                <p className="text-[#FF993C]">
                  {" "}
                  <span className="fontfamily">Aug 11, 2023</span>
                </p>
                <div>
                  <div className="flex items-center gap-5">
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      2ND QTR
                    </h2>
                    <p className="text-[#FF993C] text-2xl text-center">
                      <span className="fontfamily">
                        {" "}
                        1{"  "}:{"  "}2
                      </span>
                    </p>
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      <span>&#128308;</span> 08:45
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" py-2 px-4 font-semibold  rounded-full bg-[#FF993C] text-black flex items-center gap-2"
                    aria-current="page"
                  >
                    Game in Play
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center lg:gap-28 gap-10 mt-10 mb-8 ">
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col justify-center items-center gap-3">
                  <div className="flex items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]">
                      {" "}
                      <span className="fontfamily">HOU</span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                </div>
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col-reverse justify-center items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#ff9a3c5f] text-sm font-semibold">
                        {" "}
                        Result:
                      </p>
                      <p className="text-white px-2 py-1 text-sm bg-[#CB233E] rounded-full flex items-center justify-center gap-1">
                        -4.01$ <ArrowDown />
                      </p>
                    </div>
                  </div>

                  <div className="flex lg:items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]">
                      {" "}
                      <span className="fontfamily"> HOU</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-5 justify-between items-center bg-gradient-light mb-5 flex-wrap lg:py-3 pb-3">
                <p className="text-[#FF993C]">
                  {" "}
                  <span className="fontfamily">Aug 11, 2023</span>
                </p>
                <div>
                  <div className="flex items-center gap-5">
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      2ND QTR
                    </h2>
                    <p className="text-[#FF993C] text-2xl text-center">
                      <span className="fontfamily">
                        {" "}
                        1{"  "}:{"  "}2
                      </span>
                    </p>
                    <h2 className="text-[#FF993C] bg-[#1F1307] flex justify-center rounded-3xl px-3 gap-1">
                      {" "}
                      <span>&#128308;</span> 08:45
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" py-2 px-4 font-semibold  rounded-full bg-[#FF993C] text-black flex items-center gap-2"
                    aria-current="page"
                  >
                    Game in Play
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center lg:gap-28 gap-10 mt-10 mb-8 ">
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col justify-center items-center gap-3">
                  <div className="flex items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]">
                      {" "}
                      <span className="fontfamily">HOU</span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                </div>
                <div className="flex w-[50%] lg:justify-between md:justify-between lg:items-start md:items-start sm:flex-row flex-col-reverse justify-center items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#ff9a3c5f] text-sm font-semibold">
                      {" "}
                      Bet size:
                    </p>
                    <p className="text-[#FF993C] font-semibold"> 124</p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#ff9a3c5f] text-sm font-semibold">
                        {" "}
                        Result:
                      </p>
                      <p className="text-white px-2 py-1 text-sm bg-[#CB233E] rounded-full flex items-center justify-center gap-1">
                        -4.01$ <ArrowDown />
                      </p>
                    </div>
                  </div>

                  <div className="flex lg:items-center lg:gap-9 gap-2 mb-2">
                    <img src={taxans} alt="err" className="w-16" />
                    <h2 className="text-2xl text-[#FF993C]">
                      {" "}
                      <span className="fontfamily"> HOU</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
