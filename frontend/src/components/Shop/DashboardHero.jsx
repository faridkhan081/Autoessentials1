import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdBorderClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import LineChart from "./Charts/LineChart";
import BarChart from "./Charts/BarChart";

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events);
  const [deliveredOrder, setDeliveredOrder] = useState(null);
  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
    const orderData =
      orders && orders.filter((item) => item.status === "Delivered");
    setDeliveredOrder(orderData);
  }, [dispatch]);

  const totalEarningWithoutTax = deliveredOrder
    ? deliveredOrder.reduce((acc, item) => acc + item.totalPrice, 0)
    : 0;
  const servingCharge = totalEarningWithoutTax * 0.1 || 0;
  const availableBalance =
    totalEarningWithoutTax - servingCharge.toFixed(2) || 0;
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
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        total: "RS. " + item.totalPrice,
        status: item.status,
      });
    });

  if (seller.status !== "Approved") {
    return (
      <div className="w-full p-8">
        <h3 className="text-[22px] font-Poppins pb-2">
          Account Under Observation
        </h3>
        <p>
          Your account is currently under observation. Access to the dashboard
          is restricted until it's approved by the admin.
        </p>
      </div>
    );
  }
  return (
    <div className=" ml-0 mt-0 800px:mt-[30px] ">
      <h3 className="text-[22px] font-Poppins mb-5 bg-black text-white p-2">
        Performance Snapshot
      </h3>
      <div className=" block 800px:flex items-center justify-between gap-[50px]">
        <div
          className="w-full mb-4 800px:w-[30%] min-h-[20vh] shadow rounded px-2 py-5"
          style={{ backgroundColor: "#39BE9C", color: "white" }}
        >
          <div className="flex items-center">
            <AiOutlineMoneyCollect size={30} className="mr-2" fill="#fff" />
            <h3
              className={`${styles.productTitle}!text-white !text-[18px] leading-5 !font-[400] `}
            >
              Account Balance{" "}
              <span className="text-[13px]">(with 10% service charge)</span>
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            RS. {availableBalance}
          </h5>
          <Link to="/dashboard-withdraw-money">
            <h5 className="pt-4 pl-2 hover:underline ">Withdraw Money</h5>
          </Link>
        </div>

        <div
          className="w-full mb-4 800px:w-[30%] min-h-[20vh] shadow rounded px-2 py-5"
          style={{ backgroundColor: "#4285F4", color: "white" }}
        >
          <div className="flex items-center">
            <MdBorderClear size={30} className="mr-2" fill="#fff" />
            <h3
              className={`${styles.productTitle} !text-white !text-[18px] leading-5 !font-[400] `}
            >
              All Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {orders && orders.length}
          </h5>
          <Link to="/dashboard-orders">
            <h5 className="pt-4 pl-2 hover:underline">View Orders</h5>
          </Link>
        </div>

        <div
          className="w-full mb-4 800px:w-[30%] min-h-[20vh]  shadow rounded px-2 py-5"
          style={{ backgroundColor: "#FF5252", color: "white" }}
        >
          <div className="flex items-center">
            <AiOutlineMoneyCollect size={30} className="mr-2" fill="#fff" />
            <h3
              className={`${styles.productTitle} !text-[18px] !text-white leading-5 !font-[400]`}
            >
              All Products
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {products && products.length}
          </h5>
          <Link to="/dashboard-products">
            <h5 className="pt-4 pl-2 hover:underline">View Products</h5>
          </Link>
        </div>

        <div
          className="w-full mb-4 800px:w-[30%] min-h-[20vh]  shadow rounded px-2 py-5"
          style={{ backgroundColor: "#374151", color: "white" }}
        >
          <div className="flex items-center">
            <AiOutlineMoneyCollect size={30} className="mr-2" fill="#fff" />
            <h3
              className={`${styles.productTitle} !text-[18px] !text-white leading-5 !font-[400]`}
            >
              Running Events
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {events && events.length}
          </h5>
          <Link to="/dashboard-events">
            <h5 className="pt-4 pl-2 hover:underline">View Events</h5>
          </Link>
        </div>
      </div>
      <br />
      <h3 className="text-[22px] font-Poppins  mb-5 bg-black text-white p-2">
        Sales Performance
      </h3>
      <div className="w-full min-h-[200px] flex 800px:flex-row items-center flex-col justify-center gap-10 bg-white rounded mb-5">
        <div>
          <LineChart />
        </div>

        <div>
          <BarChart />
        </div>
      </div>

      <h3 className="text-[22px] font-Poppins  mb-5 bg-black text-white p-2">
        Latest Orders
      </h3>
      <div className="w-full min-h-[45vh] bg-white rounded">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </div>
  );
};

export default DashboardHero;
