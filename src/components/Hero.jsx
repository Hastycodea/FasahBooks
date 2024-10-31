import React from "react";
import hero1 from "../assets/heroimg.png";
import hero2 from "../assets/egg.png";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="my-6 ">
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
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center bg-[#FF6D1F] h-[500px] my-5 w-full">
            <img src={hero1} alt="" className="w-5/12 h-full object-cover" />
            <section className="w-6/12 flex flex-col justify-center text-center items-center ">
              <h1 className="text-7xl font-serif font-bold">Now Available</h1>
              <button className="text-2xl bg-black text-[#CD7F32] rounded-lg px-6 py-2 mt-4">
                Buy Now
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center bg-[#FF6D1F] h-[500px] my-5 w-full">
            <img src={hero2} alt="" className="w-5/12 h-full object-cover" />
            <section className="w-6/12 flex flex-col justify-center text-center items-center ">
              <h1 className="text-7xl font-serif font-bold">Now Available</h1>
              <button className="text-2xl bg-black text-[#CD7F32] rounded-lg px-6 py-2 mt-4">
                Buy Now
              </button>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
