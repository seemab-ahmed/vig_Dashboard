import React, { useState } from "react";
import MainCountryAcordian from "./MainCountryAcordian";
import {
  BackArrow,
  ForwardArrow,
  RuckbiBall,
  CricketIcon,
  Footballcon,
  VallyballIcon,
  BaseBallIcon,
} from "../../../icons-svgs/Svgs";

const tabs = [
  { id: "tab1", icon: <RuckbiBall />, label: "American football" },
  { id: "tab2", icon: <CricketIcon />, label: "Coming Soon" },
  { id: "tab3", icon: <Footballcon />, label: "Coming Soon" },
  { id: "tab4", icon: <VallyballIcon />, label: "Coming Soon" },
  { id: "tab5", icon: <BaseBallIcon />, label: "Coming Soon" },
  { id: "tab6", icon: <Footballcon />, label: "Coming Soon" },
  { id: "tab7", icon: null, label: "Coming Soon" },
  { id: "tab8", icon: null, label: "Coming Soon" },
  { id: "tab9", icon: null, label: "Coming Soon" },
  { id: "tab10", icon: null, label: "Coming Soon" },
  { id: "tab11", icon: null, label: "Coming Soon" },
  { id: "tab12", icon: null, label: "Coming Soon" },
  { id: "tab13", icon: null, label: "Coming Soon" },
  { id: "tab14", icon: null, label: "Coming Soon" },
];

export default function TeamAccordian() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const handlePrevTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  return (
    <div className="text-white ">
      <div className="lg:px-32 px-5">
        <h1 className="lg:text-[62px] text-3xl text-[#FF993C] py-10">
          E<span className="fontfamily">V</span>EN
          <span className="fontfamily">T</span>S
        </h1>
        <div className="flex items-center gap-1">
          <button
            className={`tab-button-wallet font-semibold flex items-center gap-2  py-4 px-[0.9rem] rounded-full bg-[#29190B]`}
            onClick={handlePrevTab}
          >
            <BackArrow />
          </button>
          <div className="overflow-auto">
            <div className="flex space-x-1 items-center justify-start w-[200em]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button-wallet font-semibold flex items-center gap-2 text-[14px] px-4 py-2 rounded-full ${
                    activeTab === tab.id
                      ? "text-black bg-[#FF993C]"
                      : "text-[#ff9a3c62] bg-[#29190B]"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>
          <button
            className={`tab-button-wallet font-semibold flex items-center gap-2  py-3 px-[0.8rem] rounded-full bg-[#29190B]`}
            onClick={handleNextTab}
          >
            <ForwardArrow />
          </button>
        </div>
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
            <MainCountryAcordian />
          </div>
        ))}
      </div>
    </div>
  );
}
