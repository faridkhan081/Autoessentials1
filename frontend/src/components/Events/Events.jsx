import React from "react";
import styles from "../../styles/styles";

import Header from "../Layout/Header.jsx";
import EventCard from "./EventCard.jsx";

const Events = () => {
  return (
    <div className={`${styles.section} mb-[50px]`}>
       <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
      <EventCard active={true}/>
      
    </div>
  );
};

export default Events;
