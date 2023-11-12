import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import WithdrawMoney from "../../components/Shop/WithdrawMoney.jsx";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';
import Layout from '../../components/Layout/Layout.jsx';

const ShopWithDrawMoneyPage = () => {
  return (
    <Layout title={'Withdraw Money'}>
    
    <div className="flex items-start justify-between w-full">
      <div className="">
        <DashboardSideBar active={7} /> 
      </div>

      <div className='w-full flex justify-center'>
       <WithdrawMoney />
       </div>
    </div>
  </Layout>
  )
}

export default ShopWithDrawMoneyPage