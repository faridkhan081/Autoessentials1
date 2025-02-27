import  Loader  from "../components/Layout/Loader"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
 

const SellerProtectedRoute = ({children}) =>{
    const {isLoading,isSeller} = useSelector((state) => state.seller)
   if(isLoading === true){
    return(
        <Loader/>
    )}
    else{
    if(!isSeller){
        return <Navigate to={`/shop-login`} replace/>
    }
    return children;
   }

}


export default SellerProtectedRoute