import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllEvents from '../components/Admin/AllEvents.jsx';
import Layout from './../components/Layout/Layout';
 
const AdminDashboardEvents = () => {
  return (
    <Layout title={'Admin - All Events'}>
   
    <div className="flex">
     
        <div >
          <AdminSideBar active={6} />
        </div>
        <div className='w-full justify-center flex'>
        <AllEvents />
      </div>
    </div>
  </Layout>
  )
}

export default AdminDashboardEvents