import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  }

  // Return null when loading is true to indicate that the component is waiting for authentication to be checked.
  return null;
};

export default ProtectedRoute;
