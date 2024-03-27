import React from "react";
import nashed from "../../assets/nashed.png";
import nsign from "../../assets/n_sign.png";
import nsign_white from "../../assets/n_sign_white.png";

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-300 py-10 md:py-20">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-center">
        Meet my <span className="text-[#6C5AF6]">team</span>
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 mx-5 md:container md:mx-auto">
        <div className="group flex flex-col items-center gap-1.5 cursor-wait">
          <div className="relative group">
            <img src={nsign_white} alt="" />
            <img
              src={nsign}
              alt=""
              className="absolute left-0 bottom-0 hidden group-hover:block"
            />
            <img src={nashed} alt="" className="absolute left-0 bottom-0" />
          </div>
          <p className="text-xl font-semibold text-[#6C5AF6]">
            Nashed Shah Roni
          </p>
          <p>CEO</p>
        </div>
      </section>
    </div>
  );
}
