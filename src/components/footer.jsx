import React from "react";
import logo from "../img/logo.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <div className="p-4 mx-5 md:mx-16  my-5 border rounded max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="mb-4 sm:mb-0 flex items-center flex-col">
          <div className="p-4 ">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <div className="flex space-x-3 p-4">
            <img
              src={twitter}
              alt="Twitter"
              className="h-6 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <img
              src={facebook}
              alt="Facebook"
              className="h-6 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="h-6 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
        <div className="mb-4 sm:mb-0">
          <p className="hover:text-blue-500 cursor-pointer">Who are you</p>
          <p className="hover:text-blue-500 cursor-pointer">Are you a tyre dealer?</p>
        </div>
        <div className="mb-4 sm:mb-0">
          <p className="hover:text-blue-500 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-blue-500 cursor-pointer">Terms of Use</p>
        </div>
        <div>
          <p className=" hover:text-blue-500 cursor-pointer">Contact Us</p>
          <p className="hover:text-blue-500 cursor-pointer">Career</p>
          <p className="hover:text-blue-500 cursor-pointer">Shipping and Return Policy</p>
        </div>
      </div>
      <div className="border-t-2 mt-4 pt-2 text-center">
        <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
