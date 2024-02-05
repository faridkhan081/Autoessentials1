


import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../components/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored.jsx";
import Reviews from "../components/Route/Reviews.jsx";
import Footer from "../components/Layout/Footer.jsx";
import Layout from "../components/Layout/Layout.jsx";
import Chatbox from "../components/Chat/Chatbox.jsx";
import ScrollToTop from "react-scroll-to-top";

function HomePage() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [showChatButton, setShowChatButton] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowChatButton(scrollPosition > window.innerHeight * 0.6);
      setShowScrollToTopButton(scrollPosition > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Header activeHeading={2} />

      <Hero />

      <Categories />
      <BestDeals />
      <FeaturedProduct />
      <Events />
      <Sponsored />
      <Reviews />
      <Footer />

      {showScrollToTopButton && (
        <div style={{ position: "fixed", bottom: "10px", right: "30px" }}>
          <ScrollToTop smooth width="30" style={{ width: '40px', padding: '4px' }} 
viewBox="0 0 512 512" height="1.2em"
            svgPath="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </div>
      )}

      {showChatButton && (
        <div className="fixed bottom-20 right-5 mb-4 mr-4">
          <button className="chatBtn" onClick={toggleChat} id="open-chat">
          <svg
                height="1.6em"
                fill="white"
                xmlSpace="preserve"
                viewBox="0 0 1000 1000"
                y="0px"
                x="0px"
                version="1.1"
              >
                <path d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z" />
              </svg>
            <span className="tooltip">Assistent</span>
          </button>
        </div>
      )}

      <Chatbox isOpen={isChatOpen} onClose={toggleChat} />
    </Layout>
  );
}

export default HomePage;
