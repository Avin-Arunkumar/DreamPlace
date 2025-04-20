import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hiden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="footer" />
          <p className="text-gray-400 mt-4">
            The Dream House is a creative design activity where students or
            individuals plan and visualize their ideal home. It includes
            selecting the location, designing the floor plan, choosing
            furniture, and adding personal touches like gardens, pools, or
            modern technology.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className=" flex flex-col text-gray-400">
            <a className="hover:text-white" href="#Header">
              Home
            </a>
            <a className="hover:text-white" href="#About">
              About Us
            </a>
            <a className="hover:text-white" href="#Contact">
              Contact US
            </a>
            <a className="hover:text-white" href="#">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our news letter
          </h3>
          <p className="text-white">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className=" flex gap-5">
            <form className="text-gray-500">
              <input
                className="border border-white text-white mt-3 py-2 px-4 rounded "
                type="email"
                placeholder="Enter your email"
              />
            </form>
            <button className="py-0 px-6 rounded-3xl bg-blue-400 text-white ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-50">
        Copyright 2025 © Avin. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
