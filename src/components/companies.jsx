import React from "react";
import images from "./images";

const TireCompanies = [
  { name: "Michelin", logo: images["michelin-logo.png"] },
  { name: "Bridgestone", logo: images["bridgestone-logo.jpg"] },
  { name: "Goodyear", logo: images["goodyear-logo.png"] },
  { name: "Continental", logo: images["continental-logo.png"] },
  { name: "Pirelli", logo: images["pirelli-logo.png"] },
  { name: "Hankook", logo: images["hankook-logo.png"] },
  { name: "Yokohama", logo: images["yokohama-logo.png"] },
  { name: "Toyo", logo: images["toyo-logo.png"] },
  { name: "Falken", logo: images["Felken-logo.png"] },
  { name: "Nitto", logo: images["nitto-logo.png"] },
];

const Card = ({ name, logo }) => {
  return (
    <div className="carousel-item flex flex-col w-1/5 items-center m-2 rounded bg-white p-3 border-[1px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] cursor-pointer hover:scale-105">
      <img
        src={logo}
        alt=""
        className="w-[170px] aspect-[3/2] object-contain"
      />
      <h1>{name}</h1>
    </div>
  );
};

const Carousal = () => (
  <div className="p-2 mx-5 md:mx-16 my-5 shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] overflow-hidden">
    <h1 className="text-black font-semibold text-[20px]">Deals in</h1>
    <div className="carousel carousel-center space-x-4  my-4">
      {TireCompanies.map((company, index) => (
        <Card key={index} name={company.name} logo={company.logo} />
      ))}
    </div>
  </div>
);

export default Carousal;