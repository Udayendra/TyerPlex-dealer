import React from "react";
import check from "../img/check.png";

const Checked = () => {
  return <img src={check} alt="" className="w-10 mr-2" />;
};

const Payment = () => {
  return (
    <div className="p-4 mx-5 md:mx-16 my-5 shadow-md overflow-hidden">
      <h1 className="text-black font-semibold text-xl mb-4">Payment Mode</h1>
      <div className="flex flex-wrap gap-2 text-black">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-0 flex items-center">
          <span>
            <Checked />
          </span>
          Deposit to Account
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-0 flex items-center">
          <span>
            <Checked />
          </span>
          Credit Card/Debit Card
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-0 flex items-center">
          <span>
            <Checked />
          </span>
          Wallets (PayTM/PhonePe/Amazon etc.)
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-0 flex items-center">
          <span>
            <Checked />
          </span>
          Net Banking
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-0 flex items-center">
          <span>
            <Checked />
          </span>
          UPI
        </div>
      </div>
    </div>
  );
};

export default Payment;
