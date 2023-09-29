import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    status: false,
    index: "",
  });
  const menuItems = [
    {
      name: "Home",
      link: "/",
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
          link: "/digital_marketting",
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
  const handleDropdown = (id) => {
    setOpenDropdown({
      status: !openDropdown.status,
      index: id,
    });
  };
  return (
    <nav className="m-5 md:container md:mx-auto relative">
      <div className="flex items-center justify-between">
        <Link to={'/'}>
          <img src={logo} alt="" className="h-[50px] w-[150px]" />
        </Link>
        <div>
          {/* desktop navbar */}
          <ul className="hidden lg:flex gap-x-10">
            {menuItems.map((mi, i) => (
              <li
                className="cursor-pointer group relative text-xl font-semibold"
                key={i}
              >
                <Link to={mi.link}>{mi.name}</Link>
                {mi.child && (
                  <ul className="z-50 absolute min-w-[400px] top-6 hidden group-hover:block shadow-xl rounded-xl bg-white p-5">
                    {mi.child.map((mic, i) => (
                      <li
                        className="font-normal hover:bg-blue-500 hover:text-white w-fit p-1"
                        key={i}
                      >
                        <Link to={mic.link}>{mic.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                {mi.child && (
                  <div className="h-2.5 w-2.5 bg-blue-500 rounded-full absolute -top-0 -right-1"></div>
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
        <div className="z-50 absolute top-15 min-w-full bg-white shadow-xl rounded-xl p-5 lg:hidden">
          <ul className="flex flex-col gap-5 items-end">
            {menuItems.map((mi, i) => (
              <li
                key={i}
                className="relative cursor-pointer text-xl border-b-2 md:border-b-4 border-transparent md:hover:border-[#4175FC] duration-300 ease-linear"
              >
                <div
                  className="flex justify-end"
                  onClick={() => handleDropdown(i)}
                >
                  <Link to={mi.link}>{mi.name}</Link>
                </div>
                {mi.child && (
                  <>
                    {openDropdown.status && openDropdown.index === i && (
                      <ul className="flex flex-col items-end mr-5 mb-5">
                        {mi.child.map((mic, i) => (
                          <li
                            className=" hover:bg-blue-500 hover:text-white p-1.5 duration-300 ease-linear"
                            key={i}
                          >
                            <Link to={mic.link}>{mic.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
                {mi.child && (
                  <div className="h-2.5 w-2.5 bg-blue-500 rounded-full absolute -top-0 -right-1"></div>
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
