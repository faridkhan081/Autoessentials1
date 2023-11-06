import React from "react";
import Footer from "../../components/Layout/Footer";
import DashboardMessages from "../../components/Shop/DashboardMessages.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.jsx";
import Layout from "../../components/Layout/Layout.jsx";

const ShopInboxPage = () => {
  return (
    <Layout title={'Shop Inbox'}>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={8} /> 
      </div>
       <DashboardMessages />
    </div>
  </Layout>
  );
};


export default ShopInboxPage


