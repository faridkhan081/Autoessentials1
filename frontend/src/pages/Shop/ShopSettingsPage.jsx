import React from "react";
import Footer from "../../components/Layout/Footer";
import ShopSettings from "../../components/Shop/ShopSettings.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.jsx";
import Layout from "../../components/Layout/Layout.jsx";

const ShopSettingsPage = () => {
  return (
    <Layout title={'Shop Settings'}>
    
      <div className="flex">
        <div className="">
          <DashboardSideBar active={11} />
        </div>
        <ShopSettings />
      </div>
    </Layout>
  );
};

export default ShopSettingsPage;
