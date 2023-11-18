import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard.jsx";



const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts,isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  
  return (
    <div>
      <div className={`${styles.section}`}>
      <div className='w-full' id="bestdeal">
                <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
                    <h2>Trending</h2>
                    <div className='w-[100px] h-[4px] bg-rose-500 mt-4'></div>
                </div>
            </div>
     {
      isLoading ? (<div className="flex justify-center items-center">
      <div className="loader mb-[50px]">
              <p className="heading">
                Trending Products are loading...
              </p>
              <div className="loading">
                <div className="load" />
                <div className="load" />
                <div className="load" />
                <div className="load" />
              </div>
            </div>
      </div>) :(
        <>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
        </>
      )
     }

      </div>
    </div>
  );
};

export default BestDeals;