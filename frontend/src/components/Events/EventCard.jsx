// import React from "react";
// import styles from "../../styles/styles";
// import CountDown from "./CountDown.jsx";
// import { Link } from "react-router-dom";
// import { backend_url } from "../../server";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { addTocart } from './../../redux/actions/cart';
// const EventCard = ({ active , data}) => {
//   const { cart } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const addToCartHandler = (data) => {
//     const isItemExists = cart && cart.find((i) => i._id === data._id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (data.stock < 1) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: 1 };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   }

//   return (
//     <div
//       className={`w-full block bg-white rounded-lg ${
//         active ? "unset" : "mb-12"
//       } lg:flex p-2`}
//     >
//       <div className="w-full m-auto">
//         <img
//           src={`${backend_url}${data.images[0]}`}
//           alt=""
//         />
//       </div>
//       <div className="w-full lg:[w-50%] flex flex-col justify-center">
//         <h2 className={`${styles.productTitle}`}>
//          {data.name}
//         </h2>
//         <p>
//          {data.description}
//         </p>
//         <div className="flex py-2 justify-between">
//           <div className="flex">
//             <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
//              RS.{data.originalPrice}
//             </h5>
//             <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
//             RS.{data.discountPrice}
//             </h5>
//           </div>
//           <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
//             120 sold
//           </span>
//         </div>
//         <CountDown data={data} />

//         <br />
//         <div className="flex items-center">
//           <Link to={`/product/${data._id}?isEvent=true`}>
//             <div className={`${styles.button} text-[#fff]`}>See Details</div>
//           </Link> 
//           <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default EventCard;


import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";
import { Link } from "react-router-dom";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from './../../redux/actions/cart';

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
  }

  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full m-auto">
        {data && data.images && data.images.length > 0 ? (
          <img src={`${backend_url}${data.images[0]}`} alt="" />
        ) : (
          <p>No image found</p>
        )}
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          {data && data.name ? data.name : "Product Name Not Available"}
        </h2>
        <p>
          {data && data.description ? data.description : "Product Description Not Available"}
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              RS.{data && data.originalPrice ? data.originalPrice : "N/A"}
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              RS.{data && data.discountPrice ? data.discountPrice : "N/A"}
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data && data.soldCount ? data.soldCount + " sold" : "Sold Count N/A"}
          </span>
        </div>
        {/* <CountDown data={data} /> */}
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data && data._id ? data._id : ''}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
