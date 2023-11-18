import React from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const FeaturedProduct = () => {
  const { allProducts ,isLoading } = useSelector((state) => state.products);

  // Show only 10 products if allProducts is available
  const productsToShow = allProducts ? allProducts.slice(0, 15) : [];

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className='w-full'>
          <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
            <h2>Feature Products</h2>
            <div className='w-[100px] h-[4px] bg-rose-500 mt-4'></div>
          </div>
        </div>
     {
      isLoading ? (<div className="flex justify-center items-center">
      <div className="loader mb-[50px]">
              <p className="heading ">
                Feature Products are loading...
              </p>
              <div className="loading">
                <div className="load" />
                <div className="load" />
                <div className="load" />
                <div className="load" />
              </div>
            </div>
      </div>) : (
        <>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {productsToShow.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
        </>
      )
     }
      </div>
    </div>
  );
};

export default FeaturedProduct;
