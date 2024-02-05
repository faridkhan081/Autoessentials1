import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === true) {
    // Return a loading message or indicator while waiting for authentication check
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Display a toast notification indicating that login is required
    toast.error("You need to login to access this page.");
    // Redirect the user to the home page or login page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;
