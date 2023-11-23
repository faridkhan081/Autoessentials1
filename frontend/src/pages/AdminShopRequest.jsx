import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminShopRequestComponent from "../components/Admin/AdminShopRequestComponent.jsx";

import Layout from './../components/Layout/Layout';



const AdminShopRequest = () => {
  return (
   



<Layout title={'Admin - Shop Requests'}>
   
    
   <div className="flex ">
     <div >
       <AdminSideBar active={2} />
     </div>
    <div className='w-full justify-center flex'>
    <AdminShopRequestComponent/>
    </div>
   </div>

</Layout>
  );
};

export default AdminShopRequest;
