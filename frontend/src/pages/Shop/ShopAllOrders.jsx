import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllOrders from "../../components/Shop/AllOrders.jsx";
import Layout from '../../components/Layout/Layout.jsx';

const ShopAllOrders = () => {
  
  return (
        <Layout title={'All Orders'}>
         
            <div className="flex justify-between w-full">
                <div className="">
                  <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                   <AllOrders />
                </div>
              </div>
        </Layout>
  )
}

export default ShopAllOrders