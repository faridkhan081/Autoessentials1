import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className={`block 800px:${styles.noramlFlex} font-Poppins text-[14px] `}
    >
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 2
                  ? "primary-dark-text"
                  : "text-black 800px:text-[#fff]"
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}

      {/* <div className="dropdown lg:ml-5">
        <button
          className="text-black bg-white rounded-lg font-medium text-sm px-4 py-2.5 text-center inline-flex items-center btn-dropdown"
          onClick={handleDropDown}
        >
          Tools
          <svg
            className="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className={`absolute my-2 z-10 w-44 bg-white rounded  divide-y divide-gray-100 shadow ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className=" btn-dropdowned z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
            <li>
              <Link
                to="/solutions"
                className=" block py-2 px-4 hover:bg-gray-100"
              >
                Tire Inspection
              </Link>
             
            </li>
          </ul>
        </div>
      </div> */}





      <div className="group relative text-[15px] ml-5">
    
    <button className=" text-white mt-[1px] py-2 px-2 rounded inline-flex items-center group 385px:bg-rose-600 lg:bg-transparent">
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
    <ul className="rounded absolute hidden text-black lg:pt-[16px] 385px:pt-2 group-hover:block w-40 z-10">
     
<Link to="/solutions">
 <li className="bg-white hover:text-white hover:bg-black py-4 px-4 cursor-pointer">
          Tire Inspection
        </li>

        </Link>
        <hr class="h-px bg-black border-0 "></hr>
        <Link to="/solutions">
 <li className="bg-white hover:text-white hover:bg-black py-4 px-4 cursor-pointer">
          Rim Inspection
        </li>
        </Link>
      </ul>
      
    </div>

    </div>
  );
};

export default Navbar;
