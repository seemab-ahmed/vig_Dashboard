import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";
import AccordianData from "./accordian/AccordianData";
import MainAccordian from "./accordian/MainAccordian";
import Blog from "./Blog";
import MatchOfTheDay from "./MatchOfTheDay";

export default function HubMain(){

  const items = [
    {
      title: "NFL",
      content:[ <AccordianData />,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>]
    },
    {
      title: "MLS",
      content:[ <AccordianData />,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>]
    },
    {
      title: "XLF",
      content:[ <AccordianData />,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>]
    },
    {
      title: "XLF",
      content:[ <AccordianData />,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>,<AccordianData hiddenflag={true}/>]
    },
  ];
    
    return(
      <div className="bg-[#100a04]">
        <Navbar/>
        <MatchOfTheDay/>
        <MainAccordian  items={items} />
        <Blog/>
        <Footer/>
      </div>
        )
}