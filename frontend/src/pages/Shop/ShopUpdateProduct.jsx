import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'

import UpdateProduct from '../../components/Shop/UpdateProduct.jsx';
import Layout from '../../components/Layout/Layout.jsx';

const ShopUpdateProduct = () => {
  return (
    <Layout title={'Update Product'}>
        
        <div className="flex items-center justify-between w-full">
            <div className="">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full flex justify-center">
                <UpdateProduct/>
            </div>
          </div>
    </Layout>
  )
}

export default ShopUpdateProduct