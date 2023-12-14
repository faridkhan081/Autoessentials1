import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo.jsx";
import ShopProfileData from "../../components/Shop/ShopProfileData.jsx";
import Layout from '../../components/Layout/Layout.jsx';

const ShopHomePage = () => {
  return (
    <Layout title={'Shop'}>
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full 800px:flex py-10 justify-between">
          <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
            <ShopInfo isOwner={true} />
          </div>
          <div className="800px:w-[72%] rounded-[4px]">
            <ShopProfileData isOwner={true} />
          </div>
         </div>
    </div>
    </Layout>
  )
}

export default ShopHomePage