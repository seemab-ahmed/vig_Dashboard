import React, { useState } from "react";
import { DropDownIcon, DropdownArrow } from "../../icons-svgs/Svgs";

const CustomDropDown = () => {
  const options = [
    { value: "USDC", label: "USDC", icon: <DropDownIcon /> },
    { value: "USDt", label: "USDt", icon: <DropDownIcon /> },
    { value: "option3", label: "Option", icon: <DropDownIcon /> },
    { value: "option4", label: "Option", icon: <DropDownIcon /> },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center bg-[#29190B] text-[#FF993C] py-2 ps-4 pe-1 rounded-full  text-left"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="mr-2">{selectedOption.icon}</span>
        <span className="mr-2"> {selectedOption.label}</span>
        <span className="me-2">
          <svg
            className={`w-3 h-auto transition-transform transform ${
              !isDropdownOpen ? "rotate-0 " : "rotate-180"
            }`}
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99991 4.21158L0.330078 0.541748H7.66974L3.99991 4.21158Z"
              fill="#FF993C"
            />
          </svg>
        </span>
        <span className="mr-2">
          {" "}
          <DropdownArrow />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="absolute mt-2 py-2 w-40 bg-[#100a04] border  border-[#FF993C] rounded-lg shadow-lg z-20">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center px-4 py-2  cursor-pointer text-[#FF993C]"
              onClick={() => handleOptionChange(option)}
            >
              <span className="mr-2">{option.icon}</span>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
