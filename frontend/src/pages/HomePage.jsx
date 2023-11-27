import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header.jsx';
import Hero from '../components/Route/Hero/Hero.jsx';
import Categories from '../components/Route/Categories/Categories.jsx';
import BestDeals from '../components/Route/BestDeals/BestDeals.jsx';
import FeaturedProduct from '../components/Route/FeaturedProduct/FeaturedProduct.jsx';
import Events from '../components/Events/Events.jsx';
import Sponsored from '../components/Route/Sponsored.jsx';
import Reviews from '../components/Route/Reviews.jsx';
import Footer from '../components/Layout/Footer.jsx';
import Layout from '../components/Layout/Layout.jsx';
import Chatbox from '../components/Chat/Chatbox.jsx';


function HomePage() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const [showChatButton, setShowChatButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowChatButton(scrollPosition > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      <Reviews/>
      <Footer />

      <div className="relative">
        {showChatButton && !isChatOpen && (
          <div className="fixed bottom-0 right-0 mb-4 mr-4">
            <button
              onClick={toggleChat}
              id="open-chat"
              className="bg-rose-500 text-white py-2 px-4 rounded-full hover:bg-rose-600 transition duration-300 flex items-center focus:outline-none animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Support
            </button>
          </div>
        )}
      
        <Chatbox isOpen={isChatOpen} onClose={toggleChat} />
      </div>
    </Layout>
  );
}

export default HomePage;
