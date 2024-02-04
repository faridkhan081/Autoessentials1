import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";

import { FaQuoteRight } from 'react-icons/fa';
import Ratings from "../Products/Rating";
import {tesimonial} from '../../Assets/images/testimonial.jpg'
import { HiMenuAlt2 } from 'react-icons/hi';


function Reviews() {
  const { allProducts } = useSelector((state) => state.products);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (allProducts && Array.isArray(allProducts) && allProducts.length > 0) {
      const productsWithReviews = allProducts.filter(
        (product) => product.reviews && product.reviews.length > 0
      );

      // You might want to modify the logic here based on your requirements
      if (productsWithReviews.length > 0) {
        setData(productsWithReviews);
      }
    }
  }, [allProducts]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one product with reviews at a time
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows:false,
 
  };

  return (
    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage:"url('https://efaida.tech/wp-content/uploads/2021/11/h2-bg-section-06-1.jpg')"}}>
      {/* <section className="slick-container 800px:h-[530px] 370px:h-[400px] ">

      </section> */}

      <div className="800px:h-[530px] 370px:h-full  flex items-center flex-col 800px:flex-row 800px:justify-around ">
      <div className="">

      <div className="w-[480px] 370px:w-[370px] h-full p-5 flex flex-col gap-5">
      <span className="text-rose-600 bg-white p-[15px] w-[168px]  text-[18px]  shadow-md font-bold  text-center" style={{borderRadius:'50px'}}>Testimonials</span>
      <h1 className="text-[42px] font-bold">What are <span className="text-rose-600">Clients </span>have said about us!</h1>
     <p className="">Working in IT is intended to assist with ensuring you and your information are protected and your computer runs its best. The organization Access gives is important.</p>
      
      
     <button
  className=" gap-2 w-28 h-12 cursor-pointer rounded-full shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
>
 Explore
</button>

      </div>

        
      </div>
      <div className="800px:w-[720px] 370px:w-[370px] bg-white shadow-md mb-5">

        

<Slider {...settings}>
{data?.map((product, productIndex) => (
  <div key={productIndex}>
    {product.reviews.map((item, index) => (
      <div key={index} className="flex  flex-col justify-center h-[250px] gap-2 dark:text-white  bg-white dark:bg-neutral-900 p-5 shadow-md ">
      <figure className="mx-auto flex h-24 w-24 items-center justify-center rounded-full overflow-hidden" style={{border:'2px solid red'}}>
    <img
      src={`${backend_url}/${item.user.avatar}`}
      alt=""
      className="rounded-full object-cover object-center w-full h-full" style={{border:'4px solid white'}}
    />
  </figure>


 
  <div className="flex flex-row justify-between w-full">
  <p className="text-xl font-bold">{item.user.name}</p>
  
    <div className="text-xs">
      <div className="flex flex-col">
      <Ratings rating={product.ratings} />
      <p className="text-xs text-right mr-2">{new Date(item.createdAt).toLocaleDateString()}</p>

   
      </div>
    </div>
  </div>
  <div className="text-sm mb-5">
  <p >"{item.comment}"</p>
  </div>
</div>




    ))}
  </div>
))}
</Slider>
</div>


      </div>

      </div>



  );
}

export default Reviews;


