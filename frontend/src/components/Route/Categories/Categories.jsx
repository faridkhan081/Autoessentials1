import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import "./category.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
}

const Categories = () => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className=" w-full mt-[33px]">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
          <h2>Top Categories</h2>
          <div className="w-[100px] h-[4px] bg-rose-500 mt-4"></div>
        </div>
      </div>
      <section className={`${styles.section} bg-white p-6 mb-12`}>
        <div className="container">
          <Slider {...settings}>
            {categoriesData &&
              categoriesData.map((item) => {
                const handleSubmit = (item) => {
                  navigate(`/products?category=${item.title}`);
                };
                return (
                  <>
                    <div
                      className="h-[150px] cursor-pointer flex items-center justify-center flex-col flex-wrap gap-2"
                      key={item.id}
                      onClick={() => handleSubmit(item)}
                    
                    >
                      <div
                        className="p-5 flex flex-col items-center justify-center hover:underline  " 
                       
                      >
                        <img
                          className="object-cover w-[150px]"
                          src={item.image_Url}
                          alt=""
                         
                        
                        />
                        <p className="!text-[14px] w-full text-center "  >{item.title}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Categories;
