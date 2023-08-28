import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails.jsx'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'
import SuggestedProduct from '../components/Products/SuggestedProduct.jsx'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProductDetailsPage() {
    const {name} = useParams();
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const productName = name.replace(/-/g," ");
    


    useEffect(() =>{

      setTimeout(()=>{
        const data = productData.find((i) => i.name === productName)
        setData(data)
       setIsLoading(true)
      },1000)
      window.scrollTo(0,0);
   
        
    },[productName])
  return (
    <div>
        <Header/>
        
        <ProductDetails data={data } isLoading={isLoading} />
        {
          data && <SuggestedProduct data={data}/> 
        }

 
      
    
        <Footer/>
    </div>
  )
}

export default ProductDetailsPage