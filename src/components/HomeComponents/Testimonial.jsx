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
import { AiFillStar, AiOutlineComment } from "react-icons/ai";

export default function Testimonial() {
  const data = [
    {
      name: "Nashed Shah Roni",
      position: "Software Engineer",
      desc: "Exceptional Digital Marketing Partner BidViser has transformed our online visibility with their tailored strategies and expert SEO implementation. They're professional, responsive, and deliver clear results. Highly recommend!",
    },
    {
      name: "Nashed Shah Roni",
      position: "Software Engineer",
      desc: "Exceptional Digital Marketing Partner BidViser has transformed our online visibility with their tailored strategies and expert SEO implementation. They're professional, responsive, and deliver clear results. Highly recommend!",
    },
    {
      name: "Nashed Shah Roni",
      position: "Software Engineer",
      desc: "Exceptional Digital Marketing Partner BidViser has transformed our online visibility with their tailored strategies and expert SEO implementation. They're professional, responsive, and deliver clear results. Highly recommend!",
    },
    {
      name: "Nashed Shah Roni",
      position: "Software Engineer",
      desc: "Exceptional Digital Marketing Partner BidViser has transformed our online visibility with their tailored strategies and expert SEO implementation. They're professional, responsive, and deliver clear results. Highly recommend!",
    },
    {
      name: "Nashed Shah Roni",
      position: "Software Engineer",
      desc: "Exceptional Digital Marketing Partner BidViser has transformed our online visibility with their tailored strategies and expert SEO implementation. They're professional, responsive, and deliver clear results. Highly recommend!",
    },
    {
      name: "Nashed Shah Roni",
      position: "Software Engineer",
      desc: "Exceptional Digital Marketing Partner BidViser has transformed our online visibility with their tailored strategies and expert SEO implementation. They're professional, responsive, and deliver clear results. Highly recommend!",
    },
  ];
  return (
    <div className="p-5 md:p-10 mb-10 bg-black/90 rounded-3xl">
      <h2 className="text-center text-white text-xl md:text-3xl lg:text-5xl font-semibold">
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
          className="mySwiper p-5 md:p-10"
        >
          {data.map((d) => (
            <SwiperSlide>
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#292A32] text-white rounded-xl shadow-xl border-2 border-[#4175FC]">
                <AiOutlineComment className="text-4xl sm:text-5xl lg:text-6xl text-[#4175FC] mb-2 sm:mb-4" />
                <p className="text-base sm:text-lg lg:text-xl my-2 sm:my-4">
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
                  <p className="font-semibold">{d.name}</p>
                  <p>{d.position}</p>
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
