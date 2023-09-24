import React from "react";
import comercialImg from "../../assets/services/ComercialVideo&Photography.png";
import digitalMarkettingImg from "../../assets/services/digital_marketting.png";
import digitalAdvertisingImg from "../../assets/services/digital_advertising.png";
import seoImg from "../../assets/services/seo.png";
import socialMediaImg from "../../assets/services/social_media_marketting.png";
import webImg from "../../assets/services/web_design.png";
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
      <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#4175FC]">
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
            className={`${
              i % 2 === 0 ? "bg-[#4175FC]" : "bg-white"
            } p-10 flex items-center justify-between rounded-xl shadow-xl hover:shadow-none duration-300`}
          >
            <div className="flex flex-col h-full justify-between">
              <h5
                className={`${
                  i % 2 === 0 ? "text-white" : "text-black"
                } font-semibold text-xl md:text-3xl`}
              >
                {s.name}
              </h5>
              <button
                className={`${
                  i % 2 === 0 ? "text-white" : "text-black"
                } flex items-center gap-2`}
              >
                <BsFillArrowUpRightCircleFill className="text-3xl" />
                <span className="hidden md:block">Learn More</span>
              </button>
            </div>
            <div>
              <img
                src={s.img}
                alt=""
                // className="h-[130px] md:h-[170px] w-[165px] md:w-[210px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
