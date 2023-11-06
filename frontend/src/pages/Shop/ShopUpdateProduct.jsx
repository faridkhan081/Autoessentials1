import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'

import UpdateProduct from '../../components/Shop/UpdateProduct.jsx';
import Layout from '../../components/Layout/Layout.jsx';

const ShopUpdateProduct = () => {
  return (
    <Layout title={'Update Product'}>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full justify-center flex">
                <UpdateProduct/>
            </div>
          </div>
    </Layout>
  )
}

export default ShopUpdateProduct