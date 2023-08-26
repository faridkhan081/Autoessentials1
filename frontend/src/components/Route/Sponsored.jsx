import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const Sponsored = () => {
  return (
    
     <>
  <section>
  <div
    className={` w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-white`}
  >
    <div className={`${styles.section} grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16`}>
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1542323228-002ac256e7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="absolute inset-0 h-full w-full object-cover filter brightness-75"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Join Our Community of Successful Sellers!</h2>

        <p className="mt-4 text-gray-600">
        Discover the Opportunities of Partnering with <bold className='font-bold'>Autoessentials</bold> . Turn your passion into a thriving online business and connect with millions of potential customers around the world. Our user-friendly seller onboarding process makes it easy to get started on your journey to success.
        </p>

        <Link
          to="shop-create"
          className="mt-8 inline-block shrink-0 rounded-md border border-rose-500 bg-rose-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-rose-500 focus:outline-none focus:ring active:test-rose-500"
        >

        
          Get Started Today
        </Link>
      </div>
    </div>
  </div>
</section>
</>
  
  );
};

export default Sponsored;