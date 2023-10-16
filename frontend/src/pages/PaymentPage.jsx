import React from 'react'
import CheckoutSteps from '../components/Checkout/CheckoutSteps.jsx'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import Payment from "../components/Payment/Payment.jsx";
import Layout from '../components/Layout/Layout.jsx';

const PaymentPage = () => {
  return (

    <Layout title={"Payment"}>
    <div className='w-full min-h-screen bg-[#f6f9fc]'>
       <Header />
       <br />
       <br />
       <CheckoutSteps active={2} />
       <Payment />
       <br />
       <br />
       <Footer />
    </div>
    </Layout>
  )
}

export default PaymentPage