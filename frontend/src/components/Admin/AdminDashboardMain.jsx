import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllSellers } from "../../redux/actions/sellers";
import { GrMoney } from "react-icons/gr";
import { FaShop } from 'react-icons/fa6';
import LineChart from './../Shop/Charts/LineChart';
import BarChart from './../Shop/Charts/BarChart';

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
  const { sellers } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
  }, []);

   const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


   const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const row = [];
  adminOrders &&
  adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " RS",
        status: item?.status,
        createdAt: item?.createdAt.slice(0,10),
      });
    });

  return (
   <>
    {
      adminOrderLoading ? (
        <Loader /> 
      ) : (
        <div className="w-full p-4">
        <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
        <div className="block 800px:flex items-center justify-start gap-[50px]">
          <div className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2  gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-rose-500 inset-0 shadow-2xl  mb-4 800px:w-[20%] h-[150px] rounded-lg px-2 py-5"
          style={{ backgroundColor: "#fff", color: "black" }}>
            <div className="flex items-center">
              <GrMoney
                size={28}
                className="mr-2"
                
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Earning
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">RS. {adminBalance}</h5>
          </div>
  
          <div className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2  gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-rose-500 inset-0 shadow-2xl  mb-4 800px:w-[20%]  rounded-lg px-2 py-5"
          style={{ backgroundColor: "#fff", color: "black" }}>
            <div className="flex items-center">
              <FaShop size={28} className="mr-2" />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Sellers
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{sellers && sellers.length}</h5>
            <Link to="/admin-sellers">
              <h5 className="pt-4 pl-2 text-[#077f9c]">View Sellers</h5>
            </Link>
          </div>
  
          <div className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2  gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-rose-500 inset-0 shadow-2xl  mb-4 800px:w-[20%]  rounded-lg px-2 py-5"
          style={{ backgroundColor: "#fff", color: "black" }}>
            <div className="flex items-center">
              <MdShoppingCart
                size={28}
                className="mr-2"
              
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Orders
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{adminOrders && adminOrders.length}</h5>
            <Link to="/admin-orders">
              <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
            </Link>
          </div>
        </div>
  
        <br />

        <br />
      <h3 className="text-[22px] font-bold font-Poppins  mb-5 text-gray-700 p-2">
        Sales Performance
      </h3>
      <div className="w-full min-h-[200px] flex 800px:flex-row items-center flex-col justify-center gap-10 bg-white rounded mb-5">
        <div>
        <LineChart orders={adminOrders} />
        </div>

        <div>
          <BarChart orders={adminOrders}/>
        </div>
      </div>
        <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={4}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
      )
    }
   </>
  );
};

export default AdminDashboardMain;
