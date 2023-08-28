import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "./Rating";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProductDetails({ data,isLoading }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const navigate = useNavigate();
  const incrementCount=() =>{
    setCount(count+1)
  };

  const decrementCount=() =>{
    setCount(count === 1 ? 1: count - 1)
  }
  const handleMessageSubmit=() =>{
    navigate('/inbox?conversation=507ebjver884ehfdjeriv84')
  }
  return (
    <>
      <div className="bg-white ">
      
    {
      isLoading ? (
        <>
        {data  ? (
          <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
            <div className="w-full py-5">
              <div className="block w-full 800px:flex mt-5">
            
                <div className="w-full 800px:w-[50%]  cursor-zoom-in">
                <img src={data?.image_Url[select].url } alt=""
              className="w-[80%] h-[400px] overflow-hidden hover:scale-105 " />
                  <div className="w-full flex mt-3">
                    <div
                      className={`${
                        select === 0 ? "border" : "null"
                      } cursor-pointer `}
                    >
                        <img  src={data?.image_Url[0].url} alt="" 
                            className="h-[200px] overflow-hidden mr-3 mt-3"
                            onClick={() => setSelect(0)}
                        />
                        
                    </div>
                    <div
                      className={`${
                        select === 1 ? "border" : "null"
                      } cursor-pointer`}
                    >
                        <img  src={data?.image_Url[1].url} alt="" 
                            className="h-[200px] overflow-hidden mr-3 mt-3"
                            onClick={() => setSelect(1)}
                        />
                        
                    </div>
                  </div>
                  
                </div>
            
                <div className="w-full 800px:w-[50%] pt-5">
              <h1 className={`${styles.productTitle}`}>
                {data.name}
              </h1>
              <p>{data.description}</p>
              <div className="flex pt-3">
                <h4 className={`${styles.productDiscountPrice}`}>
                  {data.discount_price}$
                </h4>
                <h3 className={`${styles.price}`}>
                  {data.price? data.price + "$" : null}
                </h3>
              </div>
              <div className="flex items-center mt-12 justify-between pr-3">
                  <div className="flex items-center">
                    <button
                      className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-5 py-[4px] ">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      <AiOutlinePlus/>
                    </button>
                  </div>
                    
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}>
              <span className="text-white flex items-center">
                Add to cart <AiOutlineShoppingCart className="ml-1"/>
              </span>

              </div>
              <div className="flex items-center pt-8">
                <img src={data.shop.shop_avatar.url} alt=""
                className="w-[50px] h-[50px] rounded-full mr-2" />
                <div className="pr-8">
                  <h3 className={`${styles.shop_name} pb-1 pt-1`}>{data.shop.name}</h3>
                  <h5 className="pb-3 text-[15px]">
                    ({data.shop.ratings}) Rating
                  </h5>
                </div>
                <div
                  className={`${styles.button} bg-indigo-500 mt-4 !rounded !h-11`}
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

            <ProductDetailsInfo data={data} />
            <br />
            <br />
          </div>
        ) : null}
        </>

      ): (
        <>
  <div className="loader">
  <p className="heading mt-[10%]">Products details are loading...</p>
  <div className="loading">
    <div className="load" />
    <div className="load" />
    <div className="load" />
    <div className="load" />
  </div>
</div>


        </>
      )
    }
      </div>
    </>
  );
}


 

const ProductDetailsInfo = ({data}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem delectus exercitationem fugiat nulla cupiditate ipsa pariatur, facere eum ipsam sapiente aliquid. Molestias soluta harum quis odit velit quo repudiandae? Doloribus inventore ea, itaque quis aspernatur voluptatibus deserunt tempore repellendus autem ipsa, quae unde, dolor fugiat voluptas libero. Dolores, reiciendis. Perferendis atque adipisci quod cum necessitatibus omnis iure excepturi ea pariatur temporibus sunt, impedit repudiandae similique recusandae expedita iusto blanditiis, veniam dolorem maiores modi. Labore laborum, unde hic id molestias harum fugiat, quibusdam inventore facilis delectus aspernatur aliquam amet. Repudiandae minima facilis deserunt rerum consectetur ab repellendus veniam, omnis officia. Recusandae?
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dicta aliquid iure dolorem blanditiis aspernatur enim facere ullam odit vitae, dolore ipsam, ipsum placeat laudantium quos qui? Facere quae similique sequi animi exercitationem doloribus nisi maiores sapiente dolore laborum excepturi a iure atque magni quisquam culpa, est delectus eos eaque impedit consectetur quod expedita ut quam! Eum iste magnam cupiditate rerum animi. Repudiandae, temporibus voluptatum, eligendi possimus quasi tenetur dignissimos dicta voluptatem est cupiditate soluta minus suscipit esse tempore reiciendis sequi incidunt! Cumque exercitationem eius saepe vel sequi animi fuga, nesciunt sunt quisquam aspernatur amet? Nesciunt recusandae vel totam hic quibusdam. Rerum vitae numquam, dignissimos aperiam sint voluptas nobis? Animi dolores enim nisi voluptatibus eligendi. Optio cumque necessitatibus veritatis, ducimus modi incidunt nulla molestias vel deleniti consequuntur itaque esse quam quas natus perspiciatis, illum repudiandae alias culpa odit rem quod nam? Eius voluptatibus deleniti nobis corrupti, unde cupiditate earum quisquam.</p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem delectus exercitationem fugiat nulla cupiditate ipsa pariatur, facere eum ipsam sapiente aliquid. Molestias soluta harum quis odit velit quo repudiandae? Doloribus inventore ea, itaque quis aspernatur voluptatibus deserunt tempore repellendus autem ipsa, quae unde, dolor fugiat voluptas libero. Dolores, reiciendis. Perferendis atque adipisci quod cum necessitatibus omnis iure excepturi ea pariatur temporibus sunt, impedit repudiandae similique recusandae expedita iusto blanditiis, veniam dolorem maiores modi. Labore laborum, unde hic id molestias harum fugiat, quibusdam inventore facilis delectus aspernatur aliquam amet. Repudiandae minima facilis deserunt rerum consectetur ab repellendus veniam, omnis officia. Recusandae?
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
        <p>No Reviews yet!</p>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
           
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({data.shop.ratings}/5) Ratings
                  </h5>
                </div>
               
              </div>
              <p className="pt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam praesentium ratione quod quisquam voluptate! Fuga temporibus amet, error, recusandae quae perferendis, quidem ut delectus commodi magni maiores debitis? Facere, aperiam.
                </p>
            
         
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">
                14 March 2023
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  1,122
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">234</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
