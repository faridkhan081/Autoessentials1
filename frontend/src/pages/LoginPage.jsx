import React, { useEffect } from 'react'
import Login from '../components/Login/Login.jsx'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';



const LoginPage = () => {
  const { isAuthenticated} = useSelector((state) => state.user);
 const navigate = useNavigate()
  useEffect(()=>{
if(isAuthenticated === true){
  navigate('/')
}
  },[])
  return (
    <Layout title={"User - Login"}><Login/></Layout>
  )
}

export default LoginPage