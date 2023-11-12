import React from "react";
import Footer from "../../components/Layout/Footer";
import DashboardMessages from "../../components/Shop/DashboardMessages.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.jsx";
import Layout from "../../components/Layout/Layout.jsx";

const ShopInboxPage = () => {
  return (
    <Layout title={'Shop Inbox'}>
    
    <div className="flex items-start justify-between w-full">
      <div>
        <DashboardSideBar active={8} /> 
      </div>
      <div className="w-full flex justify-center">
       <DashboardMessages />
       </div>
    </div>
  </Layout>
  );
};


export default ShopInboxPage


