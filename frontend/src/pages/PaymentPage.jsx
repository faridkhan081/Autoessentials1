import React, { useEffect } from 'react'
import CheckoutSteps from '../components/Checkout/CheckoutSteps.jsx'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import Payment from "../components/Payment/Payment.jsx";
import Layout from '../components/Layout/Layout.jsx';

const PaymentPage = () => {
  useEffect(() => {
    console.log("PaymentPage rendered");
    // Additional code...

    window.scrollTo(0,0)
  }, []);

  // Rest of the component...

  return (


    <Layout title={"Payment"}>
    <div className='w-full min-h-screen '>
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