"use client";

import { testimonials } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import Image from "next/image";
// import dynamic from "next/dynamic";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    // arrows: true,
  };

  return (
    <div id="testimonials" className="mt-20 tracking-wide pt-4">
      <div className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Testimonials
      </div>

      {/* starts here */}
      <div className=" text-black">
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-auto bg-white rounded-xl ">
                <div className="rounded-md text-md  font-semibold">
                  <div className="flex lg:ml-20 max-lg:flex-col max-lg:justify-center justify-evenly max-lg:items-center max-lg:w-full gap-5">
                    <Image
                      className="h-32 w-32 rounded-full border border-neutral-500"
                      src={testimonial.image as StaticImageData}
                      alt=""
                    />
                    <div className="flex flex-col justify-evenly p-2">
                      <h6>{testimonial.user}</h6>
                      <span className="text-sm font-normal italic text-neutral-600">
                        {testimonial.company}
                      </span>
                    </div>
                    <div className="lg:px-32 m-auto items-center">
                      <p>{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ends here */}
    </div>
  );
};

export default Testimonials;
