import React, { useEffect } from "react";
import styles from "../styles/styles";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import HeadBanner from "../components/Banner/HeadBanner";
import product from "../Assets/images/sale2.jpeg";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <Layout title={"Running Events"}>
      <Header activeHeading={4} />
      <HeadBanner title="Best Sales For You" list="Events" imageUrl={product} />

      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="mt-5">
          <div className={`${styles.section} mt-[40px]`}>
            {allEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                {allEvents.map((event, index) => (
                  <ProductCard data={event} key={index} isEvent={true} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No running events</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default EventsPage;
