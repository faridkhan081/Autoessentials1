import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import CreateProduct from '../../components/Shop/CreateProduct.jsx'
import Layout from '../../components/Layout/Layout.jsx'
function ShopCreateProduct() {
  return (
    <Layout title={'Create Products'}>
        <DashboardHeader/>
        <div className="flex items-center justify-between w-full">
          <div className='w-[80px] 800px:w-[330px]'>
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