/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Svgs } from "../../icons-svgs/Svgs";
import UserNamePwForm from "./UserNamePwForm";
import { useLocation } from "react-router-dom";

export default function UserNamePw() {
  const location = useLocation();
  const state = location.state;
  console.log(state.state);
  return (
    <div>
      <div className="font-mono min-h-screen flex">
        <div className=" lg:w-[30%] sm:w-[25%] bg-loginpsw hidden lg:block sm:block"></div>
        <div className="lg:w-[70%] sm:w-[75%] w-full border bg-black flex flex-col justify-between  pb-6 pt-10 lg:pe-20 sm:pe-10 pe-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="lg:text-[64px] text-[42px] text-[#FF993C] py-5 capitalize text-center">
              {state.state ? (
                <>
                  Y<span className="fontfamily">O</span>U{" "}
                  <span className="fontfamily">A</span>RE AL
                  <span className="fontfamily">M</span>OST TH
                  <span className="fontfamily">E</span>RE!{" "}
                </>
              ) : (
                <>
                  CRE<span className="fontfamily">A</span>TE YO
                  <span className="fontfamily">U</span>R VIG ACCO
                  <span className="fontfamily">U</span>NT
                </>
              )}
            </h2>
            {state.state ?<p className="text-[#ff9a3c96] text-center">
            Choose a display name and enter your email address
              </p>:""}
          </div>
          <div>
            <div id="tab1" className={`tab-content `}>
              <UserNamePwForm />
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-4 lg:w-[100%] sm:w-[80%] text-center">
            <button className="text-[#FF993C] bg-[#ff9a3c49] px-4 py-2 rounded-full flex gap-2">
              Or log in with <Svgs />
            </button>
            <p className="text-[#ff9a3c96] ">
              By registering, you accept our{" "}
              <a href="#" className="underline text-[#FF993C]">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-[#FF993C]">
                Privacy Policy
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
