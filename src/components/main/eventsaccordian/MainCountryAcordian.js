import React, { useState } from "react";
import MainAccordian from "../accordian/MainAccordian";
import AccordianData from "../accordian/AccordianData";
import taxans from "../../../assets/taxans.png";
import bal from "../../../assets/bal.png";
import SF from "../../../assets/SF.png";
import pit from "../../../assets/pit.png";
import det from "../../../assets/det.png";
import kc from "../../../assets/kc.png";
import baf from "../../../assets/baf.png";
import nco from "../../../assets/nco.png";
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
      <AccordianData img={taxans} img2={bal} name={"HOU"} name2={"BAL"} />,
      <AccordianData hiddenflag={true}  img={SF} img2={pit} name={"SF"} name2={"PIT"}  />,
      <AccordianData hiddenflag={true} img={det}  img2={kc} name={"DET"} name2={"KC"} />,
      <AccordianData hiddenflag={true} img={baf}  img2={nco} name={"BUF"} name2={"NYJ"}  />,
    ],
  },
  {
    title: "MLS",
    content: [
      <AccordianData img={taxans} img2={bal} name={"HOU"} name2={"BAL"} />,
      <AccordianData hiddenflag={true}  img={SF} img2={pit} name={"SF"} name2={"PIT"}  />,
      <AccordianData hiddenflag={true} img={det}  img2={kc} name={"DET"} name2={"KC"} />,
      <AccordianData hiddenflag={true} img={baf}  img2={nco} name={"BUF"} name2={"NYJ"}  />,
    ],
  },
  {
    title: "XLF",
    content: [
      <AccordianData img={taxans} img2={bal} name={"HOU"} name2={"BAL"} />,
      <AccordianData hiddenflag={true}  img={SF} img2={pit} name={"SF"} name2={"PIT"}  />,
      <AccordianData hiddenflag={true} img={det}  img2={kc} name={"DET"} name2={"KC"} />,
      <AccordianData hiddenflag={true} img={baf}  img2={nco} name={"BUF"} name2={"NYJ"}  />,
    ],
  },
  {
    title: "XLF",
    content: [
      <AccordianData img={taxans} img2={bal} name={"HOU"} name2={"BAL"} />,
      <AccordianData hiddenflag={true}  img={SF} img2={pit} name={"SF"} name2={"PIT"}  />,
      <AccordianData hiddenflag={true} img={det}  img2={kc} name={"DET"} name2={"KC"} />,
      <AccordianData hiddenflag={true} img={baf}  img2={nco} name={"BUF"} name2={"NYJ"}  />,
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
      <div className="flex space-x-4 items-center justify-start pt-4 pb-5 lg:px-32 px-5 overflow-auto">
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
