import React from "react";

import { RxDashboard } from "react-icons/rx";

import {
  Banknote,
  Calendar,
  Gift,
  LayoutDashboard,
  Receipt,
  Settings,
} from "lucide-react";
import { PackagePlus } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Package } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardSideBar = ({ active }) => {
  return (
    <div className=" w-full h-[90vh] bg-white shadow-sm  sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/seller-dashboard" className="w-full flex items-center">
          <LayoutDashboard
            size={30}
            color={`${active === 1 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <ShoppingBag color={`${active === 2 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <Package color={`${active === 3 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <PackagePlus color={`${active === 4 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <Calendar size={24} color={`${active === 5 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <CalendarPlus color={`${active === 6 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <Banknote color={`${active === 7 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <MessagesSquare color={`${active === 8 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <Gift color={`${active === 9 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <Receipt color={`${active === 10 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>

      <div className="ml-2 w-full flex items-center p-4">
        <Link to="/settings" className="w-full flex items-center">
          <Settings color={`${active === 11 ? "crimson" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;