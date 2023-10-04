import React, { useState } from 'react';
import { DropDownIcon, DropdownArrow } from '../../icons-svgs/Svgs';

const CustomDropDown = () => {
    const options = [
        { value: 'USDC', label: 'USDC', icon: <DropDownIcon/> },
        { value: 'USDt', label: 'USDt', icon: <DropDownIcon/> },
        { value: 'option3', label: 'Option', icon: <DropDownIcon/> },
        { value: 'option4', label: 'Option', icon: <DropDownIcon/> },
      ];
    
      const [selectedOption, setSelectedOption] = useState(options[0]);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Add this line
    
      const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close the dropdown when an option is selected
      };
    
  return (
    <div className="relative">
    <button
      className="flex items-center bg-[#29190B] text-[#FF993C] py-2 ps-4 pe-9 rounded-full  text-left"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <span className="mr-2">{selectedOption.icon}</span>
      {selectedOption.label}
      <span className="mr-2"> <DropdownArrow /></span>
    </button>
    {isDropdownOpen && (
      <div className="absolute mt-2 py-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
