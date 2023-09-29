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
        <div className={`${styles.heading}`}>
            <h1>Running Events</h1>
          </div>
        <EventCard active={true} data = {allEvents && allEvents[0]}/>
        
      </div>
        )
      }
      </div>
    );
  };

  export default Events;
