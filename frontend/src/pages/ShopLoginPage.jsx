import React, { useEffect } from "react";
import ShopLogin from "../components/Shop/ShopLogin.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout.jsx";
const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/seller-dashboard`);
    }
  }, [isLoading, isSeller]);
  return (
    <Layout title={"Shop Login"}>
      <ShopLogin />
    </Layout>
  );
};

export default ShopLoginPage;
