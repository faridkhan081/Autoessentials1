import React from "react";


import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import HeadBanner from "../components/Banner/HeadBanner";
import product from '../Assets/images/sale2.jpeg'


const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
  
     
        <Layout title={"Running Events"}>
          <Header activeHeading={4} />
          <HeadBanner title="Best Sales For You" list='Events' imageUrl={product}/>


          <EventCard active={true} data={allEvents && allEvents[0]}/>
       
        </Layout>
   
 
  );
};

export default EventsPage;