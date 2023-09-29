import React from "react";
import DigitalMarkettingAnim from "../../assets/anim/DigitalMarketting.json";
import WorkWithUs from "../../assets/anim/WorkWithUs.json";
import Lottie from "lottie-react";
import { TbBuildingCarousel } from "react-icons/tb";
import { AiOutlineBlock, AiOutlineOrderedList } from "react-icons/ai";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";

export default function DigitalMarketting() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const style = {
    height: 400,
  };
  const accordionData = [
    {
      que: "Greater Reach",
      desc: "Allows you to reach a global marketplace and engage with a wider targeted audience much more effectively than traditional methods.",
    },
    {
      que: "Drive Customer Engagement",
      desc: "Through platforms like social media, you can communicate directly with your customers, receive real-time feedback, and improve service delivery based on their input.",
    },
    {
      que: "Cost-Effective",
      desc: "More affordable compared to traditional marketing channels like television, print, and radio advertisement. SMEs with limited resources, in particular, benefit significantly from higher ROI.",
    },
    {
      que: "Data insights",
      desc: "Digital marketing offers measurable metrics allowing you to understand consumer behavior and preferences, thereby helping you make informed decisions riding these insights.",
    },
    {
      que: "Improved Conversion Rates",
      desc: "With the aid of SEO, email marketing, and other strategies, you can increase your chances of converting a lead or a customer into tangible sales.",
    },
    {
      que: "Compete with Larger Corporations",
      desc: "Digital marketing levels the playing field, providing small and medium enterprises an equal opportunity to compete against larger corporations.",
    },
    {
      que: "Adaptability",
      desc: "Strategies in digital marketing can be intended and adapted on the fly based on real-world performance metrics, thus fostering rapid solutions.",
    },
    {
      que: "Increased Relevance",
      desc: "Personalized marketing becomes easier as digital marketing allows segmentation of audience for targeted campaigns meeting specific audience interests.",
    },
    {
      que: "Content Sharing",
      desc: "Effective promotions drive multi-channel marketing as content can now be shared across various platforms – a plus for both you and consumers.",
    },
    {
      que: "Better ROI",
      desc: "A well-exploited digital marketing scheme bases its success on wide audience reach and efficient lead generation, often resulting in a significantly higher ROI than traditional media.",
    },
  ];
  return (
    <div className="mx-5 md:container md:mx-auto">
      <div className="md:flex gap-10 my-5 md:my-10 py-5 md:py-10">
        <div className="md:w-1/2">
          {/* Productive Progressive */}
          <h1 className="text-[40px] lg:text-[60px] font-semibold">
            Professional Digital Marketing Services
          </h1>
          <p className="text-justify lg:text-[20px] my-5">
            Catalyze growth and enhance online visibility with essential Digital
            Marketing Services. Leverage strategic 'Search Engine Optimization
            (SEO)', interactive 'Social Media Campaigns', and data-backed
            'Pay-Per-Click (PPC)' strategies and push his 'Brand Awareness' to
            reach ultimate success in today's digital business landscape.
          </p>
        </div>
        <div className="md:w-1/2">
          <Lottie
            animationData={DigitalMarkettingAnim}
            loop={true}
            style={style}
          />
        </div>
      </div>
      <div className="my-5 md:my-10 p-5 md:p-10 rounded-xl bg-black/90 text-white">
        <p className="text-center font-semibold lg:text-[20px]">Our Approach</p>
        <h1 className="text-center text-[40px] lg:text-[60px] mt-5 font-semibold">
          Insight. Creativity. Technology.
        </h1>
        <p className="text-center lg:text-[20px] mt-5 mb-10">
          Your Guide to Digital Marketing: Translating Data into Perceptive
          Insights, Harnessing Creativity to Innovate, and Utilizing
          Cutting-Edge Technology for Performance Beyond Benchmark.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex border-2 border-[#4175FC] flex-col items-center rounded-xl gap-2 bg-[#292A32] p-4">
            <AiOutlineBlock className="text-3xl md:text-5xl text-[#4175FC]" />
            <h5 className="text-xl font-semibold">Concept</h5>
            <p className="text-center">
              Demystifying Essential Foundations - Unleashing the Power of
              Creative Concepts in Digital Marketing Services.
            </p>
          </div>
          <div className="flex border-2 border-[#4175FC] flex-col items-center rounded-xl gap-2 bg-[#292A32] p-4">
            <TbBuildingCarousel className="text-3xl md:text-5xl text-[#4175FC]" />
            <h5 className="text-xl font-semibold">Build</h5>
            <p className="text-center">
              The Crucial Verdict - Evaluating Outcomes and Proving
              Effectiveness From Our Comprehensive Digital Approach.
            </p>
          </div>
          <div className="flex border-2 border-[#4175FC] flex-col items-center rounded-xl gap-2 bg-[#292A32] p-4">
            <AiOutlineOrderedList className="text-3xl md:text-5xl text-[#4175FC]" />
            <h5 className="text-xl font-semibold">Test</h5>
            <p className="text-center">
              Market Analysis: Deploying and Refining Strategies for Optimal
              Outcome.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-10 my-5 md:my-10 py-5 md:py-10">
        <div className="lg:w-1/2">
          {/* Productive Progressive */}
          <p className="text-xl md:text-3xl font-semibold">
            Top 10 Reasons to Choose Digital Marketing Services for Your Brand
          </p>
          <p className="text-justify md:text-xl my-5">
            Thrive or Survive : The Critical Role of Digital Marketing Services
            in Today’s Business Landscape” is a stark reality that modern
            businesses face. As traditional marketing methods fade, it’s only
            through the smart adoption of SEO, PPC, Content Marketing, Social
            Media Marketing, and other digital marketing services that brands
            can be successful. Enterprises have to optimize websites, leverage
            powerful keywords, generate high-quality backlinks, and engage
            audiences online to ensure digital visibility and fuel greater
            conversion rates. The race towards digital transformation thus
            warrants no delay for survival, yet it offers immense growth
            prospects for the brands keen on thriving.
          </p>
        </div>
        <div className="lg:w-1/2">
          {accordionData.map((ad, i) => (
            <Accordion key={i} open={open === i}>
              <AccordionHeader onClick={() => handleOpen(i)}>
                {ad.que}
              </AccordionHeader>
              <AccordionBody>{ad.desc}</AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="my-5 md:my-10 py-5 md:py-10 lg:flex gap-10">
        <div className="lg:w-2/5">
          <Lottie
            animationData={WorkWithUs}
            loop={true}
            style={style}
          />
        </div>
        <div className="lg:w-3/5">
          <p className="text-xl md:text-3xl font-semibold">
            Boost ROI with Expert Digital Advertising Services - Maximize Reach
            for Optimal Results!
          </p>
          <p className="text-justify md:text-xl my-5">
            Unlock the power of your business with our expert Digital
            Advertising Services. In today’s fast-paced digital landscape,
            staying ahead of the competition requires strategic and targeted
            campaigns that drive results. At our agency, we specialize in
            crafting bespoke digital marketing solutions tailored to your unique
            needs, ensuring maximum reach and optimal ROI. With our team of
            experienced professionals, we excel in PPC Management, leveraging
            data-driven insights to deliver impactful ad campaigns that convert
            leads into loyal customers. Our comprehensive approach encompasses
            keyword research, audience segmentation, and compelling ad creatives
            to engage your target audience and boost brand visibility. Whether
            you’re a startup seeking rapid growth or an established brand
            looking to enhance your online presence, our Digital Advertising
            Services have got you covered. Elevate your business to new heights
            with our proven expertise and measurable results. Take the first
            step towards success – contact us today for a free consultation and
            unlock the full potential of your digital marketing endeavors!
          </p>
          <Button>Let's Work Togather</Button>
        </div>
      </div>
    </div>
  );
}
