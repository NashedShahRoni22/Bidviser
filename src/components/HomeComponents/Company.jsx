import React from "react";
import img1 from "../../assets/company/1.png";
import img2 from "../../assets/company/2.png";
import img3 from "../../assets/company/3.png";
import img4 from "../../assets/company/4.png";
import img5 from "../../assets/company/5.png";
import img6 from "../../assets/company/6.png";
import img7 from "../../assets/company/7.png";
import img8 from "../../assets/company/8.png";
import img9 from "../../assets/company/9.png";
import img10 from "../../assets/company/10.png";
import img11 from "../../assets/company/11.png";
import img12 from "../../assets/company/12.png";
import img13 from "../../assets/company/13.png";
import Marquee from "react-fast-marquee";

export default function Company() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];
  return (
    <div className="py-20">
      <Marquee speed={100} pauseOnHover>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="cursor-pointer h-[48px] md:h-[64px] lg:h-[96px] mx-5 company-img"
          />
        ))}
      </Marquee>
    </div>
  );
}
