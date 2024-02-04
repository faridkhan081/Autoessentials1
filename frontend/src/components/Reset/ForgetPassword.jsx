// src/components/ForgotPassword/ForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      await axios.post(`${server}/user/forgot-password`, { email });

      toast.success("Password reset email sent. Check your inbox.");
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    // <section className="min-h-screen bg-gray-50">
    //   {/* Add your UI for the "Forgot Password" component here */}
    //   <div className="max-w-xl mx-auto py-8">
    //     <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
    //     <form onSubmit={handleSubmit}>
    //       {/* Email Input */}
    //       <div className="mb-4">
    //         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="mt-1 p-2 w-full border rounded-md"
    //           required
    //         />
    //       </div>

    //       {/* Submit Button */} 
    //       <div>
    //         <button
    //           type="submit"
    //           className={`inline-block w-full py-2 px-4 border border-transparent rounded-md font-semibold text-white ${
    //             loading ? "bg-gray-400 cursor-not-allowed" : "bg-rose-500 hover:bg-rose-600"
    //           } focus:outline-none focus:ring focus:border-rose-300 active:bg-rose-800 transition`}
    //           disabled={loading}
    //         >
    //           {loading ? "Sending..." : "Reset Password"}
    //         </button>
    //       </div>
    //     </form>

    //     {/* Login Link */}
    //     <div className="mt-4 text-sm text-center">
    //       <Link to="/login" className="text-gray-600 hover:text-rose-600">
    //         Back to Login
    //       </Link>
    //     </div>
    //   </div>
    // </section>
<div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
  <h1 className="text-4xl font-medium">Forget password</h1>
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

export default ForgotPassword;
