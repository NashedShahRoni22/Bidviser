import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Bottombar() {
  return (
    <footer className="mx-5 p-10 lg:p-15 md:container md:mx-auto relative bg-black/90 text-gray-200 rounded-tr-3xl rounded-tl-3xl">
      <div className="flex flex-col md:flex-row gap-5 items-center md:justify-between">
        <p className="text-xl md:text-3xl font-bold">Bidviser</p>
        <ul className="flex gap-5 md:text-lg lg:text-xl">
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <a href="https://www.facebook.com/BidViser" target="_blank">
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
          <p>Our Contact</p>
          <p>Email: contact@bidviser.com</p>
          <p>
            Address: House #29, Road #7, Block #H, South Banasree, Dhaka 1219,
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
      <p className="mt-10 text-center">© 2023 BidViser. All Rights Reserved.</p>
    </footer>
  );
}
