import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import CreateEvent from "../../components/Shop/CreateEvent.jsx";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';
import Layout from '../../components/Layout/Layout.jsx';

const ShopCreateEvents = () => {
  return (
    <Layout title={'Create Events'}>
     
        <div className="flex items-center justify-between w-full">
      <div className="">
        <DashboardSideBar active={6} />
      </div>
      <div className="w-full justify-center flex">
        <CreateEvent />
      </div>
    </div>
    </Layout>
  )
}

export default ShopCreateEvents