import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import UserOrderDetails from "../components/UserOrderDetails.jsx";
import Layout from '../components/Layout/Layout.jsx';

const OrderDetailsPage = () => {
  return (
    <Layout title={'Order Details'}>
        <Header />
        <UserOrderDetails />
        <Footer />
    </Layout>
  )
}

export default OrderDetailsPage