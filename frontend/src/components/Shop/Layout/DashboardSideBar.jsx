import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { MdDashboard, MdDiscount } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { RiMoneyDollarBoxFill, RiRefund2Fill } from "react-icons/ri";
import { GrProductHunt } from "react-icons/gr";
import { BsFillCalendarEventFill, BsChatLeftDotsFill } from "react-icons/bs";
import logo from '../../../Assets/images/logo1.png';
import axios from "axios";
import { backend_url, server } from "../../../server";

const DashboardSidebar = () => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [path, setPath] = useState(location.pathname);
  const { seller } = useSelector((state) => state.seller);

  const [collapsed, setCollapsed] = useState(window.innerWidth <= 500);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const routeMenuKeys = {
    "/seller-dashboard": "Dashboard",
    "/dashboard-products": "products",
    "/dashboard-create-product": "products",
    "/dashboard-events": "events",
    "/dashboard-create-events": "events",
    "/task-category": "task",
    "/tasks": "task",
  };

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });

    window.location.reload();
  };

  useEffect(() => {
    const currentRoute = path;
    const submenuKey = routeMenuKeys[currentRoute] || null;
    setOpenSubMenu(submenuKey);
  }, [path]);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar
        rootStyles={{
          width: "100%",
          boxSizing: "border-box",
        }}
        className={`app ${toggled ? "toggled" : ""} w-full`}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        style={{ height: "100vh", background: "white" }}
      >
        <Menu>
          {collapsed ? (
            <MenuItem
              icon={<FiChevronsRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FiChevronsLeft />}
              onClick={handleCollapsedChange}
            >
              <Link to="/">
                <img src={logo} alt="" className="h-[120px] ml-[47px] " />
              </Link>
            </MenuItem>
          )}
          <hr />
        </Menu>
        <div className="flex items-center justify-center flex-col p-5">
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt=""
              className=" 800px:w-[60px] 800px:h-[60px] !ml-0 800px:ml-2 rounded-full object-cover"
              style={{ border: "2px solid green" }}
            />
          </Link>
        </div>
        <>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem
              icon={<MdDashboard />}
              component={<Link to="/seller-dashboard" />}
              open={openSubMenu === "Dashboard"}
            >
              Dashboard
            </MenuItem>

            <SubMenu icon={<GrProductHunt />} label={`Manage Products`}>
              <MenuItem
                component={<Link to="/dashboard-products" />}
                open={openSubMenu === "products"}
              >
                All Products
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard-create-product" />}
                open={openSubMenu === "products"}
              >
                Create Product
              </MenuItem>
            </SubMenu>

            <SubMenu icon={<BsFillCalendarEventFill size={15} />} label={`Manage Events`}>
              <MenuItem
                component={<Link to="/dashboard-events" />}
                open={openSubMenu === "events"}
              >
                All Events
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard-create-event" />}
                open={openSubMenu === "products"}
              >
                Create Event
              </MenuItem>
            </SubMenu>

            <MenuItem
              icon={<GiShoppingBag />}
              component={<Link to="/dashboard-orders" />}
              open={openSubMenu === "orders"}
            >
              All Orders
            </MenuItem>
            <MenuItem
              icon={<RiMoneyDollarBoxFill />}
              component={<Link to="/dashboard-withdraw-money" />}
              open={openSubMenu === "money"}
            >
              Withdraw Money
            </MenuItem>
            <MenuItem
              icon={<BsChatLeftDotsFill />}
              component={<Link to="/dashboard-messages" />}
              open={openSubMenu === "inbox"}
            >
              Inbox
            </MenuItem>
            <MenuItem
              icon={<MdDiscount />}
              component={<Link to="/dashboard-coupouns" />}
              open={openSubMenu === "coupouns"}
            >
              Discount Codes
            </MenuItem>
            <MenuItem
              icon={<RiRefund2Fill fill="#000" />}
              component={<Link to="/dashboard-refunds" />}
              open={openSubMenu === "refunds"}
            >
              Refunds
            </MenuItem>
          </Menu>
        </>
        <div className="flex mt-[30px] items-end justify-evenly">
          <Link to="/settings" className=" hover:text-rose-600">
            <Settings />
          </Link>
          <div
            onClick={logoutHandler}
            className="cursor-pointer hover:text-rose-600"
          >
            <LogOut />
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;
