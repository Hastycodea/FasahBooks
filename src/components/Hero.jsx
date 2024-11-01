import React from "react";
import hero1 from "../assets/heroimg.png";
import hero2 from "../assets/blue.png";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="mt-0 md:my-6 w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex   items-center justify-center bg-[#FF6D1F] h-[300px] md:h-[500px] my-5 w-full md:w-full">
            <img
              src={hero1}
              alt=""
              className="w-[40%] md:w-5/12 h-[305px] md:h-auto object-cover p-4"
            />
            <section className="w-full  md:w-6/12 flex flex-col justify-center text-center items-center ">
              <h1 className="text-3xl md:text-7xl font-serif font-bold">Now Available</h1>
              <button className="text-xl md:text-2xl bg-black text-[#CD7F32] rounded-lg px-3 md:px-6 py-1 md:py-2 mt-4">
                Buy Now
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center bg-sky-600 h-[300px] md:h-[500px] my-5 w-full">
            <img
              src={hero2}
              alt=""
              className="w-[40%] md:w-5/12 h-[250px] md:h-auto object-cover p-4"
            />
            <section className="w-full w-6/12 flex flex-col text-white justify-center text-center items-center ">
              <p className="text-md md:text-2xl font-serif mb-3 ">“Walt Brown beautifully uncovers the invisible layers of life that we often ignore. His reflections encourage leaders to see beyond what is obvious and to listen more deeply.”</p>
              <p className="text-lg md:text-2xl">~Simon Sinek</p>
              <p className="text-sm md:text-lg">Author of</p>
              <p className="italic text-sm md:text-lg">Start with Why</p>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
