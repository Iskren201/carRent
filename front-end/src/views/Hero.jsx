import heroPatternRight from "../assets/hero-pattern-right.svg";
import heroPatternLeft from "../assets/hero-pattern-left.svg";
// import busIcon from "../assets/bus-icon.svg";
// import locationIcon from "../assets/location-icon.svg";
// import calendarIcon from "../assets/calendar-icon.svg";

import { Link } from "react-router-dom";
import CarsForRental from "./CarsForRental";


const Hero = () => {
  return (
    <div className="bg-white">
      <div className="bg-lightest-gray relative">
        <div className="wrapper min-h-[444px]">
          <h1 className="head_text pt-28 text-center">
            Find your <span className="green_text">rental car</span>
          </h1>
          <h4 className="text-subtitle-gray text-center font-raleway text-xl pb-11">
            You choose. We deliver.
          </h4>
        </div>

        <img
          src={heroPatternRight}
          alt=""
          className="hidden md:block absolute right-0 bottom-0"
        />

        <img
          src={heroPatternLeft}
          alt=""
          className="hidden md:block absolute left-0 bottom-0"
        />
      </div>

      <div className="wrapper">
        <div
          className="relative bg-white px-10 sm:px-[76px] py-9 sm:py-[70px] mt-5 sm:-mt-[166px]
        min-h-[330px] shadow-lg rounded-xl flex flex-col gap-8"
        >
          <div className="text-center flex flex-col xl:flex-row gap-5 items-center justify-center">
            <Link to="/CarsForRental" className="block mt-8">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-64 ">
                Car List
              </button>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Hero;
