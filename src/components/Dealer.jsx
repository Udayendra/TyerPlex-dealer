import React from "react";
import verified from "../img/verified.png";
import img1 from "../img/2021-02-06.jpg";
import star from "../img/star.png";
import location from "../img/location.png";
import clock from "../img/clock.png";

const cardDataArray = [
  {
    letter: "RB",
    name: "Rohit Bhati",
    detail:
      "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your",
  },
  {
    letter: "MN",
    name: "Md Nasir",
    detail:
      "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    letter: "PK",
    name: "Pradeep Kumar",
    detail:
      "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
  },
];

function StarIcon() {
  return <img src={star} alt="star" className="h-3 pr-1" />;
}

const Card = ({ letter, name, detail }) => {
  return (
    <div className=" rounded bg-white p-3 border-[1px] md:basis-1/3">
      <div className="flex items-center mb-2">
        <span className="h-10 w-10 p-1 flex items-center justify-center text-[20px] bg-orange-400 rounded-full text-white">
          {letter}
        </span>

        <h5 className="m-2 text-xl font-normal leading-tight  text-black">
          {name}
        </h5>
      </div>
      <p className="mb-2 text-base text-gray-500">{detail}</p>
    </div>
  );
};

const Dealer = () => {
  return (
    <div className="p-2 mx-5 md:mx-16 my-5 shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]">
      <div className=" bg-white p-2 flex lg:justify-between h-auto flex-col-reverse md:flex-row">
        <div className="flex flex-col max-w-[30rem] md:w-1/2">
          <div className="flex justify-between mb-4 m-2">
            <h1 className="font-semibold text-[20px] text-black">
              SHREE HEMKUNT TYRES AND SERVICES
            </h1>
            <p className="text-green-600 flex items-center">
              <img src={verified} alt="verified" className="h-4 pr-1" />
              <span className="">verified</span>
            </p>
          </div>
          <div>
            <div className="flex space-x-4 m-2">
              <button class="bg-green-600 px-1 text-white border text-[11px] rounded">
                4.9
              </button>
              <div className="5 flex items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="text-[14px] underline text-black">2278 Reviews</p>
              <button class="bg-white hover:bg-gray-200 hover:text-gray-800 text-gray-400 items-center  px-1 border border-gray-400 rounded">
                Rate
              </button>
            </div>
            <div className="text-[14px] my-4 mx-2">
              <div className="flex items-center space-x-3">
                <img src={location} alt="" className="h-4 " />
                <p className="w-[30rem] text-black">
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={clock} alt="" className="h-4 " />
                <p className="text-gray-500">
                  Open - Monday to Sunday - 10:00AM to 8:00PM
                </p>
              </div>
            </div>
            <div className="my-4 mx-2">
              <button class="btn bg-white  text-red-500 font-semibold py-2 px-5 border border-red-500 rounded hover:border-red-500 hover:bg-red-500 hover:text-white">
                Get Direction
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex justify-between space-x-4 w-full  overflow-hidden">
          <img src={img1} alt="" className="w-full xl:max-w-96" />
          <img src={img1} alt="" className="hidden xl:block xl:max-w-96" />
        </div>
      </div>
      <div className="m-2">
        <a href="#"><h1 className="my-2 text-black">2278 Google Reviews</h1></a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardDataArray.map((cardData, index) => (
            <Card
              key={index}
              letter={cardData.letter}
              name={cardData.name}
              detail={cardData.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dealer;
