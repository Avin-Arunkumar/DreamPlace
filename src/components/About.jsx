import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
        id="About"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-8">
          About{" "}
          <span className=" underline underline-offset-4 decoration-1 under font-light">
            Our Brand
          </span>
        </h1>
        <p className=" text-gray-400 max-w-80 text-center mb-8">
          Passionate About Properties, Dedicated to Your Vision
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <img
            src={assets.brand_img}
            alt="brand-img"
            className="w-full sm:1/2 max-w-lg"
          />
          <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">12+</p>
                <p>Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p>Mn. Sq. Ft. Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">25+</p>
                <p>Ongoing Projects</p>
              </div>
            </div>
            <p className="mt-10">
              At the core of our brand is a deep commitment to excellence,
              innovation, and customer satisfaction. We are passionate about
              creating spaces that align with your vision, and our journey over
              the years reflects that dedication. With more than 10 years of
              experience in the industry, we've successfully completed over 12
              landmark projects and delivered more than 20 million square feet
              of quality construction.
            </p>
            <button className="border px-5 py-3 mt-5 bg-blue-600 rounded-3xl text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
