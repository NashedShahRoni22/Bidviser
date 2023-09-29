import React from "react";
import comercialImg from "../../assets/services/Comercial Video & Photography.svg";
import digitalMarkettingImg from "../../assets/services/Digital Marketing.svg";
import digitalAdvertisingImg from "../../assets/services/Digital Advertising.svg";
import seoImg from "../../assets/services/Search Engine Optimization(SEO).svg";
import socialMediaImg from "../../assets/services/Social Media Marketing.svg";
import webImg from "../../assets/services/Web Design & Development.svg";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function Services() {
  const services = [
    {
      name: "Digital Marketing",
      img: digitalAdvertisingImg,
    },
    {
      name: "Digital Advertising",
      img: digitalMarkettingImg,
    },
    {
      name: "Web Design & Development",
      img: webImg,
    },
    {
      name: "Search Engine Optimization(SEO)",
      img: seoImg,
    },
    {
      name: "Comercial Video & Photography",
      img: comercialImg,
    },
    {
      name: "Social Media Marketing",
      img: socialMediaImg,
    },
  ];
  return (
    <div className="">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#0c2c5d]">
        Services
      </h2>
      <p className="lg:text-xl mt-5">
        Take Your Business to the next Level. <br />
        Unleashing Your Potential. Empowering You to Break Boundaries and Soar
        in Business Success.
      </p>
      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gradient-to-tr from-[#e8f6fc] p-10 flex items-center justify-between rounded-xl shadow hover:scale-105 duration-200 ease-linear"
            // className={`${
            //   i % 2 === 0 ? "bg-black/90" : "bg-white"
            // } p-10 flex items-center justify-between rounded-xl shadow-xl hover:shadow-none duration-300`}
          >
            <div className="flex flex-col h-full justify-between">
              <h5
                // className={`${
                //   i % 2 === 0 ? "text-white" : "text-black"
                // } font-semibold text-xl md:text-3xl`}
                className="font-semibold text-xl md:text-3xl text-[#0c2c5d]"
              >
                {s.name}
              </h5>
              <button
                // className={`${
                //   i % 2 === 0 ? "text-white" : "text-black"
                // } flex items-center gap-2`}
                className="flex items-center gap-2"
              >
                <BsFillArrowUpRightCircleFill className="text-3xl text-[#0c2c5d]" />
                <span className="hidden md:block font-semibold text-[#0c2c5d]">Learn More</span>
              </button>
            </div>
            <div>
              <img
                src={s.img}
                alt=""
                className="h-[130px] md:h-[170px] w-[165px] md:w-[210px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
