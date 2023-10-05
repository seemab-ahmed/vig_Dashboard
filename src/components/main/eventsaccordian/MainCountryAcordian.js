import React, { useState } from "react";
import MainAccordian from "../accordian/MainAccordian";
import AccordianData from "../accordian/AccordianData";

const tabs = [
  { id: "tab1", label: "USA" },
  { id: "tab2", label: "Russia" },
  { id: "tab3", label: "Germany" },
  { id: "tab4", label: "Spain" },
  { id: "tab5", label: "Italy" },
  { id: "tab6", label: "France" },
];

const items = [
  {
    title: "NFL",
    content: [
      <AccordianData />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
    ],
  },
  {
    title: "MLS",
    content: [
      <AccordianData />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
    ],
  },
  {
    title: "XLF",
    content: [
      <AccordianData />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
    ],
  },
  {
    title: "XLF",
    content: [
      <AccordianData />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
      <AccordianData hiddenflag={true} />,
    ],
  },
];

export default function MainCountryAcordian() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-white w-[100%]">
      <div className="flex space-x-4 items-center justify-start pt-4 pb-5 lg:px-32 px-10 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button-wallet font-semibold ${
              activeTab === tab.id
                ? "text-[#FF993C] text-[14px] border-b border-[#FF993C]"
                : "text-[#ff9a3c62] text-[14px] border-b border-[#ff9a3c62]"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`tab-content flex justify-center items-center ${
              activeTab === tab.id ? "" : "hidden"
            }`}
          >
            <MainAccordian items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}
