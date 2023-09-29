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
  const effectiveData = [
    {
      name: "Search Engine Optimization (SEO)",
      desc: "Enhancing visibility and positioning websites higher up in organic search engine result pages.",
    },
    {
      name: "Social Media Marketing (SMM)",
      desc: "Using social networks as marketing tools to promote businesses and engage with a target audience.",
    },
    {
      name: "Content Marketing",
      desc: "Creating and sharing online material such as blogs, infographics, videos, that does not explicitly promote a brand but stimulates interest in its products or services.",
    },
    {
      name: "Pay-Per-Click (PPC) & Google Ads",
      desc: "Advertising services designed to drive traffic to websites, whereby the advertiser pays a fee each time one of their ads is clicked.",
    },
    {
      name: "Email Marketing",
      desc: "Communicating with an audience via well-designed, purposeful emails aiming to promote offers, provide education, or build loyalty and trust.",
    },
    {
      name: "Lead Generation",
      desc: "Implementing strategies to generate interest and inquiries for business' products or services.",
    },
    {
      name: "Conversion Rate Optimization (CRO)",
      desc: "Structuring and arranging website features and components to enhance usability and boost the number of conversions from visitor to customer.",
    },
    {
      name: "Website and Ecommerce Design",
      desc: "Structuring elements and creating aesthetic designs that ensure easy navigation, enhancing visitor interaction, and increasing website dwell time.",
    },
    {
      name: "Mobile Marketing",
      desc: "Strategic marketing approach aimed at reaching users on their mobile devices or tablets via websites, emails, SMS, social media, and apps.",
    },
    {
      name: "Video Marketing",
      desc: "Using video as a means to market your product or service, promote engagement, education, and conversion.",
    },
    {
      name: "Analytics & Reporting",
      desc: "Providing data across possibilities and streamlining it into usable detail leading to actions improving Digital Marketing ROI.",
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
      <div className="my-5 md:my-10 p-5 py-10 md:p-10 rounded-xl bg-black/90 text-white">
        <h5 className="text-center font-semibold text-[24px] lg:text-[34px]">
          Our Approach
        </h5>
        <h1 className="text-center text-[40px] lg:text-[60px] mt-5 font-semibold">
          Insight. Creativity. Technology.
        </h1>
        <p className="text-white text-center lg:text-[20px] mt-5 mb-10">
          Your Guide to Digital Marketing: Translating Data into Perceptive
          Insights, Harnessing Creativity to Innovate, and Utilizing
          Cutting-Edge Technology for Performance Beyond Benchmark.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex border-2 border-[#4175FC] flex-col items-center rounded-xl gap-2 bg-[#292A32] p-4">
            <AiOutlineBlock className="text-3xl md:text-5xl text-[#4175FC]" />
            <h5 className="text-xl font-semibold">Concept</h5>
            <p className="text-center text-white">
              Demystifying Essential Foundations - Unleashing the Power of
              Creative Concepts in Digital Marketing Services.
            </p>
          </div>
          <div className="flex border-2 border-[#4175FC] flex-col items-center rounded-xl gap-2 bg-[#292A32] p-4">
            <TbBuildingCarousel className="text-3xl md:text-5xl text-[#4175FC]" />
            <h5 className="text-xl font-semibold">Build</h5>
            <p className="text-center text-white">
              The Crucial Verdict - Evaluating Outcomes and Proving
              Effectiveness From Our Comprehensive Digital Approach.
            </p>
          </div>
          <div className="flex border-2 border-[#4175FC] flex-col items-center rounded-xl gap-2 bg-[#292A32] p-4">
            <AiOutlineOrderedList className="text-3xl md:text-5xl text-[#4175FC]" />
            <h5 className="text-xl font-semibold">Test</h5>
            <p className="text-center text-white">
              Market Analysis: Deploying and Refining Strategies for Optimal
              Outcome.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-10 my-5 md:my-10 py-5 md:py-10">
        <div className="lg:w-1/2">
          {/* Productive Progressive */}
          <p className="text-2xl md:text-4xl font-semibold">
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
          <Lottie animationData={WorkWithUs} loop={true} style={style} />
        </div>
        <div className="lg:w-3/5">
          <p className="text-2xl md:text-4xl font-semibold">
            The Compelling Need for Digital Marketing in Modern Business
            Landscape
          </p>
          <p className="text-justify md:text-xl my-5">
            Embrace the transformative power of Digital Marketing Services and
            catapult your business into the digital future. Harness robust
            engagement tools like ‘Social Media Marketing’, create an online
            persona with ‘Content Marketing’ and master ‘SEO’ techniques to
            climb up in the customers’ search result. Illuminate your
            opportunities, descend upon them vigorously and scale new heights,
            only imagined before. Your business deserves more, it craves
            exposure via ‘PPC’ ads – all set within the framing framework of
            delivering unparalleled user experience. So, make a positive shift
            today. Dive into the digital world with us, because the future of
            your business begins here! Act now and propel your enterprise
            towards its fast-tracked evolution.
          </p>
          <Button>Let's Work Togather</Button>
        </div>
      </div>
      <div className="my-5 md:my-10 p-5 py-5 md:p-10 rounded-xl">
        <p className="text-center text-2xl md:text-4xl font-semibold">
          11 Most Effective Digital Marketing Services for Boosting Web Traffic
        </p>
        <p className="text-center md:text-xl mt-5">
          Don’t miss these top 11 digital marketing strategies boosting web
          traffic. Explore SEO mastery, strategic social media, smart PPC
          investments, and insightful content marketing. Connect with more
          visitors and enhance web traffic – make the smart move today.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {effectiveData.map((ed, i) => (
            <div
              key={i}
              className="bg-[#292A32] p-4 rounded-xl border-2 border-[#4175FC] hover:scale-105 duration-200 ease-linear"
            >
              <p className="text-white text-xl font-semibold">
                {i + 1}. {ed.name}
              </p>
              <p className="text-white mt-2.5">{ed.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
