import React from "react";
import image1 from "../../assets/Projects/bumrungraddiscover.png";
import image2 from "../../assets/Projects/dynamic-exim.png";
import image3 from "../../assets/Projects/homegrowbd.png";
import image4 from "../../assets/Projects/pathshalait.png";
import image5 from "../../assets/Projects/top100handyman-net.png";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

export default function Projects() {
  const projectimages = [image1, image4, image3, image2, image5];
  return (
    <div className="mt-10 p-5 md:p-10">
      <h2 className="text-[#0c2c5d] text-xl md:text-3xl lg:text-5xl font-semibold">
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
            className="bg-cover h-[350px] bg-top hover:bg-bottom duration-1000 ease-linear shadow-xl relative"
            style={{ backgroundImage: `url(${p})` }}
          >
            <div className="absolute flex justify-center items-center group h-full w-full top-0 bg-black/50 hover:bg-black/10 duration-300 ease-linear">
              <Link className="px-2 md:px-4 py-1 md:py-2 border border-[#0c2c5d] bg-[#0c2c5d] text-white shadow rounded hidden group-hover:flex justify-center gap-2 items-center duration-1000 ease-linear">
                <BsEye className="text-xl"/> Live
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
