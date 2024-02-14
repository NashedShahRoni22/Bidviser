import React from "react";
import img1 from "../../assets/company/1.png";
import img2 from "../../assets/company/2.png";
import img3 from "../../assets/company/6.png";
import img4 from "../../assets/company/12.png";
import img5 from "../../assets/company/new.webp";
import Marquee from "react-fast-marquee";

export default function Company() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
  ];
  return (
    <div className="py-20">
      <Marquee speed={100} pauseOnHover>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="cursor-pointer h-[48px] md:h-[64px] mx-5 company-img"
          />
        ))}
      </Marquee>
    </div>
  );
}
