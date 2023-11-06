import React from "react";
import Footer from "../../components/Layout/Footer";
import ShopSettings from "../../components/Shop/ShopSettings.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.jsx";
import Layout from "../../components/Layout/Layout.jsx";

const ShopSettingsPage = () => {
  return (
    <Layout title={'Shop Settings'}>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={11} />
        </div>
        <ShopSettings />
      </div>
    </Layout>
  );
};

export default ShopSettingsPage;
