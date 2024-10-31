import React from "react";
import hero1 from "../assets/heroimg.png";
import hero2 from "../assets/egg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="my-6 ">
        <Slider></Slider>
        <div className="flex items-center justify-center bg-[#FF6D1F] h-[500px] my-5 w-full">
          <img src={hero1} alt="" className="w-5/12 h-full object-cover" />
          <section className="w-6/12 flex flex-col justify-center text-center items-center ">
            <h1 className="text-7xl font-serif font-bold">Now Available</h1>
            <button className="text-2xl bg-black text-[#CD7F32] rounded-lg px-6 py-2 mt-4">
              Buy Now
            </button>
          </section>
        </div>
        {/* <div className="flex items-center justify-center bg-[#FF6D1F] h-[500px]">
          <img src={hero2} alt="" className="w-5/12 h-full object-cover" />
          <section className="w-7/12 flex flex-col justify-center items-center ">
            <h1 className="text-7xl font-serif font-bold">Now Available</h1>
            <button className="text-2xl bg-black text-[#CD7F32] rounded-lg px-6 py-2 mt-4">
              Buy Now
            </button>
          </section>
        </div> */}
    </div>
  );
};

export default Hero;
