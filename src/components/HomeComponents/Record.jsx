import React from "react";
import { BiHappy, BiCrown, BiCustomize } from "react-icons/bi";
import CountUp from 'react-countup';

export default function Record() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 py-5 my-5">
      <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-5 shadow-xl p-4 md:p-8 rounded-xl">
        <BiHappy className="text-4xl md:text-6xl text-[#4175FC]" />
        <div className="text-center md:text-left">
          <CountUp duration={5} end={100} className="font-semibold text-2xl md:text-4xl text-[#0c2c5d]" />
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-5 shadow-xl p-4 md:p-8 rounded-xl">
        <BiCrown className="text-4xl md:text-6xl text-[#4175FC]" />
        <div className="text-center md:text-left">
        <CountUp duration={5} end={5} className="font-semibold text-2xl md:text-4xl text-[#0c2c5d]" />
          <p>Years of Experience</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-5 shadow-xl p-4 md:p-8 rounded-xl">
        <BiCustomize className="text-4xl md:text-6xl text-[#4175FC]" />
        <div className="text-center md:text-left">
        <CountUp duration={5} end={50} className="font-semibold text-2xl md:text-4xl text-[#0c2c5d]" />
          <p>Successful Projects</p>
        </div>
      </div>
    </div>
  );
}
