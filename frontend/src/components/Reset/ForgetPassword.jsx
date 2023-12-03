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
    <section className="min-h-screen bg-gray-50">
      {/* Add your UI for the "Forgot Password" component here */}
      <div className="max-w-xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Submit Button */} 
          <div>
            <button
              type="submit"
              className={`inline-block w-full py-2 px-4 border border-transparent rounded-md font-semibold text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-rose-500 hover:bg-rose-600"
              } focus:outline-none focus:ring focus:border-rose-300 active:bg-rose-800 transition`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-sm text-center">
          <Link to="/login" className="text-gray-600 hover:text-rose-600">
            Back to Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
