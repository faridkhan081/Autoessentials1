import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import HeadBanner from "../components/Banner/HeadBanner";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts } = useSelector((state) => state.products);

  const [data, setData] = useState();


  useEffect(() => {
    
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
    <Layout title={"All Products"}>
      <Header activeHeading={3} />

      <HeadBanner
        title="Shop Your Favourite Products"
        list="products"
        imageUrl="https://media.wired.com/photos/5e62cc45ac94e900085c0f2c/master/pass/Science_goodyear_163751952.jpg"
      />

      <br />
      <br />

      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
    </Layout>
  );
}

export default ProductsPage;
