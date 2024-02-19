import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo_white.png";

export default function Bottombar() {
  return (
    <footer className="p-10 lg:p-20 relative bg-black/90 text-gray-200">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center md:justify-between">
          <img src={logo} alt="" className="h-[28px] md:h-[44px]" />
          <ul className="flex gap-5 md:text-lg lg:text-xl">
            <li>About Us</li>
            <Link to="/service">Services</Link>
            <li>Blog</li>
          </ul>
          <ul className="flex gap-3">
            <li>
              <a href="https://www.facebook.com/NSRDev" target="_blank">
                <BsFacebook className="text-xl md:text-2xl lg:text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FViserBid"
                target="_blank"
              >
                <BsLinkedin className="text-xl md:text-2xl lg:text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FViserBid"
                target="_blank"
              >
                <BsTwitter className="text-xl md:text-2xl lg:text-3xl" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
          <div className="text-center md:text-left md:text-lg">
            <p className="text-white">Our Contact</p>
            <p className="text-white">Email: contact@nsrdev.com</p>
            <p className="text-white">
              Address: Alif 4, Lalmatia, E Block, Momhammadpur, Dhaka 1207.
              Bangladesh.
            </p>
          </div>
          <div className="flex rounded-xl p-2 bg-[#292A32]">
            <input
              className="py-2 px-2 border rounded-l-xl focus:outline-none text-black"
              type="text"
              placeholder="Email"
            />
            <button className="py-2 px-2 border rounded-r-xl">Subscribe</button>
          </div>
        </div>
        <p className="mt-10 text-center text-white">
          © 2024 NSRDEV. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
