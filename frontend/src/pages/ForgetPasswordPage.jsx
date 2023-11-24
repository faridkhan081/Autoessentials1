import React, { useEffect } from 'react'
import ForgetPassword from '../components/Reset/ForgetPassword.jsx'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';



const ForgetPasswordPage = () => {
 
 
  return (
    <Layout title={"Forget Password"}><ForgetPassword/></Layout>
  )
}

export default ForgetPasswordPage