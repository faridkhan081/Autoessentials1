import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { backend_url } from "../../server";
// import Loader from "../Layout/Loader";
import Ratings from "../Products/Rating";
// import { getAllEventsShop } from "../../redux/actions/event";
import { getAllEventsShop } from "../../redux/actions/event";

const ShopProfileData = ({ isOwner }) => {
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events); 
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    // setIsLoading(false)
    dispatch(getAllEventsShop(id));
  }, [dispatch]);

  const [active, setActive] = useState(1);

  const allReviews =
    products && products.map((product) => product.reviews).flat();

  return (
    <>
      <div className="w-full">
        <div className={`flex items-center justify-between ${!isOwner ? 'p-5' : ''}  bg-gray-800`}>
          <div className="ml-5 w-full flex gap-16">
            <div className="flex items-center" onClick={() => setActive(1)}>
              <h5
                className={`font-[500] text-[12px] md:text-[17px] ${
                  active === 1 ? "text-red-500 bg-white p-2 rounded" : "text-white p-2 "
                } cursor-pointer pr-[20px]`}
              >
                Products
              </h5>
            </div>
            <div className="flex items-center" onClick={() => setActive(2)}>
              <h5
                className={`font-[500] text-[12px] md:text-[17px]  ${
                  active === 2 ? "text-red-500 bg-white p-2 rounded " : "text-white p-2 "
                } cursor-pointer pr-[20px]`}
              >
                 Events
              </h5>
            </div>

            <div className="flex items-center " onClick={() => setActive(3)}>
              <h5
                className={`font-[500] text-[12px] md:text-[17px]  ${
                  active === 3 ? "text-red-500 bg-white p-2 rounded " : "text-white p-2"
                } cursor-pointer pr-[20px]`}
              >
              Reviews
              </h5>
            </div>
          </div>
          <div>
            {isOwner ? (
              <div className="mr-5">
                <Link to="/seller-dashboard">
                  <div className={`${styles.button} 370px:w-[50px] 800px:w-[150px] 800px:text-[17px] 800px:h-[50px] 370px:p-2 370px:h-[35px] 370px:text-[10px] !bg-white  hover:underline  !text-black !rounded-[4px] h-[42px]`}>
                    <span className="">Dashboard</span>
                  </div>
                </Link>
              </div>
            ) : (
             null
            )}
          </div>
        </div>

        <br />
        {active === 1 && (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {products &&
              products.map((i, index) => (
                <ProductCard data={i} key={index} isShop={true} />
              ))}
          </div>
        )}

        {active === 2 && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
              {events &&
                events.map((i, index) => (
                  <ProductCard
                    data={i}
                    key={index}
                    isShop={true}
                    isEvent={true}
                  />
                ))}
            </div>
            {events && events.length === 0 && (
              <h5 className="w-full text-center py-5 text-[18px]">
                No Events have for this shop!
              </h5>
            )}
          </div>
        )}

        {active === 3 && (
        <div className="w-full">
          {allReviews &&
            allReviews.map((item, index) => (
              <div className="w-full flex my-4">
                <img
                  src={`${backend_url}/${item.user.avatar}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-2">
                  <div className="flex w-full items-center">
                    <h1 className="font-[600] pr-2">{item.user.name}</h1>
                    <Ratings rating={item.rating} />
                  </div>
                  <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                  <p className="font-[400] text-[13px] text-[#000000a7]"> Reviewed on {new Date(item.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          {allReviews && allReviews.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Reviews have for this shop!
            </h5>
          )}
        </div>
      )}
      </div>
    </>
  );
};

export default ShopProfileData;


