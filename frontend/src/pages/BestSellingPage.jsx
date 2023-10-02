import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import HeadBanner from "../components/Banner/HeadBanner";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";

function BestSellingPage() {
 const {allProducts}= useSelector((state)=> state.products)

  const [data, setData] = useState('');


  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    setData(sortedData);
  }, [allProducts]);

  return (
    <Layout title={"Best Selling"}>
      <Header activeHeading={2} />
      <HeadBanner title="Best Selling Products" list='Best selling' imageUrl="https://media.wired.com/photos/5e62cc45ac94e900085c0f2c/master/pass/Science_goodyear_163751952.jpg"/>

      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
         
        </div>
       
      </div>
    </Layout>
  );
}

export default BestSellingPage;
