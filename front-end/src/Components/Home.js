import React from "react";

import heroPatternRight from '../assets/hero-pattern-right.svg'
import heroPatternLeft from '../assets/hero-pattern-left.svg'
import LabelInput from "./LabelInput";
import PrimaryButton from "./PrimaryButton";

const Home = () => {
    return <div className="bg-white">
        <div className="bg-gray-200 relative">
            <div className="wrapper min-h-[444px]">
                <h1 className="pt-28 text-center lg:text-[58px] font-extrabold sm:text-[38px]" >Find your <span className="text-green-400">Rental Car</span></h1>
                <h4 className="text-gray-500 text-center font-bold text-xl pb-11">You choose. We deliver</h4>
            </div>
            <img src={heroPatternRight} alt="" className="hidden md:block absolute right-0 bottom-0" />
            <img src={heroPatternLeft} alt="" className="hidden md:block absolute left-0 bottom-0" />
        </div>

        <div className="wrapper">
            <div className="relative bg-white px-10 sm:px[76px] gap-y-9 sm:py-[70px] mt-5 sm:-mt=[166px] min-h-[330px] shadow-lg rounded-xl flex flex-col gap-8">
                <div className="flex flex-col xl:flex-row gap-5">
                    <LabelInput />
                    <LabelInput />
                    <LabelInput />
                    <LabelInput />
                    <PrimaryButton>Find you</PrimaryButton>
                </div>
            </div>
        </div>
    </div>;
};

export default Home;
