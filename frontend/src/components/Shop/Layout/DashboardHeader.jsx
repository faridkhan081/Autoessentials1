import React from 'react'
import { Gift } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { backend_url } from "../../../server";

import { ShoppingBag } from 'lucide-react';
import { Package } from 'lucide-react';

function DashboardHeader() {

  const {seller} = useSelector((state) => state.seller);
    
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
 <div>
            <Link to="/seller-dashboard">
              <div style={{ display: "flex" }}>
                <h5
                  className="text-xl bg-rose-600"
                  style={{
                    padding: "8px",
                    margin: "8px",
                    color: "white",
                   
                    fontWeight: "lighter",
                  }}
                >
                  {" "}
                  Auto{" "}
                </h5>
                <h3
                  className="text-xl"
                  style={{ color: "#000", marginTop: "16px"}}
                >
                  Essentails
                </h3>
              </div>
            </Link>
          </div>
        <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <Gift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <Calendar
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <ShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <Package color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <MessagesSquare
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
              title="Site has unsaved changes" 
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader