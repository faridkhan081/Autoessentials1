import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllProducts from "../components/Admin/AllProducts.jsx";
import Layout from '../components/Layout/Layout.jsx';

const AdminDashboardProducts = () => {
  return (
    <Layout title={'Admin - All Products'}>
    
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="">
          <AdminSideBar active={5} />
        </div>
        <AllProducts />
      </div>
    </div>
  </Layout>
  )
}

export default AdminDashboardProducts