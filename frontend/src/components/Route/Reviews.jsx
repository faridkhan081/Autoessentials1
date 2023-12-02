import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";

import { FaQuoteRight } from 'react-icons/fa';
import Ratings from "../Products/Rating";



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
    <div>
      <section className="slick-container 800px:h-[530px] 370px:h-[400px] ">
      <h2 className="flex justify-center flex-col items-center  800px:text-4xl text-slate-600 font-bold  370px:text-[16px] !mb-[30px] text-center">Unveiling Customer Delight: Reviews that 
      
      <span> Speak Volumes!</span>
      <div className='w-[100px] h-[4px] bg-rose-500 mt-4'></div>
      </h2>
        <Slider {...settings}>
          {data?.map((product, productIndex) => (
            <div key={productIndex}>
              {product.reviews.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="flex  justify-center items-center">
                    <img
                      src={`${backend_url}/${item.user.avatar}`}
                      alt=""
                      className="800px:w-[200px] 800px:h-[200px] 370px:w-[100px] 370px:h-[100px] rounded-full mb-4 border-2 border-rose-500"
                    />
                    
                  </div>
                  <div className="pl-4">
                  <p className="text-center text-xl font-bold">{item.user.name}</p>

                    <p className="text-center">{item.comment}</p>
                  
                  </div>
                  <div className="text-center mt-1">
                      <Ratings rating={product.ratings} />
                    </div>

                    <FaQuoteRight className=" 800px:text-[50px] 370px:text-[30px] text-rose-500 icon mt-5" />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Reviews;
