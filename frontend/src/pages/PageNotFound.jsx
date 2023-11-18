import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import error from '../Assets/images/error.png'
function PageNotFound() {
  return (
    <Layout title={"Page Not Found | 404"}>
    <div className="grid h-screen px-4 bg-white place-content-center" style={{ backgroundImage: `url(${error})`,backgroundPosition:'center' }}>
    <div className="text-center">
    
  
     
  
      <Link
        to="/"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-rose-600 rounded hover:bg-rose-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>
  </Layout>
  )
}

export default PageNotFound