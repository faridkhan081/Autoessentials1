import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
function ProductDetailsPage() {
  const { allProducts } = useSelector((state) => state.products);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");
  const { allEvents } = useSelector((state) => state.events);

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data); 
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }

    window.scrollTo(0, 0);
  }, [data, allProducts, id, allEvents]);

  return (
    <Layout title={"Product Details..."}>
      <Header />
      <ProductDetails data={data} />
      {!eventData && <>{data && <SuggestedProduct data={data} />}</>}
      <Footer />
    </Layout>
  );
}

export default ProductDetailsPage;
