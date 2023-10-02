import React, { useEffect } from 'react'
import ShopCreate from '../components/Shop/ShopCreate'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'


function ShopCreatePage() {
  const navigate = useNavigate()

  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [])
  
  return (
    <Layout title={"Shop Sign-up"}><ShopCreate/></Layout>
  )
}

export default ShopCreatePage
