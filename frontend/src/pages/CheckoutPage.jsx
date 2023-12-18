import React, { useEffect } from 'react'
import Header from '../components/Layout/Header'
import Checkout from "../components/Checkout/Checkout.jsx";
import CheckoutSteps from "../components/Checkout/CheckoutSteps.jsx";

import Layout from '../components/Layout/Layout';
import Footer from '../components/Layout/Footer';
function CheckoutPage() {

  useEffect(() => {
    console.log("checkout rendered");
    // Additional code...
  }, []);
  return (
    <Layout title={"Checkout"}>
        <Header/>
        <br />
        <br />
        <CheckoutSteps active={1} />
        <Checkout/>
        <br />
        <br />
        <Footer />
    </Layout>
  )
}

export default CheckoutPage;