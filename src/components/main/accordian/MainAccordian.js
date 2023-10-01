import React, { useState } from "react";
import { AccordianStar } from "../../../icons-svgs/Svgs";
const MainAccordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <div key={index} className=" rounded-md border-t border-[#0000001c]">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left focus:outline-none"
            >
              <div className="flex items-center justify-between bg-[#FF993C] lg:px-32 px-10 py-2">
                <span className=" font-semibold text-black flex gap-2">
                 

                  <svg
                    className={`w-3 h-auto transition-transform transform ${
                      activeIndex === index ? "rotate-0 " : "rotate-180"
                    }`}
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.00009 0.788479L7.66992 4.45831L0.330255 4.45831L4.00009 0.788479Z"
                      fill="black"
                    />
                  </svg>
                  {item.title}
                </span>
                <AccordianStar />
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-[#FF993C] lg:px-32 px-10">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainAccordian;
