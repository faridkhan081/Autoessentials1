import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllProducts from "../../components/Shop/AllProducts.jsx";
import Layout from '../../components/Layout/Layout.jsx';

const ShopAllProducts = () => {
  
  return ( 
    <Layout title={'All Products'}>
      
        <div className="flex ">
            <div className="">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full justify-center flex">
                <AllProducts />
            </div>
          </div>
    </Layout>
  )
}

export default ShopAllProducts