import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import HeadBanner from "../components/Banner/HeadBanner";
import product from "../Assets/images/sale2.jpeg";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import { motion } from "framer-motion";
import SortBy from "../components/Layout/SortBy";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const [displayCount, setDisplayCount] = useState(4); // Initial display count
  const [loadIncrement] = useState(4); // Number of items to load on each "Load More" click
  const [data, setData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');

  const handleLoadMore = () => {
    setDisplayCount(displayCount + loadIncrement);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(allEvents)
  }, []);

  const handleSortChange = (selectedValue) => {
    setSortCriteria(selectedValue);
  };

  const sortEvents = (criteria) => {
    if (criteria === 'bestselling') {
      return data.slice().sort((a, b) => b.sold_out - a.sold_out);
    }  if (criteria === 'lowestprice') {
      return data.slice().sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (criteria === 'highestprice') {
      return data.slice().sort((a, b) => b.originalPrice - a.originalPrice);
    } else if (criteria === 'clearfilter') {
      return data;
    }
    return data;
  };

  const sortedEvents = sortEvents(sortCriteria);

  return (
    <Layout title={"Running Events"}>
      <Header activeHeading={4} />
      <HeadBanner title="Best Sales For You" list="Events" imageUrl={product} />
      <SortBy onSortChange={handleSortChange} />
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="mt-5">
          <div className={`${styles.section}`}>
            {allEvents.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {sortedEvents.slice(0, displayCount).map((event, index) => (
                  <ProductCard data={event} key={index} isEvent={true} />
                ))}
              </motion.div>
            ) : (
              <p className="text-center text-gray-500">No running events</p>
            )}

            {displayCount < sortedEvents.length && (
              <div className="flex justify-center mb-[50px]">
                <button className="butto" type="button" onClick={handleLoadMore}>
                  <span className="butto__text">Load More</span>
                  <span className="butto__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      viewBox="0 0 48 48"
                      height={48}
                      className="svg"
                    >
                      <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z" />
                      <path fill="none" d="M0 0h48v48h-48z" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default EventsPage;
