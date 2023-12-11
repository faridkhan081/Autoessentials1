import React, { useState } from "react";

import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Expand, Eye } from "lucide-react";
import { Heart } from "lucide-react";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import { ShoppingCart } from "lucide-react";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { backend_url } from "../../../server";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Rating";
import CountDown from "../../Events/CountDown.jsx";

function ProductCard({ data,isEvent,best }) {
  const [isInStock, setIsInStock] = useState(data.stock > 0);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice && discountedPrice) {
      const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
      return `${Math.round(discount)}% OFF`;
    }
    return 'New'; // If there's no discount
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
    setIsInStock(data.stock > 0);
  }, [data.stock,wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
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
    <div className={`w-full ${isEvent ? 'h-[400px]' : 'h-[370px]'} bg-white rounded-lg p-3 relative shadow-sm hover:shadow-lg hover:shadow-gray-200  hover:border`}
    
    >
  
  <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
      <div className="w-full flex justify-center" >
        <img
        
          src={`${backend_url}${data.images && data.images[0]}`}
          alt=""
          className="w-90% h-[170px] object-contain  mt-5 "
        />
         <span className="absolute top-0 left-0 m-2 rounded-full bg-rose-600 px-2 text-center text-[11px] text-white">
       
       {
        isEvent ? (<>
          Sale {" "}
        </>):null
       }
         {calculateDiscountPercentage(data.originalPrice, data.discountPrice)}
         
         </span>
         
         

        </div>
      </Link>
      <Link to={`/shop/preview/${data?.shop._id}`}>
        <h5 className={`${styles.shop_name} hover:underline` }>{data.shop.name}</h5>
      </Link>
      <Link to={`/product/${data._id}`}>
        <h4 className="h-[50px]  font-[500]" >
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
        <div className="flex mb-1 items-center justify-between" >
        <Ratings rating={data?.ratings} />
        <p className={`${styles.stockStatus} ${isInStock ? styles.inStock : styles.outOfStock}`}>
  {isInStock ? "In Stock" : "Out of Stock"}
</p>
         
        </div>

        <div className="py-2 flex items-center justify-between">
  <div className="flex">
    {data.discountPrice === 0 ? (
      <h4 className={`${styles.productDiscountPrice}`}>RS.{data.originalPrice} </h4>
    ) : (
      <>
        <h5 className={`${styles.productDiscountPrice}`}>
          RS.{data.discountPrice}
        </h5>
        {data.originalPrice ? (
          <h4 className={`${styles.price}`}>{data.originalPrice} RS</h4>
        ) : null}
      </>
    )}
  </div>
  <span className="font-[400] text-[17px] text-[#68d284]">
    {data?.sold_out} sold
  </span>
</div>
       
        {
          isEvent &&  <CountDown data={data} />
        }
        
      
      </Link>
      {/* side options */}


      <div>
        {click ? (
          <Heart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => removeFromWishlistHandler(data)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
            fill="red"
          />
        ) : (
          <Heart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => addToWishlistHandler(data)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}

        {
          !best && (<>
 <Expand
          size={20}
          className="cursor-pointer absolute right-2 top-16"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick view"
        />
          </>) 
        }

       

       {
        best ? (
          <>
          {cart && cart.find((i) => i._id === data._id) ? (
          <>
          <ShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-16"
            onClick={() => addToCartHandler(data._id)}
            
            title="Remove from Cart"
            fill="black"
          />
          </>
        ) : (
          <>
          <ShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-16"
            onClick={() => addToCartHandler(data._id)}
           
            title="Remove from Cart"
            
          />
          </>
        )}
          </>
        ) : (
          <>
          {cart && cart.find((i) => i._id === data._id) ? (
          <>
          <ShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-28"
            onClick={() => addToCartHandler(data._id)}
            
            title="Remove from Cart"
            fill="black"
          />
          </>
        ) : (
          <>
          <ShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-28"
            onClick={() => addToCartHandler(data._id)}
           
            title="Remove from Cart"
            
          />
          </>
        )}
          </>
        )
       }

     
 
        

      
        {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
      </div>
      
    </div>
  );
}

export default ProductCard;
