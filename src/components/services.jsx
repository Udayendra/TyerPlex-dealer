import React from "react";
import balance from "../img/balance.png";
import alignment from "../img/wheel-alignment.png";

const Btn = () => {
  return (
    <button class="btn bg-white  text-red-500 font-semibold py-2 px-5 border border-red-500 rounded hover:border-red-500 hover:bg-red-500 hover:text-white">
      Book Now
    </button>
  );
};

const Services = () => {
  return (
    <div className=" p-4  mx-5 md:mx-16 my-5 shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] overflow-hidden">
      <h1 className="font-semibold  text-black mb-4 text-[20px]">
        Services offered by this dealer
      </h1>
      <div className="flex space-x-3">
        <div className="flex flex-col w-1/2  lg:w-1/5 items-center mb-2 rounded bg-white p-3 border-[1px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]">
          <img
            src={balance}
            alt=" logo"
            className="w-[170px] aspect-[3/2] object-contain"
          />
          <h1 className="text-black font-semibold my-3">Wheel Balancing</h1>
          <Btn/>
        </div>
        <div className="flex flex-col w-1/2 lg:w-1/5 items-center mb-2 rounded bg-white p-3 border-[1px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]">
          <img
            src={alignment}
            alt=" logo"
            className="w-[170px] aspect-[3/2] object-contain"
          />
          <h1 className="text-black font-semibold my-3">Wheel Alignment</h1>
          <Btn/>
        </div>
      </div>
    </div>
  );
};

export default Services;
