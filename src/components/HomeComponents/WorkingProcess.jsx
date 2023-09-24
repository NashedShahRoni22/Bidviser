import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
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

import image1 from "../../assets/company/5.png";
import image2 from "../../assets/company/8.png";
import image3 from "../../assets/company/13.png";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const data = [
  {
    label: "Government",
    value: "Government",
    desc: [image1, image2, image3],
  },
  {
    label: "Clients",
    value: "Clients",
    desc: [
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
    ],
  },
];

export default function WorkingProcess() {
  const [activeTab, setActiveTab] = React.useState("Clients");
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
      <div className="py-5">
        <div className="my-5">
          <h2 className="text-[#4175FC] text-xl md:text-3xl lg:text-5xl font-semibold">
            We Wroks With
          </h2>
          <p className="lg:text-xl mt-5">
            Through fusion of creative strategy and data-driven insights, we
            help brands unlock their potential, creating effective digital
            campaigns that expand reach and boost customer engagement.
          </p>
        </div>
        <Tabs value={activeTab} className="my-5 min-h-[60vh]">
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-[#4175FC] shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
              >
                {desc.map((d) => (
                  <img src={d} alt="" className="h-[100px] md:h-[150px]" />
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        {/* <div className="lg:w-1/2 py-5 grid grid-cols-3 place-items-center">
          <img className="h-[150px] md:h-[200px]" src={image1} alt="" />
          <img className="h-[150px] md:h-[200px]" src={image2} alt="" />
          <img className="h-[150px] md:h-[200px]" src={image3} alt="" />
        </div> */}
      </div>
      <div className="mt-10">
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
                  <AiFillMinusCircle className="text-3xl text-[#4175FC]" />
                ) : (
                  <BsFillPlusCircleFill className="text-3xl text-[#4175FC]" />
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
