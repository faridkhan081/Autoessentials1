  import React, { useEffect, useState } from "react";
  import styles from "../../styles/styles";

  import Header from "../Layout/Header.jsx";
  import EventCard from "./EventCard.jsx";
import { useSelector } from "react-redux";

  const Events = () => {
    const {allEvents,isLoading} = useSelector((state)=> state.events)
    // const [data,setData] = useState()

   
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
        <EventCard active={true} data = {allEvents && allEvents[0]}/>
        
      </div>
        )
      }
      </div>
    );
  };

  export default Events;
