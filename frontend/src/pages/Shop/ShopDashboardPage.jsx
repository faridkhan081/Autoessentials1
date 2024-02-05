import React from 'react'

import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar.jsx'
import logo from '../../Assets/images/logo1.png'
import DashboardHero from "../../components/Shop/DashboardHero.jsx";
import Layout from '../../components/Layout/Layout.jsx';
import { useSelector } from 'react-redux';
import  axios  from 'axios';
import { server} from '../../server.js';
import { toast } from 'react-toastify';
function ShopDashboardPage() {
  const { seller } = useSelector((state) => state.seller);
const logoutHandler = () => {
  axios.get(`${server}/shop/logout`, {
    withCredentials: true,
  });

  toast.success("Logged out successfully!");
  window.location.reload();


} 
  return (
    <Layout title={'Shop Dashboard'}>
      
       {
        seller.status === "Approved" ? (
          <>
          <div className="flex ">
          <div className=''>
            <DashboardSideBar active={1}/>
          </div>
          <div className=' flex-1 p-4 bg-[#F8F9FA]' >
          <DashboardHero />
          </div>
        </div>
          </>
        ):(
          <div className="containerrr w-full flex justify-center items-center flex-col h-screen ">
          {/* <img className='absolute w-[200px] top-[100px]' src={logo} alt="" /> */}
         <div className='flex gap-2 items-center p-1 rounded-sm' style={{border:'1px solid white'}}>
         <span className='bg-rose-600 text-white p-2'>Auto</span> <span className='text-white'>Essentials</span>
         </div>
          <h3 className="text-[22px] mt-5 font-Poppins  text-white ">Account Under Observation (Not verified)</h3>
          <p className='text-white'>Your account is currently under observation. Access to the dashboard is restricted until it's approved by the admin.</p>
      
<button onClick={logoutHandler} className="group mt-5 flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
  <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
    <svg fill="white" viewBox="0 0 512 512" className="w-4 h-4">
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </svg>
  </div>
  <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
    Logout
  </div>
</button>



         <div className='mt-5'>
         <div className="loaderxx"></div>
         </div>
      
        </div>
        )
       }
    </Layout>
  )
}

export default ShopDashboardPage