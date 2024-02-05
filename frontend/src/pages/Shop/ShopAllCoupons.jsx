import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllCoupons from "../../components/Shop/AllCoupons.jsx";
import Layout from '../../components/Layout/Layout.jsx';

function ShopAllCoupons() { 
    
  return (
    <Layout title={'Coupon Code'}>
  
    <div className="flex">
        <div className="">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
            <AllCoupons />
        </div>
      </div>
</Layout>
  )
}

export default ShopAllCoupons