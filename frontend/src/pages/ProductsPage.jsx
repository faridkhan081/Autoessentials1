// import React, { useEffect, useState } from "react";
// import Header from "../components/Layout/Header";
// import styles from "../styles/styles";
// import { useSearchParams } from "react-router-dom";
// import { productData } from "../static/data";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import HeadBanner from "../components/Banner/HeadBanner";
// import { useSelector } from "react-redux";
// import Layout from "../components/Layout/Layout";
// import product from '../Assets/images/productsHeader.jpg';

// function ProductsPage() {
//   const [searchParams] = useSearchParams();
//   const categoryData = searchParams.get("category");
//   const { allProducts } = useSelector((state) => state.products);
//   const [sortBy, setSortBy] = useState("default"); // default sorting option
//   const [data, setData] = useState(allProducts);

//   useEffect(() => {
//     if (categoryData !== null) {
//       const filteredData = allProducts.filter((i) => i.category === categoryData);
//       setData(filteredData);
//     }
//   }, [allProducts, categoryData]);

//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSortBy(value);
//     let sortedData = [...allProducts];

//     switch (value) {
//       case "bestSelling":
//         sortedData = sortedData.sort((a, b) => b.sold_out - a.sold_out);
//         break;
//       case "highPrice":
//         sortedData = sortedData.sort((a, b) => b.originalPrice - a.originalPrice);
//         break;
//       case "lowPrice":
//         sortedData = sortedData.sort((a, b) => a.originalPrice - b.originalPrice);
//         break;
//       default:
//         break;
//     }

//     setData(sortedData);
//   };

//   const clearFilters = () => {
//     setSortBy("default"); // Reset the sorting option to the default
//     setData(allProducts); // Reset the data to the original condition
//   };

//   return (
//     <Layout title={"All Products"}>
//       <Header activeHeading={3} />
//       <HeadBanner title="Shop Your Favorite Products" list="products" imageUrl={product} />
//       <br />
//       <br />
//       <div className="min-h-screen flex flex-col md:flex-row">
//         {/* Sidebar */}
//         <nav className="ml-5 mr-5 md:w-56 xl:w-60 bg-white md:h-screen h-[100px] rounded mb-2">
//           <div className="flex md:block rounded border-black">
//             <div className="flex p-5 items-center gap-3">
//               <input
//                 type="radio"
//                 name="sortOption"
//                 id="bestSelling"
//                 value="bestSelling"
//                 checked={sortBy === "bestSelling"}
//                 onChange={handleSortChange}
//               />
//               <label htmlFor="bestSelling">Best Selling</label>
//             </div>
//             <div className="flex p-5 items-center gap-3">
//               <input
//                 type="radio"
//                 name="sortOption"
//                 id="highPrice"
//                 value="highPrice"
//                 checked={sortBy === "highPrice"}
//                 onChange={handleSortChange}
//               />
//               <label htmlFor="highPrice">Price high to low</label>
//             </div>
//             <div className="flex p-5 items-center gap-3">
//               <input
//                 type="radio"
//                 name="sortOption"
//                 id="lowPrice"
//                 value="lowPrice"
//                 checked={sortBy === "lowPrice"}
//                 onChange={handleSortChange}
//               />
//               <label htmlFor="lowPrice">Price low to high</label>
//             </div>
//             <div className=" flex p-5 items-center gap-3">
//               <button onClick={clearFilters} className="cursor-pointer bg-black text-white p-2 rounded hover:bg-rose-600">
//                 Clear Filters
//               </button>
//             </div>
//           </div>
//         </nav>
//         {/* Main content */}
//         <main className="flex-1 min-w-0 overflow-auto">
//           {/* Product cards */}
//           <div className={`${styles.section}`}>
//             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12">
//               {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//             </div>
//             {data && data.length === 0 ? (
//               <h1 className="text-center w-full pb-[100px] text-[20px]">
//                 No products Found!
//               </h1>
//             ) : null}
//           </div>
//         </main>
//       </div>
//     </Layout>
//   );
// }

// export default ProductsPage;


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import HeadBanner from "../components/Banner/HeadBanner";
import Layout from "../components/Layout/Layout";
import product from '../Assets/images/productsHeader.jpg'

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
       window.scrollTo(0,0);
  }, [allProducts]);

  return (
  <Layout title={"Products"}>
 
      <div>
      <Header activeHeading={2} />
      <HeadBanner title="Best Selling Products" list='Best selling' imageUrl={product}/>

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
      <Footer />
    </div>
  
  </Layout>
  );
};

export default ProductsPage;
