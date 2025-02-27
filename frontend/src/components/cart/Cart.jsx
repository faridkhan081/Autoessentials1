import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import { backend_url } from "../../server";

import { ShoppingBag } from 'lucide-react';
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import emptyAnimation from "../../Assests/animations/empty.json";
import Lottie from 'react-lottie';

function Cart({setOpenCart}) { 
  

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.discountPrice || item.originalPrice) * item.qty,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: emptyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

    return (
      <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
          {cart && cart.length === 0 ? (
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
                 <RxCross1 
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                  />
              </div>
              <div className='flex flex-col items-center justify-center'>
              <Lottie options={defaultOptions} width={300} height={300} />
              <h5 >Your Cart is empty!</h5>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className="flex w-full justify-end pt-5 pr-5">
                  <RxCross1
                    size={25}
                    className="cursor-pointer"
                    onClick={() => setOpenCart(false)}
                  />
                </div>
                {/* Item length */}
                <div className={`${styles.noramlFlex} p-4`}>
                  <ShoppingBag size={25} />
                  <h5 className="pl-2 text-[20px] font-[500]">{cart && cart.length} items</h5>
                </div>
  
                {/* cart Single Items */}
                <br />
                <div className="w-full border-t">
                  {cart &&
                    cart.map((i, index) => (
                      <CartSingle
                        key={index}
                        data={i}
                        quantityChangeHandler={quantityChangeHandler}
                        removeFromCartHandler={removeFromCartHandler}
                      />
                    ))}
                </div>
              </div>
  
              <div className="px-5 mt-3 mb-3">
                {/* checkout buttons */}
                <Link to="/checkout">
                  <div
                    className={`flex items-center justify-center shrink-0 rounded-md border border-black bg-black px-[25px] py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:test-black`}
                  >
                    <h1 className="text-[15px] font-[600] ">
                      Checkout Now (RS. {totalPrice})
                    </h1>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
    const [value, setValue] = useState(data.qty);
    const totalPrice = (data.discountPrice || data.originalPrice) * value;
  
    const increment = (data) => {
      if (data.stock < value) {
        toast.error("Product stock limited!");
      } else {
        setValue(value + 1);
        const updateCartData = { ...data, qty: value + 1 };
        quantityChangeHandler(updateCartData);
      }
    };
  
    const decrement = (data) => {
      setValue(value === 1 ? 1 : value - 1);
      const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
      quantityChangeHandler(updateCartData);
    };
  
    return (
      <div className="border-b p-4">
        <div className="w-full flex items-center justify-between">
          <div>
            <div
              className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => increment(data)}
            >
              <HiPlus size={18} color="#fff" />
            </div>
            <span className="pl-[10px]">{data.qty}</span>
            <div
              className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
              onClick={() => decrement(data)}
            >
              <HiOutlineMinus size={16} color="#7d879c" />
            </div>
          </div>
          <img
            src={`${backend_url}${data?.images[0]}`}
            alt=""
            className="w-[100px] h-min ml-2 mr-2 rounded-[5px]"
          />
          <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className="font-[400] text-[15px] text-[#00000082]">
              RS.{data.discountPrice || data.originalPrice} * {value}
            </h4>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
              RS.{totalPrice}
            </h4>
          </div>

          <RxCross1
            className="cursor-pointer "
            size={17}
            onClick={() => removeFromCartHandler(data)}
          />
        </div>
      </div>
    );
  };
  
  export default Cart;
  