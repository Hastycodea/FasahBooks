import React from "react";

const About = () => (
  <div className="px-0 md:px-5 md:px-5 md:py-3 py-2">
    <h1 className="text-4xl font-medium my-5 md:block hidden">About Us</h1>
    <div className="flex md:flex-row flex-col items-center md:items-stretch justify-center mx-auto space-x-4 justify-center">
      <img
        src="/book.jpg"
        alt=""
        className="w-[95vw] md:w-6/12 h-[50vh] md:h-[75vh] object-cover pb-3 md:pb-0"
      />
      <div className="w-[95vw]  md:w-6/12 text-gray-500 text-sm leading-[30px] space-y-4">
        <p>
          At Fasah Books, we take pride in enriching the minds of our readers
          with a vast collection of knowledge. For over a year, this has been
          our unwavering commitment. We are honored to have served esteemed
          customers from diverse backgrounds, including the Vice Chancellors of
          JKUAT and KU, as well as other highly regarded individuals in society
          who have trusted us for their reading needs.
        </p>
        <p>
          Our carefully curated selection of books is unmatched, offering rare
          and unique titles not easily found in Nairobi or across the region.
          Whether you&apos;re seeking an inspiring novel, an insightful memoir,
          or the latest academic work, Fasah Books is your go-to destination.
        </p>
        <p>
          Our distinctive bookmarks, introduced from the beginning of our
          journey, remain a beloved symbol of our commitment to quality. Every
          purchase at Fasah Books comes with more than just a book – it comes
          with a piece of Fasah$apos;s legacy. Our trademark bookmarks, which
          are as old as the shop itself, have stood the test of time. When our
          customers buy their books they are sure to leave with something more:
          the prestige bookmark.
        </p>
      </div>
    </div>
  </div>
);

export default About;
