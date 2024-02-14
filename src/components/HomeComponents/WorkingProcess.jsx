import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import dynamic from "../../assets/company/dynamic-exim.png";

import img1 from "../../assets/company/1.png";
import img2 from "../../assets/company/2.png";
import img3 from "../../assets/company/6.png";
import img4 from "../../assets/company/12.png";
import img5 from "../../assets/company/new.webp";
import Projects from "./Projects";

export default function WorkingProcess() {
  const images = [img1, img2, img3, img4, img5];

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const processes = [
    {
      name: "Consultation",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Research and Strategy Development",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Implementation",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Monitoring and Optimization",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Reporting and Communication",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Continual Improvement",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <div className="mt-10 p-5 md:p-10">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#0c2c5d]">
        Our Working Process
      </h2>
      <p className="lg:text-xl my-5">
        Our team of experts harnesses the power of various online marketing
        strategies, including SEO, content marketing, social media marketing,
        email campaigns, PPC advertising, and data analytics.
      </p>
      {processes.map((p, i) => (
        <Accordion
          open={open === i}
          key={i}
          className="shadow rounded-xl p-5 my-10 bg-gradient-to-tr from-[#e8f6fc]"
        >
          <AccordionHeader onClick={() => handleOpen(i)}>
            <div className="w-full flex justify-between text-[#0c2c5d]">
              {p.name}
              {open === i ? (
                <AiFillMinusCircle className="text-3xl text-[#0c2c5d]" />
              ) : (
                <BsFillPlusCircleFill className="text-3xl text-[#0c2c5d]" />
              )}
            </div>
          </AccordionHeader>
          <AccordionBody>{p.details}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
