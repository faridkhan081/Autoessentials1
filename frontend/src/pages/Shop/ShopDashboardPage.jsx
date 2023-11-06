import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader.jsx'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar.jsx'

import DashboardHero from "../../components/Shop/DashboardHero.jsx";
import Layout from '../../components/Layout/Layout.jsx';

function ShopDashboardPage() {
  return (
    <Layout title={'Shop Dashboard'}>
        <DashboardHeader/>
        <div className="flex items-center justify-between w-full">
          <div className='800px:mb-0 mb-[350px] w-[80px] 800px:w-[330px]'>
            <DashboardSideBar active={1}/>
          </div>
          <DashboardHero />
        </div>
    </Layout>
  )
}

export default ShopDashboardPage