import React, { useState } from "react";

import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
import {
  AiFillStar,  
  AiOutlineStar,
} from "react-icons/ai";
import { Eye } from 'lucide-react';
import { Heart } from 'lucide-react';     
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import { ShoppingCart } from 'lucide-react';

import { backend_url } from "../../../server";
import { useDispatch } from "react-redux";

function ProductCard({ data }) {
  

  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  return (
    <div className="w-full h-[370px] bg-white rounded-lg p-3 relative cursor-pointer shadow-sm hover:shadow-lg hover:shadow-gray-200">
      <div className="flex justify-end"></div>

      <Link to={`/product/${product_name}`}>
        <img
          src={`${backend_url}${data.images && data.images[0]}`}
          alt=""
          className="w-full h-[170px] object-contain"
        />
      </Link>
      <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
       <Link to={`/product/${data._id}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
        <div className="flex">
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiOutlineStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
            {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                $
            </h5>
            <h4 className={`${styles.price}`}>
            {data.originalPrice ? data.originalPrice + " $" : null}
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
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
            fill="red"
          />
        ) : (
          <Heart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setClick(!click)}
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
        <ShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          onClick={() => setOpen(!open)}
          color="#444"
          title="Add to cart"
        />
        {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
      </div>
    </div>
  );
}

export default ProductCard;

