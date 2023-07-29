import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";
import { Link } from "react-router-dom";

const EventCard = ({active}) => {


  return (
    <div
      className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://klbtheme.com/partdo/wp-content/uploads/sites/2/2022/10/1-4-500x500.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores velit illum vel reprehenderit ducimus quod rerum sit aut molestias fugit iure consequuntur itaque odit quasi magni ut esse, adipisci culpa eligendi deserunt natus nobis iusto. Molestias ex doloribus, nulla sed, ipsa id quas, cupiditate adipisci nostrum ea officiis aspernatur excepturi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores velit illum vel reprehenderit ducimus quod rerum sit aut molestias fugit iure consequuntur itaque odit quasi magni ut esse, adipisci culpa eligendi deserunt natus nobis iusto. Molestias ex doloribus, nulla sed, ipsa id quas, cupiditate adipisci nostrum ea officiis aspernatur excepturi.</p>
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
        <CountDown  />
        
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