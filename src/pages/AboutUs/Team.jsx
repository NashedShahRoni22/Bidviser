import React from "react";
import nsign from "../../assets/n_sign.png";
import nsign_white from "../../assets/n_sign_white.png";
// team images
import nashed from "../../assets/team/2.png";
import sajib from "../../assets/team/1.png";
import ashik from "../../assets/team/3.png";
import shihab from "../../assets/team/4.png";
import rashid from "../../assets/team/5.png";
import murad from "../../assets/team/6.png";

export default function Team() {
  const teamData = [
    {
      image: nashed,
      name: "Nashed Shah Roni",
      designation: "CEO",
    },
    {
      image: sajib,
      name: "MK Sajib",
      designation: "Graphics Designer",
    },
    {
      image: ashik,
      name: "Md Ashik",
      designation: "Software Engineer",
    },
    {
      image: shihab,
      name: "Md Shihab",
      designation: "Student Counsellor",
    },
    {
      image: rashid,
      name: "Humayan Rashid",
      designation: "Digital Marketer",
    },
    {
      image: murad,
      name: "Md Murad",
      designation: "Software Engineer",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-300 py-10 md:py-20">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-center">
        Meet my <span className="text-[#6C5AF6]">team</span>
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 mx-5 md:container md:mx-auto">
        {teamData.map((t) => (
          <div className="group flex flex-col items-center gap-1.5 cursor-wait">
            <div className="relative group">
              <img src={nsign_white} alt="" />
              <img
                src={nsign}
                alt=""
                className="absolute left-0 bottom-0 hidden group-hover:block"
              />
              <img src={t.image} alt="" className="absolute left-0 bottom-0" />
            </div>
            <p className="text-xl font-semibold text-[#6C5AF6]">{t.name}</p>
            <p>{t.designation}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
