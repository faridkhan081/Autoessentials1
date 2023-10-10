import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails.jsx'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'
import SuggestedProduct from '../components/Products/SuggestedProduct.jsx'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
function ProductDetailsPage() {
  const {allProducts} = useSelector((state) => state.products)
    const {id} = useParams();
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
  
    


    useEffect(() =>{

      setTimeout(()=>{
        const data = allProducts && allProducts.find((i) => i._id === id)
        setData(data)
       setIsLoading(true)
      },500)
      window.scrollTo(0,0);
   
        
    },[data,allProducts,id])
  return (
    <Layout title={"Product Details..."}>
        <Header/>
        
        <ProductDetails data={data} isLoading={isLoading} />
        {
          data && <SuggestedProduct data={data}/> 
        }

 
      
    
        <Footer/>
    </Layout>
  )
}

export default ProductDetailsPage