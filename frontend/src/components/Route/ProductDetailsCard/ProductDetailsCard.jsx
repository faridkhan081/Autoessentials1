import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url } from "../../../server";

import { RxCross1 } from "react-icons/rx";

import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import Ratings from "../../Products/Rating";
import { Expand } from "lucide-react";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.products);

  // const [select, setSelect] = useState(false);

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg = totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);


  const decrementCount = () => {
    setCount(count === 1 ? 1 : count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

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
  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={`${backend_url}${data.images && data.images[0]}`}
                  alt=""
                />

                <div className="flex">
                  <Link to={`/shop/preview/${data.shop._id}`} className="flex">
                    <img
                      src={`${backend_url}${data?.shop?.avatar}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                    <div>
                      <h3 className={`${styles.shop_name}`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">
                        {data.ratings
                          ? `(${data.ratings}) Ratings`
                          : "(0) Ratings"}
                      </h5>
                    </div>
                  </Link>
                </div>

            
                <h5 className="text-[16px] text-[red] mt-5">
                  {" "}
                  {data?.sold_out} sold
                </h5>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p>{data.description}</p>

                <div className="flex pt-3 ">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    RS.{data.discountPrice}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.originalPrice ? "RS." + data.originalPrice : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div className="flex items-center">
                    <button
                      className="bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-5 py-[4px] ">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`!w-[142px] !mt-6 !rounded !h-11 flex items-center`}
                  onClick={() => addToCartHandler(data._id)}
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
                      <span className="flex items-center justify-center shrink-0 rounded-md border border-black bg-black px-[25px] py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:test-black ">
                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
