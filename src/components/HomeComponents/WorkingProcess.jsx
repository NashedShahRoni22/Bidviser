import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

export default function WorkingProcess() {
  const [open, setOpen] = useState(0);
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
    <div className="mt-10 py-18 md:py-36 bg-black">
      <div className="mx-5 md:container md:mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#6C5AF6]">
          Our Working Process
        </h2>
        <p className="lg:text-xl my-5 text-white">
          Our team of experts harnesses the power of various online marketing
          strategies, including SEO, content marketing, social media marketing,
          email campaigns, PPC advertising, and data analytics.
        </p>
        <div className="grid gap-5 mt-10">
          {processes.map((p, i) => (
            <Accordion open={open === i} key={i} className="py-2.5 group">
              <AccordionHeader onClick={() => handleOpen(i)}>
                <div className="w-full flex justify-between text-[#6C5AF6]">
                  {p.name}
                  {open === i ? (
                    <AiFillMinusCircle className="text-3xl text-[#6C5AF6]" />
                  ) : (
                    <BsFillPlusCircleFill className="text-3xl text-[#6C5AF6]" />
                  )}
                </div>
              </AccordionHeader>
              <AccordionBody className="text-white/40 group-hover:text-white">
                {p.details}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
