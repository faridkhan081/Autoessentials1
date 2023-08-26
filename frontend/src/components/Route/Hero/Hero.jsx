import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";


const Hero = () => {
  return (
    // <div
    //   className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    //   style={{
        

    //     backgroundImage:
    //       "url(https://klbtheme.com/chakta/wp-content/uploads/sites/2/2021/01/hero-2_2-1536x592.jpg)",
         
    //   }}
    // >
    //   <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
    //     <h1
    //       className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] capitalize`}
    //     >
    //       Best Collection for cars <br /> and vehicles
    //     </h1>
    //     <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fff]">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
    //       assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
    //       quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
    //       <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
    //     </p>
    //     <Link to="/products" className="inline-block">
    //         <div className={`${styles.button} mt-5` } style={{backgroundColor:'white'}}>
    //              <span className="text-[black] font-[Poppins] text-[18px]">
    //                 Shop Now
    //              </span>
    //         </div>
    //     </Link>
    //   </div>
    // </div>
    <section
  className="relative bg-fixed bg-[url(https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center lg:text-left sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Rev Up Your Ride with  

        <strong className="block font-extrabold text-rose-700">
       AutoEssentials
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Discover Top-Quality Engine Oils, Tires, and More from Trusted Vendors
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Shop Now
        </Link>

        <Link
          to="#"
          className="block w-full rounded bg-transparent px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto border-white border-[2px] hover:bg-white"
        >
          Explore
        </Link>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;