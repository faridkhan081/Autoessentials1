import React from "react";


import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";


const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
     
        <Layout title={"Running Events"}>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]}/>
       
        </Layout>
   
    </>
  );
};

export default EventsPage;