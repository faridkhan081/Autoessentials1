import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";
import Head from "./Head";

const Navbar = ({ active }) => {
  const [toolsActive, setToolsActive] = useState(false);

  const handleToolsClick = () => {
    setToolsActive(!toolsActive);
  };

  return (
    <div className={`block 800px:${styles.noramlFlex} font-Poppins text-[14px] 800px:ml-[50px] 370px:ml-0`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex" key={index}>
            <Link
              to={i.url}
              className={`${
                active === index + 2
                  ? "primary-dark-text"
                  : "text-black 800px:text-[#fff]"
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer hover:underline underline-offset-[4px] decoration-[1px] hover:text-red-500 md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0`}
            >
              {i.title}
            </Link>
          </div>
        ))}

      <div className="group relative text-[15px] ml-5 ">
        <button
          onClick={handleToolsClick}
          className={`text-white mt-[1px] py-2 px-2 rounded inline-flex items-center group 370px:bg-rose-600 lg:bg-transparent ${
            toolsActive ? "primary-dark-text" : "text-black"
          }`}
        >
          <span className="mr-1">Tools</span>
          <svg
            className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>

        {/* menu list */}
        <ul
          className={`rounded absolute hidden text-white lg:pt-[16px] 370px:pt-2 group-hover:block  w-40 z-10`}
        >
          <Link to="/solutions">
            <li className={`bg-gray-800 hover:bg-rose-600 py-4 px-4 cursor-pointer `}>
              Tire Inspection
            </li>
          </Link>
          <hr className="h-px bg-white border-0" />
          <Link to="/oilInsights">
            <li className={`bg-gray-800 hover:bg-rose-600 py-4 px-4 cursor-pointer `}>
            Oil Insights
            </li>
          </Link>
        </ul>
      </div>

      <div className="ml-5 w-[350px] 370px:hidden 800px:block" >
        <Head/>
      </div>
    </div>
  );
};

export default Navbar;
