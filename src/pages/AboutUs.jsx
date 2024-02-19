import React from "react";
import aboutAnim from "../assets/anim/AboutAnim.json";
import Lottie from "lottie-react";

export default function AboutUs() {
  const style = {
    height: 400,
  };
  return (
    <section className="">
      <div className="about-banner flex flex-col justify-center items-center">
        <div className="lg:w-1/2 text-white mx-5">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">
            About <span className="text-[#6C5AF6]">NSRDEV</span>
          </h1>
          <p className="mt-5 md:mt-10 md:text-xl md:w-2/3 text-justify">
            Welcome to NSRDEV, a leading software development company committed
            to delivering innovative and tailored solutions for our valued
            clients. With a dedicated team of skilled professionals, we
            specialize in crafting bespoke websites and web applications that
            precisely align with our clients' unique requirements.
            <br />
            At NSRDEV, we take pride in our ability to seamlessly blend
            creativity with cutting-edge technology, ensuring the development of
            robust and scalable digital solutions.
          </p>
        </div>
      </div>

      <div className="mx-5 md:container md:mx-auto py-10 md:py-20">
        <h1 className="md:text-3xl text-center font-semibold">
          Why choose <span className="text-[#6C5AF6]">NSRDEV</span> for your software needs?
        </h1>
        <div className="lg:flex lg:gap-16 mt-8 md:mt-16">
          <div className="lg:w-1/2">
            <Lottie style={style} animationData={aboutAnim} loop={true} />
          </div>
          <div className="lg:w-1/2">
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
                From front-end technologies to complex back-end systems, our
                team possesses a comprehensive skill set to tackle a wide array
                of development challenges.
              </li>

              <li>
                <span className="font-semibold">Proven Track Record:</span> With
                a portfolio of successful projects spanning various industries,
                we have consistently demonstrated our proficiency in delivering
                high-quality software solutions.
              </li>

              <li>
                <span className="font-semibold">
                  Agile Development Methodology:
                </span>{" "}
                We embrace an agile approach to development, ensuring
                flexibility and adaptability throughout the project lifecycle.
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
        <p className="mt-8 md:mt-16 md:text-xl text-center">
          Collaborate with <span className="text-[#6C5AF6] font-semibold">NSRDEV</span> to transform your ideas into reality. Whether
          you need an engaging website, a dynamic web application, or a scalable
          e-commerce platform, we are here to turn your vision into a digital
          masterpiece. Elevate your online presence with <span className="text-[#6C5AF6] font-semibold">NSRDEV</span>, where
          innovation meets excellence.
        </p>
      </div>
    </section>
  );
}
