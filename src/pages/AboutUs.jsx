import React from "react";
import aboutUs from "../assets/about_us.svg";

export default function AboutUs() {
  return (
    <div className="mx-5 py-5 md:py-10 md:container md:mx-auto">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <p className="text-xl md:text-3xl lg:text-5xl font-semibold md:w-1/3">
          About Us
        </p>
        <h1 className="md:text-xl md:w-2/3 text-justify">
          Welcome to NSRDev, a leading software development company committed to
          delivering innovative and tailored solutions for our valued clients.
          With a dedicated team of skilled professionals, we specialize in
          crafting bespoke websites and web applications that precisely align
          with our clients' unique requirements. At NSRDev, we take pride in our
          ability to seamlessly blend creativity with cutting-edge technology,
          ensuring the development of robust and scalable digital solutions.
        </h1>
      </div>
      <div className="mt-5 md:mt-10 lg:flex lg:flex-row-reverse lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <img src={aboutUs} alt="" />
        </div>
        <div className="lg:w-1/2">
          <p className="mt-5 md:mt-10 md:text-2xl font-semibold">
            Why choose NSRDev for your software needs?
          </p>
          <ul className="md:text-xl text-justify flex flex-col gap-2.5 mt-2.5 md:mt-5 list-decimal ml-2.5 md:ml-5">
            <li>
              <span className="font-semibold">Client-Centric Approach:</span>{" "}
              Our primary focus is understanding your business objectives,
              allowing us to develop solutions that cater specifically to your
              needs.
            </li>

            <li>
              <span className="font-semibold">
                Expertise in Diverse Technologies:
              </span>{" "}
              From front-end technologies to complex back-end systems, our team
              possesses a comprehensive skill set to tackle a wide array of
              development challenges.
            </li>

            <li>
              <span className="font-semibold">Proven Track Record:</span> With a
              portfolio of successful projects spanning various industries, we
              have consistently demonstrated our proficiency in delivering
              high-quality software solutions.
            </li>

            <li>
              <span className="font-semibold">
                Agile Development Methodology:
              </span>{" "}
              We embrace an agile approach to development, ensuring flexibility
              and adaptability throughout the project lifecycle.
            </li>

            <li>
              <span className="font-semibold">Security and Reliability:</span>{" "}
              Our commitment to data security and system reliability is
              unwavering, providing you with peace of mind as we build robust
              digital solutions for your business.
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-5 md:mt-10 md:text-xl">
        Collaborate with NSRDev to transform your ideas into reality. Whether
        you need an engaging website, a dynamic web application, or a scalable
        e-commerce platform, we are here to turn your vision into a digital
        masterpiece. Elevate your online presence with NSRDev, where innovation
        meets excellence.
      </p>
    </div>
  );
}
