import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/company/icon (1).png";
import img2 from "../../assets/company/icon (2).png";
import img3 from "../../assets/company/icon (3).png";
import img4 from "../../assets/company/icon (4).png";
import img5 from "../../assets/company/icon (5).png";
import img6 from "../../assets/company/icon (6).png";
import img7 from "../../assets/company/icon (7).png";
import img8 from "../../assets/company/icon (8).png";
import img9 from "../../assets/company/icon (9).png";
import img10 from "../../assets/company/icon (10).png";
import img11 from "../../assets/company/icon (11).png";
import img12 from "../../assets/company/icon (12).png";
import img13 from "../../assets/company/icon (13).png";
import img14 from "../../assets/company/icon (14).png";
import img15 from "../../assets/company/icon (15).png";
import img16 from "../../assets/company/icon (16).png";
import img17 from "../../assets/company/icon (17).png";
import img18 from "../../assets/company/icon (18).png";

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
    img14,
    img15,
    img16,
    img17,
    img18,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];
  return (
    <div className="py-20">
      <Marquee speed={100} pauseOnHover>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="cursor-pointer h-[48px] mx-5 company-img"
          />
        ))}
      </Marquee>
    </div>
  );
}
