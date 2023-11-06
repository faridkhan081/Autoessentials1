import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import Footer from '../../components/Layout/Footer'
import OrderDetails from "../../components/Shop/OrderDetails.jsx";
import Layout from '../../components/Layout/Layout.jsx';

const ShopOrderDetails = () => {
  return (
    <Layout title={'Order Details'}>
         <DashboardHeader />
         <OrderDetails />
          <Footer />
    </Layout>
  )
}

export default ShopOrderDetails