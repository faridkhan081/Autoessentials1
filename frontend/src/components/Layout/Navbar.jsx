import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-rose-500" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }


         <div className="dropdown lg:ml-5">
        <button
          className="text-black bg-white rounded-lg font-medium text-sm px-4 py-2.5 text-center inline-flex items-center btn-dropdown"
          onClick={handleDropDown}
        >
          Solutions
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
              <Link to="/solutions" className=" block py-2 px-4 hover:bg-gray-100">
                Tire Inspection
              </Link>
              <Link to="#" className=" block py-2 px-4 hover:bg-gray-100">
                Recomended Products
              </Link>
            </li>
          </ul>
        </div>
      </div>

      

    </div>
  )
}

export default Navbar