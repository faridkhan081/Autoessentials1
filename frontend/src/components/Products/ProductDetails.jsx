import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
 
} from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Ratings from "../Products/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { backend_url, server } from "../../server";
import { Magnifier } from "react-image-magnifiers";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { toast } from "react-toastify";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import axios from "axios";
// hove to zoom image, react magnifiy library
import ReactImageMagnify from "react-image-magnify";
function ProductDetails({ data, isLoading }) {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [sliderRef, setSliderRef] = useState(null);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='control-btn next-btn absolute right-0 mr-[50px] top-[162px]' onClick={onClick}>
        <button className='next' style={{ zIndex: 1 }}>
          <MdNavigateNext />
        </button>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='control-btn ml-[50px] prev-btn absolute top-[162px]' onClick={onClick}>
        <button className='prev' style={{ zIndex: 1 }}>
          <GrFormPrevious />
        </button>
      </div>
    );
  };
  
  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
      if (data.stock < count) {
        toast.error("Product out of stock!");
        setCount(1);
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
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

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })

        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };
  return (
    <>
      <div className="bg-white ">
        {!isLoading ? (
          <>
            {data ? (
              <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
                <div className="w-full py-5">
                  <div className="block w-full 800px:flex mt-5">
                    <div className="w-full 800px:w-[50%] p-[30px] " >
                    <Slider
                        dots={false}
                        infinite
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        ref={(slider) => (sliderRef = slider)}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                      >
                        {data.images.map((img, index) => (
                          <div key={index}>
                            <img 
                              src={`${backend_url}${img}`}
                              alt=""
                              className="800px:w-full 370px:w-full h-[400px] overflow-hidden"
                            />
                          </div>
                        ))}
                      </Slider>
                      <div className="flex mt-[70px] items-center 800px:justify-start 370px:justify-center gap-3  w-full">
                        {data &&
                          data.images.map((i, index) => (
                            <div
                              key={index}
                              className={`p-5 flex items-center justify-center ${
                                index === select
                                  ? "border-2 border-rose-500"
                                  : "border-2 border-gray-300"
                              }`}
                              onClick={() => {
                                setSelect(index);
                                // Use slickGoTo to change the main slider's current slide
                                sliderRef.slickGoTo(index);
                              }}
                            >
                              <div
                                className={`cursor-pointer h-20 md:h-20 rounded-l`}
                              >
                                <img
                                  src={`${backend_url}${i}`}
                                  alt=""
                                  className="h-20"
                                  style={{ minWidth: "100px" }}
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="w-full 800px:w-[50%] pt-5">
                      <h1 className={`${styles.productTitle}`}>{data.name}</h1>

                      <p>{data.description}</p>
                      <div className="flex pt-3">
                        {data.discountPrice === 0 ? (
                          <h4 className={`${styles.productDiscountPrice}`}>
                            RS.{data.originalPrice}{" "}
                          </h4>
                        ) : (
                          <>
                            <h5 className={`${styles.productDiscountPrice}`}>
                              RS.{data.discountPrice}
                            </h5>
                            {data.originalPrice ? (
                              <h4 className={`${styles.price}`}>
                                {data.originalPrice} RS
                              </h4>
                            ) : null}
                          </>
                        )}
                      </div>
                      <div className="flex items-center pt-2">
                        <span
                          className={`${styles.stockStatus} ${
                            data.stock > 0 ? styles.inStock : styles.outOfStock
                          }`}
                        >
                          {data.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                      <div className="flex items-center mt-5 justify-between pr-3">
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
                        className={`cursor-pointer !w-[142px] !mt-6 !rounded !h-11 flex items-center`}
                        onClick={() => addToCartHandler(data._id)}
                      >
                        {cart && cart.find((i) => i._id === data._id) ? (
                          <>
                            <span
                              className={`${styles.button} !bg-[#37ae3d] text-white !rounded !h-11 flex items-center`}
                            >
                              Added to cart
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="flex items-center justify-center shrink-0 rounded-md border border-black bg-black px-[25px] py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:test-black ">
                              Add to cart{" "}
                              <AiOutlineShoppingCart className="ml-1" />
                            </span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center pt-8">
                        <Link to={`/shop/preview/${data?.shop._id}`}>
                          <img
                            src={`${backend_url}${data?.shop?.avatar}`}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full mr-2"
                          />
                        </Link>
                        <div className="pr-8">
                          <Link to={`/shop/preview/${data?.shop._id}`}>
                            <h3 className={`${styles.shop_name} hover:underline pb-1 pt-1`}>
                              {data.shop.name}
                            </h3>
                          </Link>
                          <h5 className="pb-3 text-[15px]">
                            ({averageRating}
                            /5) Ratings
                          </h5>
                        </div>
                        <div
                          className={`${styles.button} bg-rose-500 mt-4 !rounded !h-11`}
                          onClick={handleMessageSubmit}
                        >
                          <span className="text-[#fff] flex items-center">
                            Send Message <AiOutlineMessage className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ProductDetailsInfo
                  data={data}
                  products={products}
                  totalReviewsLength={totalReviewsLength}
                  averageRating={averageRating}
                />
                <br />
                <br />
              </div>
            ) : null}
          </>
        ) : (
          <>
            <div className="loader">
              <p className="heading mt-[10%]">
                Products details are loading...
              </p>
              <div className="loading">
                <div className="load" />
                <div className="load" />
                <div className="load" />
                <div className="load" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const ProductDetailsInfo = ({
  data,
 
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f8f8f9] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-start gap-16 border-b pt-10 pb-2">
        <div className="relative">
        <h5
            className={`${
              active === 1 ? 'text-[#000]' : 'text-gray-500'
            } text-[14px] font-Poppins px-1 leading-5 font-[600] cursor-pointer 800px:text-[18px]`}
            onClick={() => setActive(1)}
          >
            Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
        <h5
            className={`${
              active === 2 ? 'text-[#000]' : 'text-gray-500'
            } text-[14px] font-Poppins px-1 leading-5 font-[600] cursor-pointer 800px:text-[18px]`}
            onClick={() => setActive(2)}
          >
            Reviews ({data?.reviews?.length})
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 leading-8 pb-10 whitespace-pre-line">
            {data.details}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data?.reviews?.map((item, index) => (
            <div className="w-full flex my-2" key={index}>
              <img
                src={`${backend_url}/${item.user.avatar}`}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="pl-2 ">
                <div className="w-full flex items-center">
                  <h1 className="font-[500] mr-3">{item.user.name}</h1>
                  <Ratings rating={data?.ratings} />
                </div>
                <p>{item.comment}</p>
                <p className="font-[400] text-[13px] text-[#000000a7]">
                  {" "}
                  Reviewed on {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}

          <div className="w-full flex justify-center">
            {data?.reviews?.length === 0 && (
              <h5>No Reviews for this product!</h5>
            )}
          </div>
        </div>
      ) : null}

      
    </div>
  );
};
export default ProductDetails;
