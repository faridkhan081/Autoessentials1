import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const ShopForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      await axios.post(`${server}/shop/forgot-password`, { email });

      toast.success("Password reset email sent. Check your inbox.");
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setLoading(false);
  };

  return (

<div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
  <h1 className="text-4xl font-medium">Seller Forget password</h1>
  <p className="text-slate-500">Fill up the form to reset the password</p>
  <form action className="my-10" onSubmit={handleSubmit}>
    <div className="flex flex-col space-y-5">
      <label htmlFor="email">
        <p className="font-medium text-slate-700 pb-2">Email address</p>
        <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" />
      </label>
      <button className="w-full py-3 font-medium text-white bg-rose-600 hover:bg-rose-500 rounded-lg border-rose-500 hover:shadow inline-flex space-x-2 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
        <span> {loading ? "Sending..." : "Reset password"}</span>
      </button>
      <p className="text-center">Not registered yet? <Link to="/sign-up" className="text-rose-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></span></Link></p>
          
    </div>
  </form>
</div>

  );
};

export default ShopForgetPasswordPage;
