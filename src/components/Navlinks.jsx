import React, { useState } from "react";
import { links } from "./Navsublinks.jsx";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div >
          <div key={index} className="px-1 text-left md:cursor-pointer group">
            <h1
              className="py-8 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-2 flex flex-col gap-1 shadow-md">
                    {link.sublinks.map((slink) => (
                      <div>
                        <li className="text-sm text-black my-1">
                          <a href={slink.link} className="hover:text-primary text-black">
                            {slink.name}
                          </a>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <li
                    onClick={() =>
                      subHeading !== slinks.name
                        ? setSubHeading(slinks.name)
                        : setSubHeading("")
                    }
                    className="py-2 pl-7  flex justify-between items-center md:pr-0 pr-5 text-black"
                  >
                    <a href={slinks.link}>{slinks.name}</a>
                  </li>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
