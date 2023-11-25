  import React, { useEffect, useState } from "react";
  import styles from "../../styles/styles";

  import Header from "../Layout/Header.jsx";
  import EventCard from "./EventCard.jsx";
  import ProductCard from "../Route/ProductCard/ProductCard.jsx";
import { useSelector } from "react-redux";

  const Events = () => {
    const {allEvents,isLoading} = useSelector((state)=> state.events)
    const [data,setData] = useState()

   
    return (
      <div>
      {
        !isLoading && (
          <div className={`${styles.section} mb-[50px]`}>
          <div className='w-full'>
                <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
                    <h2>Running Events</h2>
                    <div className='w-[100px] h-[4px] bg-rose-500 mt-4'></div>
                </div>
            </div>




<div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
              {allEvents &&
                allEvents.map((i, index) => (
                  <ProductCard
                    data={i}
                    key={index}
                    isEvent={true}
                   
                  />
                ))}
            </div>

            
       
        
      </div>
        )
      }
      </div>
    );
  };

  export default Events;
