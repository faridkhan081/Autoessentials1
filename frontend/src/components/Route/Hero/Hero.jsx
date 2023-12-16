import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSellers } from "../../../redux/actions/sellers";
import { getAllUsers } from "../../../redux/actions/user";


const Hero = () => {
  const dispatch = useDispatch();
  const { sellers } = useSelector((state) => state.seller);
  const { users } = useSelector((state) => state.user)

  
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllSellers());
  }, []);
  

  return (

    <section
  className="relative bg-fixed bg-[url(https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-between lg:px-8"
  >
    <div className="max-w-xl text-center lg:text-left sm:text-right">
      <h1 className="bg-gradient-to-r from-rose-600 via-red-800 to-black bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
      Rev Up Your Ride with  

        <strong className="mt-3 block font-bold text-black">
       AutoEssentials
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Discover Top-Quality Engine Oils, Tires, and More from Trusted Vendors
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <div onClick={()=> window.scrollTo(0,1200)}
        
          className="block w-full rounded cursor-pointer bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Shop Now
        </div>

        <Link
          to="/products"
          className="block w-full rounded bg-transparent px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto border-white border-[2px] hover:bg-white"
        >
          Explore
        </Link>
      </div>
    </div>

    <div className="hidden animate-duration-[8000ms] animate-bounce lg:block glass w-[500px] text-center rounded-lg" style={{background:'rgba(255,255,255,0.6)',backdropFilter:'blur(2px)',WebkitBackdropFilter:'blur(2px)'}}><section>
  <div class="p-5">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-[30px] font-bold text-gray-900">
     Become a Part of Our AutoEssentials Triumph!
      </h2>

      <p class="mt-4 text-gray-500 sm:text-xl ">
      Join Our Thriving AutoEssentials Community: Accelerating Success Together!
      </p>
    </div>

    <div class="mt-6 sm:mt-6">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Sales
            {/* <div
    class="inline-flex gap-2 self-end rounded bg-black p-1 text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >g
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    
    
  </div> */}
          </dt>

          <dd class="text-[35px] font-extrabold text-rose-600 ">
          139k
          </dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Active Sellers
          </dt>

          <dd class="text-[35px] font-extrabold text-rose-600 ">{sellers ? sellers.length: '20k+'}</dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Users
          </dt>

          <dd class="text-[35px] font-extrabold text-rose-600 ">{users ? users.length : '50k+'}</dd>
        </div>
      </dl>
    </div>
  </div>
</section></div>
  </div>
</section>
  );
};

export default Hero;