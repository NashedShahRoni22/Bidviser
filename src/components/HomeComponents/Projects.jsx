import React from "react";
import image1 from "../../assets/Projects/bumrungraddiscover.png";
import image2 from "../../assets/Projects/dynamic-exim.png";
import image3 from "../../assets/Projects/homegrowbd.png";
import image4 from "../../assets/Projects/pathshalait.png";
import image5 from "../../assets/Projects/top100handyman-net.png";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

export default function Projects() {
  const projectimages = [
    {
      url: "https://bumrungraddiscover.com/",
      image: image1,
    },
    {
      url: "https://pathshalait.com/",
      image: image4,
    },
    {
      url: "https://homegrowbd.com/",
      image: image3,
    },
    {
      url: "https://dynamic-exim.com/",
      image: image2,
    },
    {
      url: "https://top100handyman.net/",
      image: image5,
    },
  ];
  return (
    <div className="mt-10 py-5 md:py-10">
      <h2 className="text-[#2317A9] text-xl md:text-3xl lg:text-5xl font-semibold">
        Our Works
      </h2>
      <p className="lg:text-xl mt-5">
        Through fusion of creative strategy and data-driven insights, we help
        brands unlock their potential, creating effective digital campaigns that
        expand reach and boost customer engagement.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {projectimages.map((p, i) => (
          <div
            key={i}
            className="bg-cover h-[250px] md:h-[350px] bg-top hover:bg-bottom ease-linear shadow-xl relative"
            style={{ backgroundImage: `url(${p.image})`, transitionDuration: "8s", }}
          >
            <div className="absolute flex justify-center items-center group h-full w-full top-0 bg-black/50 hover:bg-black/10 duration-300 ease-linear">
              <Link to={p.url} target="_blank" className="px-2 md:px-4 py-1 md:py-2 border border-[#0c2c5d] bg-[#0c2c5d] hover:bg-white text-white hover:text-[#0c2c5d] shadow rounded-full hidden group-hover:flex justify-center gap-2 items-center duration-1000 ease-linear">
                <BsEye className="text-xl" /> Live
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
