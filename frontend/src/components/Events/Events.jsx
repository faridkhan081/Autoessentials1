import React from "react";

import Header from "../Layout/Header.jsx";
import EventCard from "./EventCard.jsx";

const Events = () => {
  return (
    <div>
      
      <EventCard active={true}/>
      <EventCard active={true}/>
    </div>
  );
};

export default Events;
