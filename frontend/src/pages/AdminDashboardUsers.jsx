import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader.jsx'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar.jsx'
import AllUsers from "../components/Admin/AllUsers.jsx";
import Layout from '../components/Layout/Layout.jsx';

const AdminDashboardUsers = () => {
  return (
    <Layout title={'Admin - All Users'}>
    
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="">
          <AdminSideBar active={4} />
        </div>
        <AllUsers />
      </div>
    </div>
  </Layout>
  )
}

export default AdminDashboardUsers