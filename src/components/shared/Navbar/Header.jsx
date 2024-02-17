import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

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
          name: "UI/UX Design",
          link: "/commingsoon",
        },
        {
          name: "Web Design",
          link: "/commingsoon",
        },
        {
          name: "Web App Development",
          link: "/commingsoon",
        },
        {
          name: "Digital Marketting",
          link: "/digital_marketting",
        },
        {
          name: "Graphics Design",
          link: "/commingsoon",
        },
        {
          name: "Comercial Video",
          link: "/commingsoon",
        },
      ],
    },
    {
      name: "About Us",
      link: "/about_us",
    },
    {
      name: "Portfolio",
      link: "/commingsoon",
    },
  ];
  const handleDropdown = (id) => {
    setOpenDropdown({
      status: !openDropdown.status,
      index: id,
    });
  };
  return (
    <nav className="sticky top-0 bg-white py-1.5 z-50">
      <section className="m-5 md:container md:mx-auto ">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-[28px] md:h-[44px]" />
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
                          className="font-normal hover:bg-gradient-to-tr from-[#2317A9] to-[#6C5AF6] py-1.5 px-2.5 hover:text-white w-fit hover:ml-2.5 duration-300 ease-linear rounded"
                          key={i}
                        >
                          <Link to={mic.link}>{mic.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {mi.child && (
                    <div className="h-2.5 w-2.5 bg-[#2317A9] rounded-full absolute -top-0 -right-1"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <Link to='/contact_us' className="hidden md:block px-4 py-2 font-semibold border-2 border-[#2317A9] hover:bg-gradient-to-tr from-[#2317A9] to-[#6C5AF6] hover:text-white rounded">
              Contact Us
            </Link>
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
          <div className="z-50 absolute top-15 left-0 min-w-full bg-white shadow-xl rounded-xl p-5 lg:hidden">
            <ul className="flex flex-col gap-5 items-end ">
              {menuItems.map((mi, i) => (
                <li
                  key={i}
                  className="relative cursor-pointer text-xl"
                >
                  <div
                    className="flex justify-end mr-4"
                    onClick={() => handleDropdown(i)}
                  >
                    <Link to={mi.link}>{mi.name}</Link>
                  </div>
                  {mi.child && (
                    <>
                      {openDropdown.status && openDropdown.index === i && (
                        <ul className="flex flex-col items-end mr-5">
                          {mi.child.map((mic, i) => (
                            <li
                              className="font-normal hover:bg-gradient-to-tr from-[#2317A9] to-[#6C5AF6] py-1.5 px-2.5 hover:text-white w-fit hover:mr-2.5 duration-300 ease-linear rounded"
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
                    <div className="h-2.5 w-2.5 bg-[#2317A9] rounded-full absolute -top-0 -right-0"></div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-5 mr-4">
              <Link to='/contact_us' className="md:hidden px-4 py-2 font-semibold border-2 border-[#2317A9] hover:bg-gradient-to-tr from-[#2317A9] to-[#6C5AF6] hover:text-white rounded">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
}
