import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllRefundOrders from "../../components/Shop/AllRefundOrders.jsx";
import Layout from '../../components/Layout/Layout.jsx';

const ShopAllRefunds = () => {
  
  return (
    <Layout title={'Refunds'}>
    
    <div className="flex justify-between w-full">
        <div className="">
          <DashboardSideBar active={10} />
        </div>
        <div className="w-full justify-center flex">
           <AllRefundOrders />
        </div>
      </div>
</Layout>
  )
}

export default ShopAllRefunds