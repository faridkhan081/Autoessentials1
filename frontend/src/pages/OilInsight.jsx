import { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

import "../App.css";
import Layout from "../components/Layout/Layout";
import HeadBanner from "../components/Banner/HeadBanner";
import product from "../Assets/images/oil.jpg";


const OilInsight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title={"Tools"}>
      <Header activeHeading={6} />
      <HeadBanner title="Tailored Oil Suggestions" list="Tools" imageUrl={product} />
      <OilRecommender />
      <Footer />
    </Layout>
  );
};

const OilRecommender = () => {
 
  return (
    <div className={`my-8`}>
      <div className={``}>
        <div className="gbtn !w-[240px] ml-5 flex items-center justify-center">
          <h1>Oil Inspection Tool</h1>
        </div>


<div className="text-center">
    Comming soon 
</div>

   
     </div>
    </div>
  );
};

export default OilInsight;



