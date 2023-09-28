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
    <div className="p-10 mb-10 bg-black/90 rounded-3xl">
      <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-semibold">
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
            // Medium screens (from 641px to 768px)
            // 768: {
            //   slidesPerView: 1,
            // },
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
          className="mySwiper p-10"
        >
          {data.map((d) => (
            <SwiperSlide>
              <div className="p-6 bg-[#292A32] text-white rounded-xl shadow-xl border-2 border-[#4175FC]">
                <AiOutlineComment className="text-6xl text-[#4175FC] mb-4" />
                <p className="text-lg my-4">{d.desc}</p>
                <div className="flex items-center gap-1 text-[#FFD700] text-xl my-2">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">{d.name}</p>
                  <p>{d.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
