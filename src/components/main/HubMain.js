import Footer from "../utils/Footer";
import { Navbar } from "../utils/Navbar";
import Blog from "./Blog";
import TeamAccordian from "./eventsaccordian/TeamAccordian";
import MatchOfTheDay from "./MatchOfTheDay";
import TopMainSlider from "./TopMainSlider";
export default function HubMain(){


    return(
      <div className="bg-[#100a04]">
        <Navbar/>
        <TopMainSlider/>
        <MatchOfTheDay/>
        <TeamAccordian/>
        <div className="relative">
        <div className="bg-custom-radial-gradientnd w-[50em] h-[50em] absolute -left-[32em] -top-20">
        </div>
        <Blog/>
        </div>
        <Footer/>
        
      </div>
        )
}