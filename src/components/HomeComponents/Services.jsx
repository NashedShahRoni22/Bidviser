import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      name: "UI/UX Design",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi molestiae, veritatis incidunt nostrum adipisci quam mollitia animi soluta beatae!",
    },
    {
      name: "Custom Website Design",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi molestiae, veritatis incidunt nostrum adipisci quam mollitia animi soluta beatae!",
    },
    {
      name: "Single Page Application",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi molestiae, veritatis incidunt nostrum adipisci quam mollitia animi soluta beatae!",
    },

    {
      name: "Front-End Development",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi molestiae, veritatis incidunt nostrum adipisci quam mollitia animi soluta beatae!",
    },
    {
      name: "E-Comerce Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi molestiae, veritatis incidunt nostrum adipisci quam mollitia animi soluta beatae!",
    },
    {
      name: "Back-End Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi molestiae, veritatis incidunt nostrum adipisci quam mollitia animi soluta beatae!",
    },
  ];
  return (
    <div className="mt-10 py-18 md:py-36 bg-black">
      <div className="mx-5 md:container md:mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#6C5AF6]">
          Services
        </h2>
        <p className="lg:text-xl mt-5 text-white">
          Take Your Business to the next Level. <br />
          Unleashing Your Potential. Empowering You to Break Boundaries and Soar
          in Business Success.
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
                <Link
                  to="/digital_marketting"
                  className="flex items-center gap-2"
                >
                  <BsFillArrowUpRightCircleFill className="group-hover:hidden text-2xl text-[#6C5AF6] duration-300 ease-linear" />
                  <span className="hidden group-hover:block bg-[#6C5AF6] hover:bg-white hover:text-[#6C5AF6] text-white px-4 md:px-4 py-1 md:py-2 rounded-full text-sm font-thin duration-300 ease-linear">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                {/* <img
                src={s.img}
                alt=""
                className="h-[130px] md:h-[170px] w-[165px] md:w-[210px]"
              /> */}
              </div>
              <div className="h-0.5 w-full bg-white/40 mt-5 opacity-25"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
