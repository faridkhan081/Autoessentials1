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

// const Categories = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//      <div className='w-full mt-[33px]'>
//                 <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
//                     <h2>Top Categories</h2>
//                     <div className='w-[100px] h-[4px] bg-rose-500 mt-4'></div>
//                 </div>
//             </div>

//       {/* <div
//         className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
//         id="categories"
//       >
//         <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] ">
//           {categoriesData &&
//             categoriesData.map((i) => {
//               const handleSubmit = (i) => {
//                 navigate(`/products?category=${i.title}`);
//               };
//               return (
//                 <div
//                   className="relative  w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
//                 style={{minHeight:'160px'}}
//                   key={i.id}
//                   onClick={() => handleSubmit(i)}
//                 >

//                 <div className="w-16 h-16 rounded-lg" >
//                 <img
//                     src={i.image_Url}
//                     className="object-cover"
//                     alt=""
//                   />
//                 </div>

//                    <h5 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">{i.title}</h5>
//                 </div>
//               );
//             })}
//         </div>
//       </div> */}

//     </>
//   );
// };

// export default Categories;

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
