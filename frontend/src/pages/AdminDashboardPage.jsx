import React from "react";
import AdminHeader from "../components/Layout/AdminHeader.jsx";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar.jsx";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain.jsx";
import Layout from "../components/Layout/Layout.jsx";

const AdminDashboardPage = () => {
  return (
    <Layout title={'Admin - Dashboard'}>
     
     
        <div className="flex">
          <div className="">
            <AdminSideBar active={1} />
          </div>
        <div className="w-full justify-center flex">
        <AdminDashboardMain />
        </div>
        </div>
     
    </Layout>
  );
};

export default AdminDashboardPage;
