import React from "react";
import { backend_url } from "../../server";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Check if data is defined before accessing properties
  if (!data || !data.images) {
    return (
      <div className="flex justify-center items-center w-full h-[270px]">
        No event available
      </div>
    );
  }
  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice && discountedPrice) {
      const discount =
        ((originalPrice - discountedPrice) / originalPrice) * 100;
      return `${Math.round(discount)}% OFF`;
    }
    return "No OFF"; // If there's no discount
  };
  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={`${backend_url}${data.images[0]}`} alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data && data._id ? data._id : ''}?isEvent=true`}>
            <div className="inline-block shrink-0 rounded-md border border-rose-500 bg-rose-500 px-8 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-rose-500 focus:outline-none focus:ring active:test-rose-500">See Details</div>
          </Link>

          <div
                  className="ml-5 cursor-pointer"
                  onClick={() => addToCartHandler(data)}
                >
                  {cart && cart.find((i) => i._id === data._id) ? (
                    <>
                      <span
                        className={`${styles.button} !bg-[#d54343] text-white !rounded !h-11 flex items-center`}
                      >
                        Remove from cart
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex items-center justify-center shrink-0 rounded-md border border-black bg-black px-[25px] py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:test-black">
                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                      </span>
                    </>
                  )}
                </div>

        </div>
      </div>
      
    </div>

    // <div className={`${styles.section} mt-5`}>
    //   <div className="h-[500px] grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
    //     <div className="w-full h-[370px] bg-white rounded-lg p-3 relative shadow-sm hover:shadow-lg hover:shadow-gray-200  hover:border">
    //       <Link to={`/product/${data && data._id ? data._id : ''}?isEvent=true`}>
    //         <div className="w-full flex justify-center">
    //           <img
    //             src={`${backend_url}${data.images && data.images[0]}`}
    //             alt=""
    //             className="w-90% h-[170px] object-contain  mt-5 "
    //           />
    //           <span className="absolute top-0 left-0 m-2 rounded-full bg-rose-600 px-2 text-center text-[11px] text-white">
    //             {calculateDiscountPercentage(
    //               data.originalPrice,
    //               data.discountPrice
    //             )}
    //           </span>
    //         </div>
    //       </Link>
    //       <Link to={`/shop/preview/${data?.shop._id}`}>
    //         <h5 className={`${styles.shop_name} hover:underline`}>
    //           {data.shop.name}
    //         </h5>
    //       </Link>
    //       <Link to={`/product/${data._id}`}>
    //         <h4 className="h-[50px]  font-[500]">
    //           {data.name.length > 40
    //             ? data.name.slice(0, 40) + "..."
    //             : data.name}
    //         </h4>
    //         <div className="flex mb-1"></div>

    //         <div className="py-2 flex items-center justify-between">
    //           <div className="flex">
    //             <h5 className={`${styles.productDiscountPrice}`}>
    //               {data.originalPrice === 0
    //                 ? data.originalPrice
    //                 : "RS." + data.discountPrice}
    //             </h5>
    //             <h4 className={`${styles.price}`}>
    //               {data.originalPrice ? data.originalPrice + " RS" : null}
    //             </h4>
    //           </div>
    //           <span className="font-[400] text-[17px] text-[#68d284]">
    //             {data?.sold_out} sold
    //           </span>
              
    //         </div>
    //         <CountDown data={data} />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default EventCard;
