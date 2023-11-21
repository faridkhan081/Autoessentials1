import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Cart from "../cart/Cart";
import { categoriesData } from "../../static/data";
import { AiOutlineClose } from "react-icons/ai";

import { Heart, Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Wishlist from "../wishlist/Wishlist.jsx";
import { HiMenuAlt2 } from "react-icons/hi";

import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";
import { RxAvatar } from "react-icons/rx";
import logo from "../../Assets/images/logo1.png";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [openWishlist, setOpenWhishlist] = useState(false);
  const { isSeller, seller } = useSelector((state) => state.seller);
  const { allProducts } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // console.log(user)
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const { id } = useParams();
  const handleSearchChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  useEffect(() => {
    if (!searchTerm) {
      setSearchData([]);
      // setSearchTerm(""); // Clear search term
    }
  }, [searchTerm]);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);

        navigate("/");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between ">
          <div>
            <Link to="/">
              <img src={logo} alt="" className="h-[150px] ml-1" />
            </Link>
          </div>
          {/* search box */}

          <div className="w-[30%] relative">
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
                    return (
                      <Link to={`/product/${i._id}`}>
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
          {isSeller ? (
            <Link to="/seller-dashboard">
              <div className={`${styles.button} hover:bg-gray-800  primary-dark !rounded-md`}>
                <h1 className="text-[#fff] flex items-center">
                  Dashboard
                  <IoIosArrowForward className="ml-1" />
                </h1>
              </div>
            </Link>
          ) : (
            <>
              <Link to="/shop-login">
                <div className={`${styles.button} primary-dark !rounded-md`}>
                  <h1 className="text-[#fff] flex items-center">
                    Seller Zone
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-gray-800 h-[70px]`}
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
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[5px]"
                onClick={() => setOpenCart(true)}
              >
                <ShoppingCart size={25} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <>
                    <div className="group relative text-[16px] ml-5">
                      <button className=" text-white py-2 px-2 rounded inline-flex items-center group">
                        <span className="mr-1">
                          <img
                            src={`${backend_url}${user.avatar}`}
                            className="w-[35px] h-[35px] rounded-full"
                            alt=""
                          />
                        </span>
                      </button>

                      {/* menu list */}
                      <ul className="rounded absolute hidden text-white pt-[10px] group-hover:block w-[133px] z-10">
                        <Link to="/profile">
                          <li className="bg-gray-800 hover:text-white hover:bg-rose-600 py-4 px-4 cursor-pointer">
                            Dashboard
                          </li>
                        </Link>
                        <hr class="h-px bg-white border-0 "></hr>
                        <li
                          className="bg-gray-800  hover:text-white hover:bg-rose-600 py-4 px-4 cursor-pointer"
                          onClick={logoutHandler}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="group relative text-[17px] ml-5">
                      <button className=" text-white py-2 px-2 rounded inline-flex items-center group">
                        <span className="mr-1">
                          <RxAvatar size={30} />
                        </span>
                      </button>

                      {/* menu list */}
                      <ul className="rounded absolute hidden text-white pt-[13px] group-hover:block w-[128px] z-10">
                        <Link to="/login">
                          <li className="bg-gray-800 hover:text-white hover:bg-rose-600 py-4 px-4 cursor-pointer">
                            Login
                          </li>
                        </Link>
                        <hr class="h-px bg-white border-0 "></hr>

                        <Link to="/sign-up">
                          <li className="bg-gray-800 hover:text-white hover:bg-rose-600 py-4 px-4 cursor-pointer">
                            Register
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </>
                )}
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

      {/* mobile Responsie header */}

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-gray-800 z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <HiMenuAlt2
              size={28}
              className="ml-4 mt-1 cursor-pointer"
              onClick={() => setOpen(true)}
              color="white"
            />
          </div>

          <div className="w-[60%] mt-[12px] ml-3 ">
            <input
              type="search"
              placeholder="Search Product..."
              className="h-[35px] w-full  bg-white border-[#fff] !rounded focus:border-rose-200 focus:ring-0"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 w-[60%]">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
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

          <div
            className="relative cursor-pointer mt-3"
            onClick={() => setOpenCart(true)}
          >
            <ShoppingCart color="white" size={28} />
            <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              {cart && cart.length}
            </span>
          </div>

          {openCart && <Cart setOpenCart={setOpenCart} />}

          <div className="relative mr-4 mt-3"
           onClick={() => setOpenWhishlist(true)}>
            <Heart color="white" size={28} />
            <span className="absolute right-0 top-0 rounded-full primary-dark  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              {wishlist && wishlist.length}
            </span>
          </div>
          {openWishlist && <Wishlist setOpenWishlist={setOpenWhishlist} />}
        </div>

        {/* header sidebar popup */}
        {open && (
          <div
            className={` fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[50%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="flex justify-between">
                <div>
                  <AiOutlineClose
                    size={28}
                    onClick={() => setOpen(false)}
                    className="mt-[37px] ml-4 cursor-pointer"
                  />
                </div>

                <div>
                  <Link to="/">
                    <img src={logo} className="h-[100px] mr-4" alt="" />
                  </Link>
                </div>
              </div>

              {/* nav-bar */}

              <div
                className={`w-[120px] p-2 mb-5 ml-4 !rounded-[4px] primary-dark`}
              >
                 <Link to="/shop-login">
                  <h1 className="text-[#fff] flex items-center">
                    Seller Zone
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <Navbar active={activeHeading} />
              <br />

              <div className="flex w-full justify-center mt-5">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="w-[100px] h-[100px] rounded-full
      border-[3px] border-[#0eae88]"
                      alt=""
                    />
                  </Link>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7] "
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
