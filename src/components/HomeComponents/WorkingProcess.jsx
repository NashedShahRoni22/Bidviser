import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import image1 from "../../assets/company/5.png";
import image2 from "../../assets/company/8.png";
import image3 from "../../assets/company/13.png";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function WorkingProcess() {
  const [open, setOpen] = React.useState(0);

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
    <div className="py-20">
      <div className="mb-10 lg:flex gap-5 py-5">
        <div className="lg:w-1/2 py-5">
          <h2 className="text-[#4175FC] text-xl md:text-3xl lg:text-5xl font-semibold">
            We Wroks With
          </h2>
          <p className="lg:text-xl mt-5">
            Through fusion of creative strategy and data-driven insights, we
            help brands unlock their potential, creating effective digital
            campaigns that expand reach and boost customer engagement.
          </p>
        </div>
        <div className="lg:w-1/2 py-5 grid grid-cols-3 place-items-center">
          <img className="h-[150px] md:h-[250px]" src={image1} alt="" />
          <img className="h-[150px] md:h-[250px]" src={image2} alt="" />
          <img className="h-[150px] md:h-[250px]" src={image3} alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#4175FC]">
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
            className="shadow-xl rounded-xl p-5 my-10"
          >
            <AccordionHeader onClick={() => handleOpen(i)}>
              <div className="w-full flex justify-between text-black">
                {p.name}
                {open === i ? (
                  <AiFillMinusCircle className="text-3xl" />
                ) : (
                  <BsFillPlusCircleFill className="text-3xl" />
                )}
              </div>
            </AccordionHeader>
            <AccordionBody>{p.details}</AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
