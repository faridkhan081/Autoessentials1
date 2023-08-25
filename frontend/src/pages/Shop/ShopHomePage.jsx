import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ShopHomePage = () => {
  return (
    <div>
            <div
        style={{
          display: "flex",
          fontSize: "30px",
          padding: "10px",
          // border: "1px solid red",
        }}
      >
        <Link to="/" className="text-blue-600 return-home-link">
          <AiOutlineHome />
        </Link>
        <div
          style={{ width: "95%", display: "flex", justifyContent: "center" }}
        >
      
        </div>
      </div>
    </div>
  )
}

export default ShopHomePage