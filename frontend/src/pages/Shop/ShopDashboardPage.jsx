import React from 'react'

import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar.jsx'

import DashboardHero from "../../components/Shop/DashboardHero.jsx";
import Layout from '../../components/Layout/Layout.jsx';

function ShopDashboardPage() {
  return (
    <Layout title={'Shop Dashboard'}>
      
        <div className="flex ">
          <div className=''>
            <DashboardSideBar active={1}/>
          </div>
          <div className=' flex-1 p-4 bg-[#F8F9FA]' >
          <DashboardHero />
          </div>
        </div>
    </Layout>
  )
}

export default ShopDashboardPage