import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../img/logo.png";
import login from "../img/login.png";

const Navbar = () => {
  return (
    <div className="px-16 flex items-center justify-between max-w[1024px] mx-auto shadow-md h-14 bg-white">
      <div className="p-4">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex  justify-center text-gray-800 space-x-5 ">
        <FlyoutLink href="/" FlyoutContent={CarsTyersContent}>
          <p className="font-semibold">Cars Tyers</p>
        </FlyoutLink>

        <FlyoutLink href="/" FlyoutContent={BikeTyersContent}>
          <p className="font-semibold">Bike Tyers</p>
        </FlyoutLink>

        <FlyoutLink href="/">
          <p className="font-semibold">Tyer Pressure</p>
        </FlyoutLink>

        <FlyoutLink href="/" FlyoutContent={CommercialTyersContent}>
          <p className="font-semibold">CommercialTyers</p>
        </FlyoutLink>

        <FlyoutLink href="/" FlyoutContent={AccessoriesContent}>
          <p className="font-semibold">Accessories</p>
        </FlyoutLink>

        <FlyoutLink href="/" FlyoutContent={MoreContent}>
          <p className="font-semibold">More</p>
        </FlyoutLink>
      </div>
      <div className="flex space-x-2">
        <img src={login} alt="Login" className="h-8" />
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded-full shadow">
          login
        </button>
      </div>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-gray-800">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-red-400 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-gray-800"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white -z-50" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CarsTyersContent = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className=" space-y-3">
        <h3 className="font-semibold m-2 ">Popular Car Tyer Brands</h3>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          MRF Tyres
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          CEAT Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Goodyear Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Apollo Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Bridgestone Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          JK Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Michelin Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          All Car Tyers
        </a>
      </div>
    </div>
  );
};

const BikeTyersContent = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className=" space-y-3">
        <h3 className="font-semibold m-2 ">Popular Bike Tyer Brands</h3>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          MRF Tyres
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          CEAT Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Goodyear Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Apollo Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Bridgestone Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          JK Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Michelin Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          All Bike Tyers
        </a>
      </div>
    </div>
  );
};

const CommercialTyersContent = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="mb-1 ">
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          All Commercial Tyers
        </a>
      </div>
    </div>
  );
};

const AccessoriesContent = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className=" space-y-3">
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Accessories
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Batteries
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Alloy Wheels
        </a>
      </div>
    </div>
  );
};

const MoreContent = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className=" space-y-3">
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Cash Back Offer
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Find Tyer Dealers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Compare Tyers
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Are You A Tyer Dealer
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Wheel Balancing
        </a>
        <a href="/" className="block text-sm p-1 px-2 hover:bg-slate-100">
          Wheel Alignment
        </a>
      </div>
    </div>
  );
};

export default Navbar;