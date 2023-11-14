import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllSellers from "../components/Admin/AllSellers.jsx";
import Layout from '../components/Layout/Layout.jsx';

const AdminDashboardSellers = () => {
  return (
    <Layout title={'Admin - All Sellers'}>
   
    
      <div className="flex ">
        <div >
          <AdminSideBar active={3} />
        </div>
       <div className='w-full justify-center flex'>
       <AllSellers />
       </div>
      </div>
   
  </Layout>
  )
}

export default AdminDashboardSellers