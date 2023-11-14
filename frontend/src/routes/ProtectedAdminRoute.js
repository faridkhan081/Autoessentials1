import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import  Loader  from "../components/Layout/Loader"

const ProtectedAdminRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    } else if (user.role !== "Admin") {
      return <Navigate to="/" replace />;
    } else {
      return children;
    }
  } else {
    // Loading is still in progress, you may want to render a loading indicator
    // or some other UI while waiting for authentication check.
    return <div>  <Loader/></div>;
  }
};

export default ProtectedAdminRoute;
