import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${server}/user/reset-password`, { resetToken, password });
      setResetSuccess(true);
    } catch (error) {
      // Handle errors
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>

        {resetSuccess ? (
          <div>
            <p className="text-green-600 mb-4">Password reset successful. You can now login with your new password.</p>
            <Link to="/" className="block text-blue-500 hover:underline">
              Return to Home Page
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className={`w-full py-2 px-4 border border-transparent rounded-md font-semibold text-white ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                } focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800 transition`}
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </div>

            <Link to="/" className="block text-blue-500 hover:underline">
              Return to Home Page
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
