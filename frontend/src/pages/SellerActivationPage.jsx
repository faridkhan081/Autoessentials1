import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import Layout from "../components/Layout/Layout";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <Layout title={"Seller Activation"}
      
    >
      {/* {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your shop has been created suceessfully!</p>
      )} */}

      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
      <p className="mt-4 text-gray-500">
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your Shop has been created suceessfully!</p>
      )}
      </p>
    </div>
   
  </div>
  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img alt="Welcome" src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="absolute inset-0 h-full w-full object-cover" />
  </div>
</section>
    </Layout>
  );
};

export default SellerActivationPage;
