import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Services() {
  const [modalData, setModalData] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setOpen(!open);
    setModalData(data);
  };

  const services = [
    {
      name: "UI/UX Design",
      desc: "Crafting intuitive and visually stunning user interfaces (UI) and user experiences (UX) to enhance engagement and usability.",
      details: [
        {
          li: "Conducting user personas and journey mapping to understand the user's behavior and needs.",
        },
        {
          li: "Creating mood boards and style guides to establish the visual direction and brand identity.",
        },
        {
          li: "Implementing UI animations and micro-interactions to improve user engagement and delight.",
        },
        {
          li: "Conducting A/B testing and usability studies to validate design decisions and optimize user experience continuously.",
        },
        {
          li: "Providing design documentation and assets for seamless handoff to development teams.",
        },
      ],
    },
    {
      name: "Custom Website Design",
      desc: "Tailoring unique and captivating website designs that reflect your brand identity and captivate your audience.",
      details: [
        {
          li: "Offering responsive design solutions that adapt seamlessly to different devices and screen sizes.",
        },
        {
          li: "Incorporating parallax scrolling, scroll animations, and other visual effects to enhance storytelling and user engagement.",
        },
        {
          li: "Integrating content management systems (CMS) like WordPress or Drupal for easy content updates and management.",
        },
        {
          li: "Providing custom web design solutions tailored to specific industries or target audiences, such as corporate websites, portfolios, or e-learning platforms.",
        },
        {
          li: "Offering ongoing maintenance and support services to ensure websites remain up-to-date and secure.",
        },
      ],
    },
    {
      name: "Single Page Application",
      desc: "Building dynamic and responsive single-page applications (SPAs) for seamless user experiences and efficient performance.",
      details: [
        {
          li: "Implementing server-side rendering (SSR) or static site generation (SSG) for improved performance and SEO.",
        },
        {
          li: "Leveraging state management libraries like Redux or Vuex to manage complex application states.",
        },
        {
          li: "Integrating real-time features such as chat functionality or notifications using WebSockets or Firebase.",
        },
        {
          li: "Optimizing application loading times through code splitting, lazy loading, and caching strategies.",
        },
        {
          li: "Providing progressive web app (PWA) enhancements for offline access and native app-like experiences.",
        },
      ],
    },

    {
      name: "Front-End Development",
      desc: "Implementing cutting-edge front-end technologies to bring designs to life, ensuring a smooth and interactive user experience.",
      details: [
        {
          li: "Utilizing modern front-end frameworks and libraries like Bootstrap, Tailwind CSS, or Material UI for rapid development and consistency.",
        },
        {
          li: "Implementing responsive web design principles to ensure optimal viewing experiences across a wide range of devices.",
        },
        {
          li: "Enhancing user interactions with JavaScript frameworks like Next Js, React JS, or jQuerey.",
        },
        {
          li: "Conducting performance audits and optimizations to improve page load times and overall site speed.",
        },
        {
          li: "Integrating analytics and tracking solutions to monitor user behavior and website performance continually.",
        },
      ],
    },
    {
      name: "E-Comerce Development",
      desc: "Creating robust and scalable e-commerce solutions to empower your business with online sales and streamlined transactions.",
      details: [
        {
          li: "Offering scalable e-commerce solutions that accommodate various business sizes and growth trajectories.",
        },
        {
          li: "Integrating popular e-commerce platforms like Shopify, WooCommerce, or Magento for flexibility and extensibility.",
        },
        {
          li: "Providing secure payment gateway integrations with PayPal, Stripe, or Square for seamless transactions.",
        },
        {
          li: "Implementing personalized product recommendations, customer reviews, and social proof elements to enhance conversion rates.",
        },
        {
          li: "Offering multilingual and multi-currency support for global e-commerce operations.",
        },
      ],
    },
    {
      name: "Back-End Development",
      desc: "Developing powerful and secure back-end systems to handle data processing, user authentication, and server-side logic.",
      details: [
        {
          li: "Developing RESTful APIs or GraphQL endpoints to facilitate communication between front-end interfaces and back-end servers.",
        },
        {
          li: "Implementing authentication mechanisms such as OAuth, JWT, or session-based authentication for secure user access.",
        },
        {
          li: "Integrating third-party services like Google Maps, AWS S3, or Twilio for additional functionality and features.",
        },
        {
          li: "Ensuring data integrity and security through encryption, hashing, and secure data storage practices.",
        },
        {
          li: "Providing robust error handling and logging mechanisms to identify and address issues proactively.",
        },
      ],
    },
  ];
  return (
    <div className="py-16 md:py-32 bg-black">
      <div className="mx-5 md:container md:mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#6C5AF6]">
          Explore our Services
        </h1>
        <p className="lg:text-xl mt-5 text-white">
          Empowering digital success through tailored web solutions. Let's bring
          your vision to life with our expertise in web development.
        </p>
        <div className="grid lg:grid-cols-2 gap-5 mt-10">
          {services.map((s, i) => (
            <div key={i} className="py-5 md:py-10  group">
              <div className="flex flex-col gap-5 h-full justify-between">
                <p className="md:text-xl text-white/40 group-hover:text-white duration-300 ease-linear">
                  0{i + 1}
                </p>
                <h5 className="font-semibold text-xl md:text-3xl text-white/40 group-hover:text-white duration-300 ease-linear">
                  {s.name}
                </h5>
                <p className="text-white hidden group-hover:block duration-300 ease-linear">
                  {s.desc}
                </p>
                <button
                  onClick={() => handleOpen(s)}
                  className="flex items-center gap-2"
                >
                  <BsFillArrowUpRightCircleFill className="group-hover:hidden text-2xl text-[#6C5AF6] duration-300 ease-linear" />
                  <span className="hidden group-hover:block bg-[#6C5AF6] hover:bg-white hover:text-[#6C5AF6] text-white px-4 md:px-4 py-1 md:py-2 rounded-full text-sm font-thin duration-300 ease-linear">
                    Learn More
                  </span>
                </button>
              </div>
              <div className="h-0.5 w-full bg-white/40 mt-5 opacity-25"></div>
            </div>
          ))}
        </div>

        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="flex flex-col gap-5 md:gap-10 md:p-8 bg-black text-white">
            <div className="flex flex-col gap-2.5 md:gap-5 h-full justify-between">
              <h5 className="font-semibold text-xl md:text-3xl text-[#6C5AF6]">
                {modalData?.name}
              </h5>
              <p>{modalData?.desc}</p>
              <ul className="flex flex-col gap-1 md:gap-1.5 list-decimal p-4">
                {modalData?.details?.map((mi,i) => (
                  <li key={i}>{mi.li}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <Button
                size="sm"
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Close</span>
              </Button>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
}
