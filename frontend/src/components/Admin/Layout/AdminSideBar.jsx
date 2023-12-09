import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaShop } from "react-icons/fa6";
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa6"
import { backend_url, server } from "../../../server";
import {  LogOut, Settings,  } from "lucide-react";
import logo from '../../../Assets/images/logo1.png'
 import axios from "axios";
 import { FaProductHunt } from "react-icons/fa";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { MdDashboard, MdDiscount, MdRequestQuote } from "react-icons/md";
import { GiShoppingBag} from "react-icons/gi";
import { RiMoneyDollarBoxFill, RiRefund2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import {GrProductHunt} from 'react-icons/gr';
import { BsFillCalendarEventFill,BsChatLeftDotsFill } from "react-icons/bs";
import { toast } from "react-toastify";
export default function DashboardSidebar() {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [path, setPath] = useState(location.pathname);
  const { seller } = useSelector((state) => state.seller);
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 500);
  const {user} = useSelector((state) => state.user);

  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
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
 
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
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
              <Link to='/'
              
              >
                <img src={logo}  alt=""  className="h-[120px] ml-[47px] "/>
              </Link>
            </MenuItem>
          )}
          <hr />
        </Menu>
        <div className="flex items-center justify-center flex-col p-5 mt-5" >
          <Link to={`/profile`}>
            <img
              src={`${backend_url}${user?.avatar}`}
              alt=""
              className=" 800px:w-[60px] 800px:h-[60px] !ml-0 800px:ml-2 rounded-full object-cover"
              style={{ border: "2px solid green" }}
            />

        
          </Link>
        </div>
        <>
          <Menu className="mt-5"
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem className=" hover:text-rose-500" icon={<MdDashboard />}
              component={<Link to="/admin/dashboard" />}
              open={openSubMenu === "Dashboard"}
            >
              Dashboard
            </MenuItem>

            <MenuItem className=" hover:text-rose-500"  icon={<MdRequestQuote />}
              component={<Link to="/admin-shop-requests" />}
              open={openSubMenu === "Seller Requests"}
            >
              Seller Requests
            </MenuItem>


            <MenuItem className=" hover:text-rose-500"  icon={<FaShop />}
              component={<Link to="/admin-sellers" />}
              open={openSubMenu === "orders"}
            >
              All Shops
            </MenuItem>
            <MenuItem className=" hover:text-rose-500"  icon={<FaUser />}
              component={<Link to="/admin-users" />}
              open={openSubMenu === "orders"}
            >
              All Users
            </MenuItem>
             
            <MenuItem className=" hover:text-rose-500" 
              icon={<FaProductHunt />}
              component={<Link to="/admin-products" />}
              open={openSubMenu === "inbox"}
            >
              All Products
            </MenuItem>

            <MenuItem className=" hover:text-rose-500" 
              icon={<FaProductHunt />}
              component={<Link to="/admin-events" />}
              open={openSubMenu === "inbox"}
            >
              All Events
            </MenuItem>


            <MenuItem className=" hover:text-rose-500"  icon={<FaCartArrowDown />}
              component={<Link to="/admin-orders" />}
              open={openSubMenu === "orders"}
            >
              All Orders
            </MenuItem>
            <MenuItem className=" hover:text-rose-500" 
            icon={<RiMoneyDollarBoxFill />}
              component={<Link to="/admin-withdraw-request" />}
              open={openSubMenu === "money"}
            >
               Withdraw Request
            </MenuItem>
         
           
          </Menu>
        </>
        <div className="flex flex-col items-center  mt-[30px]">
          <Link to="/profile" className=" hover:text-rose-600">
            <Settings size={20}/>
          </Link>
          <div
            onClick={logoutHandler}
            className="cursor-pointer 370px:mt-[30px] hover:text-rose-600"
          >
            <LogOut size={20}/>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
