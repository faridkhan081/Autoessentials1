import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Categories/category.css";
const BestDeals = () => {
  const [data, setData] = useState([]);
  const [best,setBest] = useState([true])
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstTen = sortedData && sortedData.slice(0, 10);
    setData(firstTen);
  }, [allProducts]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
   autoplaySpeed: 5000, 
   arrows: false, 
   
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    
    
    cssEase: "linear",
   
  };

  return (
    <div>
      <div className={`${styles.section} rounded-lg flex flex-col items-center` } >
        <div className="w-full" id="bestdeal">
          <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
            <h2>Trending</h2>
            <div className="w-[100px] h-[4px] bg-rose-500 mt-4"></div>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="loader mb-[50px]">
              <p className="heading">Trending Products are loading...</p>
              <div className="loaderrr">
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          
          <div className="container mb-10 rounded-lg">
            <Slider {...sliderSettings}>
              {data.map((item, index) => (
                <div className="">
                <div key={index} className="" style={{ padding: "0 15px" }}>
                  <ProductCard data={item} best={best}/>
                </div>
                </div>
              ))}
            </Slider>
          </div>
        
        )}
      </div>
    </div>
  );
};



export default BestDeals;