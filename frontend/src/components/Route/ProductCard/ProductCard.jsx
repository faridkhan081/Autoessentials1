import React, { useState } from "react";

import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Eye } from "lucide-react";
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

function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

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
    <div className="w-full h-[370px] bg-white rounded-lg p-3 relative cursor-pointer shadow-sm hover:shadow-lg hover:shadow-gray-200  hover:border"
    
    >
  
      <Link to={`/product/${data._id}`}>
      <div className="w-full flex justify-center" >
        <img
        
          src={`${backend_url}${data.images && data.images[0]}`}
          alt=""
          className="w-90% h-[170px] object-contain   "
        />
        </div>
      </Link>
      <Link to={`/shop/preview/${data?.shop._id}`}>
        <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
      </Link>
      <Link to={`/product/${data._id}`}>
        <h4 className="pb-3 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
        <div className="flex">
        <Ratings rating={data?.ratings} />
         
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.originalPrice === 0
                ? data.originalPrice
                : "RS." + data.discountPrice}
            </h5>
            <h4 className={`${styles.price}`}>
              {data.originalPrice ? data.originalPrice + " RS" : null}
            </h4>
          </div>
          <span className="font-[400] text-[17px] text-[#68d284]">
            {data?.sold_out} sold
          </span>
        </div>
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

        <Eye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick view"
        />

        {cart && cart.find((i) => i._id === data._id) ? (
          <>
          <ShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            
            title="Remove from Cart"
            fill="black"
          />
          </>
        ) : (
          <>
          <ShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
           
            title="Remove from Cart"
            
          />
          </>
        )}

        

      
        {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
      </div>
    </div>
  );
}

export default ProductCard;
