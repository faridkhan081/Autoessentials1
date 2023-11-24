import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import HeadBanner from "../components/Banner/HeadBanner";
import Layout from "../components/Layout/Layout";
import product from '../Assets/images/productsHeader.jpg';
import SortBy from "../components/Layout/SortBy";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [displayCount, setDisplayCount] = useState(15);
  const [loadIncrement, setLoadIncrement] = useState(15);
  const [data, setData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => {
    if (categoryData === null) {
      setData(allProducts);
    } else {
      const filteredData = allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(filteredData);
    }
    window.scrollTo(0, 0);
  }, [allProducts, categoryData]);

  const handleSortChange = (selectedValue) => {
    setSortCriteria(selectedValue);
  };

  const sortProducts = (criteria) => {
    if (criteria === 'bestselling') {
      return data.slice().sort((a, b) => b.sold_out - a.sold_out);
    } else if (criteria === 'lowestprice') {
      return data.slice().sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (criteria === 'highestprice') {
      return data.slice().sort((a, b) => b.originalPrice - a.originalPrice);
    } else if (criteria === 'clearfilter') {
      return data;
    }
    return data;
  };

  const sortedData = sortProducts(sortCriteria);

  const loadMore = () => {
    setDisplayCount(displayCount + loadIncrement);
  };

  return (
    <Layout title={"Products"}>
      <div>
        <Header activeHeading={3} />
        <HeadBanner title="All Products" list='Products' imageUrl={product} />
        <br />
        <SortBy onSortChange={handleSortChange} />

        {isLoading ? (
          <div className={`${styles.section} text-center`}>
          <div className="flex justify-center items-center">
      <div className="loader mb-[50px]">
              <p className="heading">
               Products are loading...
              </p>
              <div class="loaderrr">
    <div></div>
       </div>
            </div>
      </div>
          </div>
        ) : (
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {sortedData && sortedData.length > 0 ? (
                sortedData.slice(0, displayCount).map((item, index) => (
                  <ProductCard data={item} key={index} />
                ))
              ) : (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  No products Found!
                </h1>
              )}
            </div>
            {displayCount < (sortedData ? sortedData.length : 0) && (
              <div className="flex justify-center mb-[50px]">
                <button className="butto" type="button" onClick={loadMore}>
                  <span className="butto__text">Load More</span>
                  <span className="butto__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      viewBox="0 0 48 48"
                      height={48}
                      className="svg"
                    >
                      <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z" />
                      <path fill="none" d="M0 0h48v48h-48z" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        <Footer />
      </div>
    </Layout>
  );
};

export default ProductsPage;

