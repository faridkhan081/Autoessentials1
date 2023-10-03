import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className='w-full mt-[33px]'>
                <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
                    <h2>Top Categories</h2>
                    <div className='w-[100px] h-[4px] bg-rose-500 mt-4'></div>
                </div>
            </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] ">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex flex-col items-center justify-between cursor-pointer overflow-hidden hover:shadow-sm"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                 
                  <img
                    src={i.image_Url}
                    className="w-[80px] object-cover"
                    alt=""
                  />
                   <h5 className={`text-[18px] leading-[1.3] ` }>{i.title}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;