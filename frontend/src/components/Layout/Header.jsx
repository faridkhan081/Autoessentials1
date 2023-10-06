import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";

import {  categoriesData } from "../../static/data";
import {
  
  AiOutlineClose,

} from "react-icons/ai";

import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist.jsx";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [openWishlist, setOpenWhishlist] = useState(false);
  const { isSeller,seller } = useSelector((state) => state.seller);
  const { allProducts } = useSelector((state) => state.products);
  const navigate = useNavigate()
  // console.log(user)
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSearchChange = (e) => {
    const term = e.target.value;
     setSearchTerm(term)

    const filteredProducts = allProducts && allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
      setSearchData(filteredProducts);
  };

  
  useEffect(() => {
     


    if (!searchTerm) {
     setSearchData([])
     setSearchTerm("") // Clear search term
    }


  }, [searchTerm]);


  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const logoutHandler = () =>{
    axios.get(`${server}/user/logout`,{withCredentials: true}).then((res) => {
      toast.success(res.data.message);
     
      navigate('/')
     
    }).catch((error) =>{
      console.log(error.response.data.message);
    })
  }



  return (
    <>
  
      <div className={`${styles.section}`}>
      
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between ">
          <div>
            <Link to="/">
              <div style={{ display: "flex" }}>
                <h5
                  className="text-xl primary-dark !rounded-sm "
                  style={{
                    padding: "5px",
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
                  style={{ color: "#000", marginTop: "13px"}}
                >
                  Essentials
                </h3>
              </div>
            </Link>
          </div>
          {/* search box */}
          
          <div className="w-[50%] relative">
        
            <input
              type="search"
              placeholder="Explore..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#fff] rounded-md focus:border-rose-200 focus:ring-0"
             
            />



         
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${backend_url}/${i.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          {
            isSeller ? (
             
              <div className={`${styles.button} primary-dark !rounded-md`}>
              <Link to="/seller-dashboard">
              <h1 className="text-[#fff] flex items-center">
                Shop Dashboard
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
            </div>
             
            
            ): (
              <>
              <div className={`${styles.button} primary-dark !rounded-md`}>
            <Link to="/shop-login">
              <h1 className="text-[#fff] flex items-center">
                Seller Zone
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
              </>
            )
          }
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#000000cd] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* nav-bar */}

          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWhishlist(true)}
              >
                <Heart size={25} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <ShoppingCart
                  size={25}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  1
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
        

                {
                  isAuthenticated ? (
                    
                <div className="dropdown ">
        <div
          className="text-white px-4 py-2.5 text-center inline-flex items-center btn-dropdown"
          onClick={handleDropDown}
        >
       
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                 
        </div>

        <div
          id="dropdown"
          className={`absolute my-2 z-10 right-5 w-[150px] bg-white rounded  divide-y divide-gray-100 shadow ${
            isOpen ? "block" : "hidden"
          }`} 
        >
          <ul className=" btn-dropdowned z-10 w-[150px]  bg-white rounded divide-y divide-gray-100 shadow ">
            <li>
              <Link to="/profile" className=" block py-2 px-4 hover:bg-gray-100 hover:rounded ">
              Profile
              </Link>
             
              <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div onClick={logoutHandler} className=" block py-2 px-4 hover:bg-gray-100 hover:rounded ">
               Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
                  ):(
                <div className="dropdown ">
        <div
          className="text-white px-4 py-2.5 text-center inline-flex items-center btn-dropdown"
          onClick={handleDropDown}
        >
          <RxAvatar size={35}/>
  
        </div>

        <div
          id="dropdown"
          className={`absolute my-2 z-10 right-5 w-[150px] bg-white rounded  divide-y divide-gray-100 shadow ${
            isOpen ? "block" : "hidden"
          }`} 
        >
          <ul className=" btn-dropdowned z-10 w-[150px]  bg-white rounded divide-y divide-gray-100 shadow ">
            <li>
              <Link to="/login" className=" block py-2 px-4 hover:bg-gray-100 hover:rounded ">
               Login
              </Link>
              <Link to="/sign-up" className=" block py-2 px-4 hover:bg-gray-100 hover:rounded ">
                Register
              </Link>
             
              <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
           
            </li>
          </ul>
        </div>
      </div>)
                }
                
              </div>
            </div>
            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* whishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWhishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}

      <div className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#000] z-50 top-0 left-0 shadow-sm 800px:hidden`}>
        <div className="w-full flex items-center justify-between">
          <div>
            <HiMenuAlt2
              size={28}
              className="ml-4 cursor-pointer"
              onClick={() => setOpen(true)}
              color="white"
            />
          </div>

          <div>
            <Link to="/">
              <div style={{ display: "flex" }}>
                <h5
                  className="text-xl primary-dark"
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
                  style={{ color: "#fff", marginTop: "16px" }}
                >
                  Essentails
                </h3>
              </div>
            </Link>
          </div>

          <div>
            <div className="relative mr-[20px] cursor-pointer"  onClick={() => setOpenCart(true)}>
              <ShoppingCart color="white" size={28} />
              <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                1
              </span>
            </div>
          </div>
        </div>

        {/* header sidebar popup */}
        {open && (
          <div className={` fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}>
            <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full flex justify-between pr-3 ">
                <div>
                  <div className="relative mr-[15px]">
                    <Heart size={25} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      0
                    </span>
                  </div>
                </div>

                <AiOutlineClose
                  size={28}
                  onClick={()=> setOpen(false)}
                  className="mt-5 ml-4 cursor-pointer"
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px] relative ">
                <input type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 bg-red-100 border-[#fff] rounded-md focus:border-rose-200 focus:ring-0"
                  value={searchTerm}
                  onChange={handleSearchChange}
                     

                />
                   {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;

                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
              </div>

              {/* nav-bar */}

              <Navbar active={activeHeading}/>
              <div className={`${styles.button} ml-4 !rounded-[4px] primary-dark`}>
            <Link to="/shop-login">
              <h1 className="text-[#fff] flex items-center">
                Seller Zone
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>

          
          </div>

          <br />
         

  <div className="flex w-full justify-center">          
{
  isAuthenticated ? (
  
  <Link to='/profile'>
  <img src={`${backend_url}${user.avatar}`}
      className="w-[100px] h-[100px] rounded-full
      border-[3px] border-[#0eae88]" alt="" />
 
  </Link>
  ):(
    <div>
     
         <Link to="/login" className="text-[18px] pr-[10px] text-[#000000b7] ">
Login /
</Link>
<Link to='/sign-up' className="text-[18px] pr-[10px] text-[#000000b7]">Sign up</Link>
    </div>
  )
}



</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
