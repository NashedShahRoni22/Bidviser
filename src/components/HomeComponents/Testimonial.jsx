import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
  const data = [
    {
      name: "Jennifer Smith",
      position: "Marketing Director",
      desc: "NSRDev has been instrumental in elevating our digital presence. Their innovative strategies and dedication to results have significantly boosted our online engagement and sales. Highly impressed!",
    },
    {
      name: "Michael Johnson",
      position: "CEO",
      desc: "NSRDev exceeded our expectations with their exceptional digital marketing solutions. Their team's expertise and proactive approach have been invaluable in driving our business growth. Highly recommended!",
    },
    {
      name: "Emily Davis",
      position: "E-commerce Manager",
      desc: "Working with NSRDev has been a game-changer for our e-commerce platform. Their tailored strategies and attention to detail have significantly improved our conversion rates and revenue. Truly outstanding!",
    },
    {
      name: "David Thompson",
      position: "Creative Director",
      desc: "NSRDev's digital marketing expertise has been invaluable in enhancing our brand visibility and online reputation. Their professionalism and dedication to delivering tangible results make them an indispensable partner. Highly recommended!",
    },
    {
      name: "Sophia Lee",
      position: "Social Media Manager",
      desc: "NSRDev has been an integral part of our social media strategy. Their creative campaigns and data-driven approach have significantly increased our engagement and brand awareness. Exceptional service!",
    },
    {
      name: "Alex Wilson",
      position: "Business Owner",
      desc: "Choosing NSRDev for our digital marketing needs was one of the best decisions we made. Their team's expertise and commitment to our success have driven remarkable results and exceeded our expectations. Highly recommended!",
    },
  ];

  return (
    <div className="px-2.5 py-10 mb-10 bg-black/90 md:rounded-3xl md:container md:mx-auto">
      <h2 className="text-center text-white text-xl md:text-3xl lg:text-5xl font-semibold mt-5">
        What Our Clients Says?
      </h2>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            // Small screens (up to 640px)
            0: {
              slidesPerView: 1,
            },
            // Large screens (from 769px and above)
            1024: {
              slidesPerView: 2,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper p-5 md:p-10 mt-5"
        >
          {data.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 bg-[#292A32] text-white rounded-xl shadow-xl border-2 border-[#4175FC]">
                <FaQuoteLeft className="text-4xl sm:text-5xl lg:text-6xl text-[#4175FC] mb-2 sm:mb-4" />
                <p className="text-base sm:text-lg lg:text-xl my-2 sm:my-4 text-white">
                  {d.desc}
                </p>
                <div className="flex items-center gap-1 text-[#FFD700] text-base sm:text-xl lg:text-2xl my-2 sm:my-4">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="text-sm sm:text-base lg:text-lg">
                  <p className="font-semibold text-white">{d.name}</p>
                  <p className="text-white">{d.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-5 flex gap-2 justify-center"></div>
      </>
    </div>
  );
}
