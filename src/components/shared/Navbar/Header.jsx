import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const menuItems = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Services",
      link: "",
      child: [
        {
          name: "Web Design & Development",
          link: "",
        },
        {
          name: "Digital Marketting",
          link: "",
        },
        {
          name: "Digital Advertising",
          link: "",
        },
        {
          name: "SEO",
          link: "",
        },
        {
          name: "Social Media Marketing",
          link: "",
        },
        {
          name: "Comercial Video & Photography",
          link: "",
        },
      ],
    },
    {
      name: "About Us",
      link: "",
    },
    {
      name: "Blog",
      link: "",
    },
  ];
  return (
    <nav className="m-5 md:container md:mx-auto relative">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="h-[50px] w-[150px]" />
        </div>
        <div>
          <ul className="hidden lg:flex gap-x-10">
            {menuItems.map((mi, i) => (
              <li className="group relative text-xl font-semibold" key={i}>
                {mi.name}
                {mi.child && (
                  <ul className="absolute min-w-[400px] top-6 hidden group-hover:block shadow-xl rounded-xl bg-white p-5">
                    {mi.child.map((mic, i) => (
                      <li className="my-2.5 font-normal" key={i}>
                        {mic.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button className="hidden md:block px-4 py-2 font-semibold border-2 border-[#4175FC] hover:bg-[#4175FC] hover:text-white duration-300 ease-linear rounded">
            Contact Us
          </button>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <MdClose className="text-3xl" />
            ) : (
              <FaBarsStaggered className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      {/* tablet navbar */}
      {open === true && (
        <div className="absolute top-15 min-w-full bg-white shadow-xl rounded-xl p-5 lg:hidden">
          <ul className="flex flex-col gap-5 items-end">
            {menuItems.map((mi) => (
              <li className="text-xl border-b-4 border-[#4175FC]">
                <div className="flex justify-end" onClick={()=> setOpenDropdown(!openDropdown)}>
                  <p>{mi.name}</p>
                </div>
                {mi.child && openDropdown && (
                  <ul className="flex flex-col items-end mr-5">
                    {mi.child.map((mic, i) => (
                      <li className="my-2.5" key={i}>
                        {mic.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-5">
            <button className="md:hidden px-4 py-2 font-semibold border-2 border-[#4175FC] hover:bg-[#4175FC] hover:text-white duration-300 ease-linear rounded">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
