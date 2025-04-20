import React from "react";

import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="flex items-center justify-center flex-col"
      id="Testimonials"
    >
      <h1 className="text-3xl mb-2">
        Customer <span className=" underline font-thin">Testimonials</span>
      </h1>
      <p className="  text-center text-gray-600 max-w-80 center mx-auto mb-12">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex gap-8 justify-center flex-wrap">
        {testimonialsData.map((testimonail, index) => (
          <div
            key={index}
            className="max-w-[340px border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonail.image}
              alt={testimonail.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonail.name}
            </h2>
            <p className="text-gray-600">{testimonail.title}</p>
            <div className="flex gap-3 justify-center mt-3">
              {Array.from({ length: testimonail.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="stat-icon" />
              ))}
            </div>
            <p className="text-gray-500 max-w-80 mt-3  ">{testimonail.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
