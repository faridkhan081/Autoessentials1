import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";
import { Link } from "react-router-dom";

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full  m-auto">
        <img
          src="https://ic.carid.com/bfgoodrich/items/bfgoodrich-g-force-comp-2-a-s_1.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          BFGOODRICH® RADIAL T/A SPEC
        </h2>
        <p>
          RADIAL T/A SPEC Tires by BFGOODRICH®. Season: All Season. 
          <br />
          Type:
          Classic / Muscle / Retro. 
          <br />
          An American classic. Nearly 40 years of real
          racing heritage and technology. Radial T/A have classic look combined
          with modern technology.
          <br />
           1. Designed to give your modern muscle a stylish
          look <br /> 2. Engineered to provide superb lateral stability and steering
          response.
          <br />
          3. Popular sizes for muscle cars
          <br />
          4. Flat tread profile for both handling and long tread life.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              500$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />

        <br />
        {/* <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link> 
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
