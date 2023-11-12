import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import CreateProduct from '../../components/Shop/CreateProduct.jsx'
import Layout from '../../components/Layout/Layout.jsx'
function ShopCreateProduct() {
  return (
    <Layout title={'Create Products'}>
        
        <div className="flex items-center justify-between w-full">
          <div className=''>
            <DashboardSideBar active={4}/>
          </div>
          <div className="w-full flex justify-center">
            <CreateProduct/>
          </div>
        </div>
    </Layout>
  )
}

export default ShopCreateProduct